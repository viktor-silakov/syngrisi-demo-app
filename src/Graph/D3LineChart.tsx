/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type AccountData = {
    year: number;
    account1: number;
    account2: number;
    account3: number;
    account4: number;
    account5: number;
};

const generateData = (): AccountData[] => {
    // Предполагаемые данные за последние 5 лет
    return [
        { year: new Date().getFullYear() - 5, account1: 50, account2: 80, account3: 65, account4: 90, account5: 58 },
        { year: new Date().getFullYear() - 4, account1: 20, account2: 100, account3: 55, account4: 110, account5: 60 },
        { year: new Date().getFullYear() - 3, account1: 80, account2: 60, account3: 135, account4: 70, account5: 98 },
        { year: new Date().getFullYear() - 2, account1: 100, account2: 85, account3: 90, account4: 120, account5: 50 },
        { year: new Date().getFullYear() - 1, account1: 75, account2: 95, account3: 100, account4: 65, account5: 120 },
    ];
};

const LineChartComponent: React.FC = () => {
    const ref = useRef<SVGSVGElement>(null);
    const data = generateData();
    const margin = { top: 20, right: 160, bottom: 40, left: 90 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    useEffect(() => {
        if (!ref.current) return; // выходим, если ref не определен

        const svg = d3
            .select(ref.current)
            .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Оси X и Y
        const xScale = d3
            .scaleLinear()
            // @ts-ignore
            .domain(d3.extent(data, (d) => d.year))
            .range([0, width]);

        const yScale = d3
            .scaleLinear()
            // @ts-ignore
            .domain([0, d3.max(data, (d) => Math.max(d.account1, d.account2, d.account3, d.account4, d.account5))])
            .range([height, 0]);

        svg.append('g').call(d3.axisLeft(yScale));
        svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScale).tickFormat(d3.format('d')));

        // Линия для каждого аккаунта
        const createLine = (key: keyof AccountData) =>
            d3
                .line<AccountData>()
                .x((d) => xScale(d.year))
                .y((d) => yScale(d[key]));

        // Цвета для каждой линии
        const colors = d3.scaleOrdinal(d3.schemeCategory10);
        const accounts = ['account1', 'account2', 'account3', 'account4', 'account5'];

        accounts.forEach((account, index) => {
            const accountKey = account as keyof AccountData;
            svg
                .append('path')
                .datum(data)
                .attr('fill', 'none')
                .attr('stroke', colors(index.toString()))
                .attr('stroke-width', 2)
                .attr('d', createLine(accountKey));
        });

        // Легенда
        const legend = svg
            .selectAll('.legend')
            .data(accounts)
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', (d, i) => `translate(${width + 20},${i * 20})`);

        legend
            .append('rect')
            .attr('width', 18)
            .attr('height', 18)
            .style('fill', (d, i) => colors(i.toString()));

        legend
            .append('text')
            .attr('x', 24)
            .attr('y', 9)
            .attr('dy', '.35em')
            .text((d) => d);

    }, []);

    return <svg ref={ref} />;
};

export default LineChartComponent;

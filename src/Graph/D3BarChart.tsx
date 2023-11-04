import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

// Пример типа данных для аккаунтов
interface AccountData {
    account: string;
    customers: number;
}

// Пропсы для компонента BarChart
interface BarChartProps {
    data: AccountData[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (ref.current && data.length > 0) {
            drawChart();
        }
    }, [data]);

    const drawChart = () => {
        const svg = d3.select(ref.current);
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        const margin = { top: 20, right: 30, bottom: 40, left: 90 };

        const x = d3.scaleBand()
            .rangeRound([0, width - margin.left - margin.right])
            .padding(0.1)
            .domain(data.map(d => d.account));

        const y = d3.scaleLinear()
            .rangeRound([height - margin.top - margin.bottom, 0])
            .domain([0, d3.max(data, d => d.customers)!]);

        // Очистка предыдущих графиков перед отрисовкой новых
        svg.selectAll("*").remove();

        const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

        g.append('g')
            .call(d3.axisLeft(y))
            .append('text')
            .attr('fill', '#000')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end')
            .text('Number of customers');

        g.append('g')
            .attr('transform', `translate(0,${height - margin.top - margin.bottom})`)
            .call(d3.axisBottom(x));

        g.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.account)!)
            .attr('y', d => y(d.customers))
            .attr('width', x.bandwidth())
            .attr('height', d => height - margin.top - margin.bottom - y(d.customers))
            .attr('fill', 'steelblue');
    };

    return (
        <svg ref={ref} width={600} height={500} />
    );
}


// Использование компонента BarChart
const Graph = () => {
    // Данные для диаграммы
    const accountData = [
        { account: 'Account A', customers: 50 },
        { account: 'Account B', customers: 30 },
        { account: 'Account C', customers: 40 },
        { account: 'Account D', customers: 70 },
        { account: 'Account E', customers: 75 },
        { account: 'Account F', customers: 25 },
    ];

    return <BarChart data={accountData} />;
}

export default Graph;

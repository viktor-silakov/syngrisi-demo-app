import React, { useState, useEffect } from 'react';
import { Paper, Title, Progress } from '@mantine/core';
import D3Chart from './Graph/D3LineChart';

export function ProgressBar() {
    const [value, setValue] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (value < 100) {
            const interval = setInterval(() => {
                setValue((prevValue) => prevValue + 1);
            }, 10);
            return () => clearInterval(interval);
        } else {
            setLoaded(true);
        }
    }, [value]);

    // Условный рендеринг используя тернарный оператор
    return loaded ? (
        <div id="wrap"
             style={{ width: '50%', margin: 'auto', marginTop: '100px', padding: '40px', border: '2px solid green' }}>
            {/*<D3BarChart />*/}
            <D3Chart />
        </div>
    ) : (
        <div id="wrap"
             style={{ width: '50%', margin: 'auto', marginTop: '100px', padding: '40px', border: '2px solid green' }}>
            <Paper>
                <Title order={1}>Loading data...</Title>
                <Progress value={value} striped animate={value < 100} />
            </Paper>
        </div>
    );
}

export default ProgressBar;

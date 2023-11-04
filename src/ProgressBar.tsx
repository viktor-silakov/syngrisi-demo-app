import React, { useState, useEffect } from 'react';
import { Paper, Title, Progress } from '@mantine/core';

export function ProgressBar() {
    const [value, setValue] = useState(0);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (value < 100) {
            interval = setInterval(() => {
                setValue((prevValue) => prevValue + 1);
            }, 100);
        } else if (value === 100) {
            clearInterval(interval!);
            setAnimate(false);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [value]);

    return (
        <div id="wrap" style={{ width: '50%', margin: 'auto', marginTop: 100,  padding: 40, border: '2px solid #F02881' }}>
            <Paper>
                <Title order={1}>Progress bar</Title>
                <Progress value={value} striped animate={animate} />
            </Paper>
        </div>
    );
}

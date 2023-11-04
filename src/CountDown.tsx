import React, { useState, useEffect } from 'react';

interface CountdownProps {
    endDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
    const [timeLeft, setTimeLeft] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = endDate.getTime() - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft('Expired');
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [endDate]);

    return (
        <div>
            {timeLeft === 'Expired' ? (
                <span>Subscription Expired</span>
            ) : (
                <span>Subscription ends in {timeLeft}</span>
            )}
        </div>
    );
};

export default Countdown;

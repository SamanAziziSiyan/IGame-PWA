// components/Timer.tsx
"use client";

import { useEffect, useState } from 'react';
import PipeIcon from '../Common/icons/pipeIcon';

interface TimerProps {
    onSendAgain: () => void;
}

const Timer: React.FC<TimerProps> = ({ onSendAgain }) => {
    const [seconds, setSeconds] = useState<number>(300); // Set the timer duration to 5 minutes (300 seconds)
    const [isActive, setIsActive] = useState<boolean>(true);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | number | undefined;

        if (isActive) {
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        }

        if (seconds === 0) {
            setIsActive(false);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId as NodeJS.Timeout | number);  // Cast the intervalId type
            }
        };
    }, [isActive, seconds]);

    const handleSendAgain = () => {
        onSendAgain();
        setSeconds(300);
        setIsActive(true);
    };

    const minutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;

    return (
        <>
            <div className="flex gap-x-2 items-center">
                <span className="text-[12px] font-normal text-white/80">کد را دریافت نکردید؟ </span>
                {!isActive && (
                    <button onClick={handleSendAgain} className="text-[#CCFB4B] font-black text-[14px] underline">
                        ارسال مجدد کد
                    </button>
                )}
            </div>
            <div className="flex gap-x-2 items-center justify-center mt-2">
                <span className="text-[12px] font-normal text-white/80">ارسال مجدد کد </span>
                <PipeIcon />
                <span>{minutes}:{displaySeconds}</span>
            </div>
        </>
    );
};

export default Timer;

import { FaCheckCircle, FaInfoCircle, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';

export const getNotificationIcon = (status: string) => {
    switch (status) {
        case 'success':
            return (<FaCheckCircle className="text-green-500" />);
        case 'info':
            return <FaInfoCircle className="text-blue-500" />;
        case 'warning':
            return <FaExclamationCircle className="text-yellow-500" />;
        case 'error':
            return <FaTimesCircle className="text-red-500" />;
        default:
            return null;
    }
};

export const scrollIntoSection = (element: HTMLElement | null) => {
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

export const extractNumbersFromTitle = (title: string): string[] => {
    const regex = /\d+(\.\d+)?/g;
    const matches: string[] = [];
    let match;

    while ((match = regex.exec(title)) !== null) {
        const number = match[0];

        if (number.length === 1) {
            continue;
        }

        const formattedNumber = number.includes('.') ? `${number}$` : `${number} CP`;
        matches.push(formattedNumber);
    }

    return matches;
};

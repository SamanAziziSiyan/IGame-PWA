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
    const regex = /\d{2,}(?!\$)/g; 
    const matches: string[] = [];
    let match;

    while ((match = regex.exec(title)) !== null) {
        matches.push(match[0]); 
    }

    return matches;
};


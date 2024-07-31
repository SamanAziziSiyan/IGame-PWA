export const maskAuthorName = (name: string) => {
    if (name.length <= 4) {
        return name + '****';
    }
    return name.slice(0, -4) + '****';
}

export const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;
    let browserName = 'Unknown';

    if (userAgent.indexOf('Firefox') > -1) {
        browserName = 'Mozilla Firefox';
    } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
        browserName = 'Opera';
    } else if (userAgent.indexOf('Trident') > -1) {
        browserName = 'Microsoft Internet Explorer';
    } else if (userAgent.indexOf('Edge') > -1) {
        browserName = 'Microsoft Edge';
    } else if (userAgent.indexOf('Chrome') > -1) {
        browserName = 'Google Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
        browserName = 'Apple Safari';
    }

    return {
        browserName,
        userAgent,
    };
};

export const getDeviceInfo = () => {
    const userAgent = navigator.userAgent;

    const isMobile = /Mobi|Android/i.test(userAgent);
    const isTablet = /Tablet|iPad/i.test(userAgent);
    const isDesktop = !isMobile && !isTablet;

    let deviceType = 'Unknown';
    if (isMobile) {
        deviceType = 'Mobile';
    } else if (isTablet) {
        deviceType = 'Tablet';
    } else if (isDesktop) {
        deviceType = 'Desktop';
    }

    let os = 'Unknown';
    if (userAgent.indexOf('Win') > -1) {
        os = 'Windows';
    } else if (userAgent.indexOf('Mac') > -1) {
        os = 'MacOS';
    } else if (userAgent.indexOf('X11') > -1) {
        os = 'UNIX';
    } else if (userAgent.indexOf('Linux') > -1) {
        os = 'Linux';
    } else if (/Android/i.test(userAgent)) {
        os = 'Android';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        os = 'iOS';
    }

    return {
        deviceType,
        os,
        userAgent,
    };
};

export const getBaseUrl = (): string => {
    if (typeof window !== 'undefined') {
        return `${window.location.protocol}//${window.location.host}`;
    }
    return '';
};
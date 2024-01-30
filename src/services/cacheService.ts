export const tryCache = (name: string) => {
    const cacheMinutesTTL = 1;
    const currentTime = Date.now() / 1000 / 60;
    const cached = localStorage.getItem(name);

    if (cached) {
        const { time, value } = JSON.parse(cached);
        if (currentTime - time < cacheMinutesTTL) return value;
    }
    return null;
};

export const setCache = (name: string, value: any) => {
    const time = Date.now() / 1000 / 60;
    const cacheValue = { time, value };
    localStorage.setItem(name, JSON.stringify(cacheValue));
};

async function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;

    
    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeout);

    try {
        const response = await fetch(url, { signal });
        clearTimeout(timeoutId); 
        if (!response.ok) {
            throw new Error(`Ошибка при запросе к серверу: ${url}, статус ${response.status}`);
        }

        return await response.json(); 
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error(`Запрос к серверу превысил таймаут ${timeout} мс`);
        } else {
            throw error; 
        }
    }
}
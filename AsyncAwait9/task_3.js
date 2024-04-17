async function fetchDataFromMultipleServers(urls) {
    try {
       
        const promises = urls.map(async url => {
           
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Ошибка при запросе к серверу: ${url}, статус ${response.status}`);
            }
            
            return { url, data: await response.json() };
        });

        
        const results = await Promise.all(promises);
        return results;
    } catch (error) {
       
        throw error;
    }
}
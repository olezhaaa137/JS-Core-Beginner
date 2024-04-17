async function fetchDataFromServer(url) {
    try {
       
        const response = await fetch(url);

        
        if (!response.ok) {
           
            throw new Error(`Ошибка при запросе к серверу: ${url}, статус ${response.status}`);
        }

        
        const data = await response.json();
        return data;
    } catch (error) {
       
        throw error;
    }
}
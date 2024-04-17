async function fetchSequentialData(firstUrl, secondUrl) {
    try {
       
        const firstResponse = await fetch(firstUrl);
        if (!firstResponse.ok) {
            throw new Error(`Ошибка при запросе к первому серверу: ${firstUrl}, статус ${firstResponse.status}`);
        }
        const firstData = await firstResponse.json();

        
        const secondResponse = await fetch(secondUrl, {
            method: 'POST', 
            body: JSON.stringify(firstData), 
            headers: {
                'Content-Type': 'application/json' 
            }
        });
        if (!secondResponse.ok) {
            throw new Error(`Ошибка при запросе ко второму серверу: ${secondUrl}, статус ${secondResponse.status}`);
        }
        const secondData = await secondResponse.json();

       
        return secondData;
    } catch (error) {
        
        throw error;
    }
}
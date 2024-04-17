function fetchDataFromMultipleAPIs(apiUrls) {
    
    const promises = apiUrls.map(url => {
        
        return new Promise((resolve, reject) => {
            fetch(url) 
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Ошибка при запросе к API: ${url}, статус ${response.status}`);
                    }
                    return response.json(); 
                })
                .then(data => {
                    resolve(data); 
                })
                .catch(error => {
                    reject(error); 
                });
        });
    });

   
    return Promise.all(promises);
}
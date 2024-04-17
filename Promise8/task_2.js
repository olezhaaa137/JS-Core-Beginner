function loadUrlsContent(urls) {
   
    const promises = urls.map(url => {
        
        return new Promise((resolve, reject) => {
            fetch(url) 
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Ошибка загрузки URL: ${url}, статус ${response.status}`);
                    }
                    return response.text(); 
                })
                .then(content => {
                    resolve({ url, content }); 
                })
                .catch(error => {
                    reject(error); 
                });
        });
    });

    
    return Promise.all(promises);
}
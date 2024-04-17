function sequentialAsyncOperations(operations) {
   
    let promiseChain = Promise.resolve();

    
    for (let operation of operations) {
       
        promiseChain = promiseChain.then(() => {
            
            return new Promise((resolve, reject) => {
              
                operation()
                    .then(result => {
                        
                        resolve(result);
                    })
                    .catch(error => {
                        
                        reject(error);
                    });
            });
        });
    }

    
    return promiseChain;
}
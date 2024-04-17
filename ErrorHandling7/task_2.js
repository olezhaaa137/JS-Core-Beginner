function getProperty(obj, propertyName) {
    try {
       
        return obj[propertyName];
    } catch (error) {
        
        if (error instanceof TypeError) {
            console.error(`Ошибка: Свойство "${propertyName}" не определено`);
            return undefined; 
        } else {
            
            throw error;
        }
    }
}
function bubbleSort(array) {
    
    const length = array.length;

    
    for (let i = 0; i < length - 1; i++) {
        
        for (let j = 0; j < length - i - 1; j++) {
            
            if (array[j] > array[j + 1]) {
                
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}
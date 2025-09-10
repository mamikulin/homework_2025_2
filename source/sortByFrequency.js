const sortByFrequency = function(numbers){
    const fMap = {};

    numbers.forEach(element => {
        fMap[element] = (fMap[element] || 0) + 1
    });

    return [...numbers].sort((a, b) => 
        fMap[b] - fMap[a] || a - b
    );
}
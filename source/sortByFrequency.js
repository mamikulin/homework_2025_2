"use strict"

/**
 * Сортирует массив чисел по убыванию частоты встречаемости.
 * При равной частоте — по возрастанию значения.
 * @param {number[]} numbers - Массив чисел.
 * @returns {number[]} Новый отсортированный массив.
*/
const sortByFrequency = (numbers) =>{

    if (!numbers.length) {
        return [];
    }

    const frequencyMap = {};

    numbers.forEach(element => {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    });

    return [...numbers].sort((a, b) => 
        frequencyMap[b] - frequencyMap[a] || a - b
    );
}

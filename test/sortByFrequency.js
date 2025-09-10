'use strict';

QUnit.module("Тестируем функцию sortByFrequency", function() {
    QUnit.test("Работает правильно с сортировкой по частоте появления", function(assert) {
        const result = sortByFrequency([4, 6, 2, 6, 4, 4, 2, 2, 2]);

        assert.deepEqual(result, [2, 2, 2, 2, 4, 4, 4, 6, 6], "Массив должен быть отсортирован по частоте.");
    });

    QUnit.test("Работает правильно с пустым массивом", function(assert) {
        const result = sortByFrequency([]);

        assert.deepEqual(result, [], "Пустой массив должен вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с массивом с одним элементом", function(assert) {
        const result = sortByFrequency([5]);

        assert.deepEqual(result, [5], "Массив с одним элементом должен вернуть тот же элемент.");
    });

    QUnit.test("Отрицательные", function(assert) {
        const result = sortByFrequency([-1, -3, -1, -2, -2, -3, -6]);

        assert.deepEqual(result, [-3, -3, -2, -2,-1, -1, -6], "Массив должен быть отсортирован по частоте.");
    });

    QUnit.test("Одинаковые", function(assert) {
        const result = sortByFrequency([1, 1, 1, 1]);

        assert.deepEqual(result, [1, 1, 1, 1], "Массив должен быть той же длины что и изначальный.");
    });

    QUnit.test("Одинаковая частота, разные значения", function(assert) {
        const result = sortByFrequency([1, 1, 2, 2]);

        assert.deepEqual(result, [1, 1, 2, 2], "Массив должен быть отсортирован по возрастанию.");
    });
});

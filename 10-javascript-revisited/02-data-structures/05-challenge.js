// Challenge 5 - Predykaty
const exampleArray2 = ['a', 'b', 'c', 'd', 'e'];
const exampleArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function usePredicate1(array, predicate) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};

function usePredicate2(array, predicate) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};

console.log(usePredicate1(exampleArray1, (x) => x % 2 === 0));
console.log(usePredicate2(exampleArray2, (x) => x === 'b', 'c', 'a ', 'd', 'e'));
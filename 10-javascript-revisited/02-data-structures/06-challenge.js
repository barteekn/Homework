// Challenge 6 - Płaska tablica

const flaT = [1, [2, 3, undefined, 4, 2], [1, 'Bartek', null, 5], 3, ['Bartek', 6]]

function flat (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result = result.concat(flat(array[i]));
        } else {
            result.push(array[i]);
        }
    }
    return result;
};

console.log(flat(flaT));

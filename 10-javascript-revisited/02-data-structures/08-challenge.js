// Challenge 8 - Dodawanie tablic

const array01 = [1, 2, 3, 4, 5];
const array02 = [6, 7, 8, 9, 10];
const array03 = [5, 2, 3, 4, 5];



function addArrays (array1, array2, array3) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] + array2[i] + array3[i]);
    }
    return result;
};

console.log(addArrays(array01, array02, array03));



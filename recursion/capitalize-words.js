function capitalizeWords(arr) {
    let newArr = [];
    let capitalize = (word) => word.toUpperCase();
    for(let i=0; i < arr.length; i++) {
        newArr.push(capitalize(arr[i]));
    }
    return newArr;
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
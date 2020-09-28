// given array of strings, captalize first letter of each string
function capitalizeFirst(arr) {
    let newArr = [];
    let capitalize = (str) => str[0].toUpperCase().concat(str.slice(1));
    for(let i = 0; i < arr.length; i++) {
        newArr.push(capitalize(arr[i]));
    }
    return newArr;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
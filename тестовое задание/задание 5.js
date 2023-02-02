// Написать метод, который определяет, какие элементы присутствуют в двух экземплярах 
// в каждом из массивов (= в двух и более, причем в каждом). На вход подаются два массива. 
// На выходе массив с необходимыми совпадениями.
// Пример:
// [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
// На выходе [1, 17]
// 20 минут

const getTheSameValues = (arr1, arr2) =>{
    let newArr = []
    for(let elem of arr2){
        newArr.push(arr1.filter((el) => elem === el))
    }
    newArr.forEach((el,index) => {
        if(el.length < 2 || !el.length){
            newArr.splice(index,1)
        }
    })
    for(let el of newArr){
        if(Array.isArray(el)){
            el.splice(1,1)
        }
    }

    const duplicates = newArr.flat(Infinity).filter((number, index, numbers) => numbers.indexOf(number) !== index)

    return  Array.from(new Set(duplicates)) 
}

console.log(getTheSameValues([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1,7]))

// Написать метод/функцию, который/которая на вход принимает число (int), 
// а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству.
//  Например, «25 компьютеров»,«41 компьютер», «1048 компьютеров»
// 15 минут
const num1 = 25;
const num2 = 41;
const num3 = 1048;
const num4 = 104;

function naming(int) {
    const myNum = int + '';
    const myNumArr = myNum.split('');  
    const endPosition = myNumArr[myNumArr.length-1];
    const penultPosition = myNumArr[myNumArr.length-2];
    
    if ((endPosition >=5 && endPosition <= 9) ||  (endPosition === "0") ||
        (endPosition ==1 && penultPosition == 1) ||
        (endPosition >=2 && endPosition <= 4 && penultPosition == 1)){
        console.log (int +" компьютеров")
    }        
    if (endPosition == 1 && penultPosition !=1) {
        console.log (int + " компьютер")}
    
    if (endPosition >=2 && endPosition <= 4 && penultPosition != 1) {
        console.log(int + " компьютера")
    }
}
naming(num1);
naming(num2);
naming(num3);
naming(num4);
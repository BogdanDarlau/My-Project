
// tema 1 profilor cei mai buni 

function computeMin (arr, n) 
    let minValue = 10000 
    for (let i = 0; i < n ; i++) {
        if (arr[i] < minValue){
            minvalue2 = arr[i]
            minValue > arr[i]  
        }
}


//tema 2 (calculeaza suma tuturor valorilor)
function computeMin (array) {
   const arr = [5 , 8, 42, -1, 12, 0] ;
   let sum = 0;

    for ( let i = 0; i < arr.length; i += 1 ) {
        sum += arr[i];
    }

    return sum;
}

console.log(computeMin([5, 8, 42, -1, 12, 0])) 

//metoda 2 (for each)

function computeMin (array) {
    let sum = 0;

    array.forEach(element => {
        sum += element;
    });

    console.log(sum);
    return sum;
}
computeMin([5, 8, 42, -1, 12, 0]);


// tema 3 ( schimba valorile intre 2 variabile)

let Corina = "theBestTeacher"; 
let Andi = "theBestProgrammer";

[Corina, Andi] = [Andi, Corina];

console.log(Corina);
console.log(Andi);


//tema 4 (calculeaza area unui triunghi avand baza si inaltimea)

const triangleBase = 40;
const triangleHeight = 75;

function calcTriangleArea (triangleBase, triangleHeight) {
    return (triangleBase * triangleHeight) / 2;
}

console.log(triangleArea);


//tema 5 (calculeaza media aritmetica a unei liste array)

const mathGrades = [8.5, 9, 8, 6.5, 10] ;

function avarage (castron) {
    let sum = 0 ;

for (let num = 0; num < castron.length; num++){
    sum += castron[num];
}

    let result = sum / castron.length 

return result;
}

console.log(avarage(mathGrades)) ;
   console.log(avarage([1, 2, 3, 4]));
console.log (avarage([0, -3, 8]  
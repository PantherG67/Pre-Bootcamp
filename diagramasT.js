function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
//el console.log imprimiria hello y hola\\


function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
//el console.log imprimira hola y el resultado 15
/* T diagrama

Variables result      | Value

Result                | Hello();

*/


function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
//El console.log imprimiria el resultado el cual es 18

/* T Diagrama

Variables           | Value

Result              | numPlus(3);
*/

var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
//la funcion logAndReturn me muestra el dato ingresado
//y me va a mostrar variable num = 15-
/*T Diagrama
Variables             | Value
Result                | logAndReturn(10);



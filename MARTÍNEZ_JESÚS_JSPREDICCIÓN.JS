function myBirthYearFunc(){
        console.log("Nací en " + 1980);
    }
    //el console.log imprime "naci en 1980"


function myBirthYearFunc(EntradaAñoNacimiento){
        console.log("Nací en " + EntradaAñoNacimiento);
    }
//el console.log imprime "Nací en 2005 (EntradaAñoNacimiento)"


function add(num1, num2){
        console.log("¡Sumando números!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        console.log(sum);
    }
    

 //el console.log Imprime el resultado de la suma
 


 function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
//el console.log mostrará toda la informacion para contactar a la persona



function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
//el console.log mostrará la croqueta de papa


var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

//el console.log mostrará la libreria de peliculas

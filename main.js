let mail= prompt("Ingrese su correo");
let mailRepetir= prompt("Ingrese nuevamente su correo");

while(mail != mailRepetir){
    alert("Los correos no son iguales");
    mail= prompt("Ingrese su correo") ;
    mailRepetir= prompt("Ingrese nuevamente su correo");
    
}
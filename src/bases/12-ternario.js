
const activo = true;

let mensaje ='';

//PRIMERA MANERA CON IF - ELSE
/* 
if(!activo){
    mensaje= 'Estamos ready';
}else{
    mensaje= 'GG WP report jg'
} */

//SEGUNDA MANERA CON CONDICIONAL IF - ELSE
/* 
mensaje = (!activo)? 'preparados pal combate' : 'Aguanteme compa';
 */

//TERCERA MANERA CON SOLO CONDICIONAL IF
mensaje = !activo && 'activisimo compa, estoy buenardo';

console.log(mensaje);
/*/Trabajo en equipo!!

Primero pensar el algoritmo y luego codear.


Un hotel recibe huéspedes durante el día, y necesita que el recepcionista haga el ingreso a las habitaciones. Cada cliente que entre, se le asignará un número de habitación consecutivamente (Es decir: el primero tendrá la habitación 1, el segundo el 2, y así sucesivamente). 

El sistema deberá pedir datos huéspedes hasta que el recepcionista desee finalizar la carga. En la carga se guarda por habitación UN solo nombre, de quien realiza la reserva, no de todas las personas alojadas. 

La carga se realizará de la siguiente manera: 

	El cliente deberá darle su: Nombre,tipo de habitación y número de días de estancia. Se le brinda el valor a abonar en base :
-Valor por noche por de habitación:
* Standard: $2500
* Doble: $3300
* Triple: $4300
* Suite: $7250
-Si tiene más de 5 noches, se realiza un 10% de descuento.
-Si es Standard, se le pregunta si quiere desayuno. Tiene un costo adicional de $90 por noche. 


Al finalizar la carga, nos mostrará un reporte automático con: 

* La facturación total, es decir el monto total pagado por todos los huespedes. 
* Un listado con los nombres de todos los huespedes alojados (quienes reservaron).
* Listado de habitaciones ocupadas.


Al finalizar agregar un readme con el algoritmo y una breve explicación.*/

let confirmacion= true;
let cliente="";
let habitacion="";
let cantidad=0;
let clientes=[]
let habitaciones=[]
let totales=[]
let noches=[]
let Standard=2500
let Doble=3300
let Triple=4300
let Suite=7250
let desay=90
let total=0
let facturacion=0

function checkin(){
    while(confirmacion){
        cliente=prompt("Ingrese el nombre del cliente")
        cantidad=parseInt(prompt("Ingrese la cantidad de noches"))
        habitacion=prompt("Ingrese tipo de habitacion: STANDARD,DOBLE,TRIPLE,SUITE ").toUpperCase()
        if(habitacion=="STANDARD"){
            desayuno=parseInt(prompt("Desea desayuno:1.SI o 2.NO"))
            if( desayuno==1 && cantidad>5){
                total=(Standard*cantidad+desay*cantidad)*0.9
                alert("Costo total "+ total) 
                
                }else if ( desayuno==1 &&cantidad<=5){ 
                    total=Standard*cantidad+desay*cantidad
                    alert("Costo total $"+ total)              
                
                }else if(desayuno==2 && cantidad>5){
                    total=(Standard*cantidad)*0.9
                    alert("Costo total $"+ total)
                    }
                    else{
                        total=Standard*cantidad
                        alert("Costo total $"+ total)
                    }                              
        
        }else if(habitacion=="DOBLE"){     
                    if(cantidad>5){
                    total=(Doble*cantidad)*0.9
                    alert("Costo total"+ total)
                    }else {
                    total=Doble*cantidad
                    alert("Costo total $"+ total)
                    }
        }else if(habitacion=="TRIPLE"){     
                    if(cantidad>5){
                    total=(Triple*cantidad)*0.9
                    alert("Costo total"+ total)
                    }else {
                    total=Triple*cantidad
                    alert("Costo total $"+ total)
                    }
        }else if(habitacion=="SUITE"){ 
                    if(cantidad>5){
                    total=(Suite*cantidad)*0.9
                    alert("Costo total"+ total)
                    }else {
                    total=Suite*cantidad
                    alert("Costo total $"+ total)
                    }                 
             
        }         
        confirmacion=confirm("Desea cargar otro cliente")
        clientes.push(cliente) 
        habitaciones.push(habitacion)
        noches.push(cantidad)
        totales.push(total)
        
    }  
} 
function reporte(){
    for(let i = 0; i < clientes.length; i++){
        console.log("Cliente:"+clientes[i] +",habitacion:"+habitaciones[i]+",noches:"+noches[i]+",costo: $"+totales[i])
    }
    for (let i = 0; i < totales.length; i++) {
            facturacion= facturacion+ totales[i];
        }
        console.log("El total de facturacion es: $"+facturacion);                        
    
    }
checkin()
reporte()



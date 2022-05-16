// hack: si vuelves atrás te echas la web xd

//hay que apretar 2 veces??

/* -------------------------------------------------------------------------- */
/*                                Jugador stats                               */
/* -------------------------------------------------------------------------- */

let jugador = { //este objeto se reinicia cada vez que se cambia de HTML
    nombre: "",
    implementos: [],
    capacidad: 0,
    avatar: "",
    //CONTADORES PARA EL AVATAR
    //involucramiento:
    inv_perkin: 0,
    inv_karen: 0,
    inv_ñuñoino: 0,
    //prioridad:
    pri_humano: 0,
    pri_perro: 0,
    pri_vínculo: 0,
    //responsabilidad:
    res_individualista: 0,
    res_cuadrado: 0,
    res_vegano: 0,
    //sociabilidad:
    soc_popular: 0,
    soc_ermitaño: 0,
}

//primer seteo:
if (document.body.id == "p0") {
    let lista_implementos = [] //array
    let string_implementos = lista_implementos.toString(); //string
    sessionStorage.setItem("jugador_implementos", string_implementos)
    sessionStorage.setItem("jugador_capacidad", "0")
    sessionStorage.setItem("jugador_involucramiento", "perkin,0,karen,0,ñuñoino,0")
    sessionStorage.setItem("jugador_prioridad", "humano,0,perro,0,vínculo,0")
    sessionStorage.setItem("jugador_responsabilidad", "individualista,0,cuadrado,0,vegano,0")
    sessionStorage.setItem("jugador_sociabilidad", "popular,0,ermitaño,0")
}

//primero setear los items vacios
//cada vez que se quieran actualizar hay que setearlos de nuevo
//por lo tanto, hay que usar el sessionStorage.getItem("id") y guardarlo como variable
//para poder agarrar ese valor y pasarlo a numero o lo que se necesite
//luego sumarlo con el valor actual
//y después volver a setear el valor actualizado con el mismo id en sessionStorage



/*
caso 1 - ej p1: existe el feedback pero no puntaje
caso 2 - ej p9: existe el puntaje pero no el feedback
caso 3 - ej p4: existe el feedback Y el puntaje
caso 4 - ej p2: no existe feedback ni puntaje xd
En todas existe al menos el btn1

0. if existe el btn -> 1 por cada boton?? Eso significa que sería dependiendo del id del
boton y no del id de la pregunta aaa
    1. if existe el feedback pero no p -> igual como está arriba
        accion por cada pregunta de mierda
    2. if existe puntaje pero no f
        accion
    3. if existe feedback Y puntaje
        accion
    4. else (SOLO P2)
        accion (la wea de los bolsos)
*/

/* -------------------------------------------------------------------------- */
/*                       SISTEMA ID - PUNTAJE - FEEDBACK                      */
/* -------------------------------------------------------------------------- */

//  id: 1
//lo importante de esto no es el nombre de la variable
//es el string del ID
//el ciclo de antes falla pq no sé como se usa el onclick con los ciclos
//quizas crear el evento onclick antes? y que esto sea solo para los if y las acciones

//el id de puntaje solo está 1 vez en cada html de pregunta que tiene puntaje
//eso significa que para cada opción hay que buscar el mismo id,
//a diferencia del feedback y el btn que se va aumentando 1 el id
function fb_pje1() {
    let btn1 = document.getElementById("btn1");
    let feedback1 = document.getElementById("feedback1");
    let feedback1_1 = document.getElementById("feedback1_1");
    let puntaje1 = document.getElementById("puntaje1"); //ojo: puntaje1 = enunciado
    if (btn1 !== null) { //si existe el btn
        if (feedback1 !== null && puntaje1 == null) { //existe feedback pero no puntaje
            //pasar string implementos de sessionStorage a array para buscar
            string_implementos = sessionStorage.getItem("jugador_implementos");
            lista_implementos = string_implementos.split(",") //pasar a array
            //aparece feedback:
            if (document.body.id == "p0") {
                feedback1.style.display = "flex";
            }
            if (document.body.id == "p1") {
                feedback1.style.display = "flex";
            }
            //p12_1:
            if (document.body.id == "p12_1" && lista_implementos.includes("Agua") == false) {
                feedback1_1.style.display = "flex";
            } else if (document.body.id == "p12_1") { //trigger feedback1 -> SÍ TRAJO EL IMPLEMENTO
                feedback1.style.display = "flex";
            }
            //p12_2:
            if (document.body.id == "p12_2" && lista_implementos.includes("Agua") == false) {
                feedback1_1.style.display = "flex";
            } else if (document.body.id == "p12_2") { //trigger feedback1 -> SÍ TRAJO EL IMPLEMENTO
                feedback1.style.display = "flex";
            }
            //p11_2:
            if (document.body.id == "p11_2" && lista_implementos.includes("Celular") == false) {
                feedback1_1.style.display = "flex";
            } else if (document.body.id == "p11_2") { //trigger feedback1 -> SÍ TRAJO EL IMPLEMENTO
                feedback1.style.display = "flex";
            }
        } else if (feedback1 == null && puntaje1 !== null) { //existe puntaje pero no feedback
            //puntaje:
            if (document.body.id == "p4") {
                p4_puntaje(1)
            } else if (document.body.id == "p5_1") {
                p5_1_puntaje(1)
            } else if (document.body.id == "p5_2") {
                p5_2_puntaje(1)
            } else if (document.body.id == "p6") {
                p6_puntaje(1)
            } else if (document.body.id == "p7") {
                p7_puntaje(1)
            } else if (document.body.id == "p8") {
                p8_puntaje(1)
            } else if (document.body.id == "p9") {
                p9_puntaje(1)
                window.location.assign("p10_1_final.html");
            } else if (document.body.id == "p10_1") {
                p10_1_puntaje(1)
            } else if (document.body.id == "p10_2") {
                p10_2_puntaje(1)
            } else if (document.body.id == "p11_1") {
                p11_1_puntaje(1)
            } else if (document.body.id == "p11_2") {
                p11_2_puntaje(1)
            } else if (document.body.id == "p13_1") {
                p13_1_puntaje(1)
            } else if (document.body.id == "p13_2") {
                p13_2_puntaje(1)
            } else if (document.body.id == "p14_1") {
                p14_1_puntaje(1)
            } else if (document.body.id == "p14_2") {
                p14_2_puntaje(1)
            } else { }
            //aca van los if de las otras preguntas con puntaje
            //esto es para las que tienen AL MENOS 1 opcion, luego va disminuyendo
        } else if (feedback1 !== null && puntaje1 !== null) { //existen ambos
            //puntaje:
            if (document.body.id == "p4") {
                p4_puntaje(1)
                feedback1.style.display = "flex";
            } else if (document.body.id == "p5_1") {
                p5_1_puntaje(1)
                feedback1.style.display = "flex";
            } else if (document.body.id == "p5_2") {
                p5_2_puntaje(1)
                feedback1.style.display = "flex";
            } else if (document.body.id == "p6") {
                p6_puntaje(1)
                feedback1.style.display = "flex";
            } else if (document.body.id == "p7") {
                p7_puntaje(1)
                feedback1.style.display = "flex";
            } else if (document.body.id == "p8") {
                p8_puntaje(1)
                feedback1.style.display = "flex";
            } else if (document.body.id == "p9") {
                p9_puntaje(1)
            } else if (document.body.id == "p10_1") {
                p10_1_puntaje(1)
                feedback1.style.display = "flex";
            } else if (document.body.id == "p10_2") {
                p10_2_puntaje(1)
                feedback1.style.display = "flex";
            } else if (document.body.id == "p11_1") {
                p11_1_puntaje(1)
                feedback1.style.display = "flex";
            } else if (document.body.id == "p11_2") {
                p11_2_puntaje(1)
            } else if (document.body.id == "p13_1") {
                p13_1_puntaje(1)
                feedback1.style.display = "flex";
            } else if (document.body.id == "p13_2") {
                p13_2_puntaje(1)
                feedback1.style.display = "flex";
            } else if (document.body.id == "p14_1") {
                p14_1_puntaje(1)
                feedback1.style.display = "flex";
            } else if (document.body.id == "p14_2") {
                p14_2_puntaje(1)
                feedback1.style.display = "flex";
            } else { }
            //pasar string implementos de sessionStorage a array para buscar
            string_implementos = sessionStorage.getItem("jugador_implementos");
            lista_implementos = string_implementos.split(",") //pasar a array
            //aparece feedback:
            //p12_1:
            if (document.body.id == "p12_1" && lista_implementos.includes("Agua") == false) {
                feedback1_1.style.display = "flex";
            } else if (document.body.id == "p12_1") { //trigger feedback1 -> SÍ TRAJO EL IMPLEMENTO
                feedback1.style.display = "flex";
            }
            //p12_2:
            if (document.body.id == "p12_2" && lista_implementos.includes("Agua") == false) {
                feedback1_1.style.display = "flex";
            } else if (document.body.id == "p12_2") { //trigger feedback1 -> SÍ TRAJO EL IMPLEMENTO
                feedback1.style.display = "flex";
            }
            //p11_2:
            if (document.body.id == "p11_2" && lista_implementos.includes("Celular") == false) {
                feedback1_1.style.display = "flex";
            } else if (document.body.id == "p11_2") { //trigger feedback1 -> SÍ TRAJO EL IMPLEMENTO
                feedback1.style.display = "flex";
            }
        } else { }
    }
}
//  id: 2
function fb_pje2() {
    let btn2 = document.getElementById("btn2");
    let feedback2 = document.getElementById("feedback2");
    let feedback2_1 = document.getElementById("feedback2_1");
    let puntaje2 = document.getElementById("puntaje1"); //SIEMPRE es puntaje1 el id
    if (btn2 !== null) { //si existe el btn
        if (feedback2 !== null && puntaje2 == null) { //existe feedback pero no puntaje
            //pasar string implementos de sessionStorage a array para buscar
            string_implementos = sessionStorage.getItem("jugador_implementos");
            lista_implementos = string_implementos.split(",") //pasar a array
            //aparece feedback:
            //p1:
            if (document.body.id == "p1") {
                feedback2.style.display = "flex";
            }
            //p5_1:
            if (document.body.id == "p5_1" && lista_implementos.includes("Premios") == false) {
                feedback2_1.style.display = "flex";
            } else if (document.body.id == "p5_1") { //trigger feedback2 -> SÍ TRAJO EL IMPLEMENTO
                feedback2.style.display = "flex";
            }
            //p5_2:
            if (document.body.id == "p5_2" && lista_implementos.includes("Premios") == false) {
                feedback2_1.style.display = "flex";
            } else if (document.body.id == "p5_2") { //trigger feedback2 -> SÍ TRAJO EL IMPLEMENTO
                feedback2.style.display = "flex";
            }
            //p8:
            if (document.body.id == "p8" && lista_implementos.includes("Bolsas") == false) {
                feedback2_1.style.display = "flex";
            } else if (document.body.id == "p8") {
                feedback2.style.display = "flex";
            }
            //p12_1
            if (document.body.id == "p12_1") {
                feedback2.style.display = "flex";
            }
            //p12_2
            if (document.body.id == "p12_2") {
                feedback2.style.display = "flex";
            }
        } else if (feedback2 == null && puntaje2 !== null) { //existe puntaje pero no feedback
            //puntaje:
            if (document.body.id == "p4") {
                p4_puntaje(2)
            } else if (document.body.id == "p5_1") {
                p5_1_puntaje(2)
            } else if (document.body.id == "p5_2") {
                p5_2_puntaje(2)
            } else if (document.body.id == "p6") { //cambiar id de estos html
                p6_puntaje(2)
            } else if (document.body.id == "p7") {
                p7_puntaje(2)
            } else if (document.body.id == "p8") {
                p8_puntaje(2)
            } else if (document.body.id == "p9") {
                p9_puntaje(2)
                window.location.assign("p10_2_final.html");
            } else if (document.body.id == "p10_1") {
                p10_1_puntaje(2)
            } else if (document.body.id == "p10_2") {
                p10_2_puntaje(2)
            } else if (document.body.id == "p11_1") {
                p11_1_puntaje(2)
            } else if (document.body.id == "p11_2") {
                p11_2_puntaje(2)
            } else if (document.body.id == "p13_1") {
                p13_1_puntaje(2)
            } else if (document.body.id == "p13_2") {
                p13_2_puntaje(2)
            } else if (document.body.id == "p14_1") {
                p14_1_puntaje(2)
            } else if (document.body.id == "p14_2") {
                p14_2_puntaje(2)
            } else { }
        } else if (feedback2 !== null && puntaje2 !== null) { //existen ambos
            //puntaje:
            if (document.body.id == "p4") {
                p4_puntaje(2)
                feedback2.style.display = "flex";
            } else if (document.body.id == "p5_1") {
                p5_1_puntaje(2)
            } else if (document.body.id == "p5_2") {
                p5_2_puntaje(2)
            } else if (document.body.id == "p6") {
                p6_puntaje(2)
                feedback2.style.display = "flex";
            } else if (document.body.id == "p7") {
                p7_puntaje(2)
                feedback2.style.display = "flex";
            } else if (document.body.id == "p8") {
                p8_puntaje(2)
            } else if (document.body.id == "p9") {
                p9_puntaje(2)
            } else if (document.body.id == "p10_1") {
                p10_1_puntaje(2)
                feedback2.style.display = "flex";
            } else if (document.body.id == "p10_2") {
                p10_2_puntaje(2)
                feedback2.style.display = "flex";
            } else if (document.body.id == "p11_1") {
                p11_1_puntaje(2)
                feedback2.style.display = "flex";
            } else if (document.body.id == "p11_2") {
                p11_2_puntaje(2)
                feedback2.style.display = "flex";
            } else if (document.body.id == "p13_1") {
                p13_1_puntaje(2)
                feedback2.style.display = "flex";
            } else if (document.body.id == "p13_2") {
                p13_2_puntaje(2)
                feedback2.style.display = "flex";
            } else if (document.body.id == "p14_1") {
                p14_1_puntaje(2)
                feedback2.style.display = "flex";
            } else if (document.body.id == "p14_2") {
                p14_2_puntaje(2)
                feedback2.style.display = "flex";
            } else { }
            //aparece feedback:
            //pasar string implementos de sessionStorage a array para buscar
            string_implementos = sessionStorage.getItem("jugador_implementos");
            lista_implementos = string_implementos.split(",") //pasar a array
            //p5_1:
            if (document.body.id == "p5_1" && lista_implementos.includes("Premios") == false) {
                feedback2_1.style.display = "flex";
            } else if (document.body.id == "p5_1") { //trigger feedback2 -> SÍ TRAJO EL IMPLEMENTO
                feedback2.style.display = "flex";
            }
            //p5_2:
            if (document.body.id == "p5_2" && lista_implementos.includes("Premios") == false) {
                feedback2_1.style.display = "flex";
            } else if (document.body.id == "p5_2") { //trigger feedback2 -> SÍ TRAJO EL IMPLEMENTO
                feedback2.style.display = "flex";
            }
            //p8:
            if (document.body.id == "p8" && lista_implementos.includes("Bolsas") == false) {
                feedback2_1.style.display = "flex";
            } else if (document.body.id == "p8") {
                feedback2.style.display = "flex";
            }
        } else { }
    }
}
//  id: 3
function fb_pje3() {
    let btn3 = document.getElementById("btn3");
    let feedback3 = document.getElementById("feedback3");
    let feedback3_1 = document.getElementById("feedback3_1");
    let puntaje3 = document.getElementById("puntaje1"); //SIEMPRE es puntaje1 el id
    if (btn3 !== null) { //si existe el btn
        if (feedback3 !== null && puntaje3 == null) { //existe feedback pero no puntaje
            //aparece feedback:
            feedback3.style.display = "flex";
        } else if (feedback3 == null && puntaje3 !== null) { //existe puntaje pero no feedback
            //puntaje:
            if (document.body.id == "p5_1") {
                p5_1_puntaje(3)
            } else if (document.body.id == "p5_2") {
                p5_2_puntaje(3)
            } else if (document.body.id == "p6") {
                p6_puntaje(3)
            } else if (document.body.id == "p8") {
                p8_puntaje(3)
            } else if (document.body.id == "p10_1") {
                p10_1_puntaje(3)
            } else if (document.body.id == "p11_1") {
                p11_1_puntaje(3)
            } else if (document.body.id == "p11_2") {
                p11_2_puntaje(3)
            } else if (document.body.id == "p13_1") {
                p13_1_puntaje(3)
            } else if (document.body.id == "p13_2") {
                p13_2_puntaje(3)
            } else if (document.body.id == "p14_1") {
                p14_1_puntaje(3)
            } else if (document.body.id == "p14_2") {
                p14_2_puntaje(3)
            } else { }
        } else if (feedback3 !== null && puntaje3 !== null) { //existen ambos
            //puntaje:
            if (document.body.id == "p5_1") {
                p5_1_puntaje(3)
            } else if (document.body.id == "p5_2") {
                p5_2_puntaje(3)
            } else if (document.body.id == "p6") {
                p6_puntaje(3)
            } else if (document.body.id == "p8") {
                p8_puntaje(3)
            } else if (document.body.id == "p10_1") {
                p10_1_puntaje(3)
            } else if (document.body.id == "p11_1") {
                p11_1_puntaje(3)
            } else if (document.body.id == "p11_2") {
                p11_2_puntaje(3)
            } else if (document.body.id == "p13_1") {
                p13_1_puntaje(3)
            } else if (document.body.id == "p13_2") {
                p13_2_puntaje(3)
            } else if (document.body.id == "p14_1") {
                p14_1_puntaje(3)
            } else if (document.body.id == "p14_2") {
                p14_2_puntaje(3)
            } else { }
            //aparece feedback:
            feedback3.style.display = "flex"; //cambia el display del css
        } else { }
    }
}
//  id: 4
function fb_pje4() {
    let btn4 = document.getElementById("btn4");
    let feedback4 = document.getElementById("feedback4");
    let feedback4_1 = document.getElementById("feedback4_1");
    let puntaje4 = document.getElementById("puntaje1"); //SIEMPRE es puntaje1 el id
    if (btn4 !== null) { //si existe el btn
        if (feedback4 !== null && puntaje4 == null) { //existe feedback pero no puntaje
            //aparece feedback:
            feedback4.style.display = "flex";
        }
    }
}

/* -------------------------------------------------------------------------- */
/*                                  P2 bolso                                  */
/* -------------------------------------------------------------------------- */

function bolso(tamaño) {
    if (tamaño == "chico") {
        jugador.capacidad = 2;
        jugador.bolso = "chico";
    } else if (tamaño == "mediano") {
        jugador.capacidad = 3;
        jugador.bolso = "mediano";
    } else { //grande
        jugador.capacidad = 4;
        jugador.bolso = "grande";
    };
    let string_capacidad = String(jugador.capacidad);
    sessionStorage.setItem("jugador_capacidad", string_capacidad);
    window.location.assign("p3_final.html");
}


/* -------------------------------------------------------------------------- */
/*                               P3 implementos                               */
/* -------------------------------------------------------------------------- */
if (document.body.id == "p3") {
    //sessionStorage:
    let string_capacidad = sessionStorage.getItem("jugador_capacidad")
    let capacidad = Number(string_capacidad)
    document.getElementById("text-p3").innerHTML = "Puedes llevar hasta " + string_capacidad + " objetos"
    //variables:
    let counter = 0; //afuera de la funcion para que no se resetee

    function agregar_impl(implemento, num_id) {
        if (counter <= capacidad) {
            var btn_actual = document.getElementById(num_id);
            if (jugador.implementos.includes(implemento)) { //si ya fue elegido
                var index_impl = jugador.implementos.indexOf(implemento);
                jugador.implementos.splice(index_impl, 1);
                btn_actual.style.backgroundColor = "#F5F4F5";
                counter -= 1;
            }
            else { //si no lo he elegido
                if (counter < capacidad) {
                    jugador.implementos.push(implemento);
                    btn_actual.style.backgroundColor = "#3DD9B9";
                    counter += 1;
                }
            }
        }
        else {
            //alerta de que no te caben más cosas
        }
    }
    //falta feedback de la correa / collar

    function storage_p3() {
        //GUARDAR IMPLEMENTOS EN SESSIONSTORAGE:
        //lista anterior:
        let string_implementos_antes = sessionStorage.getItem("jugador_implementos") //recibir string anterior
        let lista_implementos_antes = string_implementos_antes.split(",") //pasar a lista
        //implemento actual:
        let lista_implementos_agregar = jugador.implementos //array
        //juntar y setear sessionStorage
        const lista_implementos = lista_implementos_antes.concat(lista_implementos_agregar)
        let string_implementos = lista_implementos.toString(); //string
        string_implementos = string_implementos.slice(1)
        sessionStorage.setItem("jugador_implementos", string_implementos)

        //PUNTAJE POR IMPLEMENTO
        if (lista_implementos.includes("Libro")) {
            jugador.pri_humano += 1
        }
        if (lista_implementos.includes("Celular")) {
            jugador.pri_humano += 1
        }
        if (lista_implementos.includes("Audífonos")) {
            jugador.pri_humano += 1
        }
        if (lista_implementos.includes("Agua")) {
            jugador.pri_perro += 1
        }
        if (lista_implementos.includes("Bolsas")) {
            jugador.pri_perro += 1
        }
        if (lista_implementos.includes("Premios")) {
            jugador.pri_perro += 1
        }
        if (lista_implementos.includes("Collar")) {
            jugador.pri_vínculo += 1
        }
        if (lista_implementos.includes("Juguete")) {
            jugador.pri_vínculo += 1
        }

        //GUARDAR PUNTAJE EN SESSIONSTORAGE
        //rescatar del storage y pasar a array
        let string_prioridad = sessionStorage.getItem("jugador_prioridad");
        let lista_prioridad = string_prioridad.split(",");
        //actualizar valores y pasar a string
        lista_prioridad[1] = String(Number(lista_prioridad[1]) + jugador.pri_humano)
        lista_prioridad[3] = String(Number(lista_prioridad[3]) + jugador.pri_perro)
        lista_prioridad[5] = String(Number(lista_prioridad[5]) + jugador.pri_vínculo)
        string_prioridad = lista_prioridad.toString()
        //devolver al storage
        sessionStorage.setItem("jugador_prioridad", string_prioridad)

        //DIRIGIR:
        if (lista_implementos.includes("Collar")) {
            window.location.assign("p4_final.html")
        } else {
            feedback_p3.style.display = "flex";
        }
    }
}

/* -------------------------------------------------------------------------- */
/*                               Agregar puntaje                              */
/* -------------------------------------------------------------------------- */

//p4
function p4_puntaje(camino) {
    if (camino == '1') {
        jugador.soc_popular += 1;
    } else { //camino == 2
        jugador.soc_ermitaño += 1;
    }
    let string_sociabilidad = sessionStorage.getItem("jugador_sociabilidad");
    let lista_sociabilidad = string_sociabilidad.split(",");
    lista_sociabilidad[1] = String(Number(lista_sociabilidad[1]) + jugador.soc_popular)
    lista_sociabilidad[3] = String(Number(lista_sociabilidad[3]) + jugador.soc_ermitaño)
    string_sociabilidad = lista_sociabilidad.toString()
    sessionStorage.setItem("jugador_sociabilidad", string_sociabilidad)
}

//p5_1
function p5_1_puntaje(camino) {
    if (camino == '1') {
        jugador.inv_karen += 2;
        jugador.res_cuadrado += 1;
    } else if (camino == '2') {
        jugador.inv_perkin += 2;
        jugador.res_individualista += 1;
    } else { //camino == 3
        jugador.inv_ñuñoino += 2;
        jugador.res_vegano += 1;
    }
    //rescatar del storage y pasar a array
    let string_involucramiento = sessionStorage.getItem("jugador_involucramiento");
    let string_responsabilidad = sessionStorage.getItem("jugador_responsabilidad");
    let lista_involucramiento = string_involucramiento.split(",");
    let lista_responsabilidad = string_responsabilidad.split(",");
    //actualizar valores y pasar a string
    lista_involucramiento[1] = String(Number(lista_involucramiento[1]) + jugador.inv_perkin)
    lista_involucramiento[3] = String(Number(lista_involucramiento[3]) + jugador.inv_karen)
    lista_involucramiento[5] = String(Number(lista_involucramiento[5]) + jugador.inv_ñuñoino)
    string_involucramiento = lista_involucramiento.toString()
    lista_responsabilidad[1] = String(Number(lista_responsabilidad[1]) + jugador.res_individualista)
    lista_responsabilidad[3] = String(Number(lista_responsabilidad[3]) + jugador.res_cuadrado)
    lista_responsabilidad[5] = String(Number(lista_responsabilidad[5]) + jugador.res_vegano)
    string_responsabilidad = lista_responsabilidad.toString()
    //devolver al storage
    sessionStorage.setItem("jugador_involucramiento", string_involucramiento)
    sessionStorage.setItem("jugador_responsabilidad", string_responsabilidad)
}

//p5_2
function p5_2_puntaje(camino) {
    if (camino == '1') {
        jugador.inv_ñuñoino += 2;
        jugador.res_vegano += 1;
    } else if (camino == '2') {
        jugador.inv_perkin += 2;
        jugador.res_individualista += 1;
    } else { //camino == 3
        jugador.inv_karen += 2;
        jugador.res_cuadrado += 1;
    }
    //rescatar del storage y pasar a array
    let string_involucramiento = sessionStorage.getItem("jugador_involucramiento");
    let string_responsabilidad = sessionStorage.getItem("jugador_responsabilidad");
    let lista_involucramiento = string_involucramiento.split(",");
    let lista_responsabilidad = string_responsabilidad.split(",");
    //actualizar valores y pasar a string
    lista_involucramiento[1] = String(Number(lista_involucramiento[1]) + jugador.inv_perkin)
    lista_involucramiento[3] = String(Number(lista_involucramiento[3]) + jugador.inv_karen)
    lista_involucramiento[5] = String(Number(lista_involucramiento[5]) + jugador.inv_ñuñoino)
    string_involucramiento = lista_involucramiento.toString()
    lista_responsabilidad[1] = String(Number(lista_responsabilidad[1]) + jugador.res_individualista)
    lista_responsabilidad[3] = String(Number(lista_responsabilidad[3]) + jugador.res_cuadrado)
    lista_responsabilidad[5] = String(Number(lista_responsabilidad[5]) + jugador.res_vegano)
    string_responsabilidad = lista_responsabilidad.toString()
    //devolver al storage
    sessionStorage.setItem("jugador_involucramiento", string_involucramiento)
    sessionStorage.setItem("jugador_responsabilidad", string_responsabilidad)
}

//p6
function p6_puntaje(camino) {
    if (camino == '1') {
        jugador.inv_perkin += 2;
    } else if (camino == '2') {
        jugador.inv_ñuñoino += 2;
    } else {
        jugador.inv_karen += 2;
    }
    //rescatar del storage y pasar a array
    let string_involucramiento = sessionStorage.getItem("jugador_involucramiento");
    let lista_involucramiento = string_involucramiento.split(",");
    //actualizar valores y pasar a string
    lista_involucramiento[1] = String(Number(lista_involucramiento[1]) + jugador.inv_perkin)
    lista_involucramiento[3] = String(Number(lista_involucramiento[3]) + jugador.inv_karen)
    lista_involucramiento[5] = String(Number(lista_involucramiento[5]) + jugador.inv_ñuñoino)
    string_involucramiento = lista_involucramiento.toString()
    //devolver al storage
    sessionStorage.setItem("jugador_involucramiento", string_involucramiento)
}

//p7
function p7_puntaje(camino) {
    if (camino == '1') {
        jugador.inv_ñuñoino += 1;
        jugador.inv_perkin += 1;
    } else {
        jugador.inv_karen += 1;
        jugador.inv_perkin += 1;
    }
    //rescatar del storage y pasar a array
    let string_involucramiento = sessionStorage.getItem("jugador_involucramiento");
    let lista_involucramiento = string_involucramiento.split(",");
    //actualizar valores y pasar a string
    lista_involucramiento[1] = String(Number(lista_involucramiento[1]) + jugador.inv_perkin)
    lista_involucramiento[3] = String(Number(lista_involucramiento[3]) + jugador.inv_karen)
    lista_involucramiento[5] = String(Number(lista_involucramiento[5]) + jugador.inv_ñuñoino)
    string_involucramiento = lista_involucramiento.toString()
    //devolver al storage
    sessionStorage.setItem("jugador_involucramiento", string_involucramiento)
}

//p8
function p8_puntaje(camino) {
    if (camino == '1') {
        jugador.res_individualista += 2;
    } else if (camino == '2') {
        jugador.res_cuadrado += 2;
    } else {
        jugador.res_vegano += 2;
    }
    //rescatar del storage y pasar a array
    let string_responsabilidad = sessionStorage.getItem("jugador_responsabilidad");
    let lista_responsabilidad = string_responsabilidad.split(",");
    //actualizar valores y pasar a string
    lista_responsabilidad[1] = String(Number(lista_responsabilidad[1]) + jugador.res_individualista)
    lista_responsabilidad[3] = String(Number(lista_responsabilidad[3]) + jugador.res_cuadrado)
    lista_responsabilidad[5] = String(Number(lista_responsabilidad[5]) + jugador.res_vegano)
    string_responsabilidad = lista_responsabilidad.toString()
    //devolver al storage
    sessionStorage.setItem("jugador_responsabilidad", string_responsabilidad)
}

//p9
function p9_puntaje(camino) {
    if (camino == '1') {
        jugador.soc_ermitaño += 1;
    } else {
        jugador.soc_popular += 1;
    }
    let string_sociabilidad = sessionStorage.getItem("jugador_sociabilidad");
    let lista_sociabilidad = string_sociabilidad.split(",");
    lista_sociabilidad[1] = String(Number(lista_sociabilidad[1]) + jugador.soc_popular)
    lista_sociabilidad[3] = String(Number(lista_sociabilidad[3]) + jugador.soc_ermitaño)
    string_sociabilidad = lista_sociabilidad.toString()
    sessionStorage.setItem("jugador_sociabilidad", string_sociabilidad)
}

//p10_1
function p10_1_puntaje(camino) {
    if (camino == '1') {
        jugador.soc_popular += 1;
        jugador.res_individualista += 1;
    } else if (camino == '2') {
        jugador.res_vegano += 1;
    } else {
        jugador.res_cuadrado += 1;
        jugador.soc_ermitaño += 1;
    }
    //rescatar del storage y pasar a array
    let string_responsabilidad = sessionStorage.getItem("jugador_responsabilidad");
    let lista_responsabilidad = string_responsabilidad.split(",");
    let string_sociabilidad = sessionStorage.getItem("jugador_sociabilidad");
    let lista_sociabilidad = string_sociabilidad.split(",");
    //actualizar valores y pasar a string
    lista_responsabilidad[1] = String(Number(lista_responsabilidad[1]) + jugador.res_individualista)
    lista_responsabilidad[3] = String(Number(lista_responsabilidad[3]) + jugador.res_cuadrado)
    lista_responsabilidad[5] = String(Number(lista_responsabilidad[5]) + jugador.res_vegano)
    string_responsabilidad = lista_responsabilidad.toString()
    lista_sociabilidad[1] = String(Number(lista_sociabilidad[1]) + jugador.soc_popular)
    lista_sociabilidad[3] = String(Number(lista_sociabilidad[3]) + jugador.soc_ermitaño)
    string_sociabilidad = lista_sociabilidad.toString()
    //devolver al storage
    sessionStorage.setItem("jugador_responsabilidad", string_responsabilidad)
    sessionStorage.setItem("jugador_sociabilidad", string_sociabilidad)
}

//p10_2
function p10_2_puntaje(camino) {
    if (camino == '1') {
        jugador.soc_popular += 1;
        jugador.res_cuadrado += 1;
        jugador.res_vegano += 1;
    } else {
        jugador.res_individualista += 1;
        jugador.soc_ermitaño += 1;
    }
    //rescatar del storage y pasar a array
    let string_responsabilidad = sessionStorage.getItem("jugador_responsabilidad");
    let lista_responsabilidad = string_responsabilidad.split(",");
    let string_sociabilidad = sessionStorage.getItem("jugador_sociabilidad");
    let lista_sociabilidad = string_sociabilidad.split(",");
    //actualizar valores y pasar a string
    lista_responsabilidad[1] = String(Number(lista_responsabilidad[1]) + jugador.res_individualista)
    lista_responsabilidad[3] = String(Number(lista_responsabilidad[3]) + jugador.res_cuadrado)
    lista_responsabilidad[5] = String(Number(lista_responsabilidad[5]) + jugador.res_vegano)
    string_responsabilidad = lista_responsabilidad.toString()
    lista_sociabilidad[1] = String(Number(lista_sociabilidad[1]) + jugador.soc_popular)
    lista_sociabilidad[3] = String(Number(lista_sociabilidad[3]) + jugador.soc_ermitaño)
    string_sociabilidad = lista_sociabilidad.toString()
    //devolver al storage
    sessionStorage.setItem("jugador_responsabilidad", string_responsabilidad)
    sessionStorage.setItem("jugador_sociabilidad", string_sociabilidad)
}

//p11_1
function p11_1_puntaje(camino) {
    if (camino == '1') {
        jugador.pri_humano += 2;
    } else if (camino == '2') {
        jugador.pri_perro += 2;
    } else {
        jugador.pri_vínculo += 2;
    }
    //rescatar del storage y pasar a array
    let string_prioridad = sessionStorage.getItem("jugador_prioridad");
    let lista_prioridad = string_prioridad.split(",");
    //actualizar valores y pasar a string
    lista_prioridad[1] = String(Number(lista_prioridad[1]) + jugador.pri_humano)
    lista_prioridad[3] = String(Number(lista_prioridad[3]) + jugador.pri_perro)
    lista_prioridad[5] = String(Number(lista_prioridad[5]) + jugador.pri_vínculo)
    string_prioridad = lista_prioridad.toString()
    //devolver al storage
    sessionStorage.setItem("jugador_prioridad", string_prioridad)
}

//p11_2
function p11_2_puntaje(camino) {
    if (camino == '1') {
        jugador.pri_humano += 2;
    } else if (camino == '2') {
        jugador.pri_vínculo += 2;
    } else {
        jugador.pri_perro += 2;
    }
    //rescatar del storage y pasar a array
    let string_prioridad = sessionStorage.getItem("jugador_prioridad");
    let lista_prioridad = string_prioridad.split(",");
    //actualizar valores y pasar a string
    lista_prioridad[1] = String(Number(lista_prioridad[1]) + jugador.pri_humano)
    lista_prioridad[3] = String(Number(lista_prioridad[3]) + jugador.pri_perro)
    lista_prioridad[5] = String(Number(lista_prioridad[5]) + jugador.pri_vínculo)
    string_prioridad = lista_prioridad.toString()
    //devolver al storage
    sessionStorage.setItem("jugador_prioridad", string_prioridad)
}

//p13_1
function p13_1_puntaje(camino) {
    if (camino == '1') {
        jugador.res_individualista += 1;
        jugador.inv_perkin += 1;
    } else if (camino == '2') {
        jugador.res_individualista += 1;
        jugador.res_vegano += 1;
        jugador.inv_karen += 1;
    } else {
        jugador.res_vegano += 1;
        jugador.res_cuadrado += 1;
        jugador.inv_ñuñoino += 1;
    }
    //rescatar del storage y pasar a array
    let string_involucramiento = sessionStorage.getItem("jugador_involucramiento");
    let string_responsabilidad = sessionStorage.getItem("jugador_responsabilidad");
    let lista_involucramiento = string_involucramiento.split(",");
    let lista_responsabilidad = string_responsabilidad.split(",");
    //actualizar valores y pasar a string
    lista_involucramiento[1] = String(Number(lista_involucramiento[1]) + jugador.inv_perkin)
    lista_involucramiento[3] = String(Number(lista_involucramiento[3]) + jugador.inv_karen)
    lista_involucramiento[5] = String(Number(lista_involucramiento[5]) + jugador.inv_ñuñoino)
    string_involucramiento = lista_involucramiento.toString()
    lista_responsabilidad[1] = String(Number(lista_responsabilidad[1]) + jugador.res_individualista)
    lista_responsabilidad[3] = String(Number(lista_responsabilidad[3]) + jugador.res_cuadrado)
    lista_responsabilidad[5] = String(Number(lista_responsabilidad[5]) + jugador.res_vegano)
    string_responsabilidad = lista_responsabilidad.toString()
    //devolver al storage
    sessionStorage.setItem("jugador_involucramiento", string_involucramiento)
    sessionStorage.setItem("jugador_responsabilidad", string_responsabilidad)
}

//p13_2
function p13_2_puntaje(camino) {
    if (camino == '1') {
        jugador.res_individualista += 1;
        jugador.res_vegano += 1;
        jugador.inv_karen += 1;
    } else if (camino == '2') {
        jugador.res_vegano += 1;
        jugador.res_cuadrado += 1;
        jugador.inv_ñuñoino += 1;
    } else {
        jugador.res_individualista += 1;
        jugador.inv_perkin += 1;
    }
    //rescatar del storage y pasar a array
    let string_involucramiento = sessionStorage.getItem("jugador_involucramiento");
    let string_responsabilidad = sessionStorage.getItem("jugador_responsabilidad");
    let lista_involucramiento = string_involucramiento.split(",");
    let lista_responsabilidad = string_responsabilidad.split(",");
    //actualizar valores y pasar a string
    lista_involucramiento[1] = String(Number(lista_involucramiento[1]) + jugador.inv_perkin)
    lista_involucramiento[3] = String(Number(lista_involucramiento[3]) + jugador.inv_karen)
    lista_involucramiento[5] = String(Number(lista_involucramiento[5]) + jugador.inv_ñuñoino)
    string_involucramiento = lista_involucramiento.toString()
    lista_responsabilidad[1] = String(Number(lista_responsabilidad[1]) + jugador.res_individualista)
    lista_responsabilidad[3] = String(Number(lista_responsabilidad[3]) + jugador.res_cuadrado)
    lista_responsabilidad[5] = String(Number(lista_responsabilidad[5]) + jugador.res_vegano)
    string_responsabilidad = lista_responsabilidad.toString()
    //devolver al storage
    sessionStorage.setItem("jugador_involucramiento", string_involucramiento)
    sessionStorage.setItem("jugador_responsabilidad", string_responsabilidad)
}

//p14_1
function p14_1_puntaje(camino) {
    if (camino == '1') {
        jugador.pri_perro += 1;
        jugador.inv_ñuñoino += 1;
    } else if (camino == '2') {
        jugador.pri_humano += 1;
        jugador.inv_perkin += 1;
    } else {
        jugador.pri_vínculo += 1;
        jugador.inv_karen += 1;
    }
    //rescatar del storage y pasar a array
    let string_involucramiento = sessionStorage.getItem("jugador_involucramiento");
    let lista_involucramiento = string_involucramiento.split(",");
    let string_prioridad = sessionStorage.getItem("jugador_prioridad");
    let lista_prioridad = string_prioridad.split(",");
    //actualizar valores y pasar a string
    lista_involucramiento[1] = String(Number(lista_involucramiento[1]) + jugador.inv_perkin)
    lista_involucramiento[3] = String(Number(lista_involucramiento[3]) + jugador.inv_karen)
    lista_involucramiento[5] = String(Number(lista_involucramiento[5]) + jugador.inv_ñuñoino)
    string_involucramiento = lista_involucramiento.toString()
    lista_prioridad[1] = String(Number(lista_prioridad[1]) + jugador.pri_humano)
    lista_prioridad[3] = String(Number(lista_prioridad[3]) + jugador.pri_perro)
    lista_prioridad[5] = String(Number(lista_prioridad[5]) + jugador.pri_vínculo)
    string_prioridad = lista_prioridad.toString()
    //devolver al storage
    sessionStorage.setItem("jugador_involucramiento", string_involucramiento)
    sessionStorage.setItem("jugador_prioridad", string_prioridad)
}

//p14_2
function p14_2_puntaje(camino) {
    if (camino == '1') {
        jugador.pri_humano += 1;
        jugador.inv_perkin += 1;
    } else if (camino == '2') {
        jugador.pri_perro += 1;
        jugador.inv_ñuñoino += 1;
    } else {
        jugador.pri_vínculo += 1;
        jugador.inv_karen += 1;
    }
    //rescatar del storage y pasar a array
    let string_involucramiento = sessionStorage.getItem("jugador_involucramiento");
    let lista_involucramiento = string_involucramiento.split(",");
    let string_prioridad = sessionStorage.getItem("jugador_prioridad");
    let lista_prioridad = string_prioridad.split(",");
    //actualizar valores y pasar a string
    lista_involucramiento[1] = String(Number(lista_involucramiento[1]) + jugador.inv_perkin)
    lista_involucramiento[3] = String(Number(lista_involucramiento[3]) + jugador.inv_karen)
    lista_involucramiento[5] = String(Number(lista_involucramiento[5]) + jugador.inv_ñuñoino)
    string_involucramiento = lista_involucramiento.toString()
    lista_prioridad[1] = String(Number(lista_prioridad[1]) + jugador.pri_humano)
    lista_prioridad[3] = String(Number(lista_prioridad[3]) + jugador.pri_perro)
    lista_prioridad[5] = String(Number(lista_prioridad[5]) + jugador.pri_vínculo)
    string_prioridad = lista_prioridad.toString()
    //devolver al storage
    sessionStorage.setItem("jugador_involucramiento", string_involucramiento)
    sessionStorage.setItem("jugador_prioridad", string_prioridad)
}

/* -------------------------------------------------------------------------- */
/*                               Cálculo avatar                               */
/* -------------------------------------------------------------------------- */

function calcular_avatar() {
    //rescatar del storage y pasar a array
    let string_involucramiento = sessionStorage.getItem("jugador_involucramiento");
    let lista_involucramiento = string_involucramiento.split(",");
    let string_prioridad = sessionStorage.getItem("jugador_prioridad");
    let lista_prioridad = string_prioridad.split(",");
    let string_responsabilidad = sessionStorage.getItem("jugador_responsabilidad");
    let lista_responsabilidad = string_responsabilidad.split(",");
    let string_sociabilidad = sessionStorage.getItem("jugador_sociabilidad");
    let lista_sociabilidad = string_sociabilidad.split(",");

    //separar arrays
    // inv
    let perkin = Number(lista_involucramiento[1])
    let karen = Number(lista_involucramiento[3])
    let ñuñoino = Number(lista_involucramiento[5])
    // pri
    let humano = Number(lista_prioridad[1])
    let perro = Number(lista_prioridad[3])
    let vínculo = Number(lista_prioridad[5])
    // res
    let individualista = Number(lista_responsabilidad[1])
    let cuadrado = Number(lista_responsabilidad[3])
    let vegano = Number(lista_responsabilidad[5])
    // soc
    let popular = Number(lista_sociabilidad[1])
    let ermitaño = Number(lista_sociabilidad[3])

    //variables avatar
    let avatar_inv
    let avatar_pri
    let avatar_res
    let avatar_soc

    //CALCULO DE AVATAR
    //  involucramiento: problema de calculo
    if (perkin > karen && perkin > ñuñoino) { //gana perkin
        avatar_inv = "perkin"
    } else if (karen > perkin && karen > ñuñoino) { // gana karen
        avatar_inv = "karen"
    } else if (ñuñoino > karen && ñuñoino > perkin) { // gana ñuñoino
        avatar_inv = "ñuñoíno"
    } else { //empate
        if (karen == perkin && karen == ñuñoino) { //tri empate
            const desempate_inv = random_num(1, 3)
            if (desempate_inv == 1) {
                avatar_inv = "perkin"
            } else if (desempate_inv == 2) {
                avatar_inv = "karen"
            } else { //3
                avatar_inv = "ñuñoíno"
            }
        } else if (karen == ñuñoino && karen !== perkin) { //empate karen ñuñoino
            const desempate_inv = random_num(1, 2)
            if (desempate_inv == 1) {
                avatar_inv = "karen"
            } else {
                avatar_inv = "ñuñoíno"
            }
        } else if (karen == perkin && karen !== ñuñoino) { //empate karen perkin
            const desempate_inv = random_num(1, 2)
            if (desempate_inv == 1) {
                avatar_inv = "karen"
            } else {
                avatar_inv = "perkin"
            }
        } else if (perkin == ñuñoino && karen !== perkin) { //empate perkin ñuñoino
            const desempate_inv = random_num(1, 2)
            if (desempate_inv == 1) {
                avatar_inv = "perkin"
            } else {
                avatar_inv = "ñuñoíno"
            }
        }
    }
    //  prioridad:
    if (humano > perro && humano > vínculo) { //gana humano
        avatar_pri = "humano"
    } else if (perro > humano && perro > vínculo) { // gana perro
        avatar_pri = "perro"
    } else if (vínculo > perro && vínculo > humano) { // gana vínculo
        avatar_pri = "vínculo"
    } else { //empate
        if (humano == perro && humano == vínculo) { //tri empate
            const desempate_inv = random_num(1, 3)
            if (desempate_inv == 1) {
                avatar_pri = "humano"
            } else if (desempate_inv == 2) {
                avatar_pri = "perro"
            } else { //3
                avatar_pri = "vínculo"
            }
        } else if (perro == vínculo && perro !== humano) { //empate perro vinculo
            const desempate_inv = random_num(1, 2)
            if (desempate_inv == 1) {
                avatar_pri = "perro"
            } else {
                avatar_pri = "vínculo"
            }
        } else if (perro == humano && perro !== vínculo) { //empate perro humano
            const desempate_inv = random_num(1, 2)
            if (desempate_inv == 1) {
                avatar_pri = "perro"
            } else {
                avatar_pri = "humano"
            }
        } else if (humano == vínculo && perro !== humano) { //empate humano vinculo
            const desempate_inv = random_num(1, 2)
            if (desempate_inv == 1) {
                avatar_pri = "humano"
            } else {
                avatar_pri = "vínculo"
            }
        }
    }
    //  responsabilidad:
    if (individualista > cuadrado && individualista > vegano) { //gana individualista
        avatar_res = "individualista"
    } else if (cuadrado > individualista && cuadrado > vegano) { // gana cuadrado
        avatar_res = "cuadrado"
    } else if (vegano > cuadrado && vegano > individualista) { // gana vegano
        avatar_res = "vegano"
    } else { //empate
        if (individualista == cuadrado && individualista == vegano) { //tri empate
            const desempate_inv = random_num(1, 3)
            if (desempate_inv == 1) {
                avatar_res = "individualista"
            } else if (desempate_inv == 2) {
                avatar_res = "cuadrado"
            } else { //3
                avatar_res = "vegano"
            }
        } else if (cuadrado == vegano && cuadrado !== individualista) { //empate cuadrado vegano
            const desempate_inv = random_num(1, 2)
            if (desempate_inv == 1) {
                avatar_res = "cuadrado"
            } else {
                avatar_res = "vegano"
            }
        } else if (cuadrado == individualista && cuadrado !== vegano) { //empate cuadrado individualista
            const desempate_inv = random_num(1, 2)
            if (desempate_inv == 1) {
                avatar_res = "cuadrado"
            } else {
                avatar_res = "individualista"
            }
        } else if (individualista == vegano && cuadrado !== individualista) { //empate individualista vegano
            const desempate_inv = random_num(1, 2)
            if (desempate_inv == 1) {
                avatar_res = "individualista"
            } else {
                avatar_res = "vegano"
            }
        }
    }
    //  sociabilidad:
    if (popular > ermitaño) { //gana popular
        avatar_soc = "popular"
    } else if (ermitaño > popular) { // gana ermitaño
        avatar_soc = "ermitaño"
    } else { //empate
        if (popular == ermitaño) {
            const desempate_inv = random_num(1, 2)
            if (desempate_inv == 1) {
                avatar_soc = "popular"
            } else { //2
                avatar_soc = "ermitaño"
            }
        }
    }

    //armar combinación y guardar en sessionStorage
    let avatar = avatar_inv + "," + avatar_pri + "," + avatar_res + "," + avatar_soc
    sessionStorage.setItem("avatar", avatar)

    //verificar
    console.log(avatar_inv);
    console.log(avatar_pri);
    console.log(avatar_res);
    console.log(avatar_soc);
    console.log(avatar);

    //dirigir:
    window.location.assign("pavatar.html");
    /* -------------------------------------------------------------------------- */
    function random_num(min, max) { //habria que darle un valor a cada uno
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } //fuente: https://www.w3schools.com/js/js_random.asp
}

function cargar_avatar() {
    let string_avatar = sessionStorage.getItem("avatar")
    let lista_avatar = string_avatar.split(",")
    string_avatar = String(lista_avatar[0]) + " " + String(lista_avatar[1]) + " " + String(lista_avatar[2]) + " " + String(lista_avatar[3])
    if (lista_avatar[0] == "karen") {
        document.getElementById("text").innerHTML = "¡Eres una " + string_avatar + "!"
    } else {
        document.getElementById("text").innerHTML = "¡Eres un " + string_avatar + "!"
    }
}
// audio

let ventana2 = document.getElementById("ventana2");
let sonido1 = document.getElementById("audio1");

ventana2.onclick = function () {
    sonido1.play();
};










// cuadro de texto

let ventana3 = document.getElementById("ventana3");
let informacionVentana3 = document.getElementById("informacion-ventana3");
let visible3 = false;

ventana3.onclick = function () {
    if(visible3 == true){
        visible3 = false;
    }
    else{
        visible3 = true;
    }

    if(visible3 == true){
        informacionVentana3.style.opacity = "1";
    }
    else{
        informacionVentana3.style.opacity = "0";
    }
    
};


let ventana1 = document.getElementById("ventana1");
let informacionVentana1 = document.getElementById("informacion-ventana1");
let visible1 = false;

ventana1.onclick = function () {
    if(visible1 == true){
        visible1 = false;
    }
    else{
        visible1 = true;
    }

    if(visible1 == true){
        informacionVentana1.style.opacity = "1";
    }
    else{
        informacionVentana1.style.opacity = "0";
    }
    
};


let ventana4 = document.getElementById("ventana4");
let informacionVentana4 = document.getElementById("informacion-ventana4");
let visible4 = false;

ventana4.onclick = function () {
    if(visible4 == true){
        visible4 = false;
    }
    else{
        visible4 = true;
    }

    if(visible4 == true){
        informacionVentana4.style.opacity = "1";
    }
    else{
        informacionVentana4.style.opacity = "0";
    }
    
};



let ventana5 = document.getElementById("ventana5");
let informacionVentana5 = document.getElementById("informacion-ventana5");
let visible5 = false;

ventana5.onclick = function () {
    if(visible5 == true){
        visible5 = false;
    }
    else{
        visible5 = true;
    }

    if(visible5 == true){
        informacionVentana5.style.opacity = "1";
    }
    else{
        informacionVentana5.style.opacity = "0";
    }
    
};


let ventana6 = document.getElementById("ventana6");
let informacionVentana6 = document.getElementById("informacion-ventana6");
let visible6 = false;

ventana6.onclick = function () {
    if(visible6 == true){
        visible6 = false;
    }
    else{
        visible6 = true;
    }

    if(visible6 == true){
        informacionVentana6.style.opacity = "1";
    }
    else{
        informacionVentana6.style.opacity = "0";
    }
    
};


let ventana7 = document.getElementById("ventana7");
let informacionVentana7 = document.getElementById("informacion-ventana7");
let visible7 = false;

ventana7.onclick = function () {
   


   

    if(visible7 == true){
        visible7 = false;
    }
    else{
        visible7 = true;
    }

    if(visible7 == true){
        informacionVentana7.style.opacity = "1";
       
    }
    else{
        informacionVentana7.style.opacity = "0";
        
    }
    
};

//Hora Local 


let elementoHora = document.getElementById("hora");

function actualizarReloj() {
    let ahora = new Date();

    let horas = String(ahora.getHours()).padStart(2, "0");
    let minutos = String(ahora.getMinutes()).padStart(2, "0");
    let segundos = String(ahora.getSeconds()).padStart(2, "0");

    console.log(horas + ":" + minutos + ":" + segundos);

    elementoHora.textContent = horas + ":" + minutos + ":" + segundos;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);


let textoVentana1 = document.getElementById("texto-ventana1");

function actualizarTexto1() {
    let ahora = new Date();
    let horas = ahora.getHours();

    if (horas >= 5 && horas < 8) {
        informacionVentana1.innerHTML =
            "<p><b> Valerie </b> de 18 años está dormida todavía. </p>";
    } 
    else if (horas >= 8 && horas < 12) {
        informacionVentana1.innerHTML =
            "<p><b>Valerie</b> , de 18 años no está en casa, está visitando a su hermana enferma. Tiene gripa.</p>";
    } 
    else if (horas >= 12 && horas < 14) {
        informacionVentana1.innerHTML =
            "<p><b>Valerie</b> de 18 años, se alista para ir a una de sus clases en la universidad. Está escuchando She's Got the Bomb de Billylildove. </p>";
    }

    else if (horas >= 14 && horas < 17) {
        informacionVentana1.innerHTML =
            "<p><b>Valerie</b> de 18 años, no está en casa, está en la universidad.</p>";
    }

        else if (horas >= 17 && horas < 19) {
        informacionVentana1.innerHTML =
            "<p><b>Valerie</b> de 18 años, sale de su clase de la universidad. </p>";
    }

           else if (horas >= 19 && horas < 21) { 
            
        informacionVentana1.innerHTML =
            "<p><b>Valerie</b> , de 18 años, no está en casa, se encuentra tomando Tinto de Verano con  sus amigos.</p>";
    }

               else if (horas >= 21 && horas < 5) {
        informacionVentana1.innerHTML =
            "<p><b>Valerie</b>  de 18 años, se encuentra en su casa por fin, para irse a dormir. </p>";
    }

        
    }


// Ejecutar inmediatamente
actualizarTexto1();

// Volver a comprobar cada minuto
setInterval(actualizarTexto1, 60000);




let textoVentana3 = document.getElementById("texto-ventana3");

function actualizarTexto3() {
    let ahora = new Date();
    let horas = ahora.getHours();

    if (horas >= 5 && horas < 8) {
        informacionVentana3.innerHTML =
            "<p><b> Juan Sebastián </b>, de 21 años, está preparandose para salir a la universidad. Está escuchando In my Life de Los Beatles. </p>";
    } 
    else if (horas >= 8 && horas < 12) {
        informacionVentana3.innerHTML =
            "<p><b> Juan Sebastián </b> , de 21 años no está en su casa, se encuentra en sus clases de Ingeniería Mecánica.</p>";
    } 
    else if (horas >= 12 && horas < 14) {
        informacionVentana3.innerHTML =
            "<p><b> Juan Sebastián </b>, de 21 años, sigue en la universidad. </p>";
    }

    else if (horas >= 14 && horas < 17) {
        informacionVentana3.innerHTML =
            "<p><b>Juan Sebastián</b> de 21 años, no está en su casa, está visitando a su novia.</p>";
    }

        else if (horas >= 17 && horas < 19) {
        informacionVentana3.innerHTML =
            "<p><b>Juan Sebastián</b> de 21 años, está en su casa haciendo trabajos. Está escuchando Oblivion Mighty Thrash de Medallo Bullies .</p>";
    }

           else if (horas >= 19 && horas < 21) {
        informacionVentana3.innerHTML =
            "<p><b>Juan Sebastián</b> , de 21 años, está su casa cenando. Está escuchando Cough Syrup de Young The Giant.</p>";
    }

               else if (horas >= 21 && horas < 5) {
        informacionVentana3.innerHTML =
            "<p><b>Juan Sebastián </b>  de 21 años, está dormido. </p>";
    }

        
    }


// Ejecutar inmediatamente
actualizarTexto3();

// Volver a comprobar cada minuto
setInterval(actualizarTexto3, 60000);



let textoVentana4 = document.getElementById("texto-ventana4");

function actualizarTexto4() {
    let ahora = new Date();
    let horas = ahora.getHours();

    if (horas >= 5 && horas < 8) {
        informacionVentana4.innerHTML =
            "<p><b> Melissa </b> de 20 años, está en su cama porque se siente enferma.  </p>";
    } 
    else if (horas >= 8 && horas < 12) {
        informacionVentana4.innerHTML =
            "<p><b> Melissa </b> , de 20 años, está hablando con Valerie,  su hermana, que la acompaña mientras está enferma. Están escuchando La Ventanita de Sergio Vargas. </p>";
    } 
    else if (horas >= 12 && horas < 14) {
        informacionVentana4.innerHTML =
            "<p><b> Melissa </b> de 20 años, está contemplando pedirse un Rappi porque tiene hambre pero no tiene energía para cocinarse nada. </p>";
    }

    else if (horas >= 14 && horas < 17) {
        informacionVentana4.innerHTML =
            "<p><b> Melissa </b> de 20 años, está comiendo un Sr Wok de Pollo a la naranja con Camarón Dinamita. Está escuchando You Get What You Give de The New Radicals .</p>";
    }

        else if (horas >= 17 && horas < 19) {
        informacionVentana4.innerHTML =
            "<p><b>Melissa</b> de 20 años, está en su cama viendo Tik Tok. </p>";
    }

           else if (horas >= 19 && horas < 21) {
        informacionVentana4.innerHTML =
            "<p><b>Melissa</b> , de 20 años, está llorando porque se acordó de algo triste. Está escuchando Begged de Olivia Rodrigo. </p>";
    }

               else if (horas >= 21 && horas < 5) {
        informacionVentana4.innerHTML =
            "<p><b>Melissa</b>  por fin pudo conciliar el sueño después de tener la nariz tapada.  </p>";
    }

        
    }


// Ejecutar inmediatamente
actualizarTexto4();

// Volver a comprobar cada minuto
setInterval(actualizarTexto4, 60000);


let textoVentana5 = document.getElementById("texto-ventana5");

function actualizarTexto5() {
    let ahora = new Date();
    let horas = ahora.getHours();

    if (horas >= 5 && horas < 8) {
        informacionVentana5.innerHTML =
            "<p><b> Gustavo </b> de 21 años, se despierta temprano para su turno de monitor en la universidad.  </p>";
    } 
    else if (horas >= 8 && horas < 12) {
        informacionVentana5.innerHTML =
            "<p><b> Gustavo </b> , de 21 años, está en su turno de monitoría en la universidad. </p>";
    } 
    else if (horas >= 12 && horas < 14) {
        informacionVentana5.innerHTML =
            "<p><b>Gustavo </b> de 21 años, está en la universidad,  almorzando pastica que le prepararon en la casa.  </p>";
    }

    else if (horas >= 14 && horas < 17) {
        informacionVentana5.innerHTML =
            "<p><b> Gustavo</b>  de 21 años, está en la universidad en su clase de Sonido en Vivo. </p>";
    }

        else if (horas >= 17 && horas < 19) {
        informacionVentana5.innerHTML =
            "<p><b>Gustavo</b> de 21 años, está atrapado en un trancón para llegar a su casa.</p>";
    }

           else if (horas >= 19 && horas < 21) {
        informacionVentana5.innerHTML =
            "<p><b>Gustavo</b> de 21 años, llega a la casa a cenar sudado de pollo. Está escuchando Fire Fly de Childish Gambino.</p>";
    }

               else if (horas >= 21 && horas < 5) {
        informacionVentana5.innerHTML =
            "<p><b>Gustavo</b>   de 21 años, está trasnochandose para su entrega de mañana. Está escuchando Aire de Paco Amoroso. </p>";
    }

        
    }


// Ejecutar inmediatamente
actualizarTexto5();

// Volver a comprobar cada minuto
setInterval(actualizarTexto5, 60000);




let textoVentana6 = document.getElementById("texto-ventana6");

function actualizarTexto6() {
    let ahora = new Date();
    let horas = ahora.getHours();

    if (horas >= 5 && horas < 8) {
        informacionVentana6.innerHTML =
            "<p><b> Mariana </b> de 21 años está dormida todavía. </p>";
    } 
    else if (horas >= 8 && horas < 12) {
        informacionVentana6.innerHTML =
            "<p><b> Mariana </b> , de 21 años no está en casa, está haciendo ejercicio en el gimnasio. </p>";
    } 
    else if (horas >= 12 && horas < 14) {
        informacionVentana6.innerHTML =
            "<p><b> Mariana </b> de 21 años, se alista para ir a una de sus clases en la universidad. Está escuchando Cuatro Babys de Mauluma. </p>";
    }

    else if (horas >= 14 && horas < 17) {
        informacionVentana6.innerHTML =
            "<p><b> Mariana </b> de 21 años, no está en casa, está en la universidad en su clase de psicología.</p>";
    }

        else if (horas >= 17 && horas < 19) {
        informacionVentana6.innerHTML =
            "<p><b> Mariana </b> de 21 años, se dirige a su casa a descansar.</p>";
    }

           else if (horas >= 19 && horas < 21) {
        informacionVentana6.innerHTML =
            "<p><b> Mariana </b> , de 21 años, se encuentra preparando ramen para cenar. Está escuchando Nuestro Sueño del Grupo Niche. </p>";
    }

               else if (horas >= 21 && horas < 5) {
        informacionVentana6.innerHTML =
            "<p><b> Mariana </b>  de 21 años, está dormida. </p>";
    }

        
    }


// Ejecutar inmediatamente
actualizarTexto6();

// Volver a comprobar cada minuto
setInterval(actualizarTexto6, 60000);


let textoVentana7 = document.getElementById("texto-ventana7");

function actualizarTexto7() {
    let ahora = new Date();
    let horas = ahora.getHours();

    if (horas >= 5 && horas < 8) {
        informacionVentana7.innerHTML =
            "<p><b> Isabel </b> de 21 años está dormida. </p>";
    } 
    else if (horas >= 8 && horas < 12) {
        informacionVentana7.innerHTML =
            "<p><b> Isabel </b> , de 21 años no está en casa, está en la universidad en su clase de Música.</p>";
    } 
    else if (horas >= 12 && horas < 14) {
        informacionVentana7.innerHTML =
            "<p><b> Isabel </b> de 21 años, está en su casa almorzarzando nuggets. Está escuchando You're So Vain de Carly Simon.</p>";
    }

    else if (horas >= 14 && horas < 17) {
        informacionVentana7.innerHTML =
            "<p><b> Isabel </b> de 21 años, está en el estudio de grabación de la universidad, mezclando para una entrega que tiene mañana.</p>";
    }

        else if (horas >= 17 && horas < 19) {
        informacionVentana7.innerHTML =
            "<p><b> Isabel </b> de 21 años, sigue mezclando en el estudio de grabación de la universidad. </p>";
    }

           else if (horas >= 19 && horas < 21) {
        informacionVentana7.innerHTML =
            "<p><b> Isabel </b> , de 21 años, no está en casa, está cenando en Hornitos.</p>";
    }

               else if (horas >= 21 && horas < 5) {
        informacionVentana7.innerHTML =
            "<p><b> Isabel </b>  de 21 años, está viendo Sex in the City. </p>";
    }

        
    }


// Ejecutar inmediatamente
actualizarTexto7();

// Volver a comprobar cada minuto
setInterval(actualizarTexto7, 60000);



//AUDIOS 

let valeaudio1 = document.getElementById("vale-audio1");
let valeaudio2 = document.getElementById("vale-audio2");
let valeaudio3 = document.getElementById("vale-audio3");


document.getElementById("ventana1").addEventListener("click", reproducirAudio1);

function reproducirAudio1 ()  {

        let ahora = new Date();
    let horas = ahora.getHours();


    if (horas >= 12 && horas < 14 ) {

        if (valeaudio2.paused){
            valeaudio2.play();
        } else {
            valeaudio2.pause()
            valeaudio2.currentTime = 0;
        }
    }



}

let juanseaudio1 = document.getElementById("js-audio1");
let juanseaudio2 = document.getElementById("js-audio2");
let juanseaudio3 = document.getElementById("js-audio3");


document.getElementById("ventana3").addEventListener("click", reproducirAudio3);

function reproducirAudio3 ()  {

        let ahora = new Date();
    let horas = ahora.getHours();

    if (horas >= 5 && horas < 8) {
       
        if (juanseaudio1.paused) {
            juanseaudio1.play();
        } else {
            juanseaudio1.pause();
            juanseaudio1.currentTime = 0;
        }
       
    }
    else if (horas >= 17 && horas < 19 ) {

        if (juanseaudio2.paused){
            juanseaudio2.play();
        } else {
            juanseaudio2.pause()
            juanseaudio2.currentTime = 0;
        }
    }

    else if (horas >=19 && horas <21){
         if (juanseaudio3.paused){
            juanseaudio3.play();
        } else {
            juanseaudio3.pause()
            juanseaudio3.currentTime = 0;
        }

    }

}

let meliaudio1 = document.getElementById("meli-audio1");
let meliaudio2 = document.getElementById("meli-audio2");
let meliaudio3 = document.getElementById("meli-audio3");


document.getElementById("ventana4").addEventListener("click", reproducirAudio4);

function reproducirAudio4 ()  {

        let ahora = new Date();
    let horas = ahora.getHours();

    if (horas >= 8 && horas < 12) {
       
        if (meliaudio1.paused) {
            meliaudio1.play();
        } else {
            meliaudio1.pause();
            meliaudio1.currentTime = 0;
        }
       
    }
    else if (horas >= 14 && horas < 17 ) {

        if (meliaudio2.paused){
            meliaudio2.play();
        } else {
            meliaudio2.pause()
            meliaudio2.currentTime = 0;
        }
    }

    else if (horas >= 19 && horas < 21) {
         if (meliaudio3.paused){
            meliaudio3.play();
        } else {
            meliaudio3.pause()
            meliaudio3.currentTime = 0;
        }

    }

}

let gusaudio1 = document.getElementById("gus-audio1");
let gusaudio2 = document.getElementById("gus-audio2");
let gusaudio3 = document.getElementById("gus-audio3");


document.getElementById("ventana5").addEventListener("click", reproducirAudio5);

function reproducirAudio5 ()  {

        let ahora = new Date();
    let horas = ahora.getHours();

    if (horas >= 6 && horas < 12) {
       
        if (gusudio1.paused) {
            gusaudio1.play();
        } else {
            gusaudio1.pause();
            gusaudio1.currentTime = 0;
        }
       
    }
    else if (horas >= 19 && horas < 21 ) {

        if (gusaudio2.paused){
            gusaudio2.play();
        } else {
            gusaudio2.pause()
            gusaudio2.currentTime = 0;
        }
    }

    else if (horas >= 21 && horas < 5) {
         if (gusaudio3.paused){
            gusaudio3.play();
        } else {
            gusaudio3.pause()
            gusaudio3.currentTime = 0;
        }

    }

}

let mariaudio1 = document.getElementById("mari-audio1");
let mariaudio2 = document.getElementById("mari-audio2");
let mariaudio3 = document.getElementById("mari-audio3");


document.getElementById("ventana6").addEventListener("click", reproducirAudio6);

function reproducirAudio6 ()  {

        let ahora = new Date();
    let horas = ahora.getHours();

    if (horas >= 19 && horas < 21) {
       
        if (mariaudio1.paused) {
            mariaudio1.play();
        } else {
            mariaudio1.pause();
            mariaudio1.currentTime = 0;
        }
       
    }
    else if (horas >= 12 && horas < 14 ) {

        if (mariaudio2.paused){
            mariaudio2.play();
        } else {
            mariaudio2.pause()
            mariaudio2.currentTime = 0;
        }
    }



}



let Isabelaudio1 = document.getElementById("isa-audio1");
let Isabelaudio2 = document.getElementById("isa-audio2");


document.getElementById("ventana7").addEventListener("click", reproducirAudio7);

function reproducirAudio7 ()  {

        let ahora = new Date();
    let horas = ahora.getHours();

    if (horas >= 21 && horas < 5) {
       
        if (Isabelaudio1.paused) {
            Isabelaudio1.play();
        } else {
            Isabelaudio1.pause();
            Isabelaudio11.currentTime = 0;
        }
       
    }
    else if (horas >= 12 && horas < 14 ) {

        if (Isabelaudio2.paused){
            Isabelaudio2.play();
        } else {
            Isabelaudio2.pause()
            Isabelaudio2.currentTime = 0;
        }
    }

}



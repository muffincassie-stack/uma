//Pantalla de Carga
window.addEventListener('load', function() {
    const loader = document.getElementById("loader-wrapper");

// Esperar 3 segundos antes de empezar a ocultarlo
    setTimeout(function() {
// Efecto de desvanecimiento suave
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";
        // Quitar despues desvanecimiento
        setTimeout(function() {
            loader.style.display = "none";
        }, 500); 
    }, 3000); //3 segundos
});

//video de YouTube modal
document.addEventListener('DOMContentLoaded', function() {
    var myModalEl = document.getElementById('youtubeModal');
    if (myModalEl) {
        myModalEl.addEventListener('hidden.bs.modal', function () {
            var iframe = document.getElementById('videoIframe');
            if (iframe) {
                var src = iframe.src;
                iframe.src = ""; 
                iframe.src = src; 
            }
        });
    }
});
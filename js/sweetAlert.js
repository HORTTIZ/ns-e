const noiseSong = document.getElementById('noise');
onNoise.addEventListener('click', function () {
    Swal.fire({
        title: '<h1 font-size="20px">🎧</h1>',
        text: 'El brown noise es un sonido envolvente que se mueve en graves frecuencias transmitiendo calma y concentración, ideal para estudiar.',
        footer: 'Conoce más acerca del ruido marrón...<a href="https://35mm.es/ruido-marron/">aquí</a>',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#fa5454',
        confirmButtonText: '¡Quiero concentrarme!',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            setTimeout(function ruidoBrown() {
                noiseSong.currentTime = 0;
                noiseSong.volume = 1.0;
                noiseSong.play();
            }, 1000);
        } else if (result.dismiss){
            setTimeout(function volumen(){
                noiseSong.pause();
                noiseSong.currentTime = 0;
            });
        }
    })
});
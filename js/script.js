const btnUser = document.getElementById('imgProfile');

/* EVENTOS*/
btnUser.addEventListener('click', function() {
    Swal.fire({
        title: 'Propiedad',
        text: 'La Aplicación Web y sus contenidos son diseñados, operados y administrados por, Horttiz, por ende toda propiedad industrial o intelectual, usados y/o desplegados aquí son propiedad exclusiva de HORTTIZ',
        width: '90%',
        showDenyButton: false,
        showCancelButton: false,
        showConfirmButton: true,
        allowOutsideClick: false,
        confirmButtonColor: '#ff213c',
        imageUrl: 'imgs/brand/logo/logoMainBig.png',
        footer: 'Cualquier uso no autorizado constituirá una violación a las normas vigentes nacionales e internacionales sobre propiedad industrial y/o derechos de autor según corresponda',
    })
});
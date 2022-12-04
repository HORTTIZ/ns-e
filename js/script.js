const containerMain = document.getElementById('container-main');
setTimeout(function carga (){
    loader.style.opacity = '1';
    loader.style.zIndex = '999';
    loader.style.display = 'grid';
}, 1);

window.addEventListener("load", function(event) {
    contenedor.style.display = 'none';
    loader.style.zIndex = '-999';
    loader.style.display = 'none';
    containerLoad.style.display = 'none';
});

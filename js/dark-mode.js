document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#sidebar").classList.toggle("dark-mode-sidebar");
    document.querySelector("#main").classList.toggle("dark-mode");
    document.querySelector("#button").classList.toggle("mudar-icone");
    document.querySelector("#cabecalho").classList.toggle("dark-cabecalho");
    document.querySelector("#balao").classList.toggle("dark-cabecalho");
    document.querySelector("#balao-dois").classList.toggle("dark-cabecalho");
    document.querySelector("#balao-tres").classList.toggle("dark-cabecalho");
    document.querySelector("#rodape").classList.toggle("dark-titulo")

})
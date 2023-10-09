function login(){
    var salvar_jogador1=document.getElementById("jogador1").value
    var salvar_jogador2=document.getElementById("jogador2").value
    localStorage.setItem("salvar_jogador1", salvar_jogador1)
    localStorage.setItem("salvar_jogador2", salvar_jogador2)
    window.location="new_index.html"
}
function addPlayer() {
    const posicao = document.getElementById('posicao').value
    const nome = document.getElementById('nome').value
    const numero = document.getElementById('numero').value

    const confirmacao = confirm("Deseja confirmar?")

    if(confirmacao){
        const timeEscalado = document.getElementById('time')
        const jogador = document.createElement('li')
        jogador.id = "jogador-" + numero
        jogador.innerText = posicao + ": " + nome + " (" + numero + ")"
        timeEscalado.appendChild(jogador)
    }

    document.getElementById('posicao').value = ""
    document.getElementById('nome').value = ""
    document.getElementById('numero').value = ""
}

function removePlayer(){
    const numeroRemover = document.getElementById('numeroRemover').value
    const jogadorParaRemover = document.getElementById("jogador-" + numeroRemover)

    const confirmacaoo = confirm("Remover o jogador?")

    if(confirmacaoo){
        document.getElementById("time").removeChild(jogadorParaRemover)
    }
    document.getElementById('numeroRemover').value = ""
}
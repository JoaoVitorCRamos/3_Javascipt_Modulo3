function addJogador(){
    const posicao = document.getElementById('posicao').value
    const nome = document.getElementById('jogador').value
    const numero = document.getElementById('numero').value

    const confirmacao = confirm('Deseja adicionar Jogador?\nCamisa: ' + numero + '\nNome: ' + nome + '\nPosição: ' + posicao )

    if(confirmacao){
        const conectUl = document.getElementById('time')
        const novoLi = document.createElement('li')
        novoLi.innerText = 'Camisa: ' + numero + '\nNome: ' + nome + '\nPosição: ' + posicao
        novoLi.id ='jogador.'+ numero
        conectUl.appendChild(novoLi)
    }

    document.getElementById('posicao').value = ''
    document.getElementById('jogador').value = ''
    document.getElementById('numero').value = ''
}

function removeJogador(){
    const numeroRemover = document.getElementById('numeroRemover').value

    const confirmacao = confirm('Deseja remover jogador numero: ' + numeroRemover)
    if(confirmacao){
        document.getElementById('time').removeChild(document.getElementById('jogador.' + numeroRemover)) 
    }
    
    document.getElementById('numeroRemover').value = ''
}
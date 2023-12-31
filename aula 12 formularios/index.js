const form = document.getElementById("orderForm")

form.addEventListener('submit', function(ev){

    ev.preventDefault() //<------------- usar para previnir erro na atualizaçao

    const name = document.getElementById('name').value
    const address = document.querySelector('input[name = "address"]').value
    const breadType = document.querySelector('select[name = "breadType"]').value
    const main = document.querySelector('input[name = "main"]').value
    const observations = document.querySelector("textarea[name='observations']").value

    let salad = ""
    document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
      salad += " - " + item.value + "\n"
    })

    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations
      })
    
    document.getElementById('name').value = ""
    document.querySelector('input[name = "address"]').value = ""
    document.querySelector('select[name = "breadType"]').value = ""
    document.querySelector('input[name = "main"]').value = ""
    document.querySelector("textarea[name='observations']").value = ""

    alert(
        "Pedido Realizado!" +
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo de pão: " + breadType +
        "\nRecheio: \n - " + main + "\n" + salad +
        "Observações: " + observations
    )
    
})
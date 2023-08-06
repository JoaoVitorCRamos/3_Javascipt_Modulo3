function register(ev) {
    console.log(ev)
    console.log(ev.currentTarget)
    console.log(ev.currentTarget.parentNode)
    // const sectionElement = ev.currentTarget.parentNode
    const username = ev.currentTarget.parentNode.children.username.value
    const password = ev.currentTarget.parentNode.children.password.value
    const passwordConfirmation = ev.currentTarget.parentNode.children.passwordConfirmation.value
  
    if (password === passwordConfirmation) {
      alert("Usuário " + username + " registrado!")
    } else {
      alert("As senhas não conferem")
    }
  }
  
  function removeEvent() {
    button.removeEventListener("click", register)
    alert("Evento Removido")
  }
  
  const button = document.getElementById("register-button")
  
  button.addEventListener("click", register)
  
  button.addEventListener("mouseover", function (ev) {
    console.log(ev)
  })
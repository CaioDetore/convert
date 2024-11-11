const amount = document.getElementById('amount')

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g // regex para ver se tem character
  amount.value = amount.value.replace(hasCharacterRegex, "")
})
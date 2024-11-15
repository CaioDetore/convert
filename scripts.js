// cotação de moedas
// usar letras maiusculas para referencias
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector("main footer")
const description = document.getElementById('description')
const result = document.getElementById('result')

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g // regex para ver se tem character
  amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    
    let total = amount * price

    if (isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter.")
    }

    total = formatCurrencyBRL(total).replace("R$", "")
    
    // Exibe o resultado total
    result.textContent = `${total} Reais`

    // Adiciona a classe que exibe o footer
    footer.classList.add("show-result")
  } catch (error) {
    // Remove a classe que exibe o footer
    footer.classList.remove("show-result")
    
    console.error(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

// Formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
  // converte para número para usar o toLocaleString
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
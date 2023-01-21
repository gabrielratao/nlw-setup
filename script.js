const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

//botão de adcionar um dia atraves de função
//dentro do header tem o button
const button = document.querySelector('header button')

//adciona um "ouvidor" de evento
//sempre qnd clicar ele vai ouvir o evento de click  ARGUMENTO 1
//e oq ele vai fazer (função) sempre que ouvir o click ARGUMENTO 2
button.addEventListener("click", add)

//qnd o form la do html for alterado iremos salvar
form.addEventListener("change", save)

//criando a tal função que ele vai fazer qnd "ouvir" o click
function add(){  //se a função encontrar o return ela para o codigo e sai
  //alert('bota clicado!')

  //verificar se o dia ja existe
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)  //pegar o dia atual automatico
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists){
    alert("Dia já incluso")
    return  //sai da função e nao executa oq esta abaixo 
  }

  nlwSetup.addDay(today)
}

//agora, vamos fazer com que os dados nao sejam perdidos quando se atualiza a página
function save(){
  //nlwSetup.data    armazena todos os dados 
  //console.log(nlwSetup.data) //mostra no console os dados que estao sendo criados

  //salvando os dados no navegador em formato de string:
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}
//carregar os dados ja salvos e transformar em objeto
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //se nao tiver nenhum dado (1o acesso) ele vai gerar um objeto vazio

nlwSetup.setData(data)
nlwSetup.load()



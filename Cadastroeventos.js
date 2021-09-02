// Validando data do evento
// Parte-se de uma lista de datas em formato string (Mês/Dia/Ano) como entrada
// o código transforma as datas string para permitir a comparação  
// e diz em quais casos o evento pode ser cadastrado, retornando a data no formato Dia/Mês/Ano

let hoje = new Date("09/01/2021")
let eventos = ["08/31/2021", "12/31/2021", "01/01/2020","03/20/1990","06/19/1988", "09/01/2021", "11/15/2021"]  
let eventodata = 0        // variável utilizada possibilitar comparação data evento - hoje
let dia = 0               // utilizado para formatar data na saída
let mes = 0               // utilizado para formatar data na saída  
let ano = 0               // utilizado para formatar data na saída

for (let index = 0; index < eventos.length; index++) {
    const evento = eventos[index]
    dia = evento.split("/")[1]
    mes = evento.split("/")[0]
    ano = evento.split("/")[2]
    eventodata = new Date(evento)
    if (eventodata > hoje) {
        console.log(dia + "/" + mes + "/" + ano + " Data válida, evento será cadastrado!")
    } else {
        console.log(dia + "/" + mes + "/" + ano + " Data inválida, evento NÃO será cadastrado!")
    }    
}
console.log()

// Validando idade de participante (idade de corte = 18 anos)
// Partindo de uma lista de idades que seriam fornecidas pelos usuários 
// o programa mostra em quais casos o cadastro será permitido

let idadesParticipantes = [30, 18, 5, 51, 12]
for (let index = 0; index < idadesParticipantes.length; index++) {
    const idade = idadesParticipantes[index];
    if (idade >= 18) {
        console.log(idade + "," + " Idade Válida, o participante será cadastrado!")
    } else{
        console.log(idade + "," + " Idade inválida, o participante Não será cadastrado!")
    }    
} 

// Listando Participantes
// Uma lista inicial é utilizada como dado de entrada

let participantes = ["Ricardo", "André", "Lucas", "Marina", "Luciana", "Hermano", "Katia", "Virginia", "Andressa"]
let contador = 0
console.log()
console.log("A lista de participantes é:")
while (contador < participantes.length) {
    console.log(participantes[contador])
    contador++
}
// Quantidade de participantes
// a quantidade será incrementada a partir de 90 até atingir o limite de 
// 100, nesse ponto o programa alerta o usuário para o limite atingido. 

quantidadesDeParticipantes = 90
console.log()
while (quantidadesDeParticipantes < 100) {
    console.log("Cadastro efetuado, " + quantidadesDeParticipantes + " participantes no evento.")
    quantidadesDeParticipantes++
}
if (quantidadesDeParticipantes >=100) {
    console.log("Desculpe, não é possível cadastrar, limite de participantes atingido.")
} 
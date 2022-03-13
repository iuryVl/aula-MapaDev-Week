/*
qunado clicar na caminhonete da listagem, temos que esconder o cartão da caminhonete aberto e mostrar o cartão que foi selecionado na listagem

para isso, vamos precisar trabalhar com dois elementos
1-listagem
2-cartão caminhonete

precissamos criar duas variaveis no JavaScript para trabalhar com os elementos da tela

vamos precisar trbalhar com um elemento de clique feito pelo usuario na listagem

-remover a classe aberto somento do cartão que estiver aberto
-ao clicar em uma caminhonete da listagem pegamos o id da caminhonete para saber qual cartão mostrar
-remover a classe ativa que marca a caminhonete selecionada
-adicionar a classe ativo no item selecionado
*/

//precisamos criar duas variaveis JavaScript para trabalhar com os elementos da tela
const listaSelecaoCaminhonete = document.querySelectorAll('.caminhonete')
const caminhoneteCard = document.querySelectorAll('.cartao-caminhonete')
console.log(caminhoneteCard)

listaSelecaoCaminhonete.forEach(caminhonete => {
    //vamos precisar trbalhar com um elemento de clique feito pelo usuario na listagem
    caminhonete.addEventListener('click', () => {
        const cartaoCaminhoneteAberto = document.querySelector('.aberto')
        cartaoCaminhoneteAberto.classList.remove('aberto')

        const idCaminhoneteSelecionada = caminhonete.attributes.id.value
        
        const idDoCartaoCaminhoneteParaAbrir = 'cartao-' + idCaminhoneteSelecionada
        const cartaoCaminhoneteParaAbrir = document.getElementById(idDoCartaoCaminhoneteParaAbrir)
        cartaoCaminhoneteParaAbrir.classList.add('aberto')


        //remover a classe ativa que marca a caminhonete selecionada
        const caminhoneteAtivaNaListagem = document.querySelector('.ativo')
        caminhoneteAtivaNaListagem.classList.remove('ativo')

        const caminhoneteSelecionadaNaListagem = document.getElementById(idCaminhoneteSelecionada)
        caminhoneteSelecionadaNaListagem.classList.add('ativo')
    })
})

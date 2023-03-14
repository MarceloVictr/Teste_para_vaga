function showResults(resultado) {
    const body = document.getElementById('root')
    const div = document.createElement('div')
    div.innerText = `${resultado}`
    body.appendChild(div)
    

}
/*        Primeito                         */
function teste1(){

    let indice = 13; let soma = 0; let K = 0;
    while (K < indice) 
    {
        K += 1
        soma += K
    }
    return soma
}
showResults(teste1)
showResults('A resposta é 1:')
showResults(teste1())
    
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------
        Segundo Teste  */
function fibonacci(number = 20){

    let N = []
    N[0] = 0
    N[1] = 1
    for (let i = 2; i < number; i++) {
        N[i] = N[i - 2] + N[i -1]
    }
    return N.toString()
}
showResults(fibonacci)
showResults('A resposta é:')
showResults(fibonacci())

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------
        Terceiro Teste  */
showResults("Resposta 3")
showResults(" a) 9 b) 128 c) 49 d) 100 e) 13 f) 20 ")
  
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------
        Quarto Teste  */
showResults("Resposta 4")
showResults("Ambos estarão à mesma distância de Ribeirão Preto, já que é considerado o momento em que se cruzam, ou seja, estão no mesmo ponto da estrada. ")

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------
        Quinto Teste  */
function reverse(string) {
    var output = '',
        length = string.length
    while (length--) {
        output+= string[length]
    }
    return output
}
showResults(reverse)
showResults("A resposta é 5")
showResults(reverse(''))
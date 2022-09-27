let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []  //vetor

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) { //diferente, não encontrado
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option') //retorno visual
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item) //add na lista
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado')
    }
    num.value = '' //limpa a caixa numero
    num.focus() //cursor piscar s/ clique
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores')
    } else {
        let tot = valores.length //quantidade
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {  //laço de percurso
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números</p>` //concatenação
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média é ${media}</p>`
    }
}
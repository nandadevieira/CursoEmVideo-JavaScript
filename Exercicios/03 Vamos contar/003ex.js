function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('[ERRO] Considere PASSO 1')
        }
        if (i < f) { //crescente
            for(let c = i; c <= f; c += p) { //inicialização; teste lógico; incremento
                res.innerHTML += ` ${c} \u{1F603}` //+= concatenação, \u emoji
            }
            res.innerHTML += `\u{1F3C1}`
        } else { //regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F603}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
        
    }
}














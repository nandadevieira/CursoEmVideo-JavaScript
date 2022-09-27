function verificar() {
   
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //formulário
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique')
    } else {
        var fsex = document.getElementsByName('radsex') //plural
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos.`
    }
}
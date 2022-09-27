function tabuada () {
    let num = document.getElementById('txtnum') //caixa do número
    let tab = document.getElementById('tab') //resposta tabuada

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
        
    } else {
        let n = Number(num.value) //valor txtnum
        let c = 1
        tab.innerHTML = '' //limpar input num <select>
        while (c <= 10) { 
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++ //tem que ter o incremento
        }
    }
}
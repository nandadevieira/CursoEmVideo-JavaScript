var idade = 22
if (idade < 18) {
    console.log(`Menor de idade`)
} else {
    console.log(`Maior de idade`)
}

var idade = 100
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não vota`)
} else {
    if (idade < 18 || idade > 65) {  //if  (idade >= 16 && idade <= 18) {
        console.log(`Voto opcional`)
    } else { //implícito
        console.log(`Voto obrigatório`)
    }
    
}

var hora = 4
console.log(`Agora são ${hora} horas.`)
if (hora >= 6 && hora <= 12) {
    console.log(`Bom dia!`)
} else if (hora > 0 && hora < 6) {
    console.log(`Boa madrugada!`)
} else if (hora >= 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
} 

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora >= 6 && hora <= 12) {
    console.log(`Bom dia!`)
} else if (hora <= 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}
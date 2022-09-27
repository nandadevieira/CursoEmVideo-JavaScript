/*let num = [5, 8, 2, 9]
num[4] = 8 //num.push() cria novo elemento
console.log(`Vetor é o ${num}`)

let num = [5, 8, 2, 9, 3]
num.push(1) //-----acrescenta um vetor
num.sort() //-----coloca em ordem
console.log(num)  //-----mostra os valores
console.log(`O vetor tem ${num.length} posições`) //-----quantidade de vetor
console.log(num[0]) //-----mostra a posição
console.log(`O primeiro valor do vetor é ${num[0]}`)

let valores = [5, 8, 2, 9, 3, 4]
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}
*/
let valores = [5, 8, 2, 9, 3, 4]
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let num = [5, 8, 2, 9, 3]
let pos = num.indexOf(7) //-----buscar
if(pos == -1) { //-----valor não encontrado -1
    console.log(`Valor não encontrado`)
} else {
    console.log(`${pos}`)
}
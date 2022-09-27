let amigo = { nome: 'jose', 
sexo: 'm', 
peso: 85, 
engordar(p) {
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(4)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
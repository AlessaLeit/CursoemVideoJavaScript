let num = [5, 8, 2, 9, 3]
num.push(1) //Se essa linha vier depois do num.sort() ele n vai ser arrumado 
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`Não foi possível encontrar o valor`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
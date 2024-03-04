function calcular() {
    let number = window.prompt("Digite uma distância em metros (m) \n(Por favor, se sua medida for quebrada use o ponto no lugar da vírgula!)")
    let n = Number.parseFloat(number)
    let km = n / 1000
    let hm = n / 100
    let dam = n / 10
    let dm = n * 10
    let cm = n * 100
    let mm = n * 1000
    
    res.innerHTML = `A distância de ${n} metros, corresponde a... <br>`
    res.innerHTML += `${km} quilômetros (Km)<br>`
    res.innerHTML += `${hm} hectômetros (Hm)<br>`
    res.innerHTML += `${dam} decâmetros (Dam)<br>`
    res.innerHTML += `${dm} decímetros (dm)<br>`
    res.innerHTML += `${cm} centímetros (cm)<br>`
    res.innerHTML += `${mm} milímetros (mm)<br>`
}
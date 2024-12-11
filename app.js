function info() {
    let price = 0
    let group_size = 0
    
    price = parseFloat(document.getElementById('price').value)
    group_size = parseInt(document.getElementById('group-size').value)

    return {
        price,
        group_size
    }
}

function finalCheck(price, group_size, tip) {
    
    return `O valor da gorjeta condizente com o atendimento foi de: ${(price * tip).toFixed(2)}\n\nO valor total com a gorjeta foi de: ${(price + (price * tip)).toFixed(2)}\n\nO valor total separado incluindo a gorjeta foi de: ${((price + (price * tip)) / group_size).toFixed(2)}\n\n Obrigado pela preferência, volte sempre!`
}

function all(tip) {
    const getinfo = info()

    if (getinfo.price < 0 || getinfo.group_size < 0) {
        return "Tente novamente, esse cálculo não é possível."

    } else {

        const finalcheck = finalCheck(getinfo.price, getinfo.group_size, tip)

        alert(finalcheck)
    }
}




const imgreally_bad = document.getElementById('imgreally-bad')
const imgbad = document.getElementById('imgbad')
const imgneutral = document.getElementById('imgneutral')
const imggood = document.getElementById('imggood')
const imgvery_good = document.getElementById('imgvery-good')

imgreally_bad.addEventListener('click', (prevent) => {
    prevent.preventDefault()
    let tip = 0
    all(tip)
})

imgbad.addEventListener('click', (prevent) => {
    prevent.preventDefault()
    let tip = 0
    all(tip)
})

imgneutral.addEventListener('click', (prevent) => {
    prevent.preventDefault()
    let tip = 6 / 100 
    all(tip)
})

imggood.addEventListener('click', (prevent) => {
    prevent.preventDefault()
    let tip = 8 / 100
    all(tip)
})

imgvery_good.addEventListener('click', (prevent) => {
    prevent.preventDefault()
    let tip = 10 / 100 
    all(tip)
})







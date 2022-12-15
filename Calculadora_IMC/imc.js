
 const imc = document.querySelector(' .calc').addEventListener('click',()=>{
    const name = document.getElementById('name').value
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const result = document.getElementById('result')
    parseFloat(height)
    parseFloat(weight)
    
    if (name !== '' && height !=='' && weight !==''){
        const imcResult = (weight / (height * height)).toFixed(2)

        let stage = ''
        
        if( imcResult < 18.5){
            stage = 'abaixo do peso.'

        } else if (imcResult < 25){
            stage = 'no peso ideal. Excelente!'
        } else if (imcResult < 30){
            stage = 'acima do peso'
        } else if (imcResult < 35){
            stage = 'com obesidade grau I'
        } else if (imcResult < 40){
            stage = 'com obesidade grau II'
        }else {
            stage = 'com obesidade grau III'
        }

        result.textContent = `Prezado(a) ${name} seu IMC é ${imcResult} e você está ${stage}`
        console.log(result)
    } else {
        result.textContent = 'Preencha todos os campos'
    }
})


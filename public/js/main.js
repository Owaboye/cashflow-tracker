const selectEl = document.getElementById('type')
let expPurpose = document.getElementById('exp-purpose')
let incomeSource = document.getElementById('incomeSource')
    

// const sourceClass = sourceEl.classList
// const purposeClass = purposeEl.classList

selectEl.addEventListener('change', function(){
    const type = selectEl.value
    const sourceEl = incomeSource.parentElement
    const purposeEl = expPurpose.parentElement
    if(type === ''){
        
    }else{
        if(type === 'Income'){
            if(purposeEl.classList.contains('show')){
                purposeEl.classList.remove('show')
                purposeEl.classList.add('hide')
            }
            sourceEl.classList.remove('hide')
            sourceEl.classList.add('show')
        }else{
            if(sourceEl.classList.contains('show')){
                sourceEl.classList.remove('show')
                sourceEl.classList.add('hide')
            }
            purposeEl.classList.remove('hide')
            purposeEl.classList.add('show') 
        }
    }
    
})

// selectEl.addEventListener('change', function(){
//     if(type === 'Expenses'){
        
//         // if(purposeClass.contains('hide')){
//         //     console.log(purposeClass)
//             purposeEl.classList.remove('hide')
//             purposeEl.classList.add('show')
//             sourceEl.classList.add('hide')
//         // }
       
//     }
// })
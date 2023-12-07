const p = document.getElementById('plus')


p.addEventListener('click', ()=> {
    console.log('click')
    const e = document.getElementById('one')
    if(e.classList.contains('hidden')){
        p.src = './assets/images/icon-minus.svg'
        e.classList.remove('hidden')
    } else {
        e.classList.add('hidden')
        p.src = './assets/images/icon-plus.svg'
    }
    
})

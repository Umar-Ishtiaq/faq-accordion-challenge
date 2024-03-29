const plus = document.querySelectorAll('.plus')

plus.forEach(image => {
    image.addEventListener('click', ()=> {
        const id = image.id
        const e = document.querySelector(`p#${id}`)
    if(e.classList.contains('hidden')){
        image.src = './assets/images/icon-minus.svg'
        e.classList.remove('hidden')
    } else {
        e.classList.add('hidden')
        image.src = './assets/images/icon-plus.svg'
    }
    })
})

/* plus.forEach(image => {
    image.addEventListener('click', ()=> {
        const id = image.id
        const e = document.querySelector(`p#${id}`)
    if(e.classList.contains('active')){
        image.src = './assets/images/icon-plus.svg'
        e.classList.remove('active')
    } else {
        e.classList.add('active')
        image.src = './assets/images/icon-minus.svg'
    }
    })
}) */

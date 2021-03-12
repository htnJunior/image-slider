const slider = document.querySelector('.slider')
const before = document.querySelector('.img-container-before')
const after = document.querySelector('.img-container-after')
const container = document.querySelector('.container')

const line = (event) => {
    let position = event.layerX
    let size = container.offsetWidth
    before.style.width = position + "px"
    slider.style.left = position + "px"

    if(position < 20){
        before.style.width = 0
        slider.style.left = 0
    }
    if(position + 15 > size){
        before.style.width = size + "px"
        slider.style.left = size + "px"
    }
}

container.addEventListener('mousemove', line)
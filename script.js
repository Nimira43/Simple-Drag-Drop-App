function drag() {
    let dragging = false
    let mouseX, mouseY
    let elX, elY
    const boxes = document.querySelectorAll('[draggable]')
    boxes.forEach(box => {
        box.addEventListener('mousedown', mouseDown)
        box.style.top = 0
        box.style.left = 0
    })
    
    function mouseDown(e) {
        e.preventDefault()
        dragging = this
        mouseX = e.pageX
        mouseY = e.pageY
        elX = Number.parseInt(dragging.style.left)
        elY = Number.parseInt(dragging.style.top)
        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)
    }

    function mouseMove(e) {
        if (dragging) {
            const deltaMouseX = e.pageX - mouseX
            const deltaMouseY = e.pageY - mouseY
            dragging.style.left = deltaMouseX + elX + 'px'
            dragging.style.top = deltaMouseY + elY + 'px'
        }
    }
    
    const mouseUp = (e) => dragging = false
}

drag()


let earth = document.getElementById("earth");
let sun = document.getElementById("sun");

function onMouseDown(object) {
    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove)
    }

    function onMouseMove(event) {
        object.style.left = event.clientX - 50 + 'px'
        object.style.top = event.clientY - 50 + 'px'
    }
    //todo: make it so that there is no snap with mouse down.
    
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
}

earth.addEventListener('mousedown', (event) => onMouseDown(earth))
sun.addEventListener('mousedown', (event) => onMouseDown(sun))
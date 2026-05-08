let mainDiv = document.getElementById("mainDiv")

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

class planet {
    constructor(name, color, mass, radius) {
        this.mass = mass
        this.radius = radius
        this.name = name
        this.color = color
    
        let planet = document.createElement('div')

        planet.name = name
        planet.style.position = 'relative'
        planet.style.backgroundColor = color
        planet.style.height = radius + 'px'
        planet.style.width = radius + 'px'
        planet.style.borderRadius = '50%'
        planet.addEventListener('mousedown', (event) => onMouseDown(planet))

        mainDiv.appendChild(planet)
        console.log("added event listener for " + name)
    }
}

new planet('sun', 'orange', 10, 200)
new planet('earth', 'blue', 10, 100)
new planet('mars', 'brown', 10, 50)
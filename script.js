// Target the Button and Container elements
const button = document.querySelector("#createButtonElement");
const container = document.querySelector("#container");
const inputElement = document.querySelector("#squareNumber");


// Function that creates squares
button.addEventListener("click", () => {
    container.innerHTML = "";
    const gridSize = Number(inputElement.value);
    const totalGridSize = gridSize * gridSize;
    if(gridSize >= 16 && gridSize <= 100) {

        for(let i = 0; i < totalGridSize; i++) {
            const newSquare = document.createElement("div");
            newSquare.className = 'square';
            newSquare.style.width = `${960 / gridSize}px`;
            newSquare.style.height = `${960 / gridSize}px`;
            newSquare.addEventListener('mousemove', () => {
                let current = Number(newSquare.style.opacity || 0);
                current += 0.1;
            
                if (current > 1) current = 1;
            
                newSquare.style.opacity = current;
            })
            container.appendChild(newSquare);
    
    } 
    } else {
        alert('Enter only numbers between 16 and 100!');
    }
});
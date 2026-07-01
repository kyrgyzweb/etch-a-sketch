// Target the Button and Container elements
const button = document.querySelector("#createButtonElement");
const container = document.querySelector("#container");

// Function to built and append the square
button.addEventListener("click", () => {
    for(let i = 0; i < 256; i++) {
        

                 // 1.Create a new div element
    const newSquare = document.createElement("div");

    // 2.Assign CSS class to give it square dimensions
    newSquare.className = "square";

    // 3.Inject the newSquare in to the DOM container
    container.appendChild(newSquare);
        }

});


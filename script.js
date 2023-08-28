/// script.js
let color=document.querySelector(`.color`)
let erase= document.querySelector(`.erase`)
let slider= document.querySelector(`.slider`)
let controls= document.querySelector(`.controls`)
let sliderValue= document.createElement(`div`)
sliderValue.textContent= slider.value + ` X ` + slider.value
sliderValue.classList.add(`control`)
controls.append(sliderValue)
erase.addEventListener(`click`,()=> color.value=`#ffffff`)
const gridContainer = document.querySelector(`.grid-container`);
const cell = document.createElement("div");
function createGrid(rows, cols) {
    // Update the custom properties to adjust the grid dimensions
    gridContainer.style.setProperty("--cols", cols);
    gridContainer.style.setProperty("--rows", rows);

    // Clear existing cells
    gridContainer.innerHTML = "";

    // Create new cells based on the updated dimensions
    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
        cell.addEventListener(`mouseover`,()=>{cell.style.backgroundColor=color.value})

        let clear=document.querySelector(`.clear`)
        clear.addEventListener(`click`,returnToWhite)
        function returnToWhite(){
            cell.style.backgroundColor=`white`
        }
    }
    
    
}

// Create a 32x32 grid by default
createGrid(32,32);

slider.addEventListener(`change`,()=>{sliderValue.textContent= slider.value + `X` + slider.value
    createGrid(slider.value,slider.value)
})

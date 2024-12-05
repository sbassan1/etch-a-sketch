
const grid = document.querySelector(".grid");

const resetButton = document.querySelector("button");

let n = parseInt(prompt("Please enter the number of boxes per side for the grid:", 16));


let rowWidth = Math.ceil((480 - (2 * (n + 1))) / n);

function createGrid(n) {
    
    grid.innerHTML = ""; // The grid should be empty first

    for (let i = 0; i < n; i++) {

        const row = document.createElement("div");
        row.classList.add("row"); 

        for (let j = 0; j < n; j++) {

            const square = document.createElement("div");
            square.classList.add("square");

            square.style.width = `${rowWidth}px`;
            square.style.height = `${rowWidth}px`;

            row.appendChild(square);

            square.addEventListener("mouseover", () => {
                square.style.background = "black";
            });

        }

        grid.appendChild(row);
    }
}

resetButton.addEventListener("click", () => {
    n = parseInt(prompt("Please enter the number of boxes per side for the grid:", 16));
    rowWidth = Math.ceil((480 - (2 * (n + 1))) / n);
    createGrid(n);
});

createGrid(n);

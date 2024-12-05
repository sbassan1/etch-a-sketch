
const grid = document.querySelector(".grid");

const resetButton = document.querySelector("button");

let n = parseInt(prompt("Please enter the number of boxes per side for the grid: (less than 100 boxes please!)", 16));

while (n > 100) {
    n = parseInt(prompt("Please enter the number of boxes per side for the grid: (less than 100 boxes please!)", 16));
}

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
                const r = Math.floor(Math.random() * 256); 
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                square.style.background = `rgb(${r}, ${g}, ${b})`;
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

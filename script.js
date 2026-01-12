const container=document.querySelector("#container");
//default 16*16 grid and hover effects.
let side=16;
let gridSize=side*side;
for(let i=0;i<gridSize;i++){
    const cell=document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
};
const grids=document.querySelectorAll(".cell");
grids.forEach((grid)=>{
    grid.addEventListener("mouseover",()=>{
        grid.style.backgroundColor="red";
    })
});

//getting user input and changing grid size accordingly.
const custom=document.querySelector("#custom");
custom.addEventListener("click",()=>{
    popup=prompt("Number of squares per side you want on the Grid: ");
    let num=parseInt(popup);
    if(isNaN(num)){
        alert('INVALID INPUT! Please enter numbers!');
    } else if (num<1 || num>50){
        alert('Please enter range between 1 and 50!');
    } else {
        alert(`You entered ${num}!`);
    }

    container.textContent="";
    let newGridSize=num*num;
    for(i=0;i<newGridSize;i++){
        const newCell=document.createElement("div");
        newCell.classList.add("cell");
        container.appendChild(newCell);
        let cellSize=container.clientWidth/num;
        newCell.style.width=`${cellSize}px`;          //overriding default width and height of each cell with user input.
        newCell.style.height=`${cellSize}px`;
    }
    const newGrids=document.querySelectorAll(".cell");
    newGrids.forEach((square)=>{
        square.addEventListener("mouseover",()=>{
            square.style.backgroundColor="red";
        });
    });
});
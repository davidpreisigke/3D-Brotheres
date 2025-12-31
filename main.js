const radioManu = document.getElementById("manu");
const radioImp  = document.getElementById("imp");

const gridManu = document.getElementById("gridManu");
const gridImp  = document.getElementById("gridImp");

function updateGrid(){
  gridManu.classList.toggle("active", radioManu.checked);
  gridImp.classList.toggle("active", radioImp.checked);
}

radioManu.addEventListener("change", updateGrid);
radioImp.addEventListener("change", updateGrid);


updateGrid();

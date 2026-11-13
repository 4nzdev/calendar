const map = {
  width: 120,
  height: 90
}

const grid = [];


function buildMap(width, height) {
  let map = elem("map");
  map.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  
  for (y = 1; y <= height; y++) {
    let row = [];
    
    for (x = 1; x <= width; x++) {
      let coords = `(${x}, ${y})`;

      let cell = document.createElement("div");
      cell.className = "cell";
      map.appendChild(cell);

      cell.innerHTML = coords;

      row.push(cell);
    }

    grid.push(row);
  }

  alert("test");
  
}

buildMap(map.width, map.height);



function elem(e) { return document.getElementById(e) }

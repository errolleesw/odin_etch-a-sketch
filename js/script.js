const container = document.querySelector('#grid-container');


function createGrid(gridSize) {
  for (let i = 0; i < (gridSize * gridSize); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    // add hover event listener
    square.addEventListener('mouseover', () => {
      square.classList.add('hovered');
    });

    // remove hover class on mouse out
    square.addEventListener('mouseout', () => {
      square.classList.remove('hovered');
    });
  }
};

// const container = document.querySelector('#grid-container');
const resetBtn = document.querySelector('#reset-btn');

function resetGrid() {
  let gridSize = prompt('Enter a grid size (max 100):');
  gridSize = parseInt(gridSize);
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert('Please enter a valid number between 1 and 100');
    return;
  }

  // remove existing grid
  container.innerHTML = '';
  
  container.style.setProperty('--grid-size',gridSize);

  // create new grid
  createGrid(gridSize);
}

resetBtn.addEventListener('click', resetGrid);
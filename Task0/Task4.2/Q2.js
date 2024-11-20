1
function createDiv(width, height, text) {
  let newDiv = document.createElement('div');
  newDiv.innerText = text;
  newDiv.style.width = `${width}px`;
  newDiv.style.height = `${height}px`;
  newDiv.style.border = '1px solid black';
  const parent = document.getElementById('container');
  parent.append(newDiv);
}
createDiv(200, 100, 'Sample div');

Window.createDiv = createDiv;

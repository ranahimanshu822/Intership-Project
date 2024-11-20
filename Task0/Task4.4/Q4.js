const colorInp = document.getElementById("colorbox");
const textDiv = document.getElementById("text-container");
const setColor = () => {
  const colorVal = colorInp.value;
  textDiv.style.color = colorVal;
};


const sliderVal = document.getElementById("fontsize");
const changeFontSize = () => {
  textDiv.style.fontSize = `${sliderVal.value}px`;
};


const changeStyle = (e) => {
  textDiv.classList.toggle(e);
};


const changeFamily = (e) => {
  textDiv.style.fontFamily = e;
};

const showCss = () => {
    const styleCont=window.getComputedStyle(textDiv);
  const parent = document.getElementById("css-props");
  const cssTxt = `color:${colorInp.value|| 'black'}; 
  font-size: ${sliderVal.value}px; 
  font-family: ${styleCont.fontFamily};
  font-style: ${styleCont.fontStyle};
  font-decoration: ${styleCont.textDecoration};`;
  parent.innerText=cssTxt;
  console.log(textDiv.fontFamily)
};
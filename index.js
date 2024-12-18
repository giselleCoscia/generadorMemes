// variables del Dom//
const panelDeControl = document.querySelector("#panelDeControl");

const btnCerrarPanel = document.querySelector("#btnCerrarPanel");
const btnTex = document.querySelector("#btnTex");
const btnImg = document.querySelector("#btnImg");
const btnToogleTheme = document.querySelector("#btnToogleTheme");
const btnResetFilter = document.querySelector("#btnResetFilter");
const btnAlignLeft = document.querySelector("#btnAlignLeft");
const btnAlignCenter = document.querySelector("#btnAlignCenter");
const btnAlignRight = document.querySelector("#btnAlignRight");
const btnDescargar = document.querySelector("#btnDescargar");

const btnContorno = document.querySelector("#btnContorno");
const btnClaro = document.querySelector("#btnClaro");
const btnOscuro = document.querySelector("#btnOscuro");

//paneles
const panelImg = document.querySelector("#panelImg");
const panelText = document.querySelector("#panelText");

//Input imgs
const inputUrl = document.querySelector("#inputUrl");
const inputLeyers = document.querySelector("#inputLeyers")
const inputBrightness = document.querySelector("#inputBrightness");
const inputOpacity = document.querySelector("#inputOpacity");
const inputContrast = document.querySelector("#inputContrast");
const inputBlur = document.querySelector("#inputBlur");
const inputGrayscale = document.querySelector("#inputGrayscale");
const inputSepia = document.querySelector("#inputSepia");
const inputHue = document.querySelector("#inputHue");
const inputSaturation = document.querySelector("#inputSaturation");
const inputNegative = document.querySelector("#inputNegative");




//Input texts
const checkboxTopText = document.querySelector("#checkboxTopText");
const checkboxBottomText = document.querySelector("#checkboxBottomText");
const checkboxFondoTransparente = document.querySelector("#checkboxFondoTransparente");
const inputTopText = document.querySelector("#inputTopText");
const inputBottomText = document.querySelector("#inputBottomText");
const familyFont = document.querySelector("#familyFont")
const inputFontSize = document.querySelector("#inputFontSize")
const inputSpace = document.querySelector("#inputSpace")
const inputInterlinead = document.querySelector("#inputInterlinead")

const contenedorMeme = document.querySelector("#contenedorMeme");
const contenedorImg = document.querySelector(".contenedorImg")
const topText = document.querySelector("#topText");
const contendorTextTop = document.querySelector("#contendorTextTop");
const contendorTextBottom = document.querySelector("#contendorTextBottom");

const bottomText = document.querySelector("#bottomText")

//input Color
const inputColor = document.querySelector(".inputColor");
const inputColorLetra = document.querySelector("#inputColorLetra");
const inputColorFondo = document.querySelector("#inputColorFondo");


// Eventos - panel de imagen y texto//

btnCerrarPanel.addEventListener("click", (e) => {
  e.preventDefault();
  panelDeControl.style.display = "none";
});

btnImg.addEventListener("click", (e) => {
  e.preventDefault();
  panelDeControl.style.display = "block";
  panelText.style.display = "none";
  panelImg.style.display = "block"

});

btnTex.addEventListener("click", (e) => {
  e.preventDefault();
  panelDeControl.style.display = "block";
  panelImg.style.display = "none";
  panelText.style.display = "block";
});


btnToogleTheme.addEventListener("click", (e) => {
  if (btnToogleTheme.textContent == "Modo Claro") {
    document.body.classList.remove("lightTheme");
    document.body.classList.add("darkTheme");
    btnToogleTheme.textContent = "Modo Oscuro";
  } else {
    document.body.classList.remove("darkTheme");
    document.body.classList.add("lightTheme");
    btnToogleTheme.textContent = "Modo Claro";
  }
})

//Panel Imagen

inputColor.addEventListener("input", (e) => {
  contenedorImg.style.backgroundColor = e.target.value
})

inputUrl.addEventListener("input", (e) => {
  contenedorImg.style.backgroundImage = `url(${e.target.value})`
})

inputLeyers.addEventListener("input", (e) => {
  contenedorImg.style.backgroundBlendMode = e.target.value
})

const setFilter = () => {
  const brightness = inputBrightness.value;
  const opacity = inputOpacity.value;
  const contrast = inputContrast.value;
  const blur = inputBlur.value;
  const grayscale = inputGrayscale.value;
  const sepia = inputSepia.value;
  const hue = inputHue.value;
  const saturate = inputSaturation.value;
  const invert = inputNegative.value;
  contenedorImg.style.filter = `brightness(${brightness}) opacity(${opacity}) blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturate}%) invert(${invert})`
}

inputBrightness.addEventListener("input", setFilter)
inputOpacity.addEventListener("input", setFilter)
inputContrast.addEventListener("input", setFilter)
inputBlur.addEventListener("input", setFilter)
inputGrayscale.addEventListener("input", setFilter)
inputSepia.addEventListener("input", setFilter)
inputHue.addEventListener("input", setFilter)
inputSaturation.addEventListener("input", setFilter)
inputNegative.addEventListener("input", setFilter)

btnResetFilter.addEventListener("click", () => {
  inputBrightness.value = 1
  inputOpacity.value = 1
  inputContrast.value = 100
  inputBlur.value = 0
  inputGrayscale.value = 0
  inputSepia.value = 0
  inputHue.value = 0
  inputSaturation.value = 100
  inputNegative.value = 0
  setFilter();
})


//Panel texto

inputTopText.addEventListener("input", (e) => {
  topText.textContent = e.target.value;
})
inputBottomText.addEventListener("input", (e) => {
  bottomText.textContent = e.target.value;
})

checkboxTopText.addEventListener("change", () => {
  contendorTextTop.classList.toggle("ocultar")
})

checkboxBottomText.addEventListener("change", () => {
  contendorTextBottom.classList.toggle("ocultar")
})

checkboxFondoTransparente.addEventListener("change", () => {
  if(checkboxFondoTransparente.checked){
    contendorTextTop.style.backgroundColor = "transparent"
    contendorTextBottom.style.backgroundColor = "transparent"
  }else{
    contendorTextTop.style.backgroundColor = inputColorFondo.value
    contendorTextBottom.style.backgroundColor = inputColorFondo.value
  }
  contendorTextTop.classList.toggle("transparentar")
  contendorTextBottom.classList.toggle("transparentar")
})


familyFont.addEventListener("input", (e) => {
  topText.style.fontFamily = e.target.value
  bottomText.style.fontFamily = e.target.value
})

inputFontSize.addEventListener("input", (e) => {
  topText.style.fontSize = `${e.target.value}px`
  bottomText.style.fontSize = `${e.target.value}px`
})

btnAlignLeft.addEventListener("click", () => {
  topText.style.textAlign = "left";
  bottomText.style.textAlign = "left";
});
btnAlignCenter.addEventListener("click", () => {
  topText.style.textAlign = "center";
  bottomText.style.textAlign = "center";
});
btnAlignRight.addEventListener("click", () => {
  topText.style.textAlign = "right";
  bottomText.style.textAlign = "right";
});

inputColorLetra.addEventListener("input", (e) => {
  topText.style.color = e.target.value
  bottomText.style.color = e.target.value
})

inputColorFondo.addEventListener("input", (e) => {
  if(checkboxFondoTransparente.checked){
    contendorTextTop.style.backgroundColor = "transparent"
    contendorTextBottom.style.backgroundColor = "transparent"
  }else{
    contendorTextTop.style.backgroundColor = e.target.value
    contendorTextBottom.style.backgroundColor = e.target.value
  }
})

btnContorno.addEventListener("click", (e) => {
  topText.style.textShadow = "none"
  bottomText.style.textShadow = "none"
})
btnClaro.addEventListener("click", (e) => {
  topText.style.textShadow = "rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px"
  bottomText.style.textShadow = "rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px"
})
btnOscuro.addEventListener("click", (e) => {
  topText.style.textShadow = "rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px"
  bottomText.style.textShadow = "rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px"
})

inputSpace.addEventListener('input',(e)=>{
  contendorTextTop.style.padding = `${e.target.value}px`
  contendorTextBottom.style.padding =  `${e.target.value}px`
})

inputInterlinead.addEventListener('input',(e)=>{
  contendorTextTop.style.lineHeight = e.target.value
  contendorTextBottom.style.lineHeight = e.target.value
})

// boton de descargar meme

btnDescargar.addEventListener("click",()=>{
  domtoimage.toBlob(contenedorMeme).then(function (blob) {
    saveAs(blob, 'momazo.png')
  })
})
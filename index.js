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

const panelImg = document.querySelector("#panelImg");

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

const checkboxTopText = document.querySelector("#checkboxTopText");
const checkboxBottomText = document.querySelector("#checkboxBottomText"); 
const checkboxFondoTransparente = document.querySelector("#checkboxFondoTransparente");



//Input texts
const inputTopText = document.querySelector("#inputTopText");
const inputBottomText = document.querySelector("#inputBottomText");
const familyFont = document.querySelector("#familyFont")
const inputFontSize = document.querySelector("#inputFontSize")

//input Color
const inputColor = document.querySelector(".inputColor")

const darkTheme = document.querySelector("body.darkTheme");
const lightTheme = document.querySelector("body.lightTheme");

const contenedorImg = document.querySelector(".contenedorImg")
const imgText = document.querySelector(".imgText")
const topText = document.querySelector("#topText");
const contendorTextTop = document.querySelector("#contendorTextTop");
const contendorTextBottom = document.querySelector("#contendorTextBottom");

const bottomText = document.querySelector("#bottomText")
const img = document.querySelector("#img");


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

checkboxTopText.addEventListener("change",()=>{
  contendorTextTop.classList.toggle("ocultar")
})

checkboxBottomText.addEventListener("change",()=>{
  contendorTextBottom.classList.toggle("ocultar")
})

checkboxFondoTransparente.addEventListener("change",()=>{
  contendorTextTop.classList.toggle("transparentar")
  contendorTextBottom.classList.toggle("transparentar")
})

familyFont.addEventListener("input",(e)=>{
  topText.style.fontFamily = e.target.value
  bottomText.style.fontFamily =e.target.value
})

inputFontSize.addEventListener("input",(e)=>{
  topText.style.fontSize = `${e.target.value}px`
  bottomText.style.fontSize = `${e.target.value}px`
})

btnAlignLeft.addEventListener("click", (e) => {
  topText.style.textAlign = "left";
  bottoText.style.textAlign = "left";
});
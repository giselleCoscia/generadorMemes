 // variables del Dom//
 const panelDeControl = document.querySelector("#panelDeControl");

 const btnCerrarPanel = document.querySelector("#btnCerrarPanel");
 const btnTex = document.querySelector("#btnTex");
 const btnImg = document.querySelector("#btnImg");

 const panelImg = document.querySelector("#panelImg");

 const inputUrl = document.querySelector("#inputUrl");

 const contenedorImg = document.querySelector(".contenedorImg")

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

 inputUrl.addEventListener("input",(e) => {
   console.log (e.target.value)
 })
 // variables del Dom//
 const panelDeControl = document.querySelector("#panelDeControl");

 const btnCerrarPanel = document.querySelector("#btnCerrarPanel");
 const btnTex = document.querySelector("#btnTex");
 const btnImg = document.querySelector("#btnImg");
 const btnToogleTheme = document.querySelector("#btnToogleTheme");

 const panelImg = document.querySelector("#panelImg");

 //Input imgs
 const inputUrl = document.querySelector("#inputUrl");
 const inputLeyers = document.querySelector("#inputLeyers")
 
 //Input texts
 const inputTopText =  document.querySelector("#inputTopText");
 const inputBottomText = document.querySelector("#inputBottomText");

 //input Color
 const inputColor = document.querySelector(".inputColor")

  const darkTheme = document.querySelector ("body.darkTheme");
  const lightTheme = document.querySelector ("body.lightTheme");

 const contenedorImg = document.querySelector(".contenedorImg")
 const topText = document.querySelector("#topText");
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
  if(btnToogleTheme.textContent == "Modo Claro"){
    document.body.classList.remove("lightTheme");
    document.body.classList.add("darkTheme");
    btnToogleTheme.textContent = "Modo Oscuro";
  }else{
    document.body.classList.remove("darkTheme");
    document.body.classList.add("lightTheme");
    btnToogleTheme.textContent = "Modo Claro";
  }
})

//Panel Imagen

inputColor.addEventListener("input",(e)=>{
  contenedorImg.style.backgroundColor = e.target.value
  })

  inputUrl.addEventListener("input",(e)=>{
    img.src = e.target.value
    })
    inputLeyers.addEventListener("input",(e)=>{
      img.style.backgroundBlendMode = e.target.value
    })






//Panel texto

inputTopText.addEventListener("input",(e)=>{
  topText.textContent = e.target.value;
})
inputBottomText.addEventListener("input",(e)=>{
  bottomText.textContent = e.target.value;
})








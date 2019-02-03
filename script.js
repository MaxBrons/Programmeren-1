console.log(window.innerWidth);
console.log(window.innerHeight);
let imageNames = ["fanta.jpg","coca_cola.jpg","sprite.jpg","drPepper.jpg","mountain_dew.jpg",
"fanta - kopie.jpg","coca_cola - kopie.jpg","sprite - kopie.jpg","drPepper - kopie.jpg","mountain_dew - kopie.jpg",
"fanta - kopie (2).jpg","coca_cola - kopie (2).jpg","sprite - kopie (2).jpg","drPepper - kopie (2).jpg","mountain_dew - kopie (2).jpg"];
let tumbs = document.getElementById("tumbs");
let display = document.getElementById("display");
let reportScreenSize = document.getElementsByClassName("reportScreenSize");

let si = Math.floor(Math.random()*imageNames.length);
selectImage(si);

for(let i= 0; i<imageNames.length; i++){
    let tumb = new Image();
               //images worden uit de map small gehaald
    tumb.src = "img/klein/" + imageNames[i];
    tumb.id = i;
    tumbs.appendChild(tumb);
    tumb.addEventListener("click",function(e){
        selectImage(e.target.id);
    });
        }
function selectImage(id){
               //image wordt uit de map big gehaald
    display.src = "img/groot/" + imageNames[id];
               currentImage = id;
               console.log(currentImage);
               reportScreenSize.innerHTML = "image nummer: " + currentImage;
        }


  document.getElementById("up").addEventListener("click",()=>{
    let hulpVar = 0;
    if ((si-4) < 0){
      hulpVar = si - 4;//negative int
      si = imageNames.length - 1 + hulpVar;
      selectImage(si);
    }
    else {
      si = si - 4;
      selectImage(si);
    }
});
  document.getElementById("right").addEventListener("click",()=>{
    si++;
    if(si == imageNames.length){
      si = 0;
      selectImage(si);
    }
    else {
      selectImage(si);
    }
});
 document.getElementById("down").addEventListener("click",()=>{
   si++;
   if(si > imageNames.length -1){
     si = 0;
     selectImage(si);
   }
   else {
     selectImage(si);
   }
});
  document.getElementById("left").addEventListener("click",()=>{
    si--;
    if (si<0) {
      si = imageNames.length - 1;
      selectImage(si);
    }
    else {
      selectImage(si);
    }
  });

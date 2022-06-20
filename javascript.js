document.getElementById("button1").addEventListener("click", function(){

  document.getElementById("box").style.height = "300px";
  document.getElementById("box").style.width = "300px";

});
document.getElementById("button2").addEventListener("click", function(){

  document.getElementById("box").style.height = "150px";
  document.getElementById("box").style.width = "150px";
  document.getElementById("box").style.backgroundColor = "blue";

});


document.getElementById("button3").addEventListener("click", function(){
var el = document.getElementById("box");
  function fadeOut() {
    return new Promise(function (resolve, reject) {
      let opacity = 1;
      function fade(){
        if ((opacity -= .01) > 0){
          el.style.opacity = opacity;
          requestAnimationFrame(fade);
        } else {
          resolve();
        }
      }
      fade();
    });
  };
  function fadeIn() {
    let opacity = 0;
    function fade1() {
      if((opacity += .01) < 1) {
        el.style.opacity = opacity;
        requestAnimationFrame(fade1);
      }
    }
    fade1();
  };
  fadeOut().then(fadeIn);
  // document.getElementById("box").style.width = "150px";
  // document.getElementById("box").style.height = "150px";
  // document.getElementById("box").style.backgroundColor = "visible";

});
document.getElementById("button4").addEventListener("click", function(){

  document.getElementById("box").style.height = "150px";
  document.getElementById("box").style.width = "150px";
  document.getElementById("box").style.backgroundColor = "orange";

});
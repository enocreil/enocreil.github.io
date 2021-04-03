import { ParticleCanvas, Point } from "./lib/voidCanvas/main.mjs";

window.addEventListener("load", event => {
  document.body.classList.add("load");
  
  try {
    new ParticleCanvas( document.body, "#00000010");
  } catch (error) {
    console.error(error);
  }

  let os = navigator.platform
  if (os == null || os == undefined) {
    
  } else if (os.startsWith("win")) {

  } else if (os.startsWith("Linux")) {

  } else if (os.startsWith("i") ||os.startsWith("Mac") || os.startsWith("Pike")) {

  }



  // scroollbare move
  let main = document.getElementById("main");
  if(!main){
    console.error("main part not found");
    return;
  }
  let dot = document.querySelectorAll(".progressBar > .progressBar-element");
  console.log(dot);
  
  main.addEventListener("scroll", event => {
    let xmin = undefined; 
    let id = undefined;
    let i = -1;
    for (const section of main.children) {
      i++;
      dot[i].classList.remove("active");
      let x = Math.abs(section.getBoundingClientRect().y);
      if(x > xmin) continue;
      xmin = x;
      id = i;
    }
    
    if (id === undefined) return;
    dot[id].classList.add("active");
  });


  // smooth scroll
  let smoothScrolling = document.querySelectorAll("a.smoothScrolling");
  for (const a of smoothScrolling) {
    let href = a.attributes.getNamedItem("href").value;
    
    if(typeof href !== "string") continue;
    if (href[0] !== "#") continue;
    let goald = document.getElementById(href.substring(1));
    if (!(goald instanceof HTMLElement)) continue;
    a.addEventListener("click", event => {
      event.preventDefault();
      goald.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });
    });
  }
})

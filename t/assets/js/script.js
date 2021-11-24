let btns=document.querySelectorAll(".tab")
let resulindex;
btns.forEach(btn=>{

btn.onclick=function () {
     resulindex ? resulindex.style.zIndex=-1 : null
    let citiesID=btn.getAttribute("data-id")
    let city=document.getElementById(citiesID)
    resulindex=city
    city.style.zIndex=1

}


})

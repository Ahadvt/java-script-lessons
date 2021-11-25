
var colors = document.querySelectorAll(".color")
colors.forEach(color => {

    color.addEventListener("dragstart", (e) => {

        colorid = color.getAttribute("data-id")
        
       
    })
})

let zone = document.querySelector(".dropzone")

zone.addEventListener("dragover", (e) => {
    e.preventDefault()
})
zone.addEventListener("drop", (e) => {
    console.log("drop");
    zone.style.backgroundColor = colorid
})

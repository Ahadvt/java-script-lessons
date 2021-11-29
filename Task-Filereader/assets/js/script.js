let input=document.querySelector("#upload")
let filebutton=document.querySelector(".dropAndbtn .filebutton")
let  addimages=document.querySelector(".addimages")
let droparea=document.querySelector(".droparea")

input.addEventListener("change",(e)=>{
    let files=Array.from(e.target.files)
    files.forEach(file=>{
        ShowImg(file)
    
    })
})

function ShowImg(file) {
    if(file.type!="image/jpeg"&&file.type!="image/png"&&file.type!="image/jpg"){
        let conf=confirm("please add img")
        return
    }
    let fileReader=new FileReader()
    fileReader.readAsDataURL(file)
    
    fileReader.addEventListener("loadend",()=>{
      
      let imgsize=file.size
      let imgtype=file.type
      let columntd=document.createElement("td")
      let tr=document.createElement("tr")
      let td=document.createElement("td")
      let tdsize=document.createElement("td")
      let tdtype=document.createElement("td")
      let img=document.createElement("img")
      let delet=document.createElement("td")
      let i=document.createElement("i")
    
     i.classList="fas fa-trash-restore-alt"
      delet.append(i)
      delet.classList="btn btn-outline-danger"
      delet.onclick=function(){
          let confr=confirm("are you sure?")
          if(confr){
            tr.remove()
          }
      }
      addimages.append(tr)
      tr.append(td)
      td.append(img)
      tr.append(tdsize)
      tr.append(tdtype)
      tr.append(delet)
      tdsize.append(imgsize)
      tdtype.append(imgtype)
      img.src=fileReader.result
      img.style.width="50px"
      img.style.height="50px"
      
      
    })
}

filebutton.onclick=function(){
    input.click();
}
droparea.addEventListener("dragenter",(e)=>{
    e.preventDefault()
    droparea.style.boxShadow="0px 0px 30px 7px rgba(0,0,0,0.67)"
}
)
droparea.addEventListener("dragleave",(e)=>{
    e.preventDefault()
    droparea.style.boxShadow="none"
}
)

droparea.addEventListener("dragover",(e)=>{
    e.preventDefault()
}
)

droparea.addEventListener("drop",(e)=>{
    e.preventDefault()
    let files=Array.from(e.dataTransfer.files)
    files.forEach(file=>{
        ShowImg(file)
    })
    droparea.style.boxShadow="none"
}
)

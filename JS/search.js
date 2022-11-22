document.addEventListener("keyup", e=>{

    if (e.target.matches("#busqueda")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".restau").forEach(resta =>{
  
            resta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?restau.classList.remove("filtro")
              :restau.classList.add("filtro")
        })
  
    }
  
  
  })


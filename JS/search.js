const restaurantes = [
  {  
      Nombre: 'La magnolia' , 
      Direccion: 'Cr 34 # 28 - 25', 
      Telefono: '3011234567'
  },
  {
      Nombre: 'La Magdalena' , 
      Direccion: ' Cr 43 # 82 - 52', 
      Telefono: '3021234567'
  },
  {
      Nombre: 'La Maria' , 
      Direccion: 'Cr 45 # 39 - 25', 
      Telefono: '3031234567'
  },
  {
      Nombre: 'La Constansa' , 
      Direccion: 'Cr 54 # 93 - 52', 
      Telefono: '3041234567'
  },
  
];

let nom = restaurantes.map(function(res){
  return '<h3>Restaurante '+res.Nombre+'</h3>'
});

let dir = restaurantes.map(function(res2){
  return '<p>Dirección: '+res2.Direccion+'</p>'
});

let tel = restaurantes.map(function(res3){
  return '<p>Telefono: '+res3.Telefono+'</p>'
});

btn.onclick = function() {
  var busqueda_2 = document.getElementById("busqueda").value;
  var busqueda = busqueda_2.toUpperCase();
  if (busqueda == 'LA MAGNOLIA') {
      panel_1.innerHTML = nom[0];
      panel_2.innerHTML = dir[0];
      panel_3.innerHTML = tel[0];
      panel_4.innerHTML = "";
  }else
  if (busqueda == 'LA MAGDALENA') {
    panel_1.innerHTML = nom[1];
    panel_2.innerHTML = dir[1];
    panel_3.innerHTML = tel[1];
      panel_4.innerHTML = "";
  }else
  if (busqueda == 'LA MARIA') {
    panel_1.innerHTML = nom[2];
    panel_2.innerHTML = dir[2];
    panel_3.innerHTML = tel[2];
      panel_4.innerHTML = "";
  }else
  if (busqueda == 'LA CONSTANSA') {
    panel_1.innerHTML = nom[3];
    panel_2.innerHTML = dir[3];
    panel_3.innerHTML = tel[3];
      panel_4.innerHTML = "";
  }else {
      panel_1.innerHTML = "";
      panel_2.innerHTML = "";
      panel_3.innerHTML = "";
      panel_4.innerHTML = "Ese restaurante no esta registrado"
  }
}
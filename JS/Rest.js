const restaurantes = [
    {  
        Nombre: 'La Magnolia' , 
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
    return '<h3>'+res.Nombre+'</h3>'
});

document.getElementById("container").innerHTML = nom[0];
document.getElementById("container1").innerHTML = nom[1];
document.getElementById("container2").innerHTML = nom[2];
document.getElementById("container3").innerHTML = nom[3];

let dir = restaurantes.map(function(res2){
    return '<p>'+res2.Direccion+ '<br>'+ res2.Telefono+'</p>'
});

document.getElementById("cont").innerHTML = dir[0];
document.getElementById("cont1").innerHTML = dir[1];
document.getElementById("cont2").innerHTML = dir[2];
document.getElementById("cont3").innerHTML = dir[3];
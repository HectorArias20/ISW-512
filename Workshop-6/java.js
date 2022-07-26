function guardar() {
    event.preventDefault();

    var nombre = document.getElementById("username").value;
    var apellido = document.getElementById("name").value;
    var telefono = document.getElementById("tel").value;


    var cliente = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,

    };

    var json = JSON.stringify(cliente);
    localStorage.setItem(nombre, json);
    console.log("Cliente Agregado");
    alert("Cliente Se Agrego con Exito");
    document.getElementById("miForm").reset()

}
const productos = [
    {
        id: "refacciones-01",
        titulo: "Bujiías",
        imagen: "../img/refacciones/bujias 01.png",
        categoria: {
            nombre: "Refacciones",
            id: "refacciones"
        },
        precio: 600
    },
    {
        id: "refacciones-02",
        titulo: "Frenos",
        imagen: "../img/refacciones/frenos 02.png",
        categoria: {
            nombre: "Refacciones",
            id: "refacciones"
        },
        precio: 600
    },
    {
        id: "refacciones-03",
        titulo: "Filtro",
        imagen: "../img/refacciones/filtro 03.png",
        categoria: {
            nombre: "Refacciones",
            id: "refacciones"
        },
        precio: 600
    },
    {
        id: "refacciones-04",
        titulo: "Pastillas",
        imagen: "../img/refacciones/pastillas 04.png",
        categoria: {
            nombre: "Refacciones",
            id: "refacciones"
        },
        precio: 600
    },
    {
        id: "interior-01",
        titulo: "Asiento",
        imagen: "../img/interior/asiento 01.png",
        categoria: {
            nombre: "Interior",
            id: "interior"
        },
        precio: 250
    },
    {
        id: "interior-02",
        titulo: "Volante",
        imagen: "../img/interior/volante 02.png",
        categoria: {
            nombre: "Interior",
            id: "interior"
        },
        precio: 250
    },
    {
        id: "interior-03",
        titulo: "Tapete",
        imagen: "../img/interior/tapete 03.png",
        categoria: {
            nombre: "Interior",
            id: "interior"
        },
        precio: 250
    },
    {
        id: "interior-04",
        titulo: "Estereo",
        imagen: "../img/interior/estereo 04.png",
        categoria: {
            nombre: "Interior",
            id: "interior"
        },
        precio: 250
    },
    {
        id: "luces-01",
        titulo: "Faros",
        imagen: "../img/luces/faros 01.png",
        categoria: {
            nombre: "Luces",
            id: "luces"
        },
        precio: 1250
    },
    {
        id: "luces-02",
        titulo: "Calavera",
        imagen: "../img/luces/calavera 02.png",
        categoria: {
            nombre: "Luces",
            id: "luces"
        },
        precio: 1250
    },
    {
        id: "luces-03",
        titulo: "Stop",
        imagen: "../img/luces/stop 03.png",
        categoria: {
            nombre: "Luces",
            id: "luces"
        },
        precio: 1250
    },
    {
        id: "luces-04",
        titulo: "Bombilla",
        imagen: "../img/luces/bombilla 04.png",
        categoria: {
            nombre: "Luces",
            id: "luces"
        },
        precio: 1250
    },
    {
        id: "baterias-01",
        titulo: "Batería 01",
        imagen: "../img/baterias/bateria 01.png",
        categoria: {
            nombre: "Baterias",
            id: "baterias"
        },
        precio: 700
    },
    {
        id: "baterias-02",
        titulo: "Batería 02",
        imagen: "../img/baterias/bateria 02.png",
        categoria: {
            nombre: "Baterias",
            id: "baterias"
        },
        precio: 700
    },
    {
        id: "baterias-03",
        titulo: "Batería 03",
        imagen: "../img/baterias/bateria 03.png",
        categoria: {
            nombre: "Baterias",
            id: "baterias"
        },
        precio: 700
    },
    {
        id: "baterias-04",
        titulo: "Batería 04",
        imagen: "../img/baterias/bateria 04.png",
        categoria: {
            nombre: "Baterias",
            id: "baterias"
        },
        precio: 700
    },
    {
        id: "rines-01",
        titulo: "Rin 01",
        imagen: "../img/rines/rin 01.png",
        categoria: {
            nombre: "Rines",
            id: "rines"
        },
        precio: 2000
    },
    {
        id: "rines-02",
        titulo: "Rin 02",
        imagen: "../img/rines/rin 02.png",
        categoria: {
            nombre: "Rines",
            id: "rines"
        },
        precio: 2000
    },
    {
        id: "rines-03",
        titulo: "Rin 03",
        imagen: "../img/rines/rin 03.png",
        categoria: {
            nombre: "Rines",
            id: "rines"
        },
        precio: 2000
    },
    {
        id: "rines-04",
        titulo: "Rin 04",
        imagen: "../img/rines/rin 04.png",
        categoria: {
            nombre: "Rines",
            id: "rines"
        },
        precio: 2000
    },
    {
        id: "aceites-01",
        titulo: "Anticongelante 01",
        imagen: "../img/aceites/anticongelante 01.png",
        categoria: {
            nombre: "Aceites y Anticongelantes",
            id: "aceites"
        },
        precio: 300
    },
    {
        id: "aceites-02",
        titulo: "Aceite 01",
        imagen: "../img/aceites/aceite 02.png",
        categoria: {
            nombre: "Aceites y Anticongelantes",
            id: "aceites"
        },
        precio: 300
    },
    {
        id: "aceites-03",
        titulo: "Anticongelante 02",
        imagen: "../img/aceites/anticongelante 03.png",
        categoria: {
            nombre: "Aceites y Anticongelantes",
            id: "aceites"
        },
        precio: 300
    },
    {
        id: "aceites-04",
        titulo: "Aceite 02",
        imagen: "../img/aceites/aceite 04.png",
        categoria: {
            nombre: "Aceites y Anticongelantes",
            id: "aceites"
        },
        precio: 300
    },
    {
        id: "herramientas-01",
        titulo: "Gato Hidraulico",
        imagen: "../img/herramientas/gato hidraulico 01.png",
        categoria: {
            nombre: "Herramientas",
            id: "herramientas"
        },
        precio: 1000
    },
    {
        id: "herramientas-02",
        titulo: "Llave en Cruz",
        imagen: "../img/herramientas/llave en cruz 02.png",
        categoria: {
            nombre: "Herramientas",
            id: "herramientas"
        },
        precio: 1000
    },
    {
        id: "herramientas-03",
        titulo: "Matraca",
        imagen: "../img/herramientas/matraca 03.png",
        categoria: {
            nombre: "Herramientas",
            id: "herramientas"
        },
        precio: 1000
    },
    {
        id: "herramientas-04",
        titulo: "Caja Herramientas",
        imagen: "../img/herramientas/caja herramientas 04.png",
        categoria: {
            nombre: "Herramientas",
            id: "herramientas"
        },
        precio: 1000
    },
]

const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("productos")
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h4 class="producto-titulo">${producto.titulo}</h4>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
    /* console.log(botonesAgregar); */
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos-los-productos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los Productos";
            cargarProductos(productos);
        }
    })
});


/*  */
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
    actualizarNumerito1();
    actualizarNumerito2();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    /* console.log(id) */
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    /* console.log(productosEnCarrito.some(producto => producto.id === idBoton)) */
    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        /* console.log(index) */
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    /* console.log(productosEnCarrito); */

    /* console.log(productoAgregado); */
    /* productosEnCarrito.push(productoAgregado); */
    /* console.log(productosEnCarrito); */

    actualizarNumerito();
    actualizarNumerito1();
    actualizarNumerito2();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    /* console.log(numerito); */
    numerito.innerHTML = nuevoNumerito;
}
function actualizarNumerito1() {
    let nuevoNumerito1 = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    /* console.log(numerito); */
    numerito1.innerHTML = nuevoNumerito1;
}
function actualizarNumerito2() {
    let nuevoNumerito2 = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    /* console.log(numerito); */
    numerito2.innerHTML = nuevoNumerito2;
}
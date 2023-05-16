const productos = [
    {
        id: "bujias-filtros-01",
        titulo: "Bujías 01",
        imagen: "../img/01 Golf 2019.jpg",
        categoria: {
            nombre: "Bujias",
            id: "bujias"
        },
        precio: 500
    },
    {
        id: "bujias-filtros-02",
        titulo: "Bujías 02",
        imagen: "../img/02 Golf 2019.jpg",
        categoria: {
            nombre: "Bujias",
            id: "bujias"
        },
        precio: 500
    },
    {
        id: "bujias-filtros-03",
        titulo: "Bujías 03",
        imagen: "../img/03 Golf 2019 interior.jpg",
        categoria: {
            nombre: "Bujias",
            id: "bujias"
        },
        precio: 500
    },
    {
        id: "bujias-filtros-04",
        titulo: "Bujías 04",
        imagen: "../img/01 Golf 2019.jpg",
        categoria: {
            nombre: "Bujias",
            id: "bujias"
        },
        precio: 500
    },
    {
        id: "frenos-01",
        titulo: "Frenos 01",
        imagen: "../img/frenos/frenos 01.png",
        categoria: {
            nombre: "Frenos",
            id: "frenos"
        },
        precio: 600
    },
    {
        id: "frenos-02",
        titulo: "Frenos 02",
        imagen: "../img/frenos/frenos 01.png",
        categoria: {
            nombre: "Frenos",
            id: "frenos"
        },
        precio: 600
    },
    {
        id: "frenos-03",
        titulo: "Frenos 03",
        imagen: "../img/frenos/frenos 01.png",
        categoria: {
            nombre: "Frenos",
            id: "frenos"
        },
        precio: 600
    },
    {
        id: "frenos-04",
        titulo: "Frenos 04",
        imagen: "../img/frenos/frenos 01.png",
        categoria: {
            nombre: "Frenos",
            id: "frenos"
        },
        precio: 600
    },
    {
        id: "interior-01",
        titulo: "Volante 01",
        imagen: "../img/interior/volante 01.png",
        categoria: {
            nombre: "Interior",
            id: "interior"
        },
        precio: 250
    },
    {
        id: "interior-02",
        titulo: "Interior 02",
        imagen: "../img/interior/volante 01.png",
        categoria: {
            nombre: "Interior",
            id: "interior"
        },
        precio: 250
    },
    {
        id: "interior-03",
        titulo: "Interior 03",
        imagen: "../img/interior/volante 01.png",
        categoria: {
            nombre: "Interior",
            id: "interior"
        },
        precio: 250
    },
    {
        id: "interior-04",
        titulo: "Interior 04",
        imagen: "../img/interior/volante 01.png",
        categoria: {
            nombre: "Interior",
            id: "interior"
        },
        precio: 250
    }
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
        div.classList.add("products")
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
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(productos.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito()
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerHTML = nuevoNumerito;
}
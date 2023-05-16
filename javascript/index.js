/* Simulador de Precios */
function gen_table(){
  document.getElementById("tab").innerHTML="";
  let n=Number(document.getElementById("capital").value);
  let n2=Number(document.getElementById("couta").value);
  let n3=Number(document.getElementById("interes").value);
  if(n>0){   
      for(i=1;i<=n2;i++){
          ca=n/n2;
          d1=ca.toFixed(2);
          i2=((n*n3)/100)/n2;
          d2=i2.toFixed(2);
          r=ca+i2;
          d3=r.toFixed(2);
          document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                  `<tr>
                      <td> ${i}</td>
                      <td> ${d1}</td>
                      <td> ${d2}</td>
                      <td> ${d3}</td>
                  </tr>`;
      }
      n1=n.toFixed(2);
      t_i=i2*n2;
      d4=t_i.toFixed(2);
      t_p=r*n2;
      d5=t_p.toFixed(2);
      document.getElementById("t1").innerHTML=n1;
      document.getElementById("t2").innerHTML=d4;
      document.getElementById("t3").innerHTML=d5;        
  }else{
      alert("Falta ingresar un Número");
  }
}

/* Forma para Usuarios */
function capturar(){
    /* console.log("capturado") */
    function Persona(nombre,edad){
      this.nombre=nombre;
      this.edad=edad;
    }
    var nombreCapturar = document.getElementById("nombre").value;
    /* console.log(nombreCapturar); */
    var edadCapturar = document.getElementById("edad").value;
    /* console.log(edadCapturar); */
    nuevoSujeto = new Persona(nombreCapturar,edadCapturar);
    /* console.log(nuevoSujeto); */
    agregar();
  }

  var baseDatos= [];
  function agregar(){
    baseDatos.push(nuevoSujeto);
    /* console.log(baseDatos); */
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td></tbody>';
  }

  /* Lista de Actividades */
  let button = document.querySelector('#btn-agregar');
  let input = document.querySelector('#nueva-actividad');
  let ol = document.querySelector('ol');

  /* console.log(ol); */

  button.addEventListener('click', function(){
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(input.value));
      ol.appendChild(li);
      input.value = '';
  });

  input.addEventListener('keypress', function(event) {
    if(input.value.lenght > 0 && event.keyCode == 13) {
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(input.value));
      ol.appendChild(li);
      input.value = '';
    }
  })
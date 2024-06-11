let request = () => {
  let url = window.location.search;
  let urlSearch = new URLSearchParams(url);
  let array = [
      urlSearch.get("nombre"),
      urlSearch.get("precio"),
      urlSearch.get("color"),
      urlSearch.get("tamano"),
      urlSearch.get("categoria"),
      urlSearch.get("descripcion")
  ];
  return array;
};

let response = request();
let table = document.getElementById("table");
let tr = document.createElement("tr");

let buttonGreen = document.createElement('button');
let buttonRed = document.createElement('button');

buttonGreen.setAttribute('class', "rounded-md bg-emerald-400 p-2");
buttonGreen.textContent = "Actualizar";

buttonRed.setAttribute('class', "rounded-md bg-red-400 p-2");
buttonRed.textContent = "Eliminar";

response.forEach(element => {
  let td = document.createElement('td');
  td.textContent = element;
  tr.appendChild(td);
});


let tdButtons = document.createElement('td');
tdButtons.appendChild(buttonGreen);
tdButtons.appendChild(buttonRed);
tr.appendChild(tdButtons);

table.appendChild(tr);
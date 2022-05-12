let container = document.getElementById("container");

const productsCart = [
  {
    id: 1,
    name: "Uva Crimson",
    price: 44.99,
  },
  {
    id: 2,
    name: "Vinho Canção",
    price: 17.98,
  },
  {
    id: 3,
    name: "Agua de coco",
    price: 8.99,
  },
  {
    id: 4,
    name: "Mamão",
    price: 9.98,
  },
  {
    id: 5,
    name: "Água tônica",
    price: 17.98,
  },
];
let soma = 0;
function criarCards(elemento) {
  elemento.forEach((element) => {
    let box = document.createElement("ul");
    box.setAttribute("class", "card");
    let texto = document.createElement("li");
    texto.innerText = `Nome: ${element.name}
Preço: ${element.price}
`;

    box.appendChild(texto);
    container.appendChild(box);

    soma += element.price;
  });
}


criarCards(productsCart)

let para = document.createElement('p')
para.innerText = `Total: ${soma}`
container.appendChild(para)


let btn = document.createElement("button");
btn.innerHTML = "Finalizar Compra";
btn.classList.add("btnFinalizar");
container.appendChild(btn)


const searchInput = H + FILTERdocument.querySelector("#search");
const filterSelect = document.querySelector("#filter");
const dishCards = document.querySelectorAll(".dish");

searchInput.addEventListener("input", function () {
  const text = searchInput.value.toLowerCase();

  dishCards.forEach(dish => {
    const name = dish.querySelector("h2").textContent.toLowerCase();
    dish.style.display = name.includes(text) ? "block" : "none";
  });
});

filterSelect.addEventListener("change", function () {
  const type = filterSelect.value;

  dishCards.forEach(dish => {
    if (type === "all" || dish.dataset.type === type) {
      dish.style.display = "block";
    } else {
      dish.style.display = "none";
    }
  });
});


// GENERATOR
let dishData = [
  {
    name: "Flammkuchen",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flammkuchen_2.jpg",
    desc: "Alsatian-style flatbread with crème fraîche, onions, and bacon."
  },
  {
    name: "Choucroute Garnie",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Choucroute_garnie_3.jpg",
    desc: "Alsatian sauerkraut with sausages, pork, and potatoes."
  },
  {
    name: "Coq au Riesling",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Coq_au_Riesling.jpg",
    desc: "French chicken cooked with German Riesling wine."
  },
  {
    name: "Baeckeoffe",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Baeckeoffe_alsacien.jpg",
    desc: "Hearty Alsatian casserole of marinated meats and potatoes."
  }
];

let generateBtn = document.querySelector("#generate");
let output = document.querySelector("#generated-dish");

generateBtn.addEventListener("click", function () {
  let random = dishData[Math.floor(Math.random() * dishData.length)];

  output.innerHTML = `
    <div class="dish generated">
      <img src="${random.img}" />
      <h2>${random.name}</h2>
      <p>${random.desc}</p>
    </div>
  `;
});

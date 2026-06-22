const searchInput = document.querySelector("#search");
const filterSelect = document.querySelector("#filter");
const dishes = document.querySelectorAll(".dish");


searchInput.addEventListener("input", function () {
  const text = searchInput.value.toLowerCase();

  dishes.forEach(dish => {
    const name = dish.querySelector("h2").textContent.toLowerCase();
    dish.style.display = name.includes(text) ? "block" : "none";
  });
});

// FILTER FUNCTION
filterSelect.addEventListener("change", function () {
  const type = filterSelect.value;

  dishes.forEach(dish => {
    if (type === "all" || dish.dataset.type === type) {
      dish.style.display = "block";
    } else {
      dish.style.display = "none";
    }
  });
});

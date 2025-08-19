const select = document.querySelector("#product");
const year = document.querySelector("#copyYear");
const lastModified = document.querySelector("#lastModified");

const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];


function populateProduct() {
    select.textContent = ""
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select a Product…";
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
});
}

document.addEventListener("DOMContentLoaded", () => {
  populateProduct();

  const reviewCountKey = "review-count";
  let count = Number(localStorage.getItem(reviewCountKey)) || 0;
  count += 1;
  localStorage.setItem(reviewCountKey, count);
});

const currentYear = new Date();
year.textContent = currentYear.getFullYear()
lastModified.textContent = document.lastModified
const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

const itemsSize = Array.from({ length: 50 }, () => [
  randomNumber(4),
  randomNumber(4),
]);

const gridHTML = itemsSize.map(generateGridItem).join("");
gallery.innerHTML = gridHTML;

function generateGridItem([col, row]) {
  return `
    <div class="item col-${col} row-${row}">
      <img src="assets/${randomNumber(12)}.jpg">
    </div>
  `;
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit + 1);
}

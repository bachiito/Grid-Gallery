const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

const oneByOnes = Array.from({ length: 21 }, () => [
  randomNumber(1),
  randomNumber(1),
]);

const itemsSize = Array.from({ length: 50 }, () => [
  randomNumber(4),
  randomNumber(4),
]).concat(oneByOnes);

const gridHTML = itemsSize.map(generateGridItem).join("");
gallery.innerHTML = gridHTML;

const galleryItems = Array.from(document.querySelectorAll(".gallery__item"));
galleryItems.map(showModal);
galleryItems.map(imgOverlay);

closeBtn.addEventListener("click", () => modal.close());

function showModal(item) {
  item.addEventListener("click", () => {
    const imgCopy = item.lastElementChild.cloneNode(true);

    if (modal.childElementCount > 1) {
      modal.removeChild(modal.lastElementChild);
    }

    modal.appendChild(imgCopy);
    modal.showModal();
  });
}

function generateGridItem([col, row]) {
  return `
    <div class="gallery__item col-${col} row-${row}">
      <img src="assets/${randomNumber(12)}.jpg" class="gallery__img">
    </div>
  `;
}

function imgOverlay(item) {
  item.addEventListener("mouseover", () => {
    document.documentElement.style.setProperty(
      "--img-height",
      `-${item.offsetHeight}px`
    );
  });
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit + 1);
}

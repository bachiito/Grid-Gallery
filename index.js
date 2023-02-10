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

const galleryItems = document.querySelectorAll(".gallery__item");
galleryItems.forEach(item => item.addEventListener("click", showModal));
galleryItems.forEach(item => item.addEventListener("mouseover", imgOverlay));

closeBtn.addEventListener("click", () => modal.close());

function showModal(e) {
  const imgCopy =
    e.target.lastElementChild.tagName === "IMG"
      ? e.target.lastElementChild.cloneNode(true)
      : null;

  if (modal.childElementCount > 1) {
    modal.removeChild(modal.lastElementChild);
  }

  modal.appendChild(imgCopy);
  modal.showModal();
}

function generateGridItem([col, row]) {
  return `
    <div class="gallery__item col-${col} row-${row}">
      <img src="assets/${randomNumber(12)}.jpg" class="gallery__img">
    </div>
  `;
}

function imgOverlay(e) {
  document.documentElement.style.setProperty(
    "--img-height",
    `-${e.target.offsetHeight}px`
  );
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit + 1);
}

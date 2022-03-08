/**
 * 
 * <div class="lightbox">
      <div class="lightbox-content">
        <img
          src="https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          class="lightbox-image"
        />
      </div>
    </div>
 */
const img = document.querySelectorAll(".content img");
[...img].forEach((item) => item.addEventListener("click", handleZoomImage));
function handleZoomImage(e) {
  const image = e.target.getAttribute("src");
  const template = `<div class="lightbox">
    <div class="lightbox-content">
    <i class="fa fa-angle-left lightbox-prev"></i>
      <img
        src="${image}"
        alt=""
        class="lightbox-image"
      />
    <i class="fa fa-angle-right lightbox-next"></i>

    </div>
  </div>`;
  document.body.insertAdjacentHTML("beforeend", template);
}
let index = 0;
document.body.addEventListener("click", function (e) {
  const lightImage = document.querySelector(".lightbox-image");
  if (!lightImage) return;
  let lightSrc = lightImage.getAttribute("src");
  index = [...img].findIndex((item) => item.getAttribute("src") === lightSrc);
  if (e.target.matches(".lightbox")) {
    // remove lightbox of out DOM
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches(".lightbox-next")) {
    // handle next image

    index++;
    if (index > img.length - 1) {
      index = 0;
    }
    const newSrc = [...img][index].getAttribute("src");
    lightImage.setAttribute("src", newSrc);
  } else if (e.target.matches(".lightbox-prev")) {
    // handle prev image

    index--;
    if (index < 0) return;
    const newSrc = [...img][index].getAttribute("src");
    lightImage.setAttribute("src", newSrc);
  }
});

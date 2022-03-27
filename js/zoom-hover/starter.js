window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  const imageWrapper = document.querySelector(".image-wrapper");
  const imageWrapperHeight = imageWrapper.offsetHeight; //300
  const imageWrapperWidth = imageWrapper.offsetWidth; //450
  const image = document.querySelector(".image");
  imageCover.addEventListener("mousemove", handleHoverImage);

  function handleHoverImage(e) {
    const pX = e.pageX;
    const pY = e.pageY;
    // Set image originial
    image.style = "width:auto; height: auto;max-height: unset";
    let imageHeight = image.offsetHeight;
    let imageWidth = image.offsetWidth;
    console.log(imageHeight, imageWidth);

    // Lấy thêm khoảng cách khi hover ảnh
    let spaceX = (imageWidth / 2 - imageWrapperWidth) * 2;
    let spaceY = (imageHeight / 2 - imageWrapperHeight) * 2;

    // Cộng vào để thấy được gốc khuất
    imageHeight += spaceY;
    imageWidth += spaceX;

    // Tỉ lệ
    let ratioX = imageWidth / imageWrapperWidth / 2;
    let ratioY = imageHeight / imageWrapperHeight / 2;

    let x = (pX - imageWrapper.offsetLeft) * ratioX;
    let y = (pY - imageWrapper.offsetTop) * ratioY;
    image.style = `left: ${-x}px;top: ${-y}px;width:auto;height:auto;max-height:unset;transform: none`;
  }
  imageCover.addEventListener("mouseleave", function () {
    image.style = "";
  });
});

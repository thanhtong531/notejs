window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  const imageWrapper = document.querySelector(".image-wrapper");
  // Get width,height default of imageWrapper set
  const imageWrapperWidth = imageWrapper.offsetWidth;
  const imageWrapperHeight = imageWrapper.offsetHeight;
  const image = document.querySelector(".image");
  imageCover.addEventListener("mousemove", handleHoverImage);

  function handleHoverImage(e) {
    // console.log(e.pageX);
    const pX = e.pageX;
    const pY = e.pageY;
    image.style = "width:auto; height: auto;max-height: unset";
    // Get width,height of image origini
    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;

    // Lấy thêm khoảng cách để cộng thêm khi hover ảnh
    let spaceX = (imageWidth / 2 - imageWrapperWidth) * 2;
    let spaceY = (imageHeight / 2 - imageWrapperHeight) * 2;
    // Cộng vào để thấy được những góc khuất
    imageWidth = imageWidth + spaceX;
    imageHeight = imageHeight + spaceY;

    // Ti le
    let ratioX = imageWidth / imageWrapperWidth / 2;
    let ratioY = imageHeight / imageWrapperHeight / 2;

    // Nếu ảnh nằm trong góc trên cùng bên trái thì khỏi trừ offset cả hai
    let x = (pX - imageWrapper.offsetLeft) * ratioX;
    let y = (pY - imageWrapper.offsetTop) * ratioY;

    image.style = `left: ${-x}px;top: ${-y}px;width:auto;height:auto;max-height:unset;transform: none`;
  }
  imageCover.addEventListener("mouseleave", function () {
    image.style = "";
  });
});

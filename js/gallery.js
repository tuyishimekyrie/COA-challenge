const imageWrappers = document.querySelectorAll(".image-wrapper");

imageWrappers.forEach((wrapper) => {
  const image = wrapper.querySelector(".photo-frame img");
  const overlay = wrapper.querySelector(".overlay");
  const moreInfo = wrapper.querySelector(".more-info");
  const details= wrapper.querySelector(".details");

  wrapper.addEventListener("mouseover", () => {
    overlay.classList.add("active");
    image.classList.add("active");
    moreInfo.classList.add("active");
    details.classList.add("active");
});

wrapper.addEventListener("mouseout", () => {
    overlay.classList.remove("active");
    image.classList.remove("active");
    moreInfo.classList.remove("active");
    details.classList.remove("active");
  });
});

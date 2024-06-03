const galleryData = [
  {
    src: "./assets/fox.jpeg",
    alt: "Fennec Fox",
    title1: "FENNEC",
    title2: "FOX",
    location: "India",
    moreInfo: "Know more",
    icon: "./assets/icons8-arrow-24.png",
  },
  {
    src: "./assets/whale.jpeg",
    alt: "Humpback Whale",
    title1: "HUMPBACK",
    title2: "WHALE",
    location: "South Africa",
    moreInfo: "Know more",
    icon: "./assets/icons8-arrow-24.png",
  },
  {
    src: "./assets/Monkey.jpeg",
    alt: "Common Brown Baboon",
    title1: "COMMON BROWN",
    title2: "BABOON",
    location: "South Africa",
    moreInfo: "Know more",
    icon: "./assets/icons8-arrow-24.png",
  },
  {
    src: "./assets/alpha.jpeg",
    alt: "Spotted Deer",
    title1: "SPOTTED",
    title2: "DEER",
    location: "Amazon",
    moreInfo: "Know more",
    icon: "./assets/icons8-arrow-24.png",
  },
];

function renderGallery(data) {
  const galleryContainer = document.querySelector(".gallery-container");
  galleryContainer.innerHTML = data
    .map(
      (item) => `
        <div class="image-wrapper">
            <div class="photo-frame">
                <img src="${item.src}" alt="${item.alt}">
                <div class="overlay"></div>
            </div>
            <div class="details">
                <h1>${item.title1}</h1>
                <h1>${item.title2}</h1>
                <p>${item.location}</p>
                <div class="more-info">
                    <span>${item.moreInfo}</span>
                    <img src="${item.icon}" alt="Arrow Icon">
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery(galleryData);
  const imageWrappers = document.querySelectorAll(".image-wrapper");

  imageWrappers.forEach((wrapper) => {
    const image = wrapper.querySelector(".photo-frame img");
    const overlay = wrapper.querySelector(".overlay");
    const moreInfo = wrapper.querySelector(".more-info");
    const details = wrapper.querySelector(".details");

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
});

let imgArray = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
  "img/06.jpg",
  "img/07.jpg",
  "img/08.jpg",
];

let imgArray2 = [
  "img/09.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/13.jpg",
  "img/14.jpg",
  "img/15.png",
  "img/16.jpg",
  "img/17.jpg",
  "img/18.jpg",
  "img/19.jpg",
  "img/20.jpg",
  "img/21.jpg",
  "img/22.jpg",
  "img/23.jpg",
  "img/24.jpg",
  "img/25.jpg",
  "img/26.jpg",
  "img/27.jpg",
  "img/28.jpg",
];

let currentImageIndex = 0;
let currentImageIndex2 = 0;

function render() {
  let imgContainer = document.getElementById("imgcontainer");
  imgContainer.innerHTML = "";
  loadSeptember(imgContainer);

  let imgContainer2 = document.getElementById("imgcontainer2");
  loadOctober(imgContainer2);
}

function loadSeptember(imgContainer) {
  let imgHtml = "";
  for (let i = 0; i < imgArray.length; i++) {
    imgHtml += `<div onclick="showPhoto(${i})" class="imgbox"><img src="${imgArray[i]}"></div>`;
  }
  imgContainer.innerHTML = imgHtml;
}

function loadOctober(imgContainer2) {
  let imgHtml = "";
  for (let i = 0; i < imgArray2.length; i++) {
    imgHtml += `<div onclick="showPhoto2(${i})" class="imgbox"><img src="${imgArray2[i]}"></div>`;
  }
  imgContainer2.innerHTML = imgHtml;
}

function showPhoto(number) {
  const img = document.getElementById("photoScreen");
  const all = document.getElementById("all");
  img.innerHTML = `<div class="screen"><img src="${imgArray[number]}"></div>
  <div class="photoButtons">
  <img src="img/share.svg">
  <img src="img/funnel.svg">
  <img src="img/zoom-in.svg">
  <img src="img/info-circle.svg">
  <img src="img/star.svg">
  <img src="img/trash3.svg">
  <img src="img/three-dots-vertical.svg">
  </div>
  <div onclick="closePic()" class="xButton"><img src="img/x.svg"></div>
  <div class="arrows">
  <img onclick="nextnPic()"src="img/arrow-left.svg" alt="">
  <img onclick="returnPic()"src="img/arrow-right.svg" alt="">
</div>`;
  img.classList.remove("none");
  all.classList.add("none");
}

function closePic() {
  const img = document.getElementById("photoScreen");
  img.classList.add("none");
  all.classList.remove("none");
}

function showPhoto2(number) {
  const img = document.getElementById("photoScreen");
  img.innerHTML = `<div class="screen"><img src="${imgArray2[number]}"></div>
  <div class="photoButtons">
  <img src="img/share.svg">
  <img src="img/funnel.svg">
  <img src="img/zoom-in.svg">
  <img src="img/info-circle.svg">
  <img src="img/star.svg">
  <img src="img/trash3.svg">
  <img src="img/three-dots-vertical.svg">
  </div>
  <div onclick="closePic()" class="xButton"><img src="img/x.svg"></div>
  <div class="arrows">
  <img onclick="returnPic2()"src="img/arrow-left.svg" alt="">
  <img onclick="nextPic2()"src="img/arrow-right.svg" alt="">
</div>`;
  img.classList.remove("none");
}

function nextPic() {
  const img = document.getElementById("photoScreen");
  currentImageIndex = (currentImageIndex + 1) % imgArray.length; // Circular increment
  nextHtmlCodeSep(img);
}

function returnPic() {
  const img = document.getElementById("photoScreen");
  currentImageIndex =
    (currentImageIndex - 1 + imgArray.length) % imgArray.length; // Circular decrement
  returnHtmlCodeSep(img);
}

function nextHtmlCodeSep(img) {
  img.innerHTML = `
    <div class="screen"><img src="${imgArray[currentImageIndex]}"></div>
    <div class="photoButtons">
      <img src="img/share.svg">
      <img src="img/funnel.svg">
      <img src="img/zoom-in.svg">
      <img src="img/info-circle.svg">
      <img src="img/star.svg">
      <img src="img/trash3.svg">
      <img src="img/three-dots-vertical.svg">
    </div>
    <div onclick="closePic()" class="xButton"><img src="img/x.svg"></div>
    <div class="arrows">
      <img onclick="returnPic()" src="img/arrow-left.svg" alt="">
      <img onclick="nextPic()" src="img/arrow-right.svg" alt="">
    </div>
  `;
}

function returnHtmlCodeSep(img) {
  img.innerHTML = `
    <div class="screen"><img src="${imgArray[currentImageIndex]}"></div>
    <div class="photoButtons">
      <img src="img/share.svg">
      <img src="img/funnel.svg">
      <img src="img/zoom-in.svg">
      <img src="img/info-circle.svg">
      <img src="img/star.svg">
      <img src="img/trash3.svg">
      <img src="img/three-dots-vertical.svg">
    </div>
    <div onclick="closePic()" class="xButton"><img src="img/x.svg"></div>
    <div class="arrows">
      <img onclick="returnPic()" src="img/arrow-left.svg" alt="">
      <img onclick="nextPic()" src="img/arrow-right.svg" alt="">
    </div>
  `;
}

function nextPic2() {
  const img = document.getElementById("photoScreen");
  currentImageIndex2 = (currentImageIndex2 + 1) % imgArray2.length; // Circular increment
  nextHtmlCodeOct(img);
}

function returnPic2() {
  const img = document.getElementById("photoScreen");
  currentImageIndex2 =
    (currentImageIndex2 - 1 + imgArray2.length) % imgArray2.length; // Circular decrement
  returnHtmlCodeOct(img);
}

function nextHtmlCodeOct(img) {
  img.innerHTML = `
  <div class="screen"><img src="${imgArray2[currentImageIndex2]}"></div>
  <div class="photoButtons">
    <img src="img/share.svg">
    <img src="img/funnel.svg">
    <img src="img/zoom-in.svg">
    <img src="img/info-circle.svg">
    <img src="img/star.svg">
    <img src="img/trash3.svg">
    <img src="img/three-dots-vertical.svg">
  </div>
  <div onclick="closePic()" class="xButton"><img src="img/x.svg"></div>
  <div class="arrows">
    <img onclick="returnPic2()" src="img/arrow-left.svg" alt="">
    <img onclick="nextPic2()" src="img/arrow-right.svg" alt="">
  </div>
`;
}

function returnHtmlCodeOct(img) {
  img.innerHTML = `
    <div class="screen"><img src="${imgArray2[currentImageIndex2]}"></div>
    <div class="photoButtons">
      <img src="img/share.svg">
      <img src="img/funnel.svg">
      <img src="img/zoom-in.svg">
      <img src="img/info-circle.svg">
      <img src="img/star.svg">
      <img src="img/trash3.svg">
      <img src="img/three-dots-vertical.svg">
    </div>
    <div onclick="closePic()" class="xButton"><img src="img/x.svg"></div>
    <div class="arrows">
      <img onclick="returnPic2()" src="img/arrow-left.svg" alt="">
      <img onclick="nextPic2()" src="img/arrow-right.svg" alt="">
    </div>
  `;
}

const bgImages = [
  "https://picsum.photos/id/1015/1200/800",
  "https://picsum.photos/id/1025/1200/800",
  "https://picsum.photos/id/1035/1200/800",
  "https://picsum.photos/id/1045/1200/800",
  "https://picsum.photos/id/1055/1200/800"
];

/// Math. random
 const backGround = document.querySelector('#bg-container');
 const buttons = document.querySelector('#change-bg-btn');
 let current = 0
buttons.addEventListener('click', function(){
     let current  = Math.floor(Math.random() * bgImages.length)
    backGround.style.backgroundImage  = `url(${bgImages[current]})`;
}
)

/// Arrow function
// buttons.addEventListener("click", () => {
//   current = (current + 1) % bgImages.length;
//   backGround.style.backgroundImage = `url(${bgImages[current]})`;
// });

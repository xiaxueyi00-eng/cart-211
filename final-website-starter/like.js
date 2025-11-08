
let total = 0;
const heroHeart = document.querySelector(".hero-heart");
const heroCounter = document.querySelector(".hero-counter");

heroHeart.addEventListener("click", () => {
  total++;

  heroCounter.textContent = `Data Collected: ${String(total).padStart(3, '0')}`;


  heroHeart.classList.add("liked");
  setTimeout(() => heroHeart.classList.remove("liked"), 350);
});



document.querySelectorAll(".post").forEach(post => {
  const heart = post.querySelector(".heart");
  const counter = post.querySelector(".counter");
  let count = parseInt(heart.getAttribute("data-count"));

  heart.addEventListener("click", () => {
    count++;
    heart.setAttribute("data-count", count);
    heart.textContent = `♥ ${count}`;

    counter.textContent = `Data Collected: ${String(count).padStart(3, '0')}`;


    heart.classList.add("liked");
    setTimeout(() => heart.classList.remove("liked"), 350);
  });
});

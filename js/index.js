import Game from "./home.module.js";
import UiDisplay from "./ui.module.js";

const header = document.querySelector("#header");
const cards = document.querySelector("#cards");
const details = document.querySelector("#details");
const closeBtn = document.querySelector("#closeBtn");
const CardContainer = document.querySelector("#CardContainer");
const navAnchors = document.querySelectorAll("ul li a");



// make sticky header
let headerOffset = header.offsetTop;

window.addEventListener("scroll", stickyHeader);

function stickyHeader() {
    if (window.pageYOffset >= headerOffset) {
        header.style.position = "fixed";
        header.style.left = "50%";
        header.style.transform = "translateX(-50%)";
        cards.style.marginTop = 63.43 + "px";
    } else {
        header.style.position = "static";
        header.style.transform = "translateX(0%)";
        cards.style.marginTop = 0 + "px";
    }
}

closeBtn.addEventListener("click", () => {
    details.classList.add('d-none');
});
if (window.location.pathname === "/") {
    getGame("mmorpg");
    navAnchors[0].classList.add("active");
} else {
    navAnchors[0].classList.remove("active");
}

Array.from(navAnchors).forEach((anchor, index, array) => {
    anchor.addEventListener("click", async (e) => {
        console.log(e.target.innerText);
        getGame(e.target.innerText);
        array[index].classList.add("active");
        array.forEach((item) => {
            if (item.innerText !== e.target.innerText) {
                item.classList.remove("active");
            }
        })
    })
})
async function getGame(category) {
    const GameItem = new Game(`${category}`);
    const GamesInfo = await GameItem.getGame();
    const displayUi = new UiDisplay();
    displayUi.displayHomeCards(CardContainer, GamesInfo);
}





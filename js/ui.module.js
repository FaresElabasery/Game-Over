import GameDetails from "./details.module.js";
const details = document.querySelector("#details");

export default class UiDisplay {
    constructor() {}

    displayHomeCards(elementContainer, gamesArray) {
        let cartona = '';
        for (let i = 0; i < gamesArray.length; i++) {
            const game = gamesArray[i];
            // Fallback for missing description
            const shortDesc = game.short_description ? game.short_description.split(' ', 8).join(' ') : 'No description available.';

            cartona += `
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card text-start border border-1 border-dark bg-transparent text-light h-100" onclick="DisplayDetailsFunc(${game.id})">
                        <img class="card-img-top p-3" src="${game.thumbnail}" alt="${game.title}"  loading="lazy" />
                        <div class="card-body p-3">
                            <div class="card-title d-flex justify-content-between fs-14">
                                <span>${game.title}</span>
                                <span class="bg-primary py-1 px-2 rounded-2 fs-12 fw-bold">Free</span>
                            </div>
                            <p class="card-text fs-14 text-center opacity-50">
                                ${shortDesc}
                            </p>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <span class="bg-dark badge fs-10 fw-bold">${game.genre}</span>
                            <span class="bg-dark badge fs-10 fw-bold">${game.platform}</span>
                        </div>
                    </div>
                </div>`;
        }
        elementContainer.innerHTML = cartona;
        
    }

    displayCardDetails(elementContainer, gameDetails) {
        let cartona = `
            <div class="col-md-4">
                <img src="${gameDetails.thumbnail}" alt="game photo" class="w-100">
            </div>
            <div class="col-md-8">
                <h3>Title: ${gameDetails.title}</h3>
                <ul class="list-unstyled">
                    <li>Category: <span class="badge bg-info text-dark mb-3">${gameDetails.genre}</span></li>
                    <li>Platform: <span class="badge bg-info text-dark mb-3">${gameDetails.platform}</span></li>
                    <li>Status: <span class="badge bg-info text-dark">${gameDetails.status}</span></li>
                </ul>
                <p class="lead fs-14">
                    ${gameDetails.description}
                </p>
                <a href="${gameDetails.freetogame_profile_url}" target="_blank" class="btn btn-outline-warning text-white">Show Game</a>
            </div>`;
        elementContainer.innerHTML = cartona;
    }
}

async function DisplayDetailsFunc(id) {
    const detailsContainer = document.querySelector("#detailsContainer");
    const gameDetails = new GameDetails(id);
    const detailsData = await gameDetails.getGameDetails();

    const ui = new UiDisplay();
    ui.displayCardDetails(detailsContainer, detailsData);

    details.classList.remove('d-none');
}

// Make the function globally accessible
window.DisplayDetailsFunc = DisplayDetailsFunc;

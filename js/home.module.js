export default class Game {
    constructor(category="mmorpg") {
        this.category = category;
    }
    async getGame() {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6f85d090abmsh5b9892829946400p1eaab5jsn69e4cb29d3b5',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            let lenArray = result.length;
            console.log(lenArray);
            return result ;
        } catch (error) {
            console.error(error);
        }
    }
}
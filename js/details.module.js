export default class GameDetails {
    constructor(id) {
        this.id = id;
    }
    async getGameDetails() {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`;
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
            return result;
        } catch (error) {
            console.error(error);
        }
    }
}
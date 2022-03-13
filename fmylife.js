// Generate random FML by danrfq

const axios = require("axios");
const he = require("he");
const js_soup = require("JSSoup").default;

function generateFML() {
    axios.get("https://fmylife.com/random")
    .then(function (response) {
        const data = new js_soup(response.data);
        const author = data.find("p", ['text-blue-300', 'text-sm', 'mt-2']).text.split(" - ")[0].substring(4);
        const fml = he.decode(data.find("a", ["block", "text-blue-500", "my-4"]).text.slice(0, -4));

        console.log(`FML by ${author}`);
        console.log(fml);
    })
    .catch(function (error) {
        console.log(error);
    })
}

generateFML()
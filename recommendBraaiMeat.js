const {isMeatAvailable, getCookingTime} = require("./braaiMeat.js");
const {
    getCookingTimePreference,
    isCookingTimeMatch,
} = require("./prepTime.js");

function recommendBraaiMeat() {
    preferredMeat = "steak"
    if (
        isMeatAvailable(preferredMeat) &&
        isCookingTimeMatch(getCookingTime(preferredMeat), getCookingTimePreference())
    ) {
        console.log(
            `Fire up the braai! Your perfect choice is ${preferredMeat}.`
        );
    } else if (!isMeatAvailable(preferredMeat)) {
        const availableMeat = getAvailableMeat();
        console.log(
            `Sorry, we're out of ${preferredMeat} today. How about some delicious ${availableMeat} instead?`
        );
    } else {
        console.log(
            `${preferredMeat} might take a bit longer than your preference. Consider a quicker option like ${getAvailableMeat()}.`
        );
    }
}

function getAvailableMeat() {
    const boereworsAvailable = true;
    const steakAvailable = false;

    if (boereworsAvailable) {
        return "boerewors";
    } else if (steakAvailable) {
        return "steak";
    } else {
        return "Sorry, no braai meat available today!";
    }
}

recommendBraaiMeat();

const { isMeatAvailable, getCookingTime } = require('./braaiMeat.js');
const { getCookingTimePreference, isCookingTimeMatch } = require('./prepTime.js');

function recommendBraaiMeat() {
    const cookingTimePreference = getCookingTimePreference();
  
    if (isMeatAvailable(preferredMeat) && isCookingTimeMatch(getCookingTime(preferredMeat), cookingTimePreference)) {
      console.log(`Fire up the braai! Your perfect choice is ${preferredMeat}.`);
    } else if (!isMeatAvailable(preferredMeat)) {
      // Find an alternative based on availability (implementation omitted for brevity)
      const availableMeat = getAvailableMeat();
      console.log(`Sorry, we're out of ${preferredMeat} today. How about some delicious ${availableMeat} instead?`);
    } else {
      console.log(`${preferredMeat} might take a bit longer than your preference. Consider a quicker option like steak.`);
    }
  }
  
  function getAvailableMeat() {
    // Find available meat from simulated inventory (implementation omitted for brevity)
    if (boereworsAvailable) {
      return "boerewors";
    } else if (steakAvailable) {
      return "steak";
    } else {
      return "Sorry, no braai meat available today!";
    }
  }
  
  recommendBraaiMeat();
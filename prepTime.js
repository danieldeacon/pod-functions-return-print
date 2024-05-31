function getCookingTimePreference(){
    
    let timeOfDay = new Date().getHours();

    if (timeOfDay < 12){
        return "quick";
    }
    else{
        return "medium";
    }

}

function isCookingTimeMatch(cookingTime, preference){

    if (cookingTime === preference){
        return true;
    }
    else{
        return false;
    }
}

module.exports = {getCookingTimePreference, isCookingTimeMatch};

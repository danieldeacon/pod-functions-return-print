function isMeatAvailable(meatSelection){
    let boereworsAvailable = true;
    let braaiChickenAvailable = true;
    let steakAvailable = false;

    if (meatSelection === "boerewors" && boereworsAvailable){
        return true;
    }else if (meatSelection === "braai chicken" && braaiChickenAvailable){
        return true;
    }else if (meatSelection === "steak" && steakAvailable){
        return true;
    }else{
        return false;
    }
}

function getCookingTime(meat){
    let boereworsCookingTime = "quick";
    let steakCookingTime = "medium";
    let braaiChickenCookingTime = "long"

    if (meat === "boerewors"){
        return boereworsCookingTime;
    }else if(meat === "braai chicken"){
        return braaiChickenCookingTime;
    }else if(meat === "steak"){
        return steakCookingTime;
    }else{
        return "Invalid"
    }

}

module.exports = {isMeatAvailable, getCookingTime};
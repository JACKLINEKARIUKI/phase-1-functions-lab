const headquarters = 42;
let distanceInBlocks;
let distanceTravelled;

function distanceFromHqInBlocks(pickUpLocation){
    if (pickUpLocation > headquarters){
       distanceInBlocks = pickUpLocation - headquarters;
    }
    else if (pickUpLocation < headquarters){
        distanceInBlocks = headquarters - pickUpLocation;
    }

    return distanceInBlocks;
}

function distanceFromHqInFeet(pickUpLocation){
   let distanceInFeet = distanceFromHqInBlocks(pickUpLocation) * 264 ;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination){
    if (destination > start){
        distanceTravelled = (destination - start) * 264;
    }
    else if (destination < start){
        distanceTravelled = (start - destination) * 264;
    }
    return distanceTravelled;
}

function calculatesFarePrice(start, destination){
    distanceTravelledInFeet(start, destination);
    if (distanceTravelled < 400){
        return 0;
    }
    else if (distanceTravelled > 400 && distanceTravelled <= 2000){
        return (distanceTravelled - 400) * 0.02;
    }
    else if (distanceTravelled > 2000 && distanceTravelled <= 2500){
        return 25;
    }
    else if (distanceTravelled > 2500){
        return 'cannot travel that far';
    }
}
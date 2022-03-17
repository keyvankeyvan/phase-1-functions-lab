// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return(Math.abs(42 - street));
}

function distanceFromHqInFeet(street){
    return(264 * Math.abs(street - 42));
}

function distanceTravelledInFeet(start, destination){
    return(264 * Math.abs(start - destination));
}

//console.log(distanceTravelledInFeet(0,5));

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    let fare;

    if(distance < 400){
        fare = 0;
    }
    else if (distance >= 400 && distance <= 2000){
        fare = (distance - 400) * .02;
    }
    else if (distance > 2000 && distance <= 2500){
        fare = 25;
    }
    else{
        fare = 'cannot travel that far';
    }

    return (fare);
}

//console.log(calculatesFarePrice(0,5));
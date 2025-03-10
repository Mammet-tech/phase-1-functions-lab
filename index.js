// Code your solution in this file!
const hqStreet = 42;
function distanceFromHqInBlocks(street){
return Math.abs (street-hqStreet)
}
function distanceFromHqInFeet(street){
  return Math.abs (street-hqStreet) * 264;
}
function distanceTravelledInFeet(start, destination){
  return Math.abs (destination-start) * 264;
}
function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination);
  if (distance<=400){
    return 0;
  } else if (distance>400 && distance<=2000){
    return (distance-400) *0.02;
  } else if (distance>2000 && distance<2500){
    return 25;
  } else if (distance>2500){
    return 'cannot travel that far';
  }
}
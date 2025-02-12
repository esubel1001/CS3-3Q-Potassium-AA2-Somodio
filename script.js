function exponentialPopulationGrowth(){
    let initialPopulation = parsefloat(prompt("Input the value for the initial population: "));
    let rateOfGrowth = parsefloat(prompt("Input the value for the rate of growth: "));
    let timeInHours = parsefloat(prompt("Input the value for the time in hours: "));
  
    let finalPopulation = Math.round(initialPopulation * Math.pow(Math.E, (rateOfGrowth * timeInHours)));
    
    let locationOfMonster = prompt("Input the location of the monster: ");
    let nameOfMonster = prompt("Input the name of the monster: ");
    
    let nameAndLocationOfMonster = locationOfMonster.concat(" ", nameOfMonster).toUpperCase();
    
    document.getElementById("result").innerHTML = "After " + timeInHours + " hours, the population of " + nameAndLocationOfMonster + " has increased to " + finalPopulation;
}

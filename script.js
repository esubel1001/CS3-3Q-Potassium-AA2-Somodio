function exponential(){
    let initialPopulation = parsefloat(prompt("Input the value of the initial population: "));
    let rateOfGrowth = parsefloat(prompt("Input the value of rate of growth: "));
    let timeInHours = parsefloat(prompt("Input the value of time in hours: "));

    let finalPopulation = Math.round(initialPopulation * Math.pow(Math.E, (rateOfGrowth*timeInHours)));

    let locationOfMonster = prompt("Input location of the monster: ");
    let nameOfMonster = prompt("Input name of the monster: ");

    let nameAndLocationOfMonster = locationOfMonster.concat(" ", nameOfMonster).toUpperCase();

    document.getElementById("result").innerHTML = "  After  " + timeInHours + "  hours, the population of  " + nameAndLocationOfMonster + "  has risen to  " + finalPopulation;
}  b
function exponential () {
    let initialPopulation = parseFloat (prompt("Enter the value of the initial population: "));
    let rateOfGrowth = parseFloat (prompt("Enter the value of rate of growth: "));
    let timeInHours = parseFloat(prompt("Enter the value of time in hours: "));

    let finalPopulation = Math.round(initialPopulation * Math.pow(Math.E, (rateOfGrowth * timeInHours)));

    let locationOfMonster = prompt("Enter location of the monster: ");
    let nameOfMonster = prompt("Enter name of the monster: ");
    let nameAndLocationOfMonster = locationOfMonster.concat(" ", nameOfMonster).toUpperCase();

    document.getElementById("result").innerHTML = "  After  " + timeInHours + "  hours, the population of  " + nameAndLocationOfMonster + "  has risen to  " + finalPopulation;
} 

function contactAlert() {
  alert("Out of function!");
}

//when user press contact me button this is the message they get


function guessAge()
{
  // 1. Hämta talet som användaren skrev i rutan

  let userGuess = document.getElementById("ageInput").value;


  // 2. Stellas riktiga ålder
  let correctAge = 10;

  // 3. Kolla om gissningen är rätt eller fel med if/else
  if (userGuess == correctAge)

  {
    document.getElementById("resultText").innerText = "YES!";
  }
  else
  {
    document.getElementById("resultText").innerText = "Wrong answer!";
  }
}

const Antonio = document.getElementById("player1");
const Devil = document.getElementById("player2");

const ATTACK_VALUE = 10;
const DEVIL_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 16;
const HEAL_VALUE = 20;

const enteredValue = prompt(
  "How much health would You like to have kind sir?",
  "100"
);

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentAntonioHealth = chosenMaxLife;
let currentDevilHealth = chosenMaxLife;

function jump() {
  if (Antonio.classList != "animate") {
    Devil.classList.remove("animateD");
    Antonio.classList.add("animate");
    setTimeout(function () {
      Antonio.classList.remove("animate");
      Devil.classList.add("animateD");
    }, 2000);
  }
}

function happy() {
  if (Antonio.classList != "animateH") {
    Antonio.classList.add("animateH");
    setTimeout(function () {
      Antonio.classList.remove("animateH");
      healAntonio();
    }, 2000);
  }
}

function reset() {
  currentAntonioHealth = chosenMaxLife;
  currentDevilHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const antonioDamage = dealAntonioDamage(DEVIL_ATTACK_VALUE);
  currentAntonioHealth -= antonioDamage;

  if (currentAntonioHealth <= 0 && currentDevilHealth > 0) {
    alert("You have lost to the devil, Your soul shall burn eternaly.");
  } else if (currentDevilHealth <= 0 && currentAntonioHealth > 0) {
    alert("You have beaten the devil, congratulations.");
  } else if (currentAntonioHealth <= 0 && currentDevilHealth <= 0) {
    alert("It seems You are tied.");
  }

  if (currentDevilHealth < 0 || currentAntonioHealth <= 0) {
    reset();
  }
}

function attackDevil(mode) {
  let maxDamage;
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealDevilDamage(maxDamage);
  currentDevilHealth -= damage;
  endRound();
}

function attackHandler() {
  jump();
  setTimeout(function() {
    attackDevil("ATTACK");
  },4000);
}

function strongAttackHandler() {
    jump();
    setTimeout(function() {
        attackDevil("STRONG_ATTACK");
    }, 4000);
}

function healAntonio() {
  let healValue;

  if (currentAntonioHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than Your initial health");
    healValue = chosenMaxLife - currentAntonioHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentAntonioHealth += healValue;
  endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", happy);

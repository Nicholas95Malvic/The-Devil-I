antonioHealthBar = document.getElementById("antonio-health");
theDevilsHealthBar = document.getElementById("devil-health");

const attackBtn = document.getElementById("attack");
const strongAttackBtn = document.getElementById("strong-attack");
const healBtn = document.getElementById("heal");

function adjustHealthBars(maxLife) {
  antonioHealthBar.value = maxLife;
  antonioHealthBar.max = maxLife;
  theDevilsHealthBar.value = maxLife;
  theDevilsHealthBar.max = maxLife;
}

function dealDevilDamage(damage) {
  const dealtDamage = Math.random() * damage;
  theDevilsHealthBar.value -= dealtDamage;
  return dealtDamage;
}

function dealAntonioDamage(damage) {
  const dealtDamage = Math.random() * damage;
  antonioHealthBar.value -= dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  antonioHealthBar.value += healValue;
}

function resetGame(value) {
  theDevilsHealthBar.value = value;
  antonioHealthBar.value = value;
}

function setHealth(health) {
  antonioHealthBar.value = health;
}

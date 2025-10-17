import "./style.css";

document.body.innerHTML = "";
const app = document.createElement("div");
document.body.append(app);

//Step 1
const button = document.createElement("button");
button.textContent = "🔥";
app.append(button);

//Step 2
let counter: number = 0;
let growthRate = 0;
let upgrade1Count = 0;
let upgrade2Count = 0;
let upgrade3Count = 0;
const counterDiv = document.createElement("div");
counterDiv.textContent = `Total Aura: ${counter}`;
app.append(counterDiv);
button.addEventListener("click", () => {
  counter += 100;
  counterDiv.textContent = `Total Aura: ${counter}`;
});

const rateDiv = document.createElement("div");
rateDiv.textContent = `Passive Aura Gain: ${growthRate.toFixed(1)} Aura/sec`;
app.append(rateDiv);
const countDiv = document.createElement("div");
countDiv.textContent =
  `✨Glow Up:${upgrade1Count} 💪Lift Weights:${upgrade2Count} 😎Increase Charisma:${upgrade3Count}`;
app.append(countDiv);
//Step 3
/*
setInterval(() => {
counter += 1;
counterDiv.textContent = `Total Aura: ${counter}`;
}, 1000);
*/

//Step 4
let lastTime = performance.now();

function update(time: number) {
  const delta = (time - lastTime) / 1000;
  lastTime = time;
  countDiv.textContent =
    `✨Glow Up:${upgrade1Count} 💪Lift Weights:${upgrade2Count} 😎Increase Charisma:${upgrade3Count}`;
  counter += growthRate * delta;
  counterDiv.textContent = `Total Aura: ${counter.toFixed(1)}`;
  rateDiv.textContent = `Growth Rate: ${growthRate.toFixed(1)} Aura/sec`;

  if (counter >= 10) {
    upgradeButton.disabled = false;
  } else {
    upgradeButton.disabled = true;
  }

  if (counter >= 100) {
    upgradeButton2.disabled = false;
  } else {
    upgradeButton2.disabled = true;
  }

  if (counter >= 1000) {
    upgradeButton3.disabled = false;
  } else {
    upgradeButton3.disabled = true;
  }
  requestAnimationFrame(update);
}
requestAnimationFrame(update);

//Step 5
const upgradeButton = document.createElement("button");
upgradeButton.textContent = "✨: +0.1 Passive Aura (10 Aura Points)";
upgradeButton.disabled = true;
app.append(upgradeButton);

upgradeButton.addEventListener("click", () => {
  if (counter >= 10) {
    counter -= 10;
    growthRate += 0.1;
    upgrade1Count += 1;
    counterDiv.textContent = `Total Aura: ${counter.toFixed(1)}`;
  }
});

//Step 6
const upgradeButton2 = document.createElement("button");
upgradeButton2.textContent = "💪: +2 Passive Aura (100 Aura Points)";
upgradeButton2.disabled = true;
app.append(upgradeButton2);

upgradeButton2.addEventListener("click", () => {
  if (counter >= 100) {
    counter -= 100;
    growthRate += 2;
    upgrade2Count += 1;
    counterDiv.textContent = `Total Aura: ${counter.toFixed(1)}`;
  }
});

const upgradeButton3 = document.createElement("button");
upgradeButton3.textContent = "😎: +50 Passive Aura (1000 Aura Points)";
upgradeButton3.disabled = true;
app.append(upgradeButton3);

upgradeButton3.addEventListener("click", () => {
  if (counter >= 1000) {
    counter -= 1000;
    growthRate += 50;
    upgrade3Count += 1;
    counterDiv.textContent = `Total aura: ${counter.toFixed(1)}`;
  }
});

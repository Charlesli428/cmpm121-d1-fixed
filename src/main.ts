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
const counterDiv = document.createElement("div");
counterDiv.textContent = `Total Aura: ${counter}`;
app.append(counterDiv);
button.addEventListener("click", () => {
  counter += 1;
  counterDiv.textContent = `Total Aura: ${counter}`;
});

//Step 3
/*
setInterval(() => {
  counter += 1;
  counterDiv.textContent = `Total Aura: ${counter}`;
}, 1000);
*/

//Step 4
let lastTime = performance.now();
let growthRate = 0;

function update(time: number) {
  const delta = (time - lastTime) / 1000;
  lastTime = time;

  counter += growthRate * delta;
  counterDiv.textContent = `Total Aura: ${counter.toFixed(1)}`;
  if (counter >= 10) {
    upgradeButton.disabled = false;
  } else {
    upgradeButton.disabled = true;
  }

  requestAnimationFrame(update);
}
requestAnimationFrame(update);

//Step 5
const upgradeButton = document.createElement("button");
upgradeButton.textContent = "Buy Upgrade (10 Aura Points)";
upgradeButton.disabled = true;
app.append(upgradeButton);

upgradeButton.addEventListener("click", () => {
  if (counter >= 10) {
    counter -= 10;
    growthRate += 1;
    counterDiv.textContent = `Total Aura: ${counter.toFixed(1)}`;
  }
});

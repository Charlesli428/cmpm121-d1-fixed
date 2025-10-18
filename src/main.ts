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
interface Item {
  name: string;
  emoji: string;
  cost: number;
  rate: number;
  count: number;
  button?: HTMLButtonElement;
  description: string;
}
const upgrades: Item[] = [
  {
    name: "Glow Up",
    emoji: "✨",
    cost: 10,
    rate: 0.1,
    count: 0,
    description: "Polish your vibe and start radiating confidence.",
  },
  {
    name: "Lift Weights",
    emoji: "💪",
    cost: 100,
    rate: 2,
    count: 0,
    description: "Pump iron to boost your physical aura strength.",
  },
  {
    name: "Increase Charisma",
    emoji: "😎",
    cost: 1000,
    rate: 50,
    count: 0,
    description: "Charm everyone with effortless social glow.",
  },
];

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
const shopDiv = document.createElement("div");
app.append(shopDiv);
upgrades.forEach((item) => {
  const btn = document.createElement("button");
  btn.textContent =
    `${item.emoji}: +${item.rate} Passive Aura (${item.cost} Aura Points)`;
  btn.disabled = true;
  shopDiv.append(btn);

  item.button = btn;

  btn.addEventListener("click", () => {
    if (counter >= item.cost) {
      counter -= item.cost;
      growthRate += item.rate;
      item.count += 1;
      item.cost *= 1.15;
      counterDiv.textContent = `Total Aura: ${counter.toFixed(1)}`;
      btn.textContent = `${item.emoji}: +${item.rate} Passive Aura (${
        item.cost.toFixed(0)
      } Aura Points)`;
    }
  });
});
countDiv.textContent = upgrades
  .map((u) => `${u.emoji}${u.name}:${u.count}`)
  .join(" ");
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
  /*countDiv.textContent =
    `✨Glow Up:${upgrade1Count} 💪Lift Weights:${upgrade2Count} 😎Increase Charisma:${upgrade3Count}`;
  upgradeButton.textContent =
    `✨: +0.1 Passive Aura (${upgrade1Cost} Aura Points)`;
  upgradeButton2.textContent =
    `💪: +2 Passive Aura (${upgrade2Cost} Aura Points)`;
  upgradeButton3.textContent =
    `😎: +50 Passive Aura (${upgrade3Cost} Aura Points)`;
  */
  counter += growthRate * delta;
  counterDiv.textContent = `Total Aura: ${counter.toFixed(1)}`;
  rateDiv.textContent = `Growth Rate: ${growthRate.toFixed(1)} Aura/sec`;

  upgrades.forEach((item) => {
    if (item.button) {
      item.button.disabled = counter < item.cost;
    }
  });
  requestAnimationFrame(update);
}
requestAnimationFrame(update);

//Step 5
/*const upgradeButton = document.createElement("button");
upgradeButton.textContent =
  `✨: +0.1 Passive Aura (${upgrade1Cost} Aura Points)`;
upgradeButton.disabled = true;
app.append(upgradeButton);

upgradeButton.addEventListener("click", () => {
  if (counter >= upgrade1Cost) {
    counter -= upgrade1Cost;
    upgrade1Cost *= 1.15;
    growthRate += 0.1;
    upgrade1Count += 1;
    counterDiv.textContent = `Total Aura: ${counter.toFixed(1)}`;
  }
});

//Step 6
const upgradeButton2 = document.createElement("button");
upgradeButton2.textContent =
  `💪: +2 Passive Aura (${upgrade2Cost} Aura Points)`;
upgradeButton2.disabled = true;
app.append(upgradeButton2);

upgradeButton2.addEventListener("click", () => {
  if (counter >= upgrade2Cost) {
    counter -= upgrade2Cost;
    upgrade2Cost *= 1.15;
    growthRate += 2;
    upgrade2Count += 1;
    counterDiv.textContent = `Total Aura: ${counter.toFixed(1)}`;
  }
});

const upgradeButton3 = document.createElement("button");
upgradeButton3.textContent =
  `😎: +50 Passive Aura (${upgrade3Cost} Aura Points)`;
upgradeButton3.disabled = true;
app.append(upgradeButton3);

upgradeButton3.addEventListener("click", () => {
  if (counter >= upgrade3Cost) {
    counter -= upgrade3Cost;
    upgrade3Cost *= 1.15;
    growthRate += 50;
    upgrade3Count += 1;
    counterDiv.textContent = `Total aura: ${counter.toFixed(1)}`;
  }
});
*/

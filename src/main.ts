import "./style.css";

document.body.innerHTML = "";
const app = document.createElement("div");
document.body.append(app);

// Step 1
const button = document.createElement("button");
button.textContent = "🔥";
button.classList.add("main-button");
app.append(button);

// Step 2
let auraCount: number = 0;
let passiveAura = 0;

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
  {
    name: "Get Rich",
    emoji: "💸",
    cost: 10000,
    rate: 300,
    count: 0,
    description: "Wealth amplifies your aura—luxury radiates power.",
  },
  {
    name: "Get Famous",
    emoji: "🌟",
    cost: 100000,
    rate: 1500,
    count: 0,
    description: "Your name is well known everywhere.",
  },
];

// Aura counter display
const counterDiv = document.createElement("div");
counterDiv.textContent = `Total Aura: ${auraCount}`;
app.append(counterDiv);

// Click to gain aura
button.addEventListener("click", () => {
  auraCount += 100;
  counterDiv.textContent = `Total Aura: ${auraCount}`;
});

// Passive rate display
const rateDiv = document.createElement("div");
rateDiv.textContent = `Passive Aura Gain: ${passiveAura.toFixed(1)} Aura/sec`;
app.append(rateDiv);

// Owned upgrades display
const countDiv = document.createElement("div");

// Shop
const shopDiv = document.createElement("div");
app.append(shopDiv);

// Build shop buttons
upgrades.forEach((item) => {
  const upgradeButton = document.createElement("button");
  upgradeButton.textContent =
    `${item.emoji}: +${item.rate} Passive Aura (${item.cost} Aura Points) - ${item.description}`;
  upgradeButton.disabled = true;
  shopDiv.append(upgradeButton);

  item.button = upgradeButton;

  upgradeButton.addEventListener("click", () => {
    if (auraCount >= item.cost) {
      auraCount -= item.cost;
      passiveAura += item.rate;
      item.count += 1;
      item.cost *= 1.15;

      counterDiv.textContent = `Total Aura: ${auraCount.toFixed(1)}`;

      upgradeButton.textContent = `${item.emoji}: +${item.rate} Passive Aura (${
        item.cost.toFixed(
          0,
        )
      } Aura Points)`;
    }
  });
});

// Show counts of each purchased upgrade
countDiv.textContent = upgrades
  .map((u) => `${u.emoji}${u.name}:${u.count}`)
  .join(" ");
app.append(countDiv);

// Game loop
let lastTime = performance.now();

function update(time: number) {
  const delta = (time - lastTime) / 1000;
  lastTime = time;

  auraCount += passiveAura * delta;

  counterDiv.textContent = `Total Aura: ${auraCount.toFixed(1)}`;
  rateDiv.textContent = `Growth Rate: ${passiveAura.toFixed(1)} Aura/sec`;

  upgrades.forEach((item) => {
    if (item.button) {
      item.button.disabled = auraCount < item.cost;
    }
  });

  requestAnimationFrame(update);
}

requestAnimationFrame(update);

import "./style.css";

document.body.innerHTML = "";
const app = document.createElement("div");
document.body.append(app);

const button = document.createElement("button");
button.textContent = "🔥";
app.append(button);

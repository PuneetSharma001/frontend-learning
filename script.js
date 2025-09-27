const totalDays = 3; // Update this when you add new folders
const container = document.getElementById("days-container");

for (let i = 1; i <= totalDays; i++) {
  const card = document.createElement("a");
  card.href = `day-${i}/`; // Link to your folder
  card.className = "day-card";
  card.innerHTML = `<h2>DAY ${i}</h2><p>Click to explore</p>`;
  container.appendChild(card);
}

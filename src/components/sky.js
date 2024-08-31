const COLORS = ["#fff2", "#fff4", "#fff7", "#fff4"]

const generateSky = (size, selector, totalStars, duration) => {
  const layer = [];

  for (let i = 0; i < totalStars; i++) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`)
  }

  const content = document.querySelector(selector);
  content.style.setProperty("--sky-layer", layer.join(","));
  content.style.setProperty("--size", size);
  content.style.setProperty("--duration", duration);
}

generateSky("4px", ".sky-1", 200, "30s");
generateSky("5px", ".sky-2", 100 , "25s");
generateSky("8px", ".sky-3", 25, "20s");
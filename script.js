window.onload = function () {
  const heading = document.getElementById("animated-heading");
  const text = heading.innerText;
  const letters = text.split("");
  heading.innerText = "";

  letters.forEach((letter, i) => {
    const span = document.createElement("span");
    span.innerHTML = letter === " " ? "&nbsp;" : letter;
    span.style.animationDelay = `${i * 0.4}s`;
    heading.appendChild(span);
  });
};

const headerTitle = document.getElementById("heading");
const headerPara = document.getElementById("para");

window.addEventListener("load", () => {
    setInterval(() => {
        headerTitle.style.left = 0;
        headerTitle.style.position = "relative";
        headerTitle.style.opacity = 1;
        headerTitle.style.textShadow = "3px 3px 0px rgb(34, 213, 25)";
        headerTitle.style.animation = "oop 2s 3.5s linear forwards infinite"
    }, 1000);

    setInterval(() => {
        headerPara.style.left = 0;
        headerPara.style.position = "relative";
        headerPara.style.opacity = 1;
    }, 1500);
});


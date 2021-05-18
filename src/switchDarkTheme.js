// Add event listener for toggle darkmode
document.getElementById("toggle-dark").onclick = () => {
    let htmlTag = document.getElementById("html");

    if (htmlTag.className == "dark") {
        htmlTag.className = "";
        localStorage.theme = "";
    } else {
        htmlTag.className = "dark";
        localStorage.theme = "dark";
    }
};

if (localStorage.theme != "undefined") {
    document.getElementById("html").className = localStorage.theme;
}

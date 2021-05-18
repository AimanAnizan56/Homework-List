var currentIndex;
function getData(path) {
    /* Promise */
    fetch(path)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            for (let index = 0; index < data.length; index++) {
                const obj = data[index];

                addCardElement(obj, index);
                currentIndex = index;
            }
        })
        .catch((err) => console.log(err));
}

getData("data.JSON");

function removeElement(elem) {
    document.getElementById(elem).remove();
}

function addCardElement(obj, index) {
    /* Create main div */
    let div = document.createElement("div");
    div.className = "border-2 rounded-lg border-gray-300 p-3 m-2 max-w-md";
    div.id = "card" + index;

    /* Create homework name */
    let h2 = document.createElement("h2");
    h2.className =
        "text-xl pl-2 font-semibold text-gray-600 dark:text-gray-300 flex justify-between items-center";
    div.appendChild(h2);

    let span1 = document.createElement("span");
    span1.className = "inline-block";
    span1.appendChild(document.createTextNode(obj.name));
    span1.id = "name" + index;
    h2.appendChild(span1);

    /* Create close icon */
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 20 20");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("class", "h-7 w-7 transition-all transform hover:rotate-90 cursor-pointer");
    svg.setAttribute("onclick", 'removeElement("card' + index + '")');
    h2.appendChild(svg);

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute(
        "d",
        "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    );
    path.setAttribute("clip-rule", "evenodd");
    svg.appendChild(path);

    /* Create horizontal rule*/
    let hr = document.createElement("hr");
    hr.className = "bg-black my-2";
    div.appendChild(hr);

    document.getElementById("root").appendChild(div);

    /* Create date */
    let span2 = document.createElement("span");
    span2.className =
        "text-md inline-block py-1 px-3 border-2 my-1 rounded-full text-gray-500 dark:text-gray-300";

    let span3 = document.createElement("span");
    span3.appendChild(document.createTextNode("Date : "));

    let span4 = document.createElement("span");
    span4.id = "date" + index;
    span4.appendChild(document.createTextNode(obj.date));

    span2.appendChild(span3);
    span2.appendChild(span4);

    div.appendChild(span2);
}



let out = " "
for (i = 1; i <= 8; i++) {
    for (j = 1; j <= 8; j++) {
        ((i + j) % 2 == 0 ?
            out += "3" :
            out += "#")
    }
    out += "<br>"

}
console.log(out);

var head = document.querySelector(".head")
var heading = "<h1> CHESSBOARD </h1>"
head.insertAdjacentHTML("afterbegin",heading) ;

let center = document.createElement("center");
let table = document.createElement("table")

for (i = 1; i <= 8; i++) {
    let tr = document.createElement("tr")
    for (j = 1; j <= 8; j++) {

        let td = document.createElement("td")

        if((i + j) % 2 == 0 ){
            td.setAttribute("class", "cell white");
            tr.appendChild(td);
            console.log(td)
        }
        else {
            td.setAttribute("class", "cell black");
            tr.appendChild(td);
            console.log(td)
        }
    }
    table.appendChild(tr);
}
center.appendChild(table);

table.setAttribute("cellspacing", "0px")
document.querySelector(".main").appendChild(center);


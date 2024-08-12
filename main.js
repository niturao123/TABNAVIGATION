let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")

let para1 = document.querySelector("#para1")
let para2 = document.querySelector("#para2")
let para3 = document.querySelector("#para3")


button1.addEventListener("click", () => {
    if (para1.style.display === "none") {
        para1.style.display = "block";
        para2.style.display = "none";
        para3.style.display = "none"
    } else {
        para1.style.display = "none";
    }

}
)

button2.addEventListener("click", () => {
    if (para2.style.display === "none") {
        para2.style.display = "block";
        para1.style.display = "none"
        para3.style.display = "none"
    } else {
        para2.style.display = "none";
    }

})
button3.addEventListener("click", () => {
    if (para3.style.display === "none") {
        para3.style.display = "block";
        para1.style.display = "none"
        para2.style.display = "none"


    } else {
        para3.style.display = "none";
    }
})

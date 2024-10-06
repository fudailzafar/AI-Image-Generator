var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");

for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
    }
}
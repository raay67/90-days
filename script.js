const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

// Function to update label style based on checkbox state
function updateLabelStyle(checkBox) {
    let ID = checkBox.getAttribute("id");
    let labelElement = document.querySelector(`label[for="${ID}"]`);

    if (checkBox.checked) {
        labelElement.style.textDecoration = "line-through";
    } else {
        labelElement.style.textDecoration = "none";
    }
}

checkBoxes.forEach((checkBox) => {
    updateLabelStyle(checkBox);

    checkBox.addEventListener("change", (e) => {
        updateLabelStyle(checkBox);
        saveToLocal(checkBox); 
    });
});

function saveToLocal(checkBox) {
    let ID = checkBox.getAttribute("id");
    localStorage.setItem(ID, checkBox.checked);
}

function loadFromLocal() {
    checkBoxes.forEach((checkBox) => {
        let ID = checkBox.getAttribute("id");
        let checked = localStorage.getItem(ID);

        if (checked === "true") {
            checkBox.checked = true;
        } else {
            checkBox.checked = false;
        }

        updateLabelStyle(checkBox); 
    });
}

document.addEventListener("DOMContentLoaded", loadFromLocal);

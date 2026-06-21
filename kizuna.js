const emailInput = document.querySelector("input");
const button = document.querySelector("button");

const popup = document.getElementById("popup");
const rankText = document.getElementById("rankText");
const closePopup = document.getElementById("closePopup");
const okBtn = document.getElementById("okBtn");

// Starting number of waitlisters
let totalWaitlisters = localStorage.getItem("waitlisters");

if (totalWaitlisters === null) {
    totalWaitlisters = 30000;
} else {
    totalWaitlisters = Number(totalWaitlisters);
}

button.addEventListener("click", function () {

    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    // Increase waitlist count
    totalWaitlisters++;

    localStorage.setItem("waitlisters", totalWaitlisters);

    rankText.innerHTML = `Your waitlist rank is <strong>#${totalWaitlisters.toLocaleString()}</strong>.`;

    popup.style.display = "flex";

    emailInput.value = "";
});

closePopup.onclick = function () {
    popup.style.display = "none";
}

okBtn.onclick = function () {
    popup.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
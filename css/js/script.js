// Placeholder typing animation
const input = document.querySelector('input');
const text = "Search for restaurant, cuisine or a dish";
let i = 0;

function typePlaceholder() {
    if (i <= text.length) {
        input.placeholder = text.slice(0, i);
        i++;
        setTimeout(typePlaceholder, 80);
    }
}
typePlaceholder();

// Alert on pressing Enter
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const value = input.value.trim();
        if (value) {
            alert("Searching for: " + value);
        } else {
            alert("Please enter a search query.");
        }
    }
});

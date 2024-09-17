function showStory(storyNumber) {
    const storyText = document.getElementById('storyText');
    if (storyNumber === 1) {
        storyText.textContent = "Rating jarur dena madam kaisa lga surprise ❤️";
    } else if (storyNumber === 2) {
        storyText.textContent = "Rating jarur dena madam kaisa lga surprise ❤";
    } else if (storyNumber === 3) {
        storyText.textContent = "Rating jarur dena madam kaisa lga surprise ❤";
    }
}

// Function to show the birthday wish
function showWish() {
    const wish = document.getElementById('wish');
    wish.style.display = 'block';
}

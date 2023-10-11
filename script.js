// Get all the like buttons
const likeButtons = document.querySelectorAll(".like-btn");

// Iterate through each button and add a click event listener
likeButtons.forEach((button, index) => {
button.addEventListener("click", () => {
    // Find the corresponding like count and increment it
    const likeCount = document.querySelectorAll("h4")[index];
    const currentLikes = parseInt(likeCount.textContent);
    likeCount.textContent = `${currentLikes + 1} like(s)`;
});
});

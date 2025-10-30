// Get the HTML element where the date will be displayed
const dateDisplayElement = document.getElementById("current-date-display");

// Create a new Date object to get the current date
const currentDate = new Date();

// Format the date (e.g., "Monday, October 27, 2025")
const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Set the text content of the HTML element
dateDisplayElement.textContent = formattedDate;
// timer.js

// Set the date and time for the event (adjust as needed)
const eventDate = new Date('2023-12-01T18:00:00').getTime();

// Update the countdown every 1 second
const timer = setInterval(updateCountdown, 1000);

function updateCountdown() {
    // Get the current date and time
    const currentDate = new Date().getTime();

    // Calculate the time remaining until the event
    const timeRemaining = eventDate - currentDate;

    if (timeRemaining > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown on the webpage
        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        // If the event has passed, display a message
        document.getElementById('timer').innerHTML = 'The event has passed.';
        // Optionally, you can clear the interval to stop the countdown
        clearInterval(timer);
    }
}
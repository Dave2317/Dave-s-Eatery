//This code fulfils requirments 5.6(c) and 5.6(d)
function validateForm() 
{
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') 
	{
        alert('All fields are required');
    } 
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) 
	{
     alert('Please enter a valid email address');
     return false; // Prevent form submission
    }
	else 
	{
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }
}

document.addEventListener("DOMContentLoaded", function () 	
{
    // Get the current date and time
    var currentDate = new Date();

    // Format the date as desired
    var formattedDate = currentDate.toLocaleString("en-US", 
	{
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
    });

    // Update the span element with the formatted date
    var updateTimeElement = document.getElementById("update-time");
    if (updateTimeElement) 
	{
        updateTimeElement.textContent = formattedDate;
    }
});

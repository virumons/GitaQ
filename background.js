


const quotes = [
    "Be yourself; everyone else is already taken.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "So many books, so little time.",
    "A room without books is like a body without a soul.",
    "Life is what happens when you're busy making other plans."
];

// Function to update the time every second
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

// Function to display a random quote
function displayRandomQuote() {
    const lastQuote = localStorage.getItem('lastQuote');
    const lastQuoteDate = localStorage.getItem('lastQuoteDate');
    
    const now = new Date();
    const lastQuoteDateObj = lastQuoteDate ? new Date(lastQuoteDate) : null;
    
    // Check if 24 hours have passed
    if (!lastQuote || !lastQuoteDate || now - lastQuoteDateObj >= 24 * 60 * 60 * 1000) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const newQuote = `"${quotes[randomIndex]}"`;
        
        document.getElementById('quote').textContent = newQuote;
        
        // Save the new quote and date
        localStorage.setItem('lastQuote', newQuote);
        localStorage.setItem('lastQuoteDate', now.toISOString());
    } else {
        // Use the saved quote
        document.getElementById('quote').textContent = lastQuote;
    }
}

// Set a random quote and time when the page loads
displayRandomQuote();
updateTime();
setInterval(updateTime, 1000);

document.getElementById('logout').addEventListener("click", () => {
    if (confirm("Are you sure you want to reset the extension?")) {
        // Reset the localStorage and the quote will change on next reload
        localStorage.removeItem('lastQuote');
        localStorage.removeItem('lastQuoteDate');
        location.reload(); // Reload to reflect changes
    }
});







    
   

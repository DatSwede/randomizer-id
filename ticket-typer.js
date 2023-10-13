document.addEventListener("DOMContentLoaded", function() {

    // Function to generate a random string with the given pattern
    function generateRandomString() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';

        // Get two random letters
        for (let i = 0; i < 2; i++) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }

        // Get eight random numbers
        for (let i = 0; i < 8; i++) {
            result += Math.floor(Math.random() * 10).toString();
        }

        return result;
    }

    // Get the input field with id "ticket"
    const ticketInput = document.getElementById('ticket');
    if (ticketInput) {
        // Set the value of the input field to the random string
        ticketInput.value = generateRandomString();

        // Make the input field readOnly to prevent easy changes
        ticketInput.readOnly = true;

        // Add an event listener to reset value if someone tries to modify it
        ticketInput.addEventListener('input', function() {
            this.value = generateRandomString();
        });
    }
});

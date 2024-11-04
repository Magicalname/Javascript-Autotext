// List of different texts
const texts = [
    "Hello, this is the first message!",
    "Here’s another message.",
    "Here comes another message.",
    "Automated message No. 4",
    "Last message in the sequence."
];

// Select the input field and send button (replace with the actual IDs)
const inputField = document.getElementById("inputField");  // ID of the input field
const sendButton = document.getElementById("sendButton");  // ID of the send button

// Ask for the number of repetitions
const numberOfRepetitions = prompt("How many times should the list of texts be sent?");

// Function to send messages
async function sendMessages() {
    for (let i = 0; i < numberOfRepetitions; i++) {
        for (const text of texts) {
            // Write text into the input field
            inputField.value = text;

            // Simulate a click on the send button
            sendButton.click();

            // Wait time between messages (e.g., 1 second)
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    console.log("All texts have been sent the specified number of times.");
}

// Send messages
sendMessages();

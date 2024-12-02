const quotes = [
    "May your days be merry and bright!",
    "Joulun rauhaa ja iloa!",
    "It's the most wonderful time of the year!",
    "Rauhallista joulua!",
    "Wishing you a season of joy!",
    "Hyvää joulua!",
    "May your heart be light and your days be merry!",
    "Joulu on rakkauden aikaa!",
    "Peace on Earth, goodwill to all!",
    "Joulun taika on sydämessä!",
    "Have yourself a merry little Christmas!",
    "Joulun aika on ystävyyden aikaa!",
    "Joy to the world!",
    "Joulun rauhaa ja onnea!",
    "Let it snow, let it snow, let it snow!",
    "Joulun aika tuo valoa pimeyteen!",
    "May your Christmas be filled with laughter!",
    "Joulun aika on perheen aikaa!",
    "The best way to spread Christmas cheer is singing loud for all to hear!",
    "Joulun aika on toivon aikaa!",
    "Wishing you peace, love, and joy this Christmas!",
    "Joulun aika on lahjojen aikaa!",
    "May your Christmas be wrapped in warmth and love!",
    "Joulun aika on muistoja täynnä!",
];

const imagePaths = [
    "images/image 1.jpg",
    "images/image 2.jpg",
    "images/image 3.jpg",
    "images/image 4.jpg",
    "images/image 5.jpg",
    "images/image 6.jpg",
    "images/image 7.jpg",
    "images/image 8.jpg",
    "images/image 9.jpg",
    "images/image 10.jpg",
    "images/image 11.jpg",
    "images/image 12.jpg",
    "images/image 13.jpg",
    "images/image 14.jpg",
    "images/image 15.jpg",
    "images/image 16.jpg",
    "images/image 17.jpg",
    "images/image 18.jpg",
    "images/image 19.jpg",
    "images/image 20.jpg",
    "images/image 21.jpg",
    "images/image 22.jpg",
    "images/image 23.jpg",
    "images/image 24.jpg",
];

const dayContainer = document.querySelector('.day-container');
const dateDisplay = document.getElementById("date-display");
const quoteDisplay = document.getElementById("quote-display");
const christmasImage = document.getElementById("christmas-image");
const randomImageContainer = document.querySelector(".random-image-container");

// Get the current date
const today = new Date();
const currentDate = today.getDate();
const currentMonth = today.getMonth(); // 0 = January, 11 = December

// Generate day numbers from 1 to 24
for (let i = 1; i <= 24; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = i;

    // Disable future days
    if (currentMonth === 11 && i > currentDate) {
        dayElement.classList.add('disabled'); // Add a class to style disabled days
        dayElement.style.pointerEvents = 'none'; // Disable click events
        dayElement.style.opacity = '0.5'; // Make it look disabled
    } else {
        dayElement.addEventListener('click', () => openBook(i));
    }

    dayContainer.appendChild(dayElement);
}

// Function to open the book and display the image and quote for the selected day
function openBook(day) {
    // Clear the date display on the front page
    dateDisplay.textContent = ''; // Clear the date display

    // Set the date display for the back page
    const backDateDisplay = `December ${day}`;
    quoteDisplay.textContent = quotes[day - 1]; // Get the quote for the selected day
    christmasImage.src = imagePaths[day - 1]; // Get the image for the selected day

    // Reset the book state
    const book = document.querySelector('.book');
    book.classList.remove('clicked'); // Remove clicked class if it was previously added
    book.classList.add('clicked'); // Add the clicked class to trigger the opening animation

    // Check if the random image container is empty before appending the new image
    if (randomImageContainer.innerHTML === '') {
        const randomImageElement = document.createElement("img");
        randomImageElement.src = imagePaths[day - 1]; // Set the image source
        randomImageElement.alt = "Christmas Image for Today";
        randomImageElement.classList.add("random-image");

        randomImageContainer.appendChild(randomImageElement); // Append the new image

        // Add a delay to trigger the fade-in effect for the random image
        setTimeout(() => {
            randomImageElement.classList.add("visible"); // Trigger fade-in animation for random image
            randomImageContainer.classList.add("visible"); // Trigger fade-in animation for container
        }, 380); // 100ms delay for the transition to be visible
    }
}

// Add event listener to the document to close the book when clicking anywhere
document.addEventListener('click', (event) => {
    const book = document.querySelector('.book');
    // Check if the book is open
    if (book.classList.contains('clicked')) {
        // Check if the click was outside the book
        if (!book.contains(event.target)) {
            book.classList.remove('clicked'); // Close the book
            randomImageContainer.innerHTML = ''; // Clear the random image container
        }
    }
});

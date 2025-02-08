let places = [];  // Array to hold place data
let currentIndex = 0;
let favorites = []; // For storing favorite places
let bookmarks = []; // For storing bookmarked places

// Function to display the current place
function displayPlace(index) {
    if (places.length === 0) return; // Exit if no places loaded

    let place = places[index];

    // Update place details in the HTML
    document.getElementById("place-name").textContent = place.NAME;
    document.getElementById("place-address").textContent = `${place.ADDRESS}, ${place.CITY}, ${place.STATE} ${place.ZIPCODE}`;
    document.getElementById("place-type").textContent = `Type: ${place.TYPE}`;
}

function increment() {
    if (currentIndex < places.length - 1) {
        currentIndex++;
        displayPlace(currentIndex);  // Update the place when incremented
    }
}

function decrement() {
    if (currentIndex > 0) {
        currentIndex--;
        displayPlace(currentIndex);  // Update the place when decremented
    }
}

// Handle heart icon click (add to favorites)
document.getElementById("heart-icon").addEventListener("click", () => {
    let place = places[currentIndex];
    if (!favorites.includes(place)) {
        favorites.push(place);
        alert(`${place.NAME} added to favorites!`);
        // Save favorites to localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
        alert(`${place.NAME} is already in favorites.`);
    }
});

// Handle bookmark icon click (add to bookmarks)
document.getElementById("bookmark-icon").addEventListener("click", () => {
    let place = places[currentIndex];
    if (!bookmarks.includes(place)) {
        bookmarks.push(place);
        alert(`${place.NAME} added to bookmarks!`);
        // Save bookmarks to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        alert(`${place.NAME} is already in bookmarks.`);
    }
});

// Fetch places from the JSON file
fetch('js/BData.json')
    .then(response => response.json())
    .then(data => {
        places = data;  // Store the fetched places in the array

        displayPlace(currentIndex);  // Display the first place initially
    })
    .catch(error => console.log('Error loading data: ', error));

// Next button - Increment place index
const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', increment);

// Back button - Decrement place index
const backButton = document.getElementById('back-button');
backButton.addEventListener('click', decrement);
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

// Handle the "Next" button click
document.getElementById("next-button").addEventListener("click", () => {
    if (places.length > 0) {
        currentIndex = (currentIndex + 1) % places.length; // Cycle through places
        displayPlace(currentIndex);
    }
});

// Handle heart icon click (add to favorites)
document.getElementById("heart-icon").addEventListener("click", () => {
    let place = places[currentIndex];
    if (!favorites.includes(place)) {
        favorites.push(place);
        alert(`${place.NAME} added to favorites!`);
    } else {
        alert(`${place.NAME} is already in favorites.`);
    }
});

// Handle map icon click (open map)
document.getElementById("map-icon").addEventListener("click", () => {
    let place = places[currentIndex];
    window.open(`https://www.google.com/maps?q=${place.LATITUDE},${place.LONGITUDE}`, "_blank");
});

// Handle bookmark icon click (add to bookmarks)
document.getElementById("bookmark-icon").addEventListener("click", () => {
    let place = places[currentIndex];
    if (!bookmarks.includes(place)) {
        bookmarks.push(place);
        alert(`${place.NAME} added to bookmarks!`);
    } else {
        alert(`${place.NAME} is already in bookmarks.`);
    }
});

// Fetch places from the JSON file
fetch("sampleData.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load JSON file");
        }
        return response.json();
    })
    .then(data => {
        if (data.length === 0) {
            console.warn("No places found in JSON.");
            return;
        }
        places = data;
        displayPlace(currentIndex);
    })
    .catch(error => console.error("Error fetching places:", error));
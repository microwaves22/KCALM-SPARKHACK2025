import csvjson.json as sample;
import csvjson bdata.json as largeSample;

function loadCards(csvData) {
    // this will parse CSV Data
    Papa.parse(csvData, {
        // if the first row is header
        header: true, 
        // converts the type to whatever it is
        dynamicTyping: true, 
        complete: function(results) {
            // the data is parsed in json format
            console.log(results.data); 

            const placesContainer = document.getElementById('places-container') || document.getElementById('local-places-container');
            results.data.forEach(place => {
                const card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
                    <div class="card-content">
                        <h2>${place.Name}</h2>
                        <p>Location: ${place.Location}</p>
                        <p>Category: ${place.Category}</p>
                        <button>View Details</button>
                    </div>
                `;
                
                placesContainer.appendChild(card);
            });
        },
        error: function(error) {
            console.error("Error parsing CSV:", error);
        }
    });
}

// Your Flickr API key
const FLICKR_API_KEY = '8a25bc53339d194ea7f07bf3888df48d';

// Initialize the map centered on Seoul
const map = L.map('map').setView([37.5665, 126.9780], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Variable to store the marker
let marker;

// Event listener for map clicks
map.on('click', function(e) {
    const { lat, lng } = e.latlng;

    // Add or update marker on the clicked location
    if (marker) {
        marker.setLatLng(e.latlng);
    } else {
        marker = L.marker(e.latlng).addTo(map);
    }

    loadImages(lat, lng);
});

// Function to load images from Flickr based on coordinates
function loadImages(lat, lng) {
    const flickrUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&lat=${lat}&lon=${lng}&radius=1&extras=url_m&format=json&nojsoncallback=1`;

    $.getJSON(flickrUrl, function(data) {
        const imagesContainer = $('#images');
        imagesContainer.empty();

        if (data.photos.photo.length > 0) {
            data.photos.photo.forEach(photo => {
                const imgElement = `<div class="image-item"><img src="${photo.url_m}" alt="${photo.title}"></div>`;
                imagesContainer.append(imgElement);
            });
        } else {
            imagesContainer.append('<p>No images found for this location.</p>');
        }
    });
}


// 8a25bc53339d194ea7f07bf3888df48d
//	secret 3ddf3e0b2d003565
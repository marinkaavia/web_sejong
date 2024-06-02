// key: 8a25bc53339d194ea7f07bf3888df48d
// secret: 3ddf3e0b2d003565
const API_KEY = '8a25bc53339d194ea7f07bf3888df48d'

// start the map in the senter of seoul
const map = L.map('map').setView([37.53, 126.99], 13)

// add OpenStreetMap 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map)
// makers after clikcing in the page
let marker

// map clicks
map.on('click', function(e) {
    const { lat, lng } = e.latlng

    // add or update (if alredy same coordnates) marker on the clicked location
    if (marker) {
        marker.setLatLng(e.latlng)
    } else {
        marker = L.marker(e.latlng).addTo(map)
    }

    loadImages(lat, lng)
});

// function that load pictures based on coordinates
function loadImages(lat, lng) {
    const flickrUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&lat=${lat}&lon=${lng}&radius=1&extras=url_m&format=json&nojsoncallback=1`;

    $.getJSON(flickrUrl, function(data) {
        const imagesContainer = $('#images')
        imagesContainer.empty()

        if (data.photos.photo.length != 0) {
            data.photos.photo.forEach(photo => {
                const imgElement = `<div class="image-item">
                    <img src="${photo.url_m}" alt="${photo.title}">
                </div>`
                imagesContainer.append(imgElement)
            })
        } else {
            imagesContainer.append('<p>No images for this location</p>')
        }
    })
}


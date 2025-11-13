// Iraq bounding box
const iraqBounds = [
    [29.0, 38.8],
    [37.5, 48.6]
];

// Initialize map
const map = L.map('map', {
    maxBounds: iraqBounds,
    maxBoundsViscosity: 1.0
}).setView([33.0, 44.0], 6);

// NORMAL LIGHT MAP TILES
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 5,
}).addTo(map);

// Warranty icons
const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});


// Sidebar + markers
const list = document.getElementById('site-list');
const markers = [];

sites.forEach((site, index) => {

    const icon = site.warranty ? greenIcon : redIcon;
    const marker = L.marker([site.lat, site.lng], { icon }).addTo(map);

    const serialList = site.serials.join("<br>");

    marker.bindPopup(`
        <b>${site.name}</b><br>
        Machines: ${site.machines}<br>
        Serials:<br>${serialList}<br><br>
        Warranty: 
        <span style="color:${site.warranty ? 'lightgreen' : 'red'};">
            ${site.warranty ? 'Active' : 'Expired'}
        </span><br><br>
        Contact:<br>${site.contact}<br><br>
        <a href="${site.waze}" target="_blank" style="color:#4ba3ff;">
            📍 Open in Waze
        </a>
    `);

    markers.push(marker);

    // Sidebar link
    const li = document.createElement('li');
    li.textContent = site.name;
    li.onclick = () => {
        map.setView([site.lat, site.lng], 12);
        marker.openPopup();
    };
    list.appendChild(li);
});

// Search
document.getElementById('search').addEventListener('input', function () {
    const q = this.value.toLowerCase();

    const items = document.querySelectorAll('#site-list li');
    items.forEach((li, i) => {
        const site = sites[i];
        const match =
            site.name.toLowerCase().includes(q) ||
            site.serials.some(s => s.toLowerCase().includes(q));

        li.style.display = match ? 'block' : 'none';
    });
});

// Sidebar toggle
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const mapDiv = document.getElementById('map');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    toggleBtn.classList.toggle('shifted');
    mapDiv.classList.toggle('full');

    setTimeout(() => {
        map.invalidateSize();
    }, 310);
});

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

// Base layers: light & dark
const lightLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 5
});

const darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    minZoom: 5
});

let activeBaseLayer = null;
let currentTheme = localStorage.getItem("map_theme") || "light";

const themeToggleBtn = document.getElementById("theme-toggle");

function setTheme(theme) {
    if (activeBaseLayer) {
        map.removeLayer(activeBaseLayer);
    }

    if (theme === "dark") {
        activeBaseLayer = darkLayer;
        themeToggleBtn.textContent = "☀️ Light";
    } else {
        activeBaseLayer = lightLayer;
        themeToggleBtn.textContent = "🌙 Dark";
    }

    activeBaseLayer.addTo(map);
    currentTheme = theme;
    localStorage.setItem("map_theme", theme);
}

// Initialize theme
setTheme(currentTheme);

// Theme toggle button
themeToggleBtn.addEventListener("click", () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
});

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

    // Popup pan fix (important for mobile near top)
    marker.on("click", () => {
        // Let leaflet open popup, then pan a bit down so popup is fully visible
        setTimeout(() => {
            const offsetY = window.innerWidth < 768 ? -150 : -100;
            map.panBy([0, offsetY], { animate: true });
        }, 250);
    });

    markers.push(marker);

    // Sidebar list item
    const li = document.createElement('li');
    li.textContent = site.name;
    li.onclick = () => {
        map.setView([site.lat, site.lng], 12);
        marker.openPopup();
        setTimeout(() => {
            const offsetY = window.innerWidth < 768 ? -150 : -100;
            map.panBy([0, offsetY], { animate: true });
        }, 250);
    };
    list.appendChild(li);
});

// Search filter
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

// Sidebar toggle (navbar Menu button)
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const mapDiv = document.getElementById('map');

// Start with sidebar hidden and map full
sidebar.classList.add('hidden');
mapDiv.classList.add('full');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    mapDiv.classList.toggle('full');

    setTimeout(() => {
        map.invalidateSize();
    }, 310);
});

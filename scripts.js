// Function to interpolate between two colors
function interpolateColor(color1, color2, factor) {
    const result = color1.slice();
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
}

// Function to convert hex to RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

// Function to calculate the thumb color based on the slider's value
function getThumbColor(value) {
    const colors = ["#FF4D4D", "#FF914D", "#FFD700", "#00CC66"];
    const index = Math.floor(value);
    const factor = value - index;
    const color1 = hexToRgb(colors[index]);
    const color2 = hexToRgb(colors[index + 1] || colors[index]);
    const interpolatedColor = interpolateColor(color1, color2, factor);
    return `rgb(${interpolatedColor.join(",")})`;
}

// Function to update the slider thumb color
function updateThumbColor(slider) {
    const value = parseFloat(slider.value);
    const thumbColor = getThumbColor(value);
    slider.style.setProperty("--thumb-color", thumbColor);
}

// Function to initialize slider thumb colors
function initializeSliderThumbs() {
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach(slider => {
        updateThumbColor(slider);
        slider.addEventListener("input", () => updateThumbColor(slider));
    });
}

// Function to update the preference text and color
function updatePreference(slider, preferenceSpan) {
    const value = parseInt(slider.value);
    let preference = '';
    let color = '';

    switch (value) {
        case 0:
            preference = 'Hard Limit';
            color = '#EF5350'; // Red
            break;
        case 1:
            preference = 'Curious';
            color = '#FF914D'; // Orange
            break;
        case 2:
            preference = 'Moderate';
            color = '#FFCA28'; // Yellow
            break;
        case 3:
            preference = 'Oh Yes';
            color = '#26A69A'; // Green
            break;
    }

    preferenceSpan.textContent = preference;
    preferenceSpan.style.color = color; // Update text color
}

// Function to generate the URL with slider positions
function generateUrl() {
    const sliders = document.querySelectorAll('.slider');
    const params = new URLSearchParams();
    sliders.forEach(slider => {
        const key = slider.getAttribute('data-key');
        const value = slider.value;
        params.set(key, value);
    });
    return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
}

// Function to share via Telegram
function shareViaTelegram() {
    const url = generateUrl();
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`, '_blank');
}

// Function to share via WhatsApp
function shareViaWhatsApp() {
    const url = generateUrl();
    window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank');
}

// Function to share via Email
function shareViaEmail() {
    const url = generateUrl();
    window.location.href = `mailto:?body=${encodeURIComponent(url)}`;
}

// Function to copy the URL to clipboard
function copyUrl() {
    const url = generateUrl();
    navigator.clipboard.writeText(url).then(() => {
        alert('URL copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy URL. Please try again.');
    });
}

// Function to open tabs
function openTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="openTab('${tabName}')"]`).classList.add('active');
}

// Function to load slider positions from URL parameters
function loadSliderPositionsFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const key = slider.getAttribute('data-key');
        const value = urlParams.get(key);
        if (value !== null) {
            slider.value = value;
            updatePreference(slider, slider.nextElementSibling);
        }
    });
}

// Initialize slider thumb colors when the page loads
initializeSliderThumbs();

// Load slider positions from URL when the page loads
loadSliderPositionsFromUrl();
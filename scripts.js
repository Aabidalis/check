// Simulating drone status updates
document.addEventListener('DOMContentLoaded', function () {

    // Temperature
    function fetchTemperature() {
        // Simulating a temperature fetch, replace with actual API call if needed
        setTimeout(() => {
            document.getElementById('temp').innerText = '25°C'; // Example temperature
        }, 1000);
    }

    // Weather Condition
    function fetchWeatherCondition() {
        // Simulating a weather condition fetch, replace with actual API call if needed
        setTimeout(() => {
            document.getElementById('weather').innerText = 'Clear Skies'; // Example weather
        }, 1000);
    }

    // Fetch Infrared Feed (Placeholder)
    function fetchInfraredFeed() {
        // Here, you can implement an actual API call for the infrared feed.
        // For now, this is a static placeholder.
        document.getElementById('infrared-feed').innerHTML = '<img src="infrared-feed.jpg" alt="Infrared Feed">';
    }

    // Button Controls
    const takeoffBtn = document.getElementById('takeoff-btn');
    const landBtn = document.getElementById('land-btn');
    const rotateBtn = document.getElementById('rotate-btn');
    const hoverBtn = document.getElementById('hover-btn');

    takeoffBtn.addEventListener('click', () => {
        alert("Drone taking off...");
    });

    landBtn.addEventListener('click', () => {
        alert("Drone landing...");
    });

    rotateBtn.addEventListener('click', () => {
        alert("Drone rotating...");
    });

    hoverBtn.addEventListener('click', () => {
        alert("Drone hovering...");
    });

    // Initialize the page with mock data
    fetchTemperature();
    fetchWeatherCondition();
    fetchInfraredFeed();

});

const temperatureInput = document.getElementById('temperature');
const onButton = document.getElementById('onButton');
const offButton = document.getElementById('offButton');
const statusText = document.getElementById('status');

// Replace these with your actual API details
const API_BASE_URL = 'YOUR_API_BASE_URL'; // Base URL for your API endpoints
const API_KEY = 'YOUR_API_KEY'; // Your API key (if required)

function setTemperature(temperature) {
    const url = `${API_BASE_URL}/temperature`; // Replace with your temperature endpoint
    const data = { temperature }; // Assuming JSON data for temperature
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Adjust if necessary
        },
        body: JSON.stringify(data)
    };

    if (API_KEY) {
        options.headers.Authorization = `Bearer ${API_KEY}`; // Add auth header if needed
    }

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                statusText.textContent = 'Temperature set!';
            } else {
                statusText.textContent = 'Error setting temperature.';
                console.error('Error:', response.statusText); // Log detailed errors
            }
        })
        .catch(error => {
            statusText.textContent = 'Error: ' + error.message;
            console.error('Error:', error); // Log detailed errors
        });
}

function turnOnAC() {
    const url = `${API_BASE_URL}/on`; // Replace with your on endpoint
    const options = { method: 'POST' }; // Adjust method if necessary

    if (API_KEY) {
        options.headers.Authorization = `Bearer ${API_KEY}`; // Add auth header if needed
    }

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                statusText.textContent = 'AC turned on.';
            } else {
                statusText.textContent = 'Error turning on AC.';
                console.error('Error:', response.statusText); // Log detailed errors
            }
        })
        .catch(error => {
            statusText.textContent = 'Error: ' + error.message;
            console.error('Error:', error); // Log detailed errors
        });
}

function turnOffAC() {
    const url = `${API_BASE_URL}/off`; // Replace with your off endpoint
    const options = { method: 'POST' }; // Adjust method if necessary

    if (API_KEY) {
        options.headers.Authorization = `Bearer ${API_KEY}`; // Add auth header if needed
    }

    fetch(url, options)
        .then(response)}

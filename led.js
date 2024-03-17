function changeLEDColor(teamId, color) {
    const url = 'https://kodessphere-api.vercel.app/devices';
    const data = {
        teamid: 'dOqGo0w',
        device: 'led',
        value: color,
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const message = data.message || 'LED color changed successfully.';
        document.getElementById('response').textContent = message;
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').textContent = 'Error changing LED color.';
    });
}

function getLEDStatus(teamId) {
    const url = `https://kodessphere-api.vercel.app/devices/${teamId}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const color = data.value;
        document.getElementById('response').textContent = `Current LED color: ${color}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').textContent = 'Error getting LED status.';
    });
}

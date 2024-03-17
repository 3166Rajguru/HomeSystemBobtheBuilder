const baseUrl = "https://kodessphere-api.vercel.app";
const teamId = "dOqGo0w"; // Replace with your actual team ID

function updateFanSpeed() {
    const fanSpeed = document.getElementById("fanSpeed").value;

    fetch(`${baseUrl}/devices`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            teamid: teamId,
            device: "fan",
            value: parseInt(fanSpeed)
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const statusText = fanSpeed === "0" ? "Off" : `Speed: ${fanSpeed}`;
            document.getElementById("fanStatus").textContent = `Fan is ${statusText}.`;
            console.log(data);
        } else {
            alert("Error updating fan speed!");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error updating fan speed!");
    });
}



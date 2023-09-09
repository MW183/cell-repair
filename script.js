// Function to update phone models and show/hide the text box for "Other" device
function updatePhoneModels() {
    const deviceSelect = document.getElementById('deviceSelect');
    const otherDeviceInput = document.getElementById('otherDeviceInput');

    // Get the selected device
    const selectedDevice = deviceSelect.value;

    // Toggle visibility of the input field for "Other"
    if (selectedDevice === 'Other') {
        otherDeviceInput.style.display = 'block';
    } else {
        otherDeviceInput.style.display = 'none';
    }

    // Define options for each device
    const deviceOptions = {
        'iPhone': ['--', 'iPhone 11', 'iPhone 12', 'iPhone 13'],
        'Samsung': ['--', 'Galaxy S20', 'Galaxy S21', 'Galaxy S22'],
        'Google Pixel': ['--', 'Pixel 4a', 'Pixel 5', 'Pixel 6']
    };

    // Clear existing model options
    const modelSelect = document.getElementById('model');
    modelSelect.innerHTML = '';

    // Add options for the selected device
    deviceOptions[selectedDevice].forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
    });
}

const deviceSelect = document.getElementById('deviceSelect');
deviceSelect.addEventListener('change', updatePhoneModels);

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const device = document.getElementById('deviceSelect').value;
    const otherDevice = document.getElementById('otherDevice').value;
    const responseMessage = document.getElementById('responseMessage');

    responseMessage.textContent = `Thanks, ${name}! We'll reach out to you shortly. You've selected ${device}${device === 'Other' ? ': ' + otherDevice : ''}.`;
    responseMessage.classList.add('visible');

    document.getElementById('name').value = '';
    document.getElementById('deviceSelect').value = '';
    document.getElementById('otherDevice').value = '';
}

document.getElementById('responseMessage').addEventListener('click', () => {
    document.getElementById('responseMessage').classList.remove('visible');
});

document.getElementById('deviceSelect').addEventListener('change', updatePhoneModels);

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

updatePhoneModels();

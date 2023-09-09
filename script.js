// Function to update phone models and show/hide the text box for "Other" device
function updatePhoneModels() {
    const deviceSelect = document.getElementById('deviceSelect');
    const otherDeviceInput = document.getElementById('otherDeviceInput');
    const modelSelect = document.getElementById('model');
    const modelDiv = document.getElementById('modelDiv');

    const selectedDevice = deviceSelect.value;

    if (selectedDevice === 'Other') {
        otherDeviceInput.style.display = 'block';
        modelDiv.style.display = 'none';
    } else {
        otherDeviceInput.style.display = 'none';
        modelDiv.style.display = 'block';
    }

    const deviceOptions = {
        'iPhone': ['--', 'iPhone 6s', 'iPhone 7', 'iPhone 8', 'iPhone X', 'iPhone 11', 'iPhone 12', 'iPhone 13'],
        'Samsung': ['--', 'Galaxy S7', 'Galaxy S8', 'Galaxy S9', 'Galaxy S10', 'Galaxy S20', 'Galaxy S21', 'Galaxy S22'],
        'Google Pixel': ['--', 'Pixel 3', 'Pixel 4', 'Pixel 4a', 'Pixel 5', 'Pixel 6']
    };

    modelSelect.innerHTML = '';

    if (deviceOptions[selectedDevice]) {
        deviceOptions[selectedDevice].forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
}

const deviceSelect = document.getElementById('deviceSelect');
deviceSelect.addEventListener('change', updatePhoneModels);

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const deviceSelect = document.getElementById('deviceSelect');
    const otherDeviceInput = document.getElementById('otherDevice');
    const responseMessage = document.getElementById('responseMessage');

    const name = nameInput.value;
    const device = deviceSelect.value;
    const otherDevice = otherDeviceInput.value;

    responseMessage.textContent = `Thanks, ${name}! We'll reach out to you shortly. You've selected ${device}${device === 'Other' ? ': ' + otherDevice : ''}.`;

    nameInput.value = '';
    deviceSelect.value = '';
    otherDeviceInput.value = '';

    responseMessage.style.display = 'block';
    setTimeout(() => {
        responseMessage.style.display = 'none';
    }, 5000);
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

// Initialize phone models and input visibility when the page loads
updatePhoneModels();

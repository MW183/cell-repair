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

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the entered name, device, and otherDevice (if "Other" is selected)
    const nameInput = document.getElementById('name');
    const deviceSelect = document.getElementById('deviceSelect');
    const otherDeviceInput = document.getElementById('otherDevice');
    const responseMessage = document.getElementById('responseMessage');

    const name = nameInput.value;
    const device = deviceSelect.value;
    const otherDevice = otherDeviceInput.value;

    // Display the response message
    responseMessage.textContent = `Thanks, ${name}! We'll reach out to you shortly. You've selected ${device}${device === 'Other' ? ': ' + otherDevice : ''}.`;

    // Clear the form inputs
    nameInput.value = '';
    deviceSelect.value = ''; // Set a default device
    otherDeviceInput.value = ''; // Clear the "Other" device input field

    // Hide the response message after 5 seconds
    responseMessage.style.display = 'block';
    setTimeout(() => {
        responseMessage.style.display = 'none';
    }, 5000);
}

// Attach the form submission event listener
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

// Initialize phone models and input visibility when the page loads
updatePhoneModels();

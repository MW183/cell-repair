// Function to update phone models and show/hide the text box for "Other" device
function updatePhoneModels() {
    const deviceSelect = document.getElementById('deviceSelect');
    const otherDeviceInput = document.getElementById('otherDeviceInput');

    // Get the selected device
    const selectedDevice = deviceSelect.value;

    // Toggle visibility of the input field for "Other"
    if (selectedDevice === 'Other') {
        otherDeviceInput.style.display = 'block';
        modelSelect.disabled = true;  // Disable dropdown
    } else {
        otherDeviceInput.style.display = 'none';
        modelSelect.disabled = false;  // Enable dropdown
    }
    

    // Define options for each device
    const deviceOptions = {
            'iPhone': ['--', 'iPhone 6s', 'iPhone 6s Plus', 'iPhone 7', 'iPhone 7 Plus', 'iPhone 8', 'iPhone 8 Plus', 'iPhone X', 'iPhone XR', 'iPhone XS', 'iPhone XS Max', 'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max', 'iPhone 12', 'iPhone 12 Mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max', 'iPhone 13', 'iPhone 13 Mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max'],
            'Samsung': ['--', 'Galaxy S7', 'Galaxy S7 Edge', 'Galaxy S8', 'Galaxy S8+', 'Galaxy S9', 'Galaxy S9+', 'Galaxy S10', 'Galaxy S10e', 'Galaxy S10+', 'Galaxy S20', 'Galaxy S20+', 'Galaxy S20 Ultra', 'Galaxy S21', 'Galaxy S21+', 'Galaxy S21 Ultra'],
            'Google Pixel': ['--', 'Pixel 3', 'Pixel 3 XL', 'Pixel 3a', 'Pixel 3a XL', 'Pixel 4', 'Pixel 4 XL', 'Pixel 4a', 'Pixel 5', 'Pixel 5a', 'Pixel 6', 'Pixel 6 Pro']
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

if (selectedDevice === 'Other') {
    otherDeviceInput.style.display = 'block';
    modelSelect.disabled = true;  // Disable dropdown
} else {
    otherDeviceInput.style.display = 'none';
    modelSelect.disabled = false;  // Enable dropdown
}


document.getElementById('responseMessage').addEventListener('click', () => {
    document.getElementById('responseMessage').classList.remove('visible');
});

document.getElementById('deviceSelect').addEventListener('change', updatePhoneModels);

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

updatePhoneModels();

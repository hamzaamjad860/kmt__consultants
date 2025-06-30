const countrySelect = document.getElementById("country");

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Belarus", "Belgium", "Bhutan", "Bolivia", "Bosnia & Herzegovina",
    "Brazil", "Brunei", "Bulgaria", "Cambodia", "Cameroon", "Canada", "Chile", "China", "Colombia", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Dominican Republic", "Ecuador", "Egypt", "Estonia",
    "Ethiopia", "Finland", "France", "Georgia", "Germany", "Ghana", "Greece", "Guatemala", "Honduras", "Hong Kong",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lithuania", "Luxembourg",
    "Malaysia", "Maldives", "Mali", "Malta", "Mexico", "Monaco", "Mongolia", "Morocco", "Myanmar", "Nepal",
    "Netherlands", "New Zealand", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palestine", "Panama",
    "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saudi Arabia", "Serbia",
    "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan",
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tunisia", "Turkey", "Uganda",
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela",
    "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

// Clear loading option and populate
countrySelect.innerHTML = `<option value="">Select your country</option>`;
countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
});

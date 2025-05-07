// Initialize preferences with defaults
let preferences = {
    headerAnim: false,
    backgroundColor: '#f4f4f4',
    imageAnimation: false
};

// Load saved preferences from localStorage
function loadPreferences() {
    const savedPrefs = localStorage.getItem('preferences');
    if (savedPrefs) {
        preferences = JSON.parse(savedPrefs);
    }
    applyPreferences();
}

// Apply current preferences to the page
function applyPreferences() {
    document.getElementById('animatedHeader').classList.toggle('animated', preferences.headerAnim);
    document.body.style.backgroundColor = preferences.backgroundColor;
    document.getElementById('animatedImg').classList.toggle('animated', preferences.imageAnimation);
}

// Save preferences to localStorage
function savePreferences() {
    localStorage.setItem('preferences', JSON.stringify(preferences));
    console.log('Preferences saved');
}

// Set up event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load saved preferences
    loadPreferences();

    // Header animation toggle
    document.getElementById('toggleHeaderAnim').addEventListener('click', function() {
        preferences.headerAnim = !preferences.headerAnim;
        document.getElementById('animatedHeader').classList.toggle('animated', preferences.headerAnim);
        savePreferences();
    });

    // Background color change
    document.getElementById('changeBackground').addEventListener('click', function() {
        preferences.backgroundColor = preferences.backgroundColor === '#f4f4f4' ? '#b3e577' : '#f4f4f4';
        document.body.style.backgroundColor = preferences.backgroundColor;
        savePreferences();
    });

    // Image animation toggle
    document.getElementById('toggleImageAnimation').addEventListener('click', function() {
        preferences.imageAnimation = !preferences.imageAnimation;
        document.getElementById('animatedImg').classList.toggle('animated', preferences.imageAnimation);
        savePreferences();
    });

    // Save button
    document.getElementById('savePref').addEventListener('click', savePreferences);
});
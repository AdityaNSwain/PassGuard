// Firebase configuration
const firebaseConfig = {
    // Firebase configuration here
    apiKey: "AIzaSyBPacinrka7JrAmyQMtb0EVyFxwgtmXA_Y",
    authDomain: "password-checker-project.firebaseapp.com",
    projectId: "password-checker-project",
    storageBucket: "password-checker-project.firebasestorage.app",
    messagingSenderId: "763214668372",
    appId: "1:763214668372:web:bb9ba6e93745f0747a43c1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

// Function to log password strength attempt
function logPasswordAttempt(strength, criteria) {
    analytics.logEvent('password_check', {
        strength_level: strength,
        has_length: criteria.length,
        has_uppercase: criteria.uppercase,
        has_lowercase: criteria.lowercase,
        has_numbers: criteria.numbers,
        has_special: criteria.special,
        timestamp: new Date().toISOString()
    });
    console.log('Password attempt logged to Firebase');
}
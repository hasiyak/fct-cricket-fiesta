    function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    
    // Set Tailwind colors and icons based on the notification type (success or error)
    const bgColor = type === 'success' ? 'bg-emerald-500 text-slate-900' : 'bg-red-500 text-white';
    const icon = type === 'success' ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-solid fa-circle-exclamation"></i>';

    // Add Tailwind CSS classes for styling and entry animations
    toast.className = `flex items-center space-x-3 px-5 py-3 rounded-xl shadow-2xl transition-all duration-300 transform translate-y-10 opacity-0 font-bold text-sm pointer-events-auto ${bgColor}`;
    
    toast.innerHTML = `
        <div class="text-lg">${icon}</div>
        <div>${message}</div>
    `;

    container.appendChild(toast);

    // Trigger the animation to show the toast smoothly
    requestAnimationFrame(() => {
        setTimeout(() => {
            toast.classList.remove('translate-y-10', 'opacity-0');
        }, 10);
    });

    // Hide and remove the toast from the DOM after 3 seconds
    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}


function handleLogin(event) {
    event.preventDefault();
    
    // Get the values entered by the user in the login form
    // Assuming your HTML input fields have id="email" and id="password"
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    
    // Validate against the specific admin credentials
    const isValidLogin = (emailInput === 'admin@fctfiesta.com' && passwordInput === 'admin123');
    
    if (isValidLogin) {
        // Show a success message in green
        showToast('Login Successful!', 'success');
        
        // Redirect to the admin dashboard after a 1-second delay
        setTimeout(() => {
            sessionStorage.setItem('isAdmin', 'true');
            window.location.href = 'admin-index.html'; // Make sure this matches your admin page name
        }, 1000);
    } else {
        // Show an error message in red
        showToast('Invalid Email or Password!', 'error');
    }
}

function logout() {
    // Clear the admin session
    sessionStorage.removeItem('isAdmin');
    
    // Set a flag to show the logout message
    sessionStorage.setItem('showLogoutToast', 'true');
    
    // Redirect to login page
    window.location.href = 'login.html';
}

window.addEventListener('DOMContentLoaded', () => {
    // Check if the logout flag is set
    if (sessionStorage.getItem('showLogoutToast') === 'true') {
        // Show the success message
        if (typeof showToast === 'function') {
            showToast('Successfully logged out!', 'success');
        }
        // Remove the flag so it doesn't show again on refresh
        sessionStorage.removeItem('showLogoutToast');
    }
});
function includeHTML(elementId, filePath) {
    fetch(window.location.origin + filePath) // Ensures absolute URL
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading file:', error));
}

// Load navbar and footer
includeHTML('navbar', '/includes/navbar.html');
includeHTML('footer', '/includes/footer.html');

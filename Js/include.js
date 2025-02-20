function includeHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading file:', error));
}

// Load navbar and footer
includeHTML('navbar', '/includes/navbar.html');
includeHTML('footer', '/includes/footer.html');
const repoName = window.location.pathname.split('/')[1]; // Gets 'EmpowerHer' (your repo)
const basePath = repoName ? `/${repoName}` : ''; // Ensures the correct base path
// Define the Navbar HTML
const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="${basePath}/Web/en/HomePage.html">
                <img src="/Img/logo.png" alt="EmpowerHer Logo" class="navbar-logo">
            </a>
            <ul class="navbar-nav d-flex justify-content-center flex-grow-1 gap-4">
                <li class="nav-item">
                    <a class="nav-link" href="/Web/en/20s/topics.html">20s</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">30s</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">40s</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">50s</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">60+</a>
                </li>
            </ul>
            <div class="language-toggle">
                <a href="/Web/fr/Acceuil.html" id="languageSwitch" class="btn btn-outline-primary">FR</a>
            </div>
        </div>
    </nav>
`;

// Define the Footer HTML
const footerHTML = `
    <footer class="footer-container">
        <div class="footer-logo">
            <img src="/Img/HPVLogo.png" alt="HPV Global Action Logo">
            <div class="links">
                <a href="#" class="footer-link">PRIVACY POLICY</a>
                <a href="#" class="footer-link">FIRST NATIONS TERRITORY ACKNOWLEDGEMENT</a>  
            </div>
        </div>
        
        <div class="footer-info">
            <p>1 Place Ville Marie, Suite 3000</p>
            <p>Montréal, Québec</p>
            <p>H3B 4N8</p>
            <p>1-514-235-2397</p>
        </div>
    
        <div class="footer-credit">
            <p>Website created by:</p>
        </div>
    </footer>
`;

// Inject Navbar and Footer into the page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("navbar").innerHTML = navbarHTML;
    document.getElementById("footer").innerHTML = footerHTML;
});

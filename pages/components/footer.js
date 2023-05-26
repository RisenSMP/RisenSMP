class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Select all elements except .content
    var elements = document.querySelectorAll('*:not(.content)');

    // Apply margin: 0 to selected elements
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.margin = '0';
    }

    this.innerHTML = `
      <footer class="footer">
        <div class="container">
        <div class="logo">
        <img src="./public/images/server_pfp.jpg" alt="Logo">
        </div>
          <div class="row">
            <div class="footer-col">
              <div class="about">
                <h4>About us</h4>
              </div>
              <ul>
                <li><a href="about.html">about us</a></li>
                <li><a href="ikke-klar.html">our services</a></li>
                <li><a href="ikke-klar.html">Terms Of Service</a></li>
              </ul>
            </div>
            <div class="footer-col">
            <h4>Important Links</h4>
            <ul>
            <li><a href="ikke-klar.html">Not Ready</a></li>
            <li><a href="ikke-klar.html">Not Ready</a></li>
            <li><a href="ikke-klar.html">Not Ready</a></li>
            </ul>
            </div>
            <div class="footer-col">
            <h4>get help</h4>
              <ul>
                <li><a href="ikke-klar.html">Contact</a></li>
                <li><a href="https://discord.gg/9VE5k3a5gR" target="_blank">Ticket in Discord</a></li>
                <li><a href="#">Contact Owner-RiseB0lt#0001</a></li>
                <li><a href="#">Contact Email Us If you Need Anything-Not made</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="https://discord.gg/9VE5k3a5gR" target="_blank"><i class="fab fa-discord"></i></a>
                <a href="https://www.youtube.com/@RiseX2" target="_blank"><i class="fab fa-youtube"></i></a>
                <a href="https://www.tiktok.com/@riseb0lt" target="_blank"><i class="fab fa-tiktok"></i></a>
                <a href="https://twitter.com/RyzenSMP1" target="_blank"><i class="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>  
        </div>
        <p class="copyright">© 2023 Created by nifse_gizzel. All Rights Reserved.</p>
      </footer>
    `;
  }
}
//RyzenSMPContact@gmail.com is the email in line 43//
customElements.define('footer-component', Footer);
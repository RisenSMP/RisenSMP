class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `        
    <header>
        <div class="header">
          <nav-menu></nav-menu>
            <div class="top-buttons">
              <div class="top-button">
              <a href="https://discord.gg/yxRayFnSBF" target="_blank">
                  Discord Server
                </a>
              </div>
              <div class="top-button">
              <a href="https://risesmp-webstore.tebex.io" target="_blank">
              Store
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', Header);

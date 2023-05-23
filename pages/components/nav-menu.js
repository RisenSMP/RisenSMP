class Navigation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        /* CSS for the navigation */
        .content {
          text-align: center;
          margin-top: 0;
        }

        .nav-menu {
          list-style: none;
          margin: 0;
          padding: 0;
          text-align: center;
          background-color: #24262b;
          position: absolute;
          top: 0px;
          width: 100%;
        }

        .nav-item {
          display: inline-block;
          position: relative;
        }

        .nav-item > a {
          display: block;
          padding: 20px 40px;
          text-decoration: none;
          color: white;
          font-size: 18px;
        }

        .dropdown-toggle:after {
          content: '\\25BE';
          display: inline-block;
          margin-left: 5px;
        }

        .dropdown-menu {
          display: none;
          position: absolute;
          top: 114%;
          left: 50%;
          transform: translateX(-50%);
          background-color: #24262b;
          width: 100%;
          margin-top: -10px;
          padding-top: 10px;
        }
        
        
        .dropdown-menu ul {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
        }        

        .dropdown-menu li {
          display: block;
        }

        .dropdown-menu a {
          padding: 10px 20px;
          display: block;
          text-decoration: none;
          color: white;
        }

        .dropdown-menu.show {
          display: block;
        }

        /* Additional styles for the dropdown menus */
        .nav-item.dropdown.show .dropdown-menu {
          display: block;
        }
      </style>

      <header>
        <nav>
          <ul class="nav-menu">
            <li class="nav-item dropdown">
              <a href="#" class="dropdown-toggle">Home</a>
              <div class="dropdown-menu">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="#">Item not ready</a></li>
                  <li><a href="#">Item not ready</a></li>
                  <li><a href="#">Item not ready</a></li>
                </ul>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="dropdown-toggle">Information</a>
              <div class="dropdown-menu">
                <ul>
                  <li><a href="#">Item not ready</a></li>
                  <li><a href="#">Item not ready</a></li>
                  <li><a href="#">Item not ready</a></li>
                </ul>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="dropdown-toggle">Contact Us</a>
              <div class="dropdown-menu">
                <ul>
                  <li><a href="#">Item not ready</a></li>
                  <li><a href="#">Item not ready</a></li>
                  <li><a href="#">Item not ready</a></li>
                </ul>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="dropdown-toggle">Store</a>
              <div class="dropdown-menu">
                <ul>
                  <li><a href="store.html">Store</a></li>
                  <li><a href="#">Item not ready</a></li>
                  <li><a href="#">Item not ready</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    `;

    // JavaScript for the dropdown functionality
    const dropdowns = this.querySelectorAll(".dropdown-toggle");

    dropdowns.forEach((dropdown) => {
      const dropdownMenu = dropdown.nextElementSibling;
      let isDropdownOpen = false;

      dropdown.addEventListener("click", (event) => {
        event.preventDefault();

        if (isDropdownOpen) {
          dropdownMenu.classList.remove("show");
        } else {
          closeAllDropdowns();
          dropdownMenu.classList.add("show");
        }

        isDropdownOpen = !isDropdownOpen;
      });
    });

    window.addEventListener("click", (event) => {
      const dropdowns = this.querySelectorAll(".dropdown-toggle");

      dropdowns.forEach((dropdown) => {
        const dropdownMenu = dropdown.nextElementSibling;

        if (dropdownMenu.classList.contains("show") && !dropdown.contains(event.target)) {
          dropdownMenu.classList.remove("show");
        }
      });
    });
  }
}

function closeAllDropdowns() {
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");

  dropdownMenus.forEach((menu) => {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  });
}

customElements.define("nav-menu", Navigation);
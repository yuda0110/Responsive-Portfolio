document.addEventListener('DOMContentLoaded', () => {
  createHeader()
  createFooter()
})

const createHeader = () => {
  const header = document.querySelector('.header')
  const headerHtml = `<div class="header-contents">
            <div class="name">Yuko Uda</div>
            <nav>
                <ul class="navigation">
                    <li><a class="nav-link" href="./index.html">About</a></li>
                    <li><a class="nav-link" href="./portfolio.html">Portfolio</a></li>
                    <li><a class="nav-link" href="./contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>`
  if (header) {
    header.innerHTML = headerHtml
    activeNavLink('.nav-link')
  }
}

const activeNavLink = (navLinkClass) => {
  document.querySelectorAll(navLinkClass).forEach((navLink) => {
    if (location.href.includes(navLink.getAttribute('href').split("/").pop())) {
      navLink.classList.add('active')
    }
  })
}

const createFooter = () => {
  const footer = document.querySelector('.footer')
  const day = new Date()
  const year = day.getFullYear()
  const footerHtml = `Copyright © ${year} Yuko Uda`
  if (footer) {
    footer.innerHTML = footerHtml
  }
}
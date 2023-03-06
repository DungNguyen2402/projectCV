
const Header = () => {
  return `
  <div class="">
  <nav class="navbar navbar-expand-sm navbar-dark">
      <a class="navbar-brand" href="#"><img id="logo" src="https://i.imgur.com/K7Nwq4V.jpg">Acme Inc</a>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="/">HOME</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/projects">PROJECTS</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/blog">BLOGS</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/contact">CONTACT</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/#/admin">ADMIN</a>
              </li>
          </ul>
          
      </div>
  </nav>
</div>
<style>
    .navbar {
        padding-bottom: 10px
    }

  #logo {
      width: 50px;
      height: 50px;
      border-radius: 4px;
  }

  .navbar-brand {
      padding: 14px 20px;
      font-size: 16px;
  }

  .navbar-nav {
      width: 100%;
      justify-content: flex-end;
  }

  .nav-item {
      padding: 6px 14px;
      text-align: center;
  }

  .nav-link {
      padding-bottom: 10px;
      color: white;
  }

  .v-line {
      background-color: gray;
      width: 1px;
      height: 20px;
  }

  .navbar-collapse.collapse.in {
      display: block !important;
  }

  @media (max-width: 576px) {
      .nav-item {
          width: 100%;
          text-align: left;
      }

      .v-line {
          display: none;
      }
  }
</style>

  `
}

export default Header

const Header = () => {
  return `
  <div class="container-fluid px-0">
  <nav class="navbar navbar-expand-sm navbar-dark bg-menu py-0 px-0">
      <a class="navbar-brand" href="#"><img id="logo" src="https://i.imgur.com/K7Nwq4V.jpg">Acme Inc</a>
      <span class="v-line"></span>
      <button class="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/projects">Projects</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/blog">Blogs</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/contact">Contact</a>
              </li>
          </ul>
          <ul class="navbar-nav justify-content-end ml-auto">
              <a href="">
                  <li class="nav-item mx-1"> <a class="nav-link" href="/login">
                          <i class="fa-solid fa-user"></i></a></li>
          </ul>
      </div>
  </nav>
</div>
<style>
  .bg-menu {
      background-color: #404040;
  }

  .bg-black {
      background-color: #000;
  }

  #logo {
      width: 30px;
      height: 30px;
      border-radius: 4px;
  }

  .navbar-brand {
      padding: 14px 20px;
      font-size: 16px;
  }

  .navbar-nav {
      width: 100%;
  }

  .nav-item {
      padding: 6px 14px;
      text-align: center;
  }

  .nav-link {
      padding-bottom: 10px;
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
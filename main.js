class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <!--navbar-dark bg-dark-->
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container px-5">
            <a class="navbar-brand" href="#!">
                <img src="/assets/images/logo" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#ptb-features">PTB Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
        `;
    }
}

customElements.define('azm-header', MyHeader);

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="pt-5 bg-darker" id="contact">
        <div class="container">
            <div class="h1 text-white mb-5">
            GHAZAAL ALEZ TRADING EST
            </div>
          <div class="row pb-3">
            <div class="col-md-4 col-sm-4 mb-4">
              <div class="d-flex"><i class="fas fa-phone-square text-darkorg" style="font-size: 2.25rem;"></i>
                <div class="ps-3">
                  <h6 class="fs-base text-white fw-bold mb-1">Direct line numbers</h6>
                  <p class="mb-0 fs-ms text-light opacity-50">+966 13 8100094</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 mb-4">
              <div class="d-flex"><i class="fas fa-envelope-open-text text-darkorg" style="font-size: 2.25rem;"></i>
                <div class="ps-3">
                  <h6 class="fs-base text-white fw-bold mb-1">Our Email</h6>
                  <p class="mb-0 fs-ms text-light opacity-50">info@azzeem.com</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 mb-4">
              <div class="d-flex"><i class="fas fa-map-marker-alt text-darkorg" style="font-size: 2.25rem;"></i>
                <div class="ps-3">
                  <h6 class="fs-base text-white fw-bold mb-1">Our Location</h6>
                  <p class="mb-0 fs-ms text-light opacity-50">KSA - Dammam 32414 King Faisal Road, PO Box 4722</p>
                </div>
              </div>
            </div>
          </div>
          <div class="small text-white text-center my-2">
            © GHAZAAL ALEZ TRADING EST 2022
          </div>
        </div>
      </footer>
        `;
    }

}

customElements.define('azm-footer', MyFooter);
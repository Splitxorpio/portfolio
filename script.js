class MyComponent extends HTMLElement {
  connectedCallback() {
      console.log("I am connecting");
      this.innerHTML = `

      <div class="card" style="width: 18rem;">
        <img src="techoptimumlogo.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    `;
  }

  disconnectedCallback() {
      console.log("I am leaving");
  }
}
customElements.define('card-1', MyComponent);
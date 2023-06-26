class personaje {
  constructor(id, nombre) {
    this._id = id;
    this._nombre = nombre;
    this._especie = "";
    this._imagen = "";
  }

  get id() {
    return this._id;
  }

  get nombre() {
    return this._nombre;
  }

  get especie() {
    return this._especie;
  }

  get imagen() {
    return this._imagen;
  }

  set especie(esp) {
    this._especie = esp;
  }

  set imagen(img) {
    this._imagen = img;
  }

  show() {
    const htmlCode = `<article class="main-container__article">
        <div class="main-container__div main-container__div--front">
          <img class="main-container__img" src="${this.imagen}" alt="RickAndMortyApi img"/>
          <p class="main-container__p main-container__p--ricknmorty">${this.nombre} (N° ${this.id})</p>
        </div>
        <div class="main-container__div main-container__div--back">
          <p class="main-container__p main-container__p--data">
          ${this.nombre}</br></br>
          Specie: ${this.especie}</br>
          </p>
        </div>
      </article>`;
    return htmlCode;
  }
}

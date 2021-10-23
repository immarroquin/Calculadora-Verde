
export const form = () => {
    const divForm = document.createElement('div');
    divForm.setAttribute('class', 'div-form');
    const viewForm = ` 
    <section class='first-section'>
      <img src='img/logo.png' alt='logo' class='img-logo'/>
      <p>Calcula tu huella de carbono</p>
    </section>
    <div class="input-field col s12">
    <select>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div>
    <section class="form-section">
      <form action="">
        <p>Pregunta 1</p>
        <input type="text" placeholder="12345kg" />
        <hr class="linea" />
        <p>Pregunta 2</p>
        <input type="text" placeholder="12345kg" />
        <hr class="linea" />
        <p>Pregunta 3</p>
        <input type="text" placeholder="12345kg" />
        <hr class="linea" />
        <p>Pregunta 4</p>
        <input type="text" placeholder="12345kg" />
        <button href="#/solutions">Calcular</button>
      </form>
    </section> `
    divForm.innerHTML = viewForm;
    return divForm 
}
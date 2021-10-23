
export const form = () => {
    const divForm = document.createElement('div');
    divForm.setAttribute('class', 'div-form');
    const viewForm = ` 
    <section class='first-section'>
      <img src='img/logo.png' alt='logo' class='img-logo'/>
      <p>Calcula tu huella de carbono</p>
    </section>
    <div class='container-select'>
      <select class='select'>
        <option value=''>Selecciona tu sector</option>
        <option value='bbb'>bbb</option>
        <option value='aaa'>aaa</option>
        <option value='bbb'>bbb</option>
        <option value='aaa'>aaa</option>
      </select>
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
        <a href="#/solutions">Calcular</a>
      </form>
    </section> `
    divForm.innerHTML = viewForm;
    return divForm 
}
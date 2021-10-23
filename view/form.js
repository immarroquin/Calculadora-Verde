
export const form = () => {
    const divForm = document.createElement('div');
    divForm.setAttribute('class', 'div-form ');
    const viewForm = ` 
    <section class=" section-hdr center-align">
      <img src='img/logo.png' alt='logo' id='logo' class='responsive-img' width='100'/>
      <p class= 'title'>Caribe</p>
      <p class= 'sub-title'>Calcula tu huella de carbono</p>
    </section>
    <div class= ' div-selects responsive center-align row  '>
    <select class="browser-default col s5 responsive ">
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <select class="browser-default col s5 responsive">
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    </div>
    <div class=" container-form responsive">
    <div class="section-form ">
      <form  class="responsive ">
        <p class= 'question'>Pregunta 1</p>
        <input  type="text" placeholder="12345kg" />
        <p class= 'question '>Pregunta 2 </p>
        <input  type="text" placeholder="12345kg" />
        <p class= 'question '>Pregunta 3</p>
        <input  type="text" placeholder="12345kg" />
        <p class= 'question'>Pregunta 4</p>
        <input  type="text" placeholder="12345kg" />
        <a href='#/solutions' class="waves-effect waves-light btn">CALCULAR</a>
      </form>
    </div> 
    </div>`
    divForm.innerHTML = viewForm;
    return divForm 
}

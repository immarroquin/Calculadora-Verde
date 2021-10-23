export const solutions = () => {
    const divSolutions = document.createElement('div');
    divSolutions.setAttribute('class', 'div-solutions');
    const viewSolutions = ` 
    <section class=" section-hdr center-align">
      <img src='img/logo.png' alt='logo' id='logo' class='responsive-img' width='120'/>
      <p class= 'title'>Caribe</p>
      <p class= 'sub-title'>Tu huella de carbono es</p>
      <a href='' class="btn-clo waves-effect waves-light btn">NUEVO CALCULO</a>
    </section>`
    divSolutions.innerHTML = viewSolutions;
    return divSolutions
}
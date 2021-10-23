export const solutions = () => {
    const divSolutions = document.createElement('div');
    divSolutions.setAttribute('class', 'div-solutions');
    const viewSolutions = ` <h1>Solutions</h1>`
    divSolutions.innerHTML = viewSolutions;
    return divSolutions
}
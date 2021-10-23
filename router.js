import { form } from './view/form.js';
import { solutions } from './view/solutions.js';

 const views = (hash) => {
  const containerRoute = document.getElementById('containerAll');
  containerRoute.innerHTML = '';

  switch (hash) {
    case '':
      containerRoute.appendChild(form());
      break;
    case '#/solutions':
      containerRoute.appendChild(solutions());
      break;
    default:
      containerRoute.innerHTML = 'Ups Error 404';
  }
};
export const routes = (hash) => {
    if (hash === '#/') {
      //si no funciona colocar #/ en ves de ''
      return views(hash);
    }
    if (hash === '#/solutions') {
      return views(hash);
    }
    return views(hash);
  };
const  formExport  = require('./view/form.js') ;
const  solutions  = require('./view/solutions.js') ;

 const views = (hash) => {
  const containerRoute = document.getElementById('containerAll');
  containerRoute.innerHTML = '';

  switch (hash) {
    case '':
      containerRoute.appendChild(formExport());
      break;
    case '#/solutions':
      containerRoute.appendChild(solutions());
      break;
    default:
      containerRoute.innerHTML = 'Ups Error 404';
  }
};
 const routes = (hash) => {
    if (hash === '#/') {
      //si no funciona colocar #/ en ves de ''
      return views(hash);
    }
    if (hash === '#/solutions') {
      return views(hash);
    }
    return views(hash);
  };

  module.exports=routes;
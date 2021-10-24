
const  routes  = require("./router.js");
const  formExport  = require("./view/form.js");

const init = () => {
  document.getElementById('containerAll').appendChild(formExport())
  routes(window.location.hash);
  window.addEventListener("hashchange", () => {
    routes(window.location.hash);
  });
};
window.addEventListener('load', init);
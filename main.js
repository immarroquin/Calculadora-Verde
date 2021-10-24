
const  routes  = require("./router.js");
const  db  = require("./mysql.js");

const init = () => {
  document.getElementById('containerAll').appendChild(db.formExportMy())
  routes(window.location.hash);
  window.addEventListener("hashchange", () => {
    routes(window.location.hash);
  });
};
window.addEventListener('load', init);
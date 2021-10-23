import { form } from "./view/form.js";
import { routes } from "./router.js";

const init = () => {
  document.getElementById('containerAll').appendChild(form())
  routes(window.location.hash);
  window.addEventListener("hashchange", () => {
    routes(window.location.hash);
  });
};
window.addEventListener('load', init);
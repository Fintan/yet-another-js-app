import '../css/style.scss';
import Model from './model';
import View from './view';
import LitView from './lit-view';
import Controller from './controller';

const view1 = new View({ parentEl: document.querySelector('#root') });
const view = new LitView({ parentEl: document.querySelector('#root') });
const model = new Model();
const controller = new Controller({ view, model });

const setView = () => controller.setView(document.location.hash);
window.addEventListener('load', setView);
window.addEventListener('hashchange', setView);

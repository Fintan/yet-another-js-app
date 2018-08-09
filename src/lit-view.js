import EventEmitter from 'eventemitter3';
import './view.scss'; 
import { litSearchTemplate, litListTemplate } from './templates';
import {html, render} from 'lit-html';

export default class LitView {
    
    constructor({ parentEl }) {
        this.emitter = new EventEmitter();
        this.parentEl = parentEl;
        this.currentTemplate = litSearchTemplate;
    }

    update({ data, state='', switchTemplate=true }) {
        this.data = data;
        if(switchTemplate) {
            this.previous = this.current;
            if(state === '') {
                this.currentTemplate = litSearchTemplate;
            }else if( state === 'list') {
                this.currentTemplate = litListTemplate;
            }else if(state === 'detail') {
            }else {
                console.log('no view state match');
            }
        }
        this.render();
    }

    render() {
        if(this.previous) {
            this.previous.removeListeners.call(this);
        }
        // A lit-html template uses the `html` template tag:
        // let sayHello = (name) => html`<h1>Hello ${name}</h1>`;
        // let sayHello = (name) => html`${searchTemplate(this.data)}`;

        // It's rendered with the `render()` function:
        render(this.currentTemplate(this.data), this.parentEl);
        // this.parentEl.innerHTML = this.current.template(this.data);
        // this.current.addListeners.call(this);
    }
    
}
import EventEmitter from 'eventemitter3';
import './view.scss'; 
import { litSearchTemplate, litListTemplate, litDetailTemplate } from './templates';
// import {html, render} from 'lit-html';
import { html, render } from 'lit-html/lib/lit-extended'

export default class LitView {
    
    constructor({ parentEl }) {
        this.emitter = new EventEmitter();
        this.parentEl = parentEl;
        this.currentTemplate = litSearchTemplate;
    }

    update({ data, state='', switchTemplate=true }) {
        this.data = data;
        if(switchTemplate) {
            if(state === '') {
                this.currentTemplate = litSearchTemplate;
            }else if( state === 'list') {
                this.currentTemplate = litListTemplate;
            }else if(state === 'detail') {
                this.currentTemplate = litDetailTemplate;
            }else {
                console.log('no view state match');
            }
        }
        this.render();
    }

    render() {
        render(this.currentTemplate(this.data, this.emitter), this.parentEl);
    }
    
}
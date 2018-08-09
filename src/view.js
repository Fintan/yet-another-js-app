import EventEmitter from 'eventemitter3';
import './view.scss'; 
import { searchTemplate, listTemplate, detailTemplate } from './templates';

export default class View {
    
    constructor({ parentEl }) {
        this.emitter = new EventEmitter();
        this.parentEl = parentEl;
        this.current = screens.search;
    }

    update({ data, state='', switchTemplate=true }) {
        this.data = data;
        if(switchTemplate) {
            this.previous = this.current;
            if(state === '') {
                this.current = screens.search;
            }else if( state === 'list') {
                this.current = screens.list;
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
        this.parentEl.innerHTML = this.current.template(this.data);
        this.current.addListeners.call(this);
    }
    
}


const screens = {
    search: {
        addListeners(){},
        removeListeners(){},
        template: searchTemplate
    },
    list: {
        addListeners(){
            const moreBtn = this.parentEl.querySelector('#moreBtn');
            moreBtn.addEventListener('click', (e)=> {
                this.emitter.emit('FETCH_APPEND');
                // e.preventDefault();
            });
        },
        removeListeners(){},
        template: listTemplate
    },
    detail: {
        addListeners(){},
        removeListeners(){},
        template: detailTemplate
    }
};
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { autorun,observable,action,useStrict,computed } from 'mobx';
useStrict(true);

ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();

class Profile {
    @observable firstName = "";
    @observable lastName = "";
    @observable age = "";

    @computed get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    @action setName(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
// obserable
let state = new Profile();
//reaction
autorun(() => {
    console.log(state.fullName);
});

state.setName("ko","dookie");


//window.state = state;
//state.name = "koko";
//state.name = "koko dookie";

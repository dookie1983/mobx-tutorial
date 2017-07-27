import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { autorun, observable, action, useStrict } from 'mobx';
useStrict(true);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

let state = observable({
    firstName: "Amorndej",
    lastName: "Wannasri",
    get fullName() {
        //computed values
        return this.firstName + ' ' + this.lastName;
    },
    setName: action(function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    })
});

//reaction
autorun(() => {
    console.log(state.fullName);
});

state.setName("ko", "dookie");

class Profile {
    @observable firstName = "";
    @observable lastName = "";
    @observable age = "";
}

let profile = observable({
    firstName: "",
    lastName: "",
    age: ""
})
//window.state = state;
//state.name = "koko";
//state.name = "koko dookie";

import React,{ Component } from 'react';
import logo from './logo.svg';
import { observable,action } from 'mobx';
import { observer } from 'mobx-react';
import './App.css';
import Counter from "./Counter"

let store = observable({
  counters =[
    {
      count: 0
    },
    {
      count: 1
    }
  ],
  get summary() {
    return this.counters.reduce((value,item) => {
      return value + item.count;
    },0);
  }
});

@observer
class App extends Component {
  @action clickPlus = (counter) => {
    counter.count += 1;
  }

  @action clickMinus = (counter) => {
    counter.count -= 1;
  }
  //
  render() {
    return (
      <div className="App">
        <Counter count={store.counters[0]}
          increment={this.clickPlus}
          decrement={this.clickMinus}
        />
        <Counter count={store.counters[1]}
          increment={this.clickPlus}
          decrement={this.clickMinus}
        />

        <div>Summary:{store.summary}</div>
      </div>
    );
  }
}

export default App;

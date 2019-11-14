import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Store from "./models/store";
import DevTools from "mobx-react-devtools";
import Faterweb from "./components/father";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import todo from "./models/todo";

import { Provider } from "mobx-react"
const store = new Store();
console.log(store)

// import {configure} from 'mobx'; // 开启严格模式
// configure({enforceActions: true}) //
store.addnewuser("hzl","asdjwqi")


setTimeout(()=>{
  store.addnumber()
  store.addnewuser("hzl",store.numbersum)
},2000)
@observer
export default class Index extends Component {
  @observable newarr = {}
  constructor() {
    super()
    this.state = {

    }
  }
  changename(e) {
    this.newarr.name = e.target.value
  }
  changeage(e) {
    this.newarr.age = e.target.value
  }

  @action
  onsubmitt(e) {
    e.preventDefault();
    console.log(this.newarr)
    store.addnewuser(this.newarr.name,this.newarr.age)
  }
  render() {
    // console.log(store)

    const mapdone = store.user.map(el => {
      console.log(el)
            return <div key={el}>
        <h3>我的姓名：{el.name}</h3>
        <h3>我的年龄：{el.age}</h3>
      </div>
    })

    return (
      <div>
       
        <h1>MOBX练习，根组件</h1>
        <form onSubmit={this.onsubmitt.bind(this)}>
          姓名<input type="text" onChange={this.changename.bind(this)} />
          年龄<input type="text" onChange={this.changeage.bind(this)} />
          <button type="submit">Add</button>
        </form>

        <br />
        {mapdone}
        <Faterweb store={store} /> 
        <DevTools />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById("root"))
window.store = store;
import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Son from './son'

// const store=this.props
// console.log(store);
// import { configure} from "mobx"

// configure({ enforceActions: "observed"}) 
@observer
export default class father extends Component {
    @observable newname=''
  render() {
    const store=this.props.store
    console.log(store);
    return <div>
        <h1>这是father组件</h1>
        <h1>分数{store.numbersum}</h1>
        <button onClick={this.addscore}>增加分数</button>
        <Son {...this.props}/>
    </div>;
  }

  addscore(){
      store.addnumber()
    //   console.log(store);
  }
}

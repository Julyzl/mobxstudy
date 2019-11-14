import React, { Component } from 'react'
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Timner from '../models/todo'
@observer
export default class son extends Component {
    render() {
        // console.log('son'+this.props);
        const sonstore=this.props.store
        // console.log(sonstore);
        const mapdone=sonstore.user.map(el=>{
            return <div>
        <h3>{el.name}</h3>
        <h3>{el.age}</h3>
            </div>
        })
        return (
            <div>
                <h1>这是Son组件</h1>
                {mapdone}
                <Timner/>
            </div>
        )
    }
}

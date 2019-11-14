// import {observable, autorun} from 'mobx';

// var todoStore = observable({
//     todos: [],
//     get completedCount() {
//         return this.todos.filter(todo => todo.completed).length;
//     }
// });

// autorun(function() {
//     console.log("Completed %d of %d items",
//         todoStore.completedCount,
//         todoStore.todos.length,
//         todoStore.todos
//     );
// });

// todoStore.todos[0] = {
//     title: "Take a walk",
//     completed: false
// };

// todoStore.todos[0].completed = true;

// import {observable, autorun} from "mobx";

// var todos = observable([
//     { title: "Spoil tea", completed: true },
//     { title: "Make coffee", completed: false }
// ]);

// autorun(() => {
//     console.log("Remaining:", todos
//         .filter(todo => !todo.completed)
//         .map(todo => todo.title)
//         .join(", ")
//     );
// },{delay:300});
// // 输出: 'Remaining: Make coffee'

// todos[0].completed = false;
// // 输出: 'Remaining: Spoil tea, Make coffee'

// todos[2] = { title: 'Take a nap', completed: false };
// // 输出: 'Remaining: Spoil tea, Make coffee, Take a nap'

// todos.shift();

// import {observable, computed} from "mobx";

// class OrderLine {
//     @observable price=20;
//     @observable amount = 1;

//     constructor(price) {
//         this.price = price;
//     }

//     @computed get total() {
//         return this.price * this.amount;
//     }
// }
// var order=new OrderLine()
//  order.price=30
// console.log(order.total)

import { observer } from "mobx-react";
import { observable, autorun, action } from "mobx";
import React from 'react'

var timerData = observable({
    secondsPassed: 0
});


setInterval(() => {
   
    timerData.secondsPassed++;
}, 1000);

@observer class Timer extends React.Component {

    render() {
        return (<span>Seconds passed: {timerData.secondsPassed} </span>)
    }
};

export default Timer;
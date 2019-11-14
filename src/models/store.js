import { observable, computed, action } from 'mobx';
// import Demo from "./demo";
// import { configure} from "mobx"

// configure({ enforceActions: "observed"}) 
export default class Store {
    @observable number;
    @observable user=[]

    constructor() {
       this.number=60
    }
    @computed
    get numbersum() {
        return this.number+1;
    }
    get setuser(){
        return `${this.user} STUDY`
    }
    @action
    addnumber() {
        this.number++;
    }
    @action
    addnewuser(name,age){
        this.user.push(new Demo(name,age))     
    }


}
class Demo{
    @observable name;
    @observable age;
    @observable sex="male";
    constructor(name,age){
        this.name=name,
        this.age=age
    }
}
import { observable } from "mobx";

export default class Demo{
    @observable name;
    @observable age;
    @observable sex="male";
    constructor(name,age){
        this.name=name,
        this.age=age
    }
}
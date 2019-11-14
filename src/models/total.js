import Store from './store'
import Todo from './todo'
import Demo from './demo'

const store=new Store()
const todo=new Todo()
const demo=new Demo()

const stores={
    store,
    todo,
    demo
}
export default stores

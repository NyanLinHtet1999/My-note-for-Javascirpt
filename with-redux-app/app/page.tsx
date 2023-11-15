/* Components */
import { Counter } from './components/Counter/Counter'
import CounterWithState from './components/CounterWithState'
import TodoList from './components/Todo/TodoList'
import TodoWithRedux from './components/TodoWithRedux/TodoWithRedux'

export default function IndexPage() {
  return (<div>
      {/* <Counter /> */}
    {/* <TodoList/> */}
    {/* <CounterWithState/> */}
    <TodoWithRedux/>
  
  </div>
  )
}

export const metadata = {
  title: 'Redux Toolkit',
}

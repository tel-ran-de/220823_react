import { useDispatch, useSelector } from "react-redux"
import { increase, decrease, reset, increase_by_amount } from "../../redux/actionCreators"

export const Counter = () => {
  // useSelector - принимает в себя колбек функции
  const counter = useSelector(state => state.counter)
  // useDispatch - отпраляет экшен в редьюсер 
  // какой экшен отправляет в редьюсер --> редьюсер меняет состояние
  const dispatch = useDispatch()
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increase_by_amount(10))}>Add 10</button>
    </div>
  )
}

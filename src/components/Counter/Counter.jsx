// создать компонет Counter
// импортируем хук useState из библиотеки react

import { useState } from 'react'

// деструктурируем его на counter setCounter
export const Counter = () => {
  // счетчик увличивает или уменьшает число
  // в круглых скобках могу указать первончальное значенеи initialState
  const [counter, setCounter] = useState(0)
  // counter - переменная в которой хранится значение
  // setCounter - функция кот меняет наше значение

  // мы не можем менять переменную counter напрямую
  // setCounter это специальная функция!! кот меняет состояние и после изменения состояния
  // происходит ререндеринг
  // setCounter меняет значение counter на новое т.е. counter+1
  const increase = () => setCounter(counter + 1)
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

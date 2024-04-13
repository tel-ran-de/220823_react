import { DECREASE, INCREASE, INCREASE_BY_AMOUNT, RESET } from "./constants"
// Action - объект, обычно два ключа
// type - название, которое говорит, ЧТО нам надо сделать с состоянием
export const increase = () => ({ type: INCREASE })

export const decrease = () => ({ type: DECREASE })

export const reset =  () =>  ({type: RESET})

export const increase_by_amount = (value) => ({type: INCREASE_BY_AMOUNT, payload: value})
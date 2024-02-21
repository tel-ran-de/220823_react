1. Дефолтный можно переименоать при импорте!
2. Только один!!! Дефолтный экспорт на странице
   Only one default export allowed per module
3. Импортируем Дефолтный экспорт без фигурных скобок

Ошибки при импорте

1. ОПЕЧАТКА
   'AbotMe1' is not defined
2. Перепутали Дефолтный экспорт и обычный (именованный)
   'Name' is not exported from './components/AboutMe' (imported as 'Name').
   was not found in './components/AboutMe'
   export 'default' (imported as 'AboutMe1') was not found in './components/AboutMe' (possible exports: AboutMe1, AboutMe2)
3. Неправильно указываете путь
   Module not found: Error: You attempted to import ../components/AboutMe which falls outside of the project src/ directory

   ../ - выход из папки в родительскую
   ./ - в этой папке

// написать компоннет Post у которого будут пропсы title, description likes

function sum (a, b) {}

// функция - параметры
// компоненты - пропс
// компонент это смесь JS + HTML то мы передаем пропсы как атрибуты
// дефолтный параметр функции при подставлении

// ОТ РОДИТЕЛЯ К РЕБЕНКУ

// ПРОПСЫ В КОМПОНЕНТЕ - ОБЪЕКТ

// пропсы - параметры на чтение
// данные приходят от родителя

// все компоненты - в папке components
// стиль написания кода - под компонент и его верстку создается отдельная папка
// один файл jsx - один компонент

// Создать папку Counter внутри папки components
// создать файл Counter.jsx

// создать счетчик кот прибавляет вычитает и обнуляет значение
// useState
// через setCounter - меняем значение
// через counter отображаем
// на кнопках события onClick

// useState -
хук / специальные функция, кот позволять управлять напшим компонентом
// import useState from 'react'
// они все начинаются со слова use
// они вызываются только!! внутри компонентов (или внутри кастомных хуков)
// они вызываются на верхнем компонента - после открытия фигурной скобки компонента
// до return
// НЕльзя вызывать внутри циклов и условий

useState() // позволяет управлять состоянияем нашего компонента
use - использовать
State - состояние

состояние - изменяемая часть компонента
состояние меняется внутри компонента
при изменении состоняния происходи ререндеринг компонента и его детей

// props это объект
export const Todo1 = (props) => {
return (
<div>
<h1>{props.title}</h1>
<p>{props.description}</p>
</div>
)
}

export const Todo2 = (props) => {
const { title } = props
return (
<div>
<h1>{title}</h1>
</div>
)
}

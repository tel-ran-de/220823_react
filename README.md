1. Дефолтный экспорт можно переименовать при импорте!
2. Только один!!! Дефолтный экспорт на странице
   Only one default export allowed per module
3. Импортируем Дефолтный экспорт без фигурных скобок

4. Именованный экспорт в фигурных скобках

   Ошибки при импорте

5. ОПЕЧАТКА
   'AbotMe1' is not defined
6. Перепутали Дефолтный экспорт и обычный (именованный)
   'Name' is not exported from './components/AboutMe' (imported as 'Name').
   was not found in './components/AboutMe'
   export 'default' (imported as 'AboutMe1') was not found in './components/AboutMe' (possible exports: AboutMe1, AboutMe2)
7. Неправильно указываете путь
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

// поменять пропсы в компоненте Todo чтобы они соответстовали ключам нашего объекта массива

// Работа с владимиром - один
// Со мной работате - еще один репозиторий
// Новая домашка - создаете новый проект новый репозиторйи и тд.
// Решили сделать сами проект - новый репозиторий

Пятница:
// Рендеринг компонентов
// импорты/экспорты

// пропсы
// useState
// useEffect()

// 1. Реализовать компонент с пропсами
title. price, desc, category name, category image, images первую картинку
{
"id": 4,
"title": "Handmade Fresh Table",
"price": 687,
"description": "Andy shoes are designed to keeping in...",
"category": {
"id": 5,
"name": "Others",
"image": "https://placeimg.com/640/480/any?r=0.591926261873231"
},
"images": [
"https://placeimg.com/640/480/any?r=0.9178516507833767",
"https://placeimg.com/640/480/any?r=0.9300320592588625",
"https://placeimg.com/640/480/any?r=0.8807778235430017"
]
}

// Создать компонент userList
// импортировтаь в него массив users
// импортировать компонент User
// отрисовать данные
// компонент userList мы импортируем в APP

category.name
category.image

для корректоной работы требуется:

package.json
index.js в кот мы используем реакт-дом и получаем корневому элементу
index.html в папке public структура страницы

npm i - через package.json устанавливает
node modules

// все компоненты лежат в папке компоненты COMPONENTS
// отдельная папка под компонент создается для удобства
потому что там хранится компонент jsx
и его стили module.css

в папке utils хранятся все вспомогательные функции

DRY
SOLID

Компонент - это переиспользуемый изолированный блок кода (ФУНКЦИЯ)

<TodoList /> TodoList()

<User2 {...user} /> - этот синтаксис spread operator
это отработает только в том случае, если !! ключи объекта совпадают с названиями пропсов

Создать компонент comment - author=h2 body= p likes = p

Состояние в реакт:
Если изменяется состояние => перерисовыется кмопнент и его дети

Как мы можем повлиять на состояние?
useState -> специальный хук, который может управлять состоянием компонента

Два фундаментальных концепта:
a) props - неизменяемый и на чтение от родителей
b) state - изменяемая часть и может изменяться напрямую в компоненте

Хук - это специальные функции для функциональных компонентов в реакт

Классовый компонент(мы с ними больше не работаем):
у классового компонента есть методы класса
class User3 extends React.Component {
constructor() {

    }

}

У функционального компонета есть ХУКИ

1. все начинаются с use + название с большой буквы
2. Вызываются внутри компонента
3. На верхнем уровне компонента (после фигурной скобки)
   const CommentsList = () => {
4. Не можем вызывать внутри условий и циклов (вложенность запрещена)

import useState

деструктурируем массив
const [value, setValue] = useState(initialState)
value - переменная в кот хранится состояние
setValue - функция кот меняет наше состояние

МЫ НЕ МОЖЕМ МЕНЯТЬ НАПРЯМУЮ СОСТОЯНИЕ
меняем через СПЕЦИАЛЬНУЮ функцию

useState(initialState)- при первом рендере можем передать первичные/инишл/ дефолтное / по умолчанию значение

1. Создать в папке файл comment.module.css
2. создать класс commentContainer
3. Добавить ширину, высоту и  border-radius
4. импортировать этот файл в файл компонента и применить к самому вернему div

import { useState } from 'react'

const Comment = ({ author, body, likes }) => {
const [marked, setMarked] = useState(true)
const [bgMarked, setbgMarked] = useState(false)
// bgMarked
// импортировать фук useState
// деструктурировать его marked setMarked
// initState false
// в зависимости от marked
// style - color: marked ? orange : green
// создать кнопку которая меняет состояние на противоположное

// создать новую и новое состояние и менять значение заднего фона
// красным либо фиолетовым
const style = {
color: marked ? 'orange' : 'green',
backgroundColor: bgMarked ? 'red' : 'violet',
}

return (

<div style={style} className="">
<h1>{author}</h1>
<p>{body}</p>
<p>{likes}</p>
<button onClick={() => setMarked(!marked)}>change color</button>
<button onClick={() => setbgMarked(!bgMarked)}>change background</button>
</div>
)
}

export default Comment

1. Создать состояние которое isHidden setIsHidden - булевое значение
2. в зависимости от isHidden ? .commentContainer : .hide
3. Сознать которая на клик будет сркывать и открывать пост

projectMamon-- > layout / pages / components / images


REDUX 


const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE':
            return state += 1;
        case 'DECREASE':
            return state -= 1;
        case 'RESET':
            return state = 0;
        default: 
        return state   
    }
}

if (action.type === 'INCREASE') {
    return state+=1
} else if (action.type === 'DECREASE') {
    return state -=1
} else if (action.type === 'RESET'){
  return state = 0
} else {
    return state
}
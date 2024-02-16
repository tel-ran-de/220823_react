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
   Module not found: Error: You attempted to import ../components/AboutMe which falls outside of the project src/ directory.

   ../ - выход из папки в родительскую
   ./ - в этой папке

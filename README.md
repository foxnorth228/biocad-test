# Тестовое задание на позицию frontend разработчика в компанию BIOCAD в Департамент Вычислительной Биологии

## Запуск

Команда для сборки prod-версии
```
npm run build
```

Команда для запуска dev-сервера
```
npm run dev
```

## Стек

- Webpack
- React
- Typescript
- MUI (с темой)
- react-hook-form
- npm v.22
- eslint, prettier, husky
- Из-за того, что проект довольно маленький, я решил ограничиться простой локализацией и Context, а не использовать i18n и полноценный state manager по типу Redux или Mobx

## Реализованные требования

1. [x] Инпуты ввода аминокислотных последовательностей должны принимать строки следующего формата:VLSPADKTNIKASWEKIGSHG
2. [x] Инпуты обязательны для заполнения, могут содержать только латинские буквы аминокислот (A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V) и символ -
3. [x] Инпуты должны иметь проверку на то, что длина введенных последовательностей в обоих полях одинаковая.
4. [x] Сабмит по кнопке должен отображать под формой визуализацию выравнивания, представляющая из себя 2 строки, отрисованные друг под другом.
5. [x] В верхней строке каждая буква должна быть окрашена фоном в свой цвет в соответствии со свойствами аминокислот
6. [x] В нижней строке фоном должны быть выделены только буквы, отличающиеся от соответствующей по индексу буквы в строке выше.
7. [x] Инструмент должен быть адаптивен и выглядеть прилично на минимальном разрешении до 320px при динамическом изменении ширины экрана.
8. [x] Строки с аминокислотными последовательностями должны переноситься на другую строку при сужении экрана и продолжать размещаться друг под другом
9. [ ] (пункт со звездочкой) На странице должен корректно работать встроенный поиск по части последовательности (при помощи cmd+F или ctrl+F) - Этот пункт я пытался реализовать через создание отступов через line-height и css-позиционирование.
Но тогда появляется проблема что текст выделяется по всей высоте line-height, а не только по тексту. Поэтому наилучшим вариантом выглядит расчёт того, как текст должен располагаться, и проверку resize через javascript, при этом у контейнера должен быть не flex и не grid свойство display.
Для добавления background стоит также использовать отдельные span-элементы, но с display-свойством inline. При выполнении этих 2 условий текст будет интерпретироваться браузерами как сплошной, и поиск с копированием будут работать корректно.
Также, если мы не хотим использовать отдельные span и не париться с display-свойствами, есть вариант использовать дублирующий div-контейнер, который и будет отвечать за background элементов. Из-за текущей загруженности я могу лишь словесно описать, как я вижу решение данной задачи.
10. [ ] (пункт со звездочкой) При выделении мышкой части последовательности она должна вставляться в буфер обмена и должно появляться всплывающее уведомление о том, что последовательность скопирована, пропадающее через секунду после появления.- 
тут нужно использовать selectionchange-событие, window.getSelection метод и проверку на то, какие nodes выделены с помощью anchorNode и focusNode. Этот пункт также, как и прошлый, описываю словестно, т.к. он требует довольно много времени для реализации, которого у меня в данный момент не особо хватает
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "А Новый фильм"
    ]
};
// 1)
const adv = document.querySelectorAll('.promo__adv img'),
    promo = document.querySelector('.promo__bg'),
    genre = promo.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

//console.dir(adv);
//adv[0].remove();
//adv[0].innerHTML = "";
adv.forEach(item => {
    item.remove();
})

// 2)
//genre.innerHTML = 'ДРАМА';
genre.textContent = 'ДРАМА';

// 3)
promo.style.backgroundImage = 'url("../img/bg.jpg")';
//console.dir(bg);

// 4)   &  5)
//console.dir(movieList);

movieDB.movies.sort();
//console.log(movieDB.movies);
movieList.innerHTML = '';
console.log(movieList);

movieDB.movies.forEach((item, key) => {
    /*     let li = document.createElement('li');
        li.classList.add('promo__interactive-item');
        //console.log(item);
        li.innerHTML = key + 1 + '.  ' + item;
        movieList.append(li); */

    movieList.innerHTML += `
            <li class="promo__interactive-item"> ${key + 1}. ${item}
            <div class="delete"></div>
            </li>
        `;
})


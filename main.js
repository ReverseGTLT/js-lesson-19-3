const goodsFirst = document.querySelector('.goods--first');
const goodsSecond = document.querySelector('.goods--second');
const goodsThird = document.querySelector('.goods--third');

const titleFirst = document.querySelector('.list-categories__title--first');
const titleSecond = document.querySelector('.list-categories__title--second');
const titleThird = document.querySelector('.list-categories__title--third');


function showFirst(e){
    e.addEventListener('click', () => {
        if (e === titleFirst) {
            goodsFirst.classList.toggle('visible')
        } else if (e === titleSecond) {
            goodsSecond.classList.toggle('visible')
        } else if (e === titleThird) {
            goodsThird.classList.toggle('visible')
        }
    })
}

showFirst(titleFirst);
showFirst(titleSecond);
showFirst(titleThird);

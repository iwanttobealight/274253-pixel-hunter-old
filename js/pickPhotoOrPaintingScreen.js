import createElement from './createElement';
import showScreen from './showScreen';
import pickPaintingFromImagesLayoutDom from './pickPaintingFromImagesScreen';
import headerLayout from './headerLayout';
import statsLayout from './statsLayout';
import footerLayout from './footerLayout';
import backToGreetingScreen from './backToGreetingScreen';
import isItPaintOrPhoto from './isItPaintOrPhoto';
import {findRandomRangeNum, questions, randomArrayElement} from './randomQuestion';
import testImages from './testImages';

const randomArr = randomArrayElement(testImages);
const randomImage = randomArr[findRandomRangeNum(0, testImages.length)];

const pickPhotoOrPaintingLayout = `
${headerLayout}
<div id="game-2-div" class="game-2 central__content">
  <div class="game">
    <p class="game__task">${randomArrayElement(questions)}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${randomImage}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
${statsLayout}
  </div>
</div>
  ${footerLayout}`;

const pickPhotoOrPaintingLayoutDom = createElement(pickPhotoOrPaintingLayout);
const pickPaintingFromImagesScreen = () => showScreen(pickPaintingFromImagesLayoutDom);

const gameAnswers = pickPhotoOrPaintingLayoutDom.querySelectorAll(`.game__answer`);

gameAnswers.forEach(function (btn) {
  btn.addEventListener(`click`, function () {
    pickPaintingFromImagesScreen();
    const userAnswer = isItPaintOrPhoto(btn);
    const trueAnswer = (testImages.indexOf(randomArr) === 0) ? `paint` : `photo`;
    return console.log(userAnswer === trueAnswer);
  });
});

// const isAnswerRight = (answer) => {
//   console.log(paintOrPhoto);
//   return (answer);
// };

backToGreetingScreen(pickPhotoOrPaintingLayoutDom);

export default pickPhotoOrPaintingLayoutDom;

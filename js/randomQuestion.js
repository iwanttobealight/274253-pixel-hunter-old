const questions = [`Угадайте для каждого изображения фото или рисунок?`, `Угадай, фото или рисунок?`];

const findRandomRangeNum = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

const randomArrayElement = (arr) => {
  return (findRandomRangeNum(-1, 1) < 0) ? arr[0] : arr[1];
};

export {findRandomRangeNum, questions, randomArrayElement};

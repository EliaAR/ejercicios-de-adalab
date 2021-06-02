const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

function RandomCatDifferent({ width = 400, height = 200 }) {
  const randomCat = getRandomInteger(NUMBER_OF_CATS);

  return (
    <a href="http://lorempixel.com">
      <img
        src={`http://lorempixel.com/${width}/${height}/cats/${randomCat}`}
        //  src={`http://lorempixel.com/${props.width||400}/${props.height||200}/cats/${randomCat}`}  Esto se haría sin el destructuring
        alt="Random cat"
      />
    </a>
  );
}

export { RandomCatDifferent };

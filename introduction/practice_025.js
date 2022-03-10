const value30 = 30;
const value50 = 50;

const andTureTrue = value30 >= 30 && value50 >= 30;
const andTureFalse = value30 >= 30 && value50 >= 100;
const andFalseFalse = value30 >= 40 && value50 >= 100;

const orTureTrue = value30 >= 30 || value50 >= 30;
const orTureFalse = value30 >= 30 || value50 >= 100;
const orFalseFalse = value30 >= 40 || value50 >= 100;

console.log('andTureTrue:', andTureTrue);
console.log('andTureFalse:', andTureFalse);
console.log('andFalseFalse:', andFalseFalse);
console.log('orTureTrue:', orTureTrue);
console.log('orTureFalse:', orTureFalse);
console.log('orFalseFalse:', orFalseFalse);

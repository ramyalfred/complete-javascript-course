'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    const answer = prompt(`${this.question}\n${this.options}`);
    return;
  },
};

console.log(poll.registerNewAnswer());
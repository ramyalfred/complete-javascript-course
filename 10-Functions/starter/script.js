'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    
    //Build options list for printing
    let optionsString = this.options[0];
    for (let i=1; i< this.options.length; i++){
      optionsString = optionsString + '\n' + this.options[i];
    }
    const answer = prompt(`${this.question}\n${optionsString}\n(Write option number)`);
    
    //Check for valid answer and increment counters
    if(answer >= 0 && answer < this.options.length){
      this.answers[answer] = this.answers[answer] + 1;
    }
    this.displaResults('string');
  },

  //Displaying the results
  displaResults(type = 'array'){
    if(type == 'array'){
      console.log(this.answers);
    }else if(type == 'string'){
      console.log(`Poll results are ${this.answers}`);
    }
  },
};

const test1 = {
  answers: [5,2,3],
}

const test2 = {
  answers: [1,5,3,9,6,1],
}

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));

poll.displaResults.call(test1,'string');
poll.displaResults.call(test2,'string');
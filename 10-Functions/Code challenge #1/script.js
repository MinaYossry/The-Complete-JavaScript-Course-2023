'use strict';

const poll = {
    question: "What is your favourite programming lagnuage?",
    options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],

    answers: new Array(4).fill(0),

    registerNewAnswer: function () {
        let choice;
        do {
            choice = parseInt(prompt(this.generateString()));
        } while (isNaN(choice) || choice < 0 || choice >= this.options.length);
        this.answers[choice]++;
        this.displayResults();
        this.displayResults("string");
    },

    generateString: function () {
        let str = `${this.question}
`;
        for (let i = 0; i < this.options.length; i++) {
            str += `${this.options[i]}
`
        }

        return str;
    },

    displayResults: function (type = 'array') {
        if (type === 'string') {
            console.log(` Poll results are ${this.answers.join(", ")}`);
        }
        else {
            console.log(this.answers);
        }
    }
}

document.querySelector(".poll").onclick = poll.registerNewAnswer.bind(poll);

const data1 = [5, 2, 3],
    data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: [5, 2, 3] })
poll.displayResults.call({ answers: [5, 2, 3] }, "string");

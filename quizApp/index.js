
        const questions = [{
            question: 'Which of the following is not a real eCommerce platform?',
            answers: [{
                    option: 'Shopify',
                    answer: 'incorrect'
                },
                {
                    option: 'WooCommerce',
                    answer: 'incorrect'
                },
                {
                    option: 'ShopCommerce ',
                    answer: 'correct'
                },
                {
                    option: 'BigCommerce',
                    answer: 'incorrect'
                },
            ]
        },
        {
            question: 'If Shopify is so good, why are Shopify developers necessary?',
            answers: [{
                    option: 'To save time on things like store setups and migrations',
                    answer: 'incorrect'
                },
                {
                    option: 'To extend the limited design options and functionalities of themes with custom code',
                    answer: 'incorrect'
                },
                {
                    option: 'To provide support with a deep understanding of how the platform works and what its limitations are ',
                    answer: 'incorrect'
                },
                {
                    option: 'All the above',
                    answer: 'correct'
                },
            ]
        },
        {
            question: 'Which of the following is true about Shopify developers?',
            answers: [{
                    option: 'They are paid extremely well',
                    answer: 'incorrect'
                },
                {
                    option: 'There is a high demand for them',
                    answer: 'incorrect'
                },
                {
                    option: 'They need to know web development, the platform itself, and the liquid template language ',
                    answer: 'incorrect'
                },
                {
                    option: 'All the above',
                    answer: 'correct'
                },
            ]
        }
    ];
    let currentQuestion = document.getElementById('question');
    let qNum = document.getElementById('question-num');
    let lbl1 = document.getElementById('lbl1');
    let lbl2 = document.getElementById('lbl2');
    let lbl3 = document.getElementById('lbl3');
    let lbl4 = document.getElementById('lbl4');

    let txt1 = document.getElementById('txt1');
    let txt2 = document.getElementById('txt2');
    let txt3 = document.getElementById('txt3');
    let txt4 = document.getElementById('txt4');
    let i = 0;

    const options = document.querySelectorAll('input[type="radio"]');
    const labels = document.querySelectorAll('label');

    function fillPageQuestions(){

        options.forEach((option,idx)=>{
            option.setAttribute('value', `${questions[i].answers[idx].answer}`);
            labels[idx].innerHTML = questions[i].answers[idx].option;
        });


        // lbl1.setAttribute('value', `${questions[i].answers[0].answer}`);
        // lbl2.setAttribute('value', `${questions[i].answers[1].answer}`);
        // lbl3.setAttribute('value', `${questions[i].answers[2].answer}`);
        // lbl4.setAttribute('value', `${questions[i].answers[3].answer}`);

        // txt1.innerHTML = questions[i].answers[0].option;
        // txt2.innerHTML = questions[i].answers[1].option;
        // txt3.innerHTML = questions[i].answers[2].option;
        // txt4.innerHTML = questions[i].answers[3].option;
    }


    function load() {
        question.innerHTML = `${questions[i].question}`;
        qNum.innerHTML = `Question ${i+1} of ${questions.length}:`;



        fillPageQuestions();
    }

    let score=0;

    let userAnswers=[];

    let prev = document.getElementById('previous');
    let button = document.getElementById('next');
    let submit = document.getElementById('submit');

    prev.addEventListener(('click'), function back() {
        userAnswers.pop();
        console.log(userAnswers);

        if(i===1){
            prev.classList.add('hide');
        }
        i--;
        submit.classList.add('hide');
        button.classList.remove('hide');

        currentQuestion.innerHTML = questions[i].question;
        qNum.innerHTML = `Question ${i+1} of ${questions.length}:`;

        fillPageQuestions();
    });
    button.addEventListener(('click'), function next() {
        const selectedOption = document.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            userAnswers.push(selectedOption.value);
            console.log(userAnswers);

            // console.log(score);
            lbl1.checked = false;
            lbl2.checked = false;
            lbl3.checked = false;
            lbl4.checked = false;
            prev.classList.remove('hide');

            if (i === questions.length - 1) {
                return false;
            }
            i++;

            currentQuestion.innerHTML = questions[i].question;
            qNum.innerHTML = `Question ${i+1} of ${questions.length}:`;

            fillPageQuestions();

            if (i === 2) {
                button.classList.add('hide');
                submit.classList.remove('hide');
            }
        } else {
            alert('You must choose an answer!');
        }
    });

    submit.addEventListener(('click'), function sub() {
        const selectedOption = document.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            userAnswers.push(selectedOption.value);

            document.getElementById('container').innerHTML = '';
            document.querySelector('h1').innerHTML = '';
            document.querySelector('h2').innerHTML = '';
            document.querySelector('h3').innerHTML = '';
            let scoreText = document.getElementById('score');
            scoreText.classList.remove('hide');
            scoreText.innerHTML = `Score is ${checkScore()}/${questions.length}`;

            submit.classList.add('hide');
            prev.classList.add('hide');
    
        
        } else {
            alert('You must choose an answer!');
        }
    });

    function checkScore(){
        userAnswers.forEach(answer => {
            if (answer==='correct') {
                score++
            }
        });
        return score;
    }
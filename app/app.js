/*  ###################################################################################################################################
    #########################           SURVEYS CODE JAVASCRIPT         ###############################################################
    ###################################################################################################################################
*/ 

// SET DATA TO LOCAL STORAGE
function setAnswersToLocalStorage(answerQ){
    var answerQ = answerQ.split(".");
    var questionNo = answerQ[0];
    var answer = answerQ[1];
    localStorage.setItem("q:"+questionNo, answer);
}
    
// CREATE LIST USING BUTTONS
function createButtonList(buttonExt, questionNo, divToAppend, questions, listType = "1"){
    var ol = document.createElement('ol');
    ol.setAttribute('id', 'answers');
    ol.type = listType;
    for(var i=0; i<questions.length; i++){
        var li = document.createElement('li');
        var button = document.createElement('button');
        button.setAttribute('class', 'btn btn-outline-light my-1');
        button.value = questionNo+'.'+questions[i];
        button.onclick = function(){
            var value = this.value;
            setAnswersToLocalStorage(value);
            value = value.split(".");
            buttonExt.innerHTML = 'Continue with: '+value[1];
        }
        button.innerHTML = questions[i];
        li.appendChild(button);
        ol.appendChild(li);
    }
    divToAppend.appendChild(ol);
}

// CREATE LIST INLINE USING BUTTONS
function createButtonListInline(buttonExt, questionNo, divToAppend, questions){
    var answers = document.createElement('div');
    answers.setAttribute('id', 'answers');
    for(var i=0; i<questions.length; i++){
        if(typeof(questions[i]) == 'number'){
            questions[i] = questions[i].toString();
        }
        var button = document.createElement('button');
        button.setAttribute('class', 'btn btn-outline-light mx-1');
        button.value = questionNo+'.'+questions[i];
        button.onclick = function(){
            var value = this.value;
            setAnswersToLocalStorage(value);
            value = value.split(".");
            buttonExt.innerHTML = 'Continue with: '+value[1];
        }
        button.innerHTML = questions[i];
        answers.appendChild(button);
    }

    divToAppend.appendChild(answers);
}



/* ##############################       COMPANY PAGE FUNCTIONALITY      ######################################*/
function one(){
    localStorage.setItem("pageNo", "1");
    paragraph.innerHTML = '1. Design of the interface?';
    sub_paragraph.innerHTML = '(0 means worst, 5 means best ever)';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    
    q = [1, 2, 3, 4, 5];
    createButtonListInline(button, 1, answer_rubric, q);
    button.innerHTML = 'Next';
    button.onclick = two;
}
function two(){
    localStorage.setItem("pageNo", "2");
    paragraph.innerHTML = '2. The range of functionalities.';
    sub_paragraph.innerHTML = '(0 means not enough functionalities, 5 means it is just perfect)';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    
    q = [1, 2, 3, 4, 5];
    createButtonListInline(button, 2, answer_rubric, q);
    button.innerHTML = 'Next';
    button.onclick = three;
}
function three(){
    localStorage.setItem("pageNo", "3");
    paragraph.innerHTML = '3. When you first used the software, what was your overall impression of it?';
    sub_paragraph.innerHTML = '';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    var q = ['Very Positive', 'Positive', 'It was alright', 'Negative', 'Really negative'];
    createButtonList(button, 3, answer_rubric, q, 'a');
    button.innerHTML = 'Next';
    button.onclick = four;
}
function four(){
    localStorage.setItem("pageNo", "4");
    paragraph.innerHTML = '4. What do you like most about it?';
    sub_paragraph.innerHTML = '';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    var answer = document.createElement('div');
    answer.setAttribute('id', 'answers');
    var textarea = document.createElement('textarea');
    textarea.setAttribute('class', 'form-control');
    textarea.setAttribute('rows', '6');
    answer.appendChild(textarea);
    answer_rubric.appendChild(answer);
    button.innerHTML = 'Next';
    button.onclick = function(){
        setAnswersToLocalStorage("4."+textarea.value);
        five();
    }
}
function five(){
    localStorage.setItem("pageNo", "5");
    paragraph.innerHTML = '5. ...and what do you think could still be improved?';
    sub_paragraph.innerHTML = '';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    var answer = document.createElement('div');
    answer.setAttribute('id', 'answers');
    var textarea = document.createElement('textarea');
    textarea.setAttribute('class', 'form-control');
    textarea.setAttribute('rows', '6');
    answer.appendChild(textarea);
    answer_rubric.appendChild(answer);
    button.innerHTML = 'Next';
    button.onclick = function(){
        setAnswersToLocalStorage("5."+textarea.value);
        six();
    }
}
function six(){
    localStorage.setItem("pageNo", "6");
    var bold = 'Overall Quality.';
    bold = bold.bold();
    paragraph.innerHTML = '6. '+bold+' How would you rate the service?';
    sub_paragraph.innerHTML = '(0 means worst, 5 means best ever)';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    q = [1, 2, 3, 4, 5];
    createButtonListInline(button, 6, answer_rubric, q);
    button.innerHTML = 'Next';
    button.onclick = seven;
}
function seven(){
    localStorage.setItem("pageNo", "7");
    paragraph.innerHTML = '7. How innovative our service you think it is?';
    sub_paragraph.innerHTML = '(0 means not innovative at all, 5 means reached max innovation)';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    q = [1, 2, 3, 4, 5];
    createButtonListInline(button, 7, answer_rubric, q);
    button.innerHTML = 'Next';
    button.onclick = eight;
}
function eight(){
    localStorage.setItem("pageNo", "8");
    var bold = 'Total Honesty.';
    bold = bold.bold();
    paragraph.innerHTML = '8. '+bold+' How much do you need this service?';
    sub_paragraph.innerHTML = '';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    var q = ['Definitely need it', 'Kind of need it', 'Don\'t really need it', 'Definitely don\'t need it'];
    createButtonList(button, 8, answer_rubric, q, 'a');
    button.innerHTML = 'Next';
    button.onclick = nine;
}
function nine(){
    localStorage.setItem("pageNo", "9");
    paragraph.innerHTML = '9. How would you rate its value for money?';
    sub_paragraph.innerHTML = '(0 means down the drain, 5 means totally worth it)';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    q = [1, 2, 3, 4, 5];
    createButtonListInline(button, 9, answer_rubric, q);
    button.innerHTML = 'Next';
    button.onclick = ten;
}
function ten(){
    localStorage.setItem("pageNo", "10");
    paragraph.innerHTML = '10. If you could buy the service today, would you buy it?';
    sub_paragraph.innerHTML = '';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    var q = ['Absolutely', 'Let me think about it', 'Don\'t think so', 'Wouldn\'t dream of it'];
    createButtonList(button, 10, answer_rubric, q, 'a');
    button.innerHTML = 'Next';
    button.onclick = eleven;
}
function eleven(){
    localStorage.setItem("pageNo", "11");
    paragraph.innerHTML = '11. How likely are you to replace your current solution with this service?';
    sub_paragraph.innerHTML = '';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    createButtonListInline(button, 11, answer_rubric, q);
    button.innerHTML = 'Next';
    button.onclick = twelve;
}
function twelve(){
    localStorage.setItem("pageNo", "12");
    paragraph.innerHTML = '12. How likely would you recommend this service to someone you know?';
    sub_paragraph.innerHTML = '';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    createButtonListInline(button, 12, answer_rubric, q);
    button.innerHTML = 'Next';
    button.onclick = thirteen;
}
function thirteen(){
    localStorage.setItem("pageNo", "13");
    paragraph.innerHTML = '13. How satisfied are you with the overall experience of the software?';
    sub_paragraph.innerHTML = '';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    createButtonListInline(button, 13, answer_rubric, q);
    button.innerHTML = 'Next';
    button.onclick = finish;
}
function finish(){
    localStorage.setItem("pageNo", "finish");
    paragraph.innerHTML = 'You have completed this survey!';
    sub_paragraph.innerHTML = 'Click the button below to send all your answers to the researcher.';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    button.innerHTML = 'Send the answers to researcher';
    button.onclick = function(){
        var q1 = localStorage.getItem("q:1");
        var q2 = localStorage.getItem("q:2");
        var q3 = localStorage.getItem("q:3");
        var q4 = localStorage.getItem("q:4");
        var q5 = localStorage.getItem("q:5");
        var q6 = localStorage.getItem("q:6");
        var q7 = localStorage.getItem("q:7");
        var q8 = localStorage.getItem("q:8");
        var q9 = localStorage.getItem("q:9");
        var q10 = localStorage.getItem("q:10");
        var q11 = localStorage.getItem("q:11");
        var q12 = localStorage.getItem("q:12");
        var q13 = localStorage.getItem("q:13");
        var storedData = {
            question1: q1,
            question2: q2,
            question3: q3,
            question4: q4,
            question5: q5,
            question6: q6,
            question7: q7,
            question8: q8,
            question9: q9,
            question10: q10,
            question11: q11,
            question12: q12,
            question13: q13
        }
        localStorage.clear();
        console.log(storedData);
        end();
    }
}
function end(){
    localStorage.setItem("pageNo", "end");
    paragraph.innerHTML = 'Your answers have been sent successfully!';
    sub_paragraph.innerHTML = 'Thank you for the time to answer this survey.';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    button.remove();
}
/* ##############################       COMPANY PAGE FUNCTIONALITY      ######################################*/




/* ##############################       CLIENT PAGE FUNCTIONALITY      ######################################*/

function clientOne(){
    localStorage.setItem("pageNo", "cl1");
    paragraph.innerHTML = '1. What is your overall impression about the speed of the repair process the (company) has done on your vehicle repair?';
    sub_paragraph.innerHTML = '(0 means very slow, 10 means very fast)';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    createButtonListInline(button, 'cl1', answer_rubric, q);
    button.innerHTML = 'Next';
    button.onclick = clientTwo;
}
function clientTwo(){
    localStorage.setItem("pageNo", "cl2");
    paragraph.innerHTML = '2. How welcomed did you feel when you get in contact with (company) and its members?';
    sub_paragraph.innerHTML = '(0 means very unfriendly, 10 means very friendly)';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    createButtonListInline(button, 'cl2', answer_rubric, q);
    button.innerHTML = 'Next';
    button.onclick = clientThree;
}
function clientThree(){
    localStorage.setItem("pageNo", "cl3");
    paragraph.innerHTML = '3. What is your overall impression of the Quality of Service, (company) had provide you with?';
    sub_paragraph.innerHTML = '(0 means very bad impression, 10 means very best impression)';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    createButtonListInline(button, 'cl3', answer_rubric, q);
    button.innerHTML = 'Next';
    button.onclick = clientFour;
}
function clientFour(){
    localStorage.setItem("pageNo", "cl4");
    paragraph.innerHTML = '4. How likely are you considering making contact with (company) in case something similar happens in future?';
    sub_paragraph.innerHTML = '(0 means I will find another workshop next time, 10 means I will definitely go back next time)';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    createButtonListInline(button, 'cl4', answer_rubric, q);
    button.innerHTML = 'Next';
    button.onclick = clientFive;
}
function clientFive(){
    localStorage.setItem("pageNo", "cl5");
    paragraph.innerHTML = '5. How likely would you be to recommend (company) to your relatives and friends?';
    sub_paragraph.innerHTML = '(0 means I won’t recommend this company to anyone, 10 means I will happily recommend it to my relatives and friends)';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    createButtonListInline(button, 'cl5', answer_rubric, q);
    button.innerHTML = 'Next';
    button.onclick = clientFinish;
}
function clientFinish(){
    localStorage.setItem("pageNo", "clFinish");
    paragraph.innerHTML = 'You have completed this survey!';
    sub_paragraph.innerHTML = 'Click the button below to send all your answers to be evaluated.';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    button.innerHTML = 'Send the answers for evaluation.';
    button.onclick = function(){
        var q1 = localStorage.getItem("q:cl1");
        var q2 = localStorage.getItem("q:cl2");
        var q3 = localStorage.getItem("q:cl3");
        var q4 = localStorage.getItem("q:cl4");
        var q5 = localStorage.getItem("q:cl5");
        var storedData = {
            question1: q1,
            question2: q2,
            question3: q3,
            question4: q4,
            question5: q5
        }
        localStorage.clear();
        console.log(storedData);
        clientEnd();
    }
}
function clientEnd(){
    localStorage.setItem("pageNo", "clEnd");
    paragraph.innerHTML = 'Your answers have been sent successfully!';
    sub_paragraph.innerHTML = 'Thank you for the time to answer this survey.';
    // remove method must check
    if(answer_rubric.hasChildNodes()){
        var answers = document.getElementById('answers');
        answer_rubric.removeChild(answers);
    }
    button.remove();
}

/* ##############################       CLIENT PAGE FUNCTIONALITY      ######################################*/

/*  ###################################################################################################################################
    #########################           SURVEYS CODE JAVASCRIPT         ###############################################################
    ###################################################################################################################################
*/ 
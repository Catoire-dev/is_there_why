const   answer_ok = "Yes."
const   answer_ko = "Nope."
const   u_input = document.getElementById("u-input");
let     answer = document.getElementById("answer");

function is_there_why(str) {           
    for (i = 0; str[i]; i++) {              
        if (str[i] == 'y' || str[i] == 'Y')
            return true;
    }
}

u_input.addEventListener("input", function() {
    var str = u_input.value;
    if (is_there_why(str)) {
        answer.innerHTML = answer_ok
        answer.setAttribute("id", "answer-ok");
    }
    else {
        answer.innerHTML = answer_ko;
        answer.setAttribute("id", "answer-ko");
    }
});
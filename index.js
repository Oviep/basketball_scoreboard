let score_home= 0
let score_guest = 0;
let scores1 = document.getElementById("score_box1")
let scores2 = document.getElementById("score_box2");

function set_score1() {
    score_home += 1
    scores1.textContent = score_home
}

function set_score2() {
  score_home += 2;
  scores1.textContent = score_home;
}

function set_score3() {
  score_home += 3;
  scores1.textContent = score_home;
}

function set_score4() {
  score_guest += 1;
  scores2.textContent = score_guest;
}

function set_score5() {
  score_guest += 2;
  scores2.textContent = score_guest;
}

function set_score6() {
  score_guest += 3;
  scores2.textContent = score_guest;
}

function reset_scores() {
     score_home = 0;
     score_guest = 0;
     scores1.textContent = score_home;
     scores2.textContent = score_guest;
}

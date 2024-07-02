//Lecture: Function - Part 2

function funName(){
    console.log('Hello World');
}

funName();

function passExam(name, score){
    var passuni = 70;
    var passcoll = 51;

    if(score >= passuni){

    console.log(name+' has enrolled in university with ' + score + ' Point')
    
    }else if(score >= passcoll){
    
        console.log(name + ' has enrolled in college with ' + score + ' Point')
    
    }else{
    
        console.log(name +' has Failed');
    }
}

function calcScore(quizScore, assayScore){

    var score = quizScore + assayScore;

    return score;

}

passExam('John', calcScore(40, 30));
passExam('Mary', 65);
passExam('Bob', 45);

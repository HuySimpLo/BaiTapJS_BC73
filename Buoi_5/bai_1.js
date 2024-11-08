
function getAreaPriority(area) {
    switch (area.toUpperCase()) {
        case 'A': return 2;
        case 'B': return 1;
        case 'C': return 0.5;
        default: return 0; 
    }
}


function getTargetPriority(target) {
    switch (target) {
        case 1: return 2.5;
        case 2: return 1.5;
        case 3: return 1;
        default: return 0; // For '0' or any other input
    }
}


function checkAdmission(threshold, score1, score2, score3, area, target) {

    if (score1 === 0 || score2 === 0 || score3 === 0) {
        return "Rớt, 1 hoặc nhiều môn có điểm 0.";
    }


    let totalScore = score1 + score2 + score3;


    totalScore += getAreaPriority(area);
    totalScore += getTargetPriority(target);


    if (totalScore >= threshold) {
        return `Đậu với tổng điểm: ${totalScore}`;
    } else {
        return `Rớt với tổng điểm: ${totalScore}`;
    }
}

// ví dụ
let threshold = 20;  
let score1 = 8;    
let score2 = 7;     
let score3 = 6;     
let area = 'B';     
let target = 2;      

console.log(checkAdmission(threshold, score1, score2, score3, area, target));

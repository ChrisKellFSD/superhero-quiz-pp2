var subset = select(10,quizQuestions);

outputQuestions(subset);

function select(n,qarray) {
    var subset = [];
    for(i=0;i<n;i++) {
        randomIdx = Math.floor(Math.random()*(qarray.length));
        subset[subset.length] = qarray[randomIdx];
        qarray.splice(randomIdx, 1);
    }
    return subset;
}
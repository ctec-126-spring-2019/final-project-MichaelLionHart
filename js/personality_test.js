

$('button').on('click', function(){
    var perceiverCount = 0;
    var judgerCount = 0;
    var sensorCount = 0;
    var intuitiveCount = 0;
    var thinkerCount = 0;
    var feelerCount = 0;
    var introvertCount = 0;
    var extravertCount = 0;

    $(':radio:checked').each(function() {
        if ($(this).val() === 'p') {
            perceiverCount = perceiverCount + 1;
        } else if ($(this).val() === 'j') {
            judgerCount = judgerCount + 1;
        } else if ($(this).val() === 's') {
            sensorCount = sensorCount + 1;
        } else if ($(this).val() === 'n') {
            intuitiveCount = intuitiveCount + 1;
        } else if ($(this).val() === 't') {
            thinkerCount = thinkerCount + 1;
        } else if ($(this).val() === 'f') {
            feelerCount = feelerCount + 1;
        } else if ($(this).val() === 'i') {
            introvertCount = introvertCount + 1;
        } else {
            extravertCount = extravertCount + 1;
        } 
    });

    var type = [];
    if (introvertCount >= 3) {
        type.push('I');
    } else {
        type.push('E');
    }
    
    if (sensorCount >= 3) {
        type.push('S');
    } else {
        type.push('N');
    }
    
    if (thinkerCount >= 3) {
        type.push('T');
    } else {
        type.push('F');
    }
    
    if (perceiverCount >= 3) {
        type.push('P');
    } else {
        type.push('J');
    }

    var descriptions = [
        [`<p><strong>Introverted: </strong>You are energized by thoughts and ideas  </p>`],
        [`<p><strong>Extraverted: </strong>You are energized by action and socializing </p>`],
        [`<p><strong>Sensing: </strong>You are down-to-earth, realistic and practical, and tend to live more in the present  </p>`],
        [`<p><strong>Intuitive: </strong>You see the big picture and the possibilities, and you are more future-thinking  </p>`],
        [`<p><strong>Thinking: </strong>  You make decisions based on logic and objective criteria</p>`],
        [`<p><strong>Feeling: </strong>  You make decisions based more on your personal values</p>`],
        [`<p><strong>Judging: </strong>  You like things to be settled and decided, and value living according to a schedule</p>`],
        [`<p><strong>Perceiving: </strong>  You value freedom and spontaneity, and dislike overly rigid rules and guidelines</p>`]
    ];

    var container = $('#result');
    
    var output = '';

    for (let i = 0; i < type.length; i++) {
        if (type[i] === 'I') {
            output = output + descriptions[0];
        } else if (type[i] === 'E') {
            output = output + descriptions[1];
        } else if (type[i] === 'S') {
            output = output + descriptions[2];
        } else if (type[i] === 'N') {
            output = output + descriptions[3];
        } else if (type[i] === 'T') {
            output = output + descriptions[4];
        } else if (type[i] === 'F') {
            output = output + descriptions[5];
        } else if (type[i] === 'J') {
            output = output + descriptions[6];
        } else {
            output = output + descriptions[7];
        }     
        
    container.html('<h2>Your Personality Type Is:  ' + type.join(' ') + '</h2>' + output);
    }
    console.log('perceiving: ' + perceiverCount);
    console.log('Judging: ' + judgerCount);
    console.log('Sensing: ' + sensorCount);
    console.log('Intuitive: ' + intuitiveCount);
    console.log('Thinking: ' + thinkerCount);
    console.log('Feeling: ' + feelerCount);
    console.log('Introversion: ' + introvertCount);
    console.log('Extraversion: ' + extravertCount);
});



    

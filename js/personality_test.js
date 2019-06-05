

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

    // var descriptions = [
    //     [`<p><strong>Introverted: </strong>  </p>`]
    //     [`<p><strong>Extraverted: </strong>  </p>`]
    //     [`<p><strong>Sensing: </strong>  </p>`]
    //     [`<p><strong>Intuitive: </strong>  </p>`]
    //     [`<p><strong>Thinking: </strong>  </p>`]
    //     [`<p><strong>Feeling: </strong>  </p>`]
    //     [`<p><strong>Judging: </strong>  </p>`]
    //     [`<p><strong>Perceiving: </strong>  </p>`]
    // ];

    var container = $('#result');

    container.html('<h2>Your Personality Type Is:  </h2>' + '<h2>' + type.join(' ') + '</h2>');
    
    // var output = '';

    // for (let i = 0; i < type.length; i++) {
    //     if (type[i] === 'I') {
    //         output = output + descriptions[0];
    //     } else if (type[i] === 'E') {
    //         output = output + descriptions[1];
    //     } else if (type[i] === 'S') {
    //         output = output + descriptions[2];
    //     } else if (type[i] === 'N') {
    //         output = output + descriptions[3];
    //     } else if (type[i] === 'T') {
    //         output = output + descriptions[4];
    //     } else if (type[i] === 'F') {
    //         output = output + descriptions[5];
    //     } else if (type[i] === 'J') {
    //         output = output + descriptions[6];
    //     } else {
    //         output = output + descriptions[7];
    //     }     
        
    // container.html(output);
    // }
    console.log('perceiving: ' + perceiverCount);
    console.log('Judging: ' + judgerCount);
    console.log('Sensing: ' + sensorCount);
    console.log('Intuitive: ' + intuitiveCount);
    console.log('Thinking: ' + thinkerCount);
    console.log('Feeling: ' + feelerCount);
    console.log('Introversion: ' + introvertCount);
    console.log('Extraversion: ' + extravertCount);
});



    

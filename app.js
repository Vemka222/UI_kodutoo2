$(document).ready(function () {
    var score = 0;
    var lives = 3;
    var numberOfLetters = 5;
    $('#score').text(score);
    $('#numOfLetters').text(numberOfLetters);

    //Keyboard input left and right handeling function
    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: // left
                animate('#letter', 'slideOutLeft');
                //makes letter dissapear
                setTimeout(function () {
                    $('#letter').css('visibility', 'hidden');
                }, 1000);
                lives--;
                if (lives == 2) { $('#health').attr("src", "contents/2.png"); }
                else if (lives == 1) { $('#health').attr("src", "contents/1.png"); }
                else if (lives == 0) { $('#health').css('visibility', 'hidden'); alert("Game Over!"); }
                break;

            case 39: // right
                animate('#letter', 'slideOutRight');
                setTimeout(function () {
                    $('#letter').css('visibility', 'hidden');
                }, 1000);
                score = score + 100;
                $('#score').text(score);
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevents the default action (scroll / move caret)
    });

    //function used above to slide to left an right
    function animate(element, animation) {
        $(element).addClass('animated ' + animation);
        var wait = setTimeout(function () {
            $(element).removeClass('animated ' + animation);
        }, 1000);
    }

    // Drag and Drop functionality, but it doesnt work yet, needs to be fixed
    $(function () {
        $("#letter").draggable();
        $("#arve").droppable({
            drop: function (event, ui) {
                $(this)
                alert("dropped");
            }
        });
    });

    //envelope message counter
    $('#envelope').click(function () {
        $('#letter').css('visibility', 'visible');
        $('#letterDiv').append($('#letterDiv').html());
        numberOfLetters--;
        $('#numOfLetters').text(numberOfLetters);
        if (numberOfLetters > 0) {
            $('#redCircle').css('visibility', 'visible');
            $('#numOfLetters').css('visibility', 'visible');
        } else {
            $('#redCircle').css('visibility', 'hidden');
            $('#numOfLetters').css('visibility', 'hidden');
        }

    })

});


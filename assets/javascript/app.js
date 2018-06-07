

var intervalId;
var clockRunning;

// this is the actual stopwatch object
var stopwatch = {

    time: 120,

    reset: function () {
        stopwatch.time = 120;

    },

    // this is how the clock starts running 
    start: function () {
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;


            // this shows/hides things we want when the stopwatch starts.
            $('#triviaBox').show();
            $('#display').show();
            $('#startButton').hide();
            $('#submitButton').show();
            // $('#triviaBox').hide(); 

            // stopwatch.count();
        }
    },
    // this runs when the clock stops
    stop: function () {

        clearInterval(intervalId);
        $('#triviaBox').hide();
        $("#statsBox").show();
        $("#submitButton").hide();
        $("#display").hide();

        //summarize the score.
        var one = $("input:radio[name=one]:checked").val();
        var two = $("input:radio[name=two]:checked").val();
        var three = $("input:radio[name=three]:checked").val();
        var four = $("input:radio[name=four]:checked").val();
        var five = $("input:radio[name=five]:checked").val();
        var six = $("input:radio[name=six]:checked").val();
        var seven = $("input:radio[name=seven]:checked").val();
        var right = 0;
        var wrong = 0;
        var unanswered = 0;


        if (one == 'b')
            right++;
        else if (one == null)
            unanswered++;
        else
            wrong++;

        if (two == 'd')
            right++;
        else if (one == null)
            unanswered++;
        else
            wrong++;

        if (three == 'a')
            right++;
        else if (one == null)
            unanswered++;
        else
            wrong++;

        if (four == 'c')
            right++;
        else if (one == null)
            unanswered++;
        else
            wrong++;

        if (five == 'c')
            right++;
        else if (one == null)
            unanswered++;
        else
            wrong++;

        if (six == 'd')
            right++;
        else if (one == null)
            unanswered++;
        else
            wrong++;


        if (seven == 'c')
            right++;
        else if (one == null)
            unanswered++;
        else
            wrong++;

        $("#right").html(right);
        $("#wrong").html(wrong);
        $("#unanswered").html(unanswered);

    },

    count: function () {

        // this makes the timer stop when it gets to 0
        stopwatch.time--;
        if (stopwatch.time === 0) {
            stopwatch.stop();
        }

        var converted = stopwatch.timeConverter(stopwatch.time);
        console.log(converted);

        $("#display").text(converted);
    },

    // this just makes the timer look "pretty and normal"
    timeConverter: function (t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }

};

// these functions run when the page loads
window.onload = function () {
    $('#triviaBox').hide();
    $('#display').hide();
    $('#submitButton').hide();
    $("#statsBox").hide();

    $('#startButton').on("click", stopwatch.start);
    $('#submitButton').on("click", stopwatch.stop);
}



// stats page - do not need this figured out a different way above
// var puppyQuestions = [{
//     question: "1. What is the most popular dog breed?",
//     choices: ["Golden Retriever", "Labrador Retriever", "Cavalier King Charles Spaniel", "German Shepard"],
//     rightAnswer: "value b",
// }, {
//     question: "2. How many pet dogs are there in America?",
//     choices: ["52 million", "44 million", "63 million", "78 million"],
//     rightAnswer: "value d",
// }, {
//     question: "3. What is the most popular dog name?",
//     choices: ["Lady", "Max", "Kevin", "Bella"],
//     rightAnswer: "value a",
// }, {
//     question: "4. How many dog breeds does the United States recognize?",
//     choices: ["405", "240", "190", "165"],
//     rightAnswer: "value c",
// }, {
//     question: "5. Where did the Cavalier King Charles originate from?",
//     choices: ["Spain", "Italy", "United Kingdom", "United States"], 
//     rightAnswer: "value c", 
// }, {
//     question: "6. What color can dogs not see?",
//     choices: ["Yellow", "Blue", "Grey", "Green"], 
//     rightAnswer: "value d",
// }, {
//     question: "7. What is the best dog breed?",
//     choices: ["Golden Retriever", "Border Collie", "Cavalier King Charles Spaniel", "Labrador Retriever"], 
//     rightAnswer: "value c", 
// } 
// ];
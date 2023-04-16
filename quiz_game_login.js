#output
{
background:
white;
border-radius: 10px;
border-top: 10px solid #AA4465;
padding: 10px;
float: none;
text-align: left;
}

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2)
}

qusetion_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
imput_box = "<br>" Answer : <imput type= "text" id="imput_check_box"></imput>
check_botton = "<br><br><botton class= "btn btn-info" onclick="check>check<boutton>"

question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = "<br>Answer: <input type='text' id='input_check_box'>";
check button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;

document.getElementById("output")

document.getElementById(number1).value = ""
document.getElementById(number2).value = ""

qusetion_turn = "player1"
answer_turn = "player2"
    function check()


{
    get_answer = document.getElementById("imput_check_box").value;
if (get_answer == actual_answer)
{
    if(answer_turn == "player1")
    {
        update_player1_score = player1_score +1;
        document.getElementById("player1_score").innerHTML = update_player1_score;
    }
    else
    {
        update_player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = update_player2_score;
    }
}
}

if(question_turn == "player1")
{
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
}
else
{
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "Question Turn- " + player1_name;
}
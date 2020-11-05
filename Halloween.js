// 変数&ID取得
const result = document.getElementById("result");
const answer = document.getElementById("answer");
const nextQuestionButton = document.getElementById("nextQuestionButton");
const buttonKaitou = document.getElementById("textbox");
const resultImg = document.getElementById("resultImg");
const omedetou = document.getElementById("omedetou");

// 回答時プログラム
// 第1問
function textboxView(KOTAE){
    if(KOTAE == "パンプキン"){
        console.log("成功");
        document.getElementById("result").innerHTML = "◯正解!";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "答えは「パンプキン」";
    }
    else{
        console.log("失敗");
        document.getElementById("result").innerHTML = "❌不正解";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "";
        document.getElementById("nextQuestionButton").innerHTML = "もう一度解く";
        document.getElementById("nextQuestionButton").href="question.html";
    }
}

// 第2問
function textboxView2(KOTAE2){
    if(KOTAE2 == "マイゴ"){
        console.log("成功");
        document.getElementById("result").innerHTML = "◯正解!";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "答えは「マイゴ」";
    }
    else{
        console.log("失敗");
        document.getElementById("result").innerHTML = "❌不正解";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "";
        document.getElementById("nextQuestionButton").innerHTML = "もう一度解く";
        document.getElementById("nextQuestionButton").href="question2.html";
    }
}

// 第3問
function textboxView3(KOTAE3){
    if(KOTAE3 == "ヨコハマ"){
        console.log("成功");
        document.getElementById("result").innerHTML = "◯正解!";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "答えは「ヨコハマ」";
    }
    else{
        console.log("失敗");
        document.getElementById("result").innerHTML = "❌不正解";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "";
        document.getElementById("nextQuestionButton").innerHTML = "もう一度解く";
        document.getElementById("nextQuestionButton").href="question3.html";
    }
}

// 第4問
function textboxView4(KOTAE4){
    if(KOTAE4 == "マジョ"){
        console.log("成功");
        document.getElementById("result").innerHTML = "◯正解!";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "答えは「マジョ」";
    }
    else{
        console.log("失敗");
        document.getElementById("result").innerHTML = "❌不正解";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "";
        document.getElementById("nextQuestionButton").innerHTML = "もう一度解く";
        document.getElementById("nextQuestionButton").href="question4.html";
    }
}

// 第5問
function textboxView5(KOTAE5){
    if(KOTAE5 == "オオカミ"){
        console.log("成功");
        document.getElementById("result").innerHTML = "◯正解!";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "答えは「オオカミ」";
    }
    else{
        console.log("失敗");
        document.getElementById("result").innerHTML = "❌不正解";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "";
        document.getElementById("nextQuestionButton").innerHTML = "もう一度解く";
        document.getElementById("nextQuestionButton").href="question5.html";
    }
}

// 第6問
function textboxView6(KOTAE6){
    if(KOTAE6 == "ニホン"){
        console.log("成功");
        document.getElementById("result").innerHTML = "◯正解!";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "答えは「ニホン」";
    }
    else{
        console.log("失敗");
        counts = counts = 0;
        console.log(counts);
        document.getElementById("result").innerHTML = "❌不正解";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "";
        document.getElementById("nextQuestionButton").innerHTML = "もう一度解く";
        document.getElementById("nextQuestionButton").href="question6.html";
    }
}

// 第7問
function textboxView7(KOTAE7){
    if(KOTAE7 == "ガイコツ"){
        console.log("成功");
        document.getElementById("result").innerHTML = "◯正解!";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "答えは「ガイコツ」";
    }
    else{
        console.log("失敗");
        document.getElementById("result").innerHTML = "❌不正解";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "";
        document.getElementById("nextQuestionButton").innerHTML = "もう一度解く";
        document.getElementById("nextQuestionButton").href="question7.html";
    }
}

// 第8問
function textboxView8(KOTAE8){
    if(KOTAE8 == "タネ"){
        console.log("成功");
        document.getElementById("result").innerHTML = "◯正解!";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "答えは「タネ」";
        
    }
    else{
        console.log("失敗");
        document.getElementById("result").innerHTML = "❌不正解";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "";
        document.getElementById("nextQuestionButton").innerHTML = "もう一度解く";
        document.getElementById("nextQuestionButton").href="question8.html";
    }
}

// 第9問
function textboxView9(KOTAE9){
    if(KOTAE9 == "ハンニン"){
        console.log("成功");
        document.getElementById("result").innerHTML = "◯正解!";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "答えは「ハンニン」";
    }
    else{
        console.log("失敗");
        document.getElementById("result").innerHTML = "❌不正解";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "";
        document.getElementById("nextQuestionButton").innerHTML = "もう一度解く";
        document.getElementById("nextQuestionButton").href="question9.html";
    }
}

// 第10問
function textboxView10(KOTAE10){
    if(KOTAE10 == "ミタニ"){
        console.log("成功");
        document.getElementById("result").innerHTML = "◯正解!";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "答えは「ミタニ」";
    }
    else{
        console.log("失敗");
        document.getElementById("result").innerHTML = "❌不正解";
        document.getElementById("button-kaitou").disabled = false;
        document.getElementById("answer").innerHTML = "";
        document.getElementById("nextQuestionButton").innerHTML = "もう一度解く";
        document.getElementById("nextQuestionButton").href="question10.html";
        document.getElementById("resultImg").src = "images/halloween_mark_koumori.png";
        document.getElementById("omedetou").innerHTML = "";
    }
}

// モーダル処理
$(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        console.log("ボタンが押されました");
            return false;
    });
    // $('.js-modal-close').on('click',function(){
    //     $('.js-modal'),fadeOut();
    //     return false;
    // });
});

// ヒントモーダル
$(function(){
    $('.Tips-modal-open').on('click',function(){
        $('.Tips-modal').fadeIn();
        console.log("ボタンが押されました");
            return false;
    });
    $('.Tips-modal-close').on('click',function(){
        $('.Tips-modal'),fadeOut();
        return false;
    });
});

// テキストボックス装飾
$(document).ready(function(){
    $('.nice-textbox').blur(function() {
         if($(this).val().length === 0){
           $('.nice-label').removeClass("focus");
         }
         else { returns; }
       })
       .focus(function() {
         $('.nice-label').addClass("focus")
       });
 });

 $(function(){
    history.pushState(null, null, null); //ブラウザバック無効化
    //ブラウザバックボタン押下時
    $(window).on("popstate", function (event) {
      history.pushState(null, null, null);
      window.alert('前のページには戻れません');
    });
   });
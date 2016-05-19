function watsonSentiment(){
  var urlBaseSentiment = "http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment?";
  var apiKey = "5d6f902f3cb291bf568d36df9e5db41cf3c56093";
  urlBaseSentiment = urlBaseSentiment + "apikey=" + apiKey;
  var inputText = $('#userText').val();
  urlBaseSentiment = urlBaseSentiment + "&text=" + encodeURIComponent(inputText);
  urlBaseSentiment = urlBaseSentiment + "&outputMode=json"

  $.ajax({
    url:urlBaseSentiment,
    type: 'POST',
    success: function(data){
      $('#output1').html('<h6>'+ 'Sentiment Rating' + '</h6>');
      var sentiment = data.docSentiment;
      console.log("Overall Sentiment:");
      for (var prop in sentiment) {
        $('#output1').append("<p>" + prop + " = " + sentiment[prop] + "</p>");
      }
    }
  });
};


function watsonKeyword(){
  var urlBaseKeyword = "http://gateway-a.watsonplatform.net/calls/text/TextGetRankedKeywords?";
  var apiKey = "5d6f902f3cb291bf568d36df9e5db41cf3c56093";
  urlBaseKeyword = urlBaseKeyword + "apikey=" + apiKey;
  var inputText = $('#userText').val();
  urlBaseKeyword = urlBaseKeyword + "&text=" + encodeURIComponent(inputText);

  urlBaseKeyword = urlBaseKeyword + "&maxRetrieve=10&outputMode=json"

  var keywordArr = [];

  $.ajax({
    url:urlBaseKeyword,
    type:'POST',
    success: function(data){
      $('#output2').html('<h6>'+ 'Key Words/Phrases' + '</h6>');
      console.log("Key Words/Phrases:");
      keywordArr.push(data.keywords);
      var newKeyArr = keywordArr[0];
        newKeyArr.forEach(function(word){
            $('#output2').append("<p>" + word.text +": "+ word.relevance + "</p>");
        })
    }
  });
}

function watsonEmotion(){
  var urlBaseEmotion ="http://gateway-a.watsonplatform.net/calls/text/TextGetEmotion?";
  var apiKey = "5d6f902f3cb291bf568d36df9e5db41cf3c56093";
  urlBaseEmotion = urlBaseEmotion + "apikey=" + apiKey;
  var inputText = $('#userText').val();
  urlBaseEmotion = urlBaseEmotion + "&text=" + encodeURIComponent(inputText);
  urlBaseEmotion = urlBaseEmotion + "&outputMode=json";

  $.ajax({
    url:urlBaseEmotion,
    type:'POST',
    success: function(data){
      $('#output3').html('<h6>'+ 'Emotions' + '</h6>');
      console.log("Emotional Values:");
      var emotionObj = data.docEmotions;
      console.log(emotionObj);
      for (var prop in emotionObj) {
        $('#output3').append("<p>" + prop + " = " + emotionObj[prop] + "</p>");
        }
      }
    });
};


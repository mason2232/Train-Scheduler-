
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAzriypmuP0Inn9dWy8jMRdaBi0eM2XGGg",
    authDomain: "my-project-39499.firebaseapp.com",
    databaseURL: "https://my-project-39499.firebaseio.com",
    storageBucket: "my-project-39499.appspot.com",
  };
  firebase.initializeApp(config);




$("#addTrainBtn").on("click", function(){

	
	var trainName = $("#trainNameInput").val().trim();
	var trainDest = $("#destInput").val().trim();
	var trainStart = moment($("#startInput").val().trim(), "DD/MM/YY").format("X");
	var trainFreq = $("#freqInput").val().trim();

	var newTrain = {
		name:  trainName,
		dest: trainDest,
		start: trainStart,
		freq: trainFreq
	}

	
	trainData.push(newTrain);

	
	console.log(newTrain.name);
	console.log(newTrain.dest);
	console.log(newTrain.start);
	console.log(newTrain.freq)

	
	alert("train successfully added");

	
	$("#trainNameInput").val("");
	$("#destInput").val("");
	$("#startInput").val("");
	$("#freqInput").val("");

	
	return false;
});



trainData.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());


	var trainName = childSnapshot.val().name;
	var trainDest = childSnapshot.val().dest;
	var trainStart = childSnapshot.val().start;
	var trainFreq = childSnapshot.val().freq;

	
	console.log(trainName);
	console.log(trainDest);
	console.log(trainStart);
	console.log(trainFreq);

	
	var trainStartPretty = moment.unix(trainStart).format("MM/DD/YY");
	
	
	var trainMonths = moment().diff(moment.unix(trainStart, 'X'), "months");
	console.log(trainMonths);

	
	var trainBilled = trainMonths * trainFreq;
	console.log(trainBilled);

	
	var trainNextArr


	var trainMinsAway

	

	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + "</td><td>" + trainNextArr + "</td><td>" + trainMinsAway + "</td><td>");
</script>

});
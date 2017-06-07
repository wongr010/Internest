var candidatesshown=false;

function checkmeet() {
    var x = document.getElementById("myCheck");
    x.checked = true;
}

function showcandidates(){

	if (!candidatesshown){
		document.getElementById("show-candidates").innerHTML = "View top candidates";
	 $("#hidden-candidate").removeClass("hidden");
	 candidatesshown=true;
	}

	else{
		document.getElementById("show-candidates").innerHTML = "View all Candidates";
		$("#hidden-candidate").addClass("hidden");
		candidatesshown=false;
	}

}

function interview_confirmed(){

	alert("Interviews confirmed!");

}


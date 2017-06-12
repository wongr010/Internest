var candidatesshown=false;
var isemployer=false;

function checkmeet() {
    var x = document.getElementById("myCheck");
    x.checked = true;
}

function showcandidates(){ /*Candidate match*/

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

function deactivatejobs(jobno){ /*Taking down uploaded jobs*/
	confirm("Are you sure you want to deactive job no. "+ jobno + "?");
}

function toggleposition(){ /*Dynamically change which sign-up page to redirect to*/
	if (!isemployer) {
		isemployer=true;
		document.getElementById("user-toggle").href="registration.html";
		console.log("employer");
	}
	else {
		isemployer=false;
		document.getElementById("user-toggle").href="studentreg.html";
		console.log("student");
	}
	

}


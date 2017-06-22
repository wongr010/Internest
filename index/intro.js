var menuexpanded=false; //intro page menu button
var feedbackreportopen=false;
var mobiledescribeopen=false;

function Translatedown()
        {
            if (!menuexpanded) //move down if expanded
            {
              // Code for Safari
             document.getElementById("Employers-info").style.WebkitTransform = "translateY(80px)"; 
        // Code for IE9
            document.getElementById("Employers-info").style.msTransform = "translateY(80px)"; 
        // Standard syntax
            document.getElementById("Employers-info").style.transform = "translateY(80px)"; 
            menuexpanded=true;

            return;
            
            }

            if(menuexpanded){
            setTimeout(function(){
            		 //move up if not expanded
            document.getElementById("Employers-info").style.WebkitTransform = "translateY(-80px)"; 
        // Code for IE9
            document.getElementById("Employers-info").style.msTransform = "translateY(-80px)"; 
        // Standard syntax
            document.getElementById("Employers-info").style.transform = "translateY(-80px)"; 
            menuexpanded=false;

            return;

			}, 20);
        }
    
       }

function EditHighlight(){ //color 'edit' button light blue when hovered over- student dashboard

	document.getElementById("edit-button").style.backgroundColor = "#B0C4DE";

}

function UnEditHighlight(){ //return 'edit' button to OG color after mouse leaves
	document.getElementById("edit-button").style.backgroundColor = "#328CC1";
}



function hiding(ID){ /*Expand and close feedback reports*/
	if (!feedbackreportopen){
	 $("#"+ID).removeClass("hidden");
	 feedbackreportopen=true;
	}

	else{
		$("#"+ID).addClass("hidden");
		feedbackreportopen=false;
	}
}

function mobileviewhide(ID, entryno){ //job recommendations

	if (!mobiledescribeopen){
	document.getElementById("mobileexpand"+entryno).innerHTML = "Less";
	 $("#"+ID).removeClass("hidden-xs");
	 mobiledescribeopen=true;
	}

	else{
		document.getElementById("mobileexpand"+entryno).innerHTML = "More";
		$("#"+ID).addClass("hidden-xs");
		mobiledescribeopen=false;
	}
}


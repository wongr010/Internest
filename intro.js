var menuexpanded=false; //intro page menu button
var feedbackreportopen=false;

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

function ExpandDescription(idno){
	console.log("Hello");
	
	if (idno==1){
	document.getElementById("describe1").innerHTML="Lorem ipsum dolor sit amet";
						}


	if (idno==2){
	document.getElementById("describe2").innerHTML="Lorem ipsum dolor sit amet";
						
					}

	if (idno==3){
	document.getElementById("describe3").innerHTML="Lorem ipsum dolor sit amet";
					}

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

/*$(document).ready(function(){
    $("#show-report1").click(function(){
        $("#hidden-report1").toggle();
    });
});

$(document).ready(function(){
    $("#show-report2").click(function(){
        $("#hidden-report2").toggle();
    });
});*/
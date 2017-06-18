var bubblearray=[false, false, false, false, false, false];
var checkarray=[false,false, false, false, false, false, false, false,
false, false, false, false, false, false, false, false, false, false, false, false,];
var bubblearray4=[false, false, false, false, false, false, false, false];

function itemselected(sectionNo, which, index){
	
	if(sectionNo==1 || sectionNo==3){

		 if (sectionNo==1) bubblearray[index]=!bubblearray[index];
		 else bubblearray4[index]=!bubblearray4[index];
		 
		if(!bubblearray[index] && sectionNo==1){
			

			if(which=="like"){
				$(event.target).removeClass("icon-plum-radio-selected");
				$(event.target).addClass("icon-plum-radio");
			}
			else{
				$(event.target).removeClass("icon-plum-radio-notlikeuslcted");
				$(event.target).addClass("icon-plum-radio");
			}

			return;
		}

		if(!bubblearray4[index] && sectionNo==3){
			

			if(which=="like"){
				$(event.target).removeClass("icon-plum-radio-selected");
				$(event.target).addClass("icon-plum-radio");
			}
			else{
				$(event.target).removeClass("icon-plum-radio-notlikeuslcted");
				$(event.target).addClass("icon-plum-radio");
			}

			return;
		}


		$(event.target).removeClass("icon-plum-radio");
		if(which=="like"){
			$(event.target).addClass("icon-plum-radio-selected");
		}

		if(which=="unlike"){
			
			$(event.target).addClass("icon-plum-radio-notlikeuslcted");
		}
	}

	if(sectionNo==2){
		checkarray[index]=!checkarray[index];

		if(!checkarray[index]){
			if(which=="like"){
				$(event.target).removeClass("icon-plum-checkbox-selected");
				$(event.target).addClass("icon-plum-checkbox");
			}
			else{
				$(event.target).removeClass("icon-plum-checkbox-notlikeuslcted");
				$(event.target).addClass("icon-plum-checkbox");
			}

			return;
		}

		$(event.target).removeClass("icon-plum-checkbox");
		if(which=="like"){
			$(event.target).addClass("icon-plum-checkbox-selected");
		}

		if(which=="unlike"){
			$(event.target).addClass("icon-plum-checkbox-notlikeuslcted");
		}
	}


	}

function warning(){
	confirm("You will not be able to change your answer after you submit.");
}




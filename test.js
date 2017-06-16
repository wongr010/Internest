var bubblearray=[false, false, false, false, false, false];


function itemselected(which, index){
	
	bubblearray[index]=!bubblearray[index];
	
	if(!bubblearray[index]){
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
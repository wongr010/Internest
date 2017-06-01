var menuexpanded=false; //intro page menu button

function Translatedown()
        {
            if (!menuexpanded) //move down if expanded
            {
              // Code for Safari
             document.getElementById("Employers-info").style.WebkitTransform = "translateY(40px)"; 
        // Code for IE9
            document.getElementById("Employers-info").style.msTransform = "translateY(40px)"; 
        // Standard syntax
            document.getElementById("Employers-info").style.transform = "translateY(40px)"; 
            menuexpanded=true;

            return;
            
            }

            if(menuexpanded){
            setTimeout(function(){
            		 //move up if not expanded
            document.getElementById("Employers-info").style.WebkitTransform = "translateY(-40px)"; 
        // Code for IE9
            document.getElementById("Employers-info").style.msTransform = "translateY(-40px)"; 
        // Standard syntax
            document.getElementById("Employers-info").style.transform = "translateY(-40px)"; 
            menuexpanded=false;

            return;
            
            

			}, 20);
        }

            
           
        }
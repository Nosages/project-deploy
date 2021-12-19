
function soccerGame(){
	
	//variabless
	var scores = [0,0];
	var uAns;
	var msg;
	for(i = 1; i < 4; i++){

		uAns = parseInt(prompt("Enter 1 to shoot right, 2 middle, 3 left (1-3)"));
		var cAns = Math.floor(Math.random()*3+1);
			
			if(cAns == 1){
				if(uAns == 1){
					msg = "Goalkeeper saved ";						
				}
				else if(uAns == 2){
					msg = "You scored a goal";
				A	scores[0]++;
				}
				else if(uAns == 3){
					msg = "You scored a goal";
					scores[0]++;
				}
			}
			
			if(cAns == 2){
				if(uAns == 1){
					msg = "You scored a goal ";	
					scores[0]++;
				}
				else if(uAns == 2){
					msg = "Goalkeeper saved";
				}
				else if(uAns == 3){
					msg = "You scored a goal";
					scores[0]++;
			}
			}
					
			if(cAns == 3){
				if(uAns == 1){
					msg = "You scored a goal ";	
					scores[0]++;
				}
				else if(uAns == 2){
					msg = "You scored a goal";
					scores[0]++;
				}
				else if(uAns == 3){
					msg = "Goalkeeper saved";
					
				}
			
			}
			alert(msg);
			
			uAns = parseInt(prompt("Enter 1 to dive right, 2 middle, 3 left (1-3)"));
			cAns = Math.floor(Math.random()*3+1);
			
			if(cAns == 1){
				if(uAns == 1){
					msg = "You saved ";						
				}
				else if(uAns == 2){
					msg = "Computer scored a goal";
					scores[1]++;
				}
				else if(uAns == 3){
					msg = "Computer scored a goal";
					scores[1]++;
			}
			}
			if(cAns == 2){
				if(uAns == 1){
					msg = "Computer scored a goal";						
					scores[1]++;
				}
				else if(uAns == 2){
					msg = "You saved";
					
				}
				else if(uAns == 3){
					msg = "Computer scored a goal";
					scores[1]++;
			}
			}
			if(cAns == 3){
				if(uAns == 1){
					msg = "Computer scored a goal";						
					scores[1]++;
				}
				else if(uAns == 2){
					msg = "Computer scored a goal";
					scores[1]++;
				}
				else if(uAns == 3){
					msg = "You saved ";
					
			}
			}
			alert(msg);
					
		}
		document.getElementById("userInfo").innerHTML = "User score " +winnerScores[0]+ " comp score " +winnerScores[1];
		
		
	}
	

	
	
	

			
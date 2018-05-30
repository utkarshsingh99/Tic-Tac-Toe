
let inputBox = [],inputCheck = [2,2,2,2,2,2,2,2,2];
var count = 0;
$(document).ready(function(){
for (var i = 1 ; i <= 9; i++) {
		inputBox[i] = document.getElementById(i.toString());
	}
	divDeclare();
});

function winCheck(){
	var perm = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
	if (count>=5) {
		for(var i = 0; i < perm.length; i++){
			for(var j=0;j<9;j++){
				if(inputCheck[perm[i][0]]==1&&inputCheck[perm[i][1]]==1&&inputCheck[perm[i][2]]==1&&inputCheck[perm[i][0]]!=2){
					count = 0;
					inputCheckDeclare();
					alert("X Wins");
					divClear();
					return 0;
				}
				if(inputCheck[perm[i][0]]==0&&inputCheck[perm[i][1]]==0&&inputCheck[perm[i][2]]==0&&inputCheck[perm[i][0]]!=2){
					count = 0;
					inputCheckDeclare();
					alert("O Wins");
					divClear();
					return 1;
				}
			}
		}		
	}
	if(count==9){
		alert("It's a draw!");
		divClear();
		divDeclare();
	}
}

function divDeclare(){															//Code not working inside loop
	inputBox[1].addEventListener("click", function listen(){
		var input = document.getElementById("11");
		inputTextContent(input, 1);
		winCheck();
		inputBox[1].removeEventListener("click", listen, true);
	},true);

	inputBox[2].addEventListener("click", function listen(){
		var input = document.getElementById("12");
		inputTextContent(input, 2);
		winCheck();
		inputBox[2].removeEventListener("click", listen, true);
	},true);

	inputBox[3].addEventListener("click", function listen(){
		var input = document.getElementById("13");
		inputTextContent(input, 3);
		winCheck();
		inputBox[3].removeEventListener("click", listen, true);
	},true);

	inputBox[4].addEventListener("click", function listen(){
		var input = document.getElementById("14");
		inputTextContent(input, 4);
		winCheck();
		inputBox[4].removeEventListener("click", listen, true);
	},true);

	inputBox[5].addEventListener("click", function listen(){
		var input = document.getElementById("15");
		inputTextContent(input, 5);
		winCheck();
		inputBox[5].removeEventListener("click", listen, true);
	},true);

	inputBox[6].addEventListener("click", function listen(){
		var input = document.getElementById("16");
		inputTextContent(input, 6);
		winCheck();
		inputBox[6].removeEventListener("click", listen, true);
	},true);

	inputBox[7].addEventListener("click", function listen(){
		var input = document.getElementById("17");
		inputTextContent(input, 7);
		winCheck();
		inputBox[7].removeEventListener("click", listen, true);
	},true);

	inputBox[8].addEventListener("click", function listen(){
		var input = document.getElementById("18");
		inputTextContent(input, 8);
		winCheck();
		inputBox[8].removeEventListener("click", listen, true);
	},true);

	inputBox[9].addEventListener("click", function listen(){
		var input = document.getElementById("19");
		inputTextContent(input, 9);
		winCheck();
		inputBox[9].removeEventListener("click", listen, true);
	},true);
}

function inputTextContent(input, index){
	if(count%2===0){
		input.textContent = "X";
		count++;
		inputCheck[index] = 1;
	}else{
		input.textContent = "O";
		count++;
		inputCheck[index] = 0;
	}
}

function divClear(){
	document.getElementById("11").textContent = "";
	document.getElementById("12").textContent = "";
	document.getElementById("13").textContent = "";
	document.getElementById("14").textContent = "";
	document.getElementById("15").textContent = "";
	document.getElementById("16").textContent = "";
	document.getElementById("17").textContent = "";
	document.getElementById("18").textContent = "";
	document.getElementById("19").textContent = "";
}

function inputCheckDeclare(){
	inputCheck = [2,2,2,2,2,2,2,2,2];
}
/*
*  This way is not working. it's a shorter much better way, but I can't figure out what's wrong.
*
*
let inputBox = [],inputContent = [];
var count = 0;
$(document).ready(function(){
for (var i = 1 ; i <= 9; i++) {
		inputContent[i] = document.getElementById("1" + i.toString());
		console.log(inputContent[i]);
		var input = inputContent[i];
		document.getElementById(i.toString()).addEventListener("click", function(i){
			if(count%2===0){
				input.textContent = "X";
				count++;
				console.log(count);
			}else{
				input.textContent = "O";
				count++;
				console.log(count);
			}
			//console.log("CLick works");
		});
	}
	//console.log(inputBox);
});
*/
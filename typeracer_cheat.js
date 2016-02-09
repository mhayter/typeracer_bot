//grapbs text from underlined portion (just press space)
function getText() {
	var spans = document.getElementsByTagName("span");
	for(var i = 0;i < spans.length;i++) {
		//console.log(spans[i].outerHTML); 
		if ((spans[i].outerHTML + "").indexOf("text-decoration: underline") != -1) { 
			//console.log(spans[i].innerText); 
			var inputs = document.getElementsByClassName("txtInput"); 
			console.log(inputs.length);
			for(var j=0;j<inputs.length;j++) { 
				console.log("inner = #" + inputs[j].value+"#");
				if (inputs[j].innerText =="") {
					console.log("write it");
					inputs[j].value = spans[i].innerText+spans[i+1].innerText;
				}
			}
		}
	}
}

setInterval(getText, 200);


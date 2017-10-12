var imageArray = new Array;
i = 0;

function addImage(name) {
	var picName = name;
	imageArray.push('anim/' + picName + '.jpg');
	console.log(imageArray);
    
    var img = document.createElement("img");
    img.src = 'anim/' + picName + '.jpg';
    img.style.width='100px';
    document.getElementById("putStuffHere").appendChild(img);
}

function startAnim() {
	if(imageArray.length > 0) {


		document.getElementById("tableDiv").innerHTML = "<img style='margin: 1px' src='" + imageArray[0] + "'>"; 

		timer = setInterval(function() {
			document.getElementById("tableDiv").innerHTML ="<img style='margin: 1px' src='" + imageArray[i] + "'>";
			if(i<imageArray.length-1) {
				i++;
			}

			else if(i>=imageArray.length-1) {
				i=0;
			}
			
		},500);
	}

	else {
		alert("Error: need to add at least one image");
	}
}

function stopAnim() {
	clearInterval(timer);
	i=0;
	document.getElementById("tableDiv").innerHTML = "<img style='margin: 1px' src='" + imageArray[0] + "'>";
}

function popOff() {
	imageArray.pop();

	var putStuffHere = document.getElementById('putStuffHere');
	//maybe put a conditional to prevent errors in console
	putStuffHere.removeChild(putStuffHere.lastChild);
	console.log(imageArray);
} 


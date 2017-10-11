var imageArray = new Array;

function addImage(name) {
	var picName = name;
	imageArray.push('anim/' + picName + '.jpg');
	console.log(imageArray);
    
    var img = document.createElement("img");
    img.src = 'anim/' + picName + '.jpg'; 
    document.body.appendChild(img);
}


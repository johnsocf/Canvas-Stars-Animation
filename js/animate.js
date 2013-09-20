var context, canvas;
var fps = 30;

$(window).load(function () {
	canvas = document.getElementById("canvas");
	context = canvas.getContext('2d');
	
	loop();


});

	var i = 0,
	// pointOne = [40,40],
	// pointTwo = [300,80],
	// pointThree = [250,210],

	points = [[40,40],[300,80],[250,110],[350,210]],
	sizeOne = 100,
	sizeTwo = 20,
	animationOne = 60,
	animationTwo = 100;
	var image = new Image();
	image.src = "images/star.png"



	function loop() {
		setTimeout(function(){
			i++;
			context.clearRect(0,0,500,500);

			drawImageRotation(image, 250, 250, 100, 129, i);


			// context.beginPath();
			// context.fillStyle = "#000";

			// 3-D Array

			if(i < 40) {
				drawImageRotation(image, points[0][0], points[0][1], 100, 129, i);	
			// 	context.arc(points[0][0], points[0][1], 20, 0, Math.PI*2, true);
			 }else if (40 < i && i < 100) {
			 	drawImageRotation(image, (points[0][0] + (points[1][0]-points[0][0])/60 * (i-40)), (points[0][1] + (points[1][1]-points[0][1])/60 * (i-40)), 100, 129, i);	
			// 	context.arc(points[0][0] + (points[1][0]-points[0][0])/60 * (i-40), points[0][1] + (points[1][1]-points[0][1])/60 * (i-40), 20, 0, Math.PI*2, true);
			 }
			else if (100 < i && i < 160) {
				drawImageRotation(image, (points[1][0] + (points[2][0]-points[1][0])/20 * (i-100)), (points[2][1] + (points[1][1]-points[1][1])/20 * (i-100)), 100, 129, i);
				console.log("here is " + i);	
			// 	context.arc(points[1][0] + (points[2][0]-points[1][0])/60 * (i-40), points[1][1] + (points[2][1]-points[1][1])/60 * (i-40), 20, 0, Math.PI*2, true);
			}

			else if (160 < i && i < 260) {
				drawImageRotation(image, (points[2][0] + (points[3][0]-points[1][0])/60 * (i-40)), (points[3][1] + (points[2][1]-points[2][1])/60 * (i-40)), 100, 129, i);	
			
				console.log("really? " + i);	
			}

			// Size Animation with Position Change
			// if(i < animationOne) {context.arc(i,i,sizeOne,0, Math.PI*2, true);}
			// else if(i < animationOne + animationTwo) {context.arc(i,i,sizeOne - ((sizeOne-sizeTwo)/(animationTwo))*(i-animationOne),0, Math.PI*2, true);}
			// else {context.arc(i,i,sizeTwo,0, Math.PI*2, true);}
			
			// context.closePath();
			// context.fill()
		
			loop();
		}, 1000/fps);
	}

	function drawImageRotation (img, x, y, width, height, deg) {
		var rad = deg * Math.PI/180;

		context.translate( x + width / 2, y + height / 2);
		context.rotate(rad);
		

		context.drawImage(image, width/2 * (-1), height /2 * (-1), width, height);

		context.rotate(rad * (-1));
		context.translate((x + width/2) * (-1), (y + height /2) * (-1));
	}










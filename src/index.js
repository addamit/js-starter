import {login} from './app.js';
import p5 from 'p5';

console.log('test!!');

const s = (sketch) => {

	var canvasWidth  = 600;
	var canvasHeight = 600;


	sketch.setup = function() {
		
		sketch.createCanvas(canvasWidth, canvasHeight);
		sketch.frameRate(30);

	}

	sketch.draw = function() {
		sketch.background(100);
	}

}


var myp5 = new p5(s);
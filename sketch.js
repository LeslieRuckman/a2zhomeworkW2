var words = ["The","river","is","famous","to","the","fish."];
var words1= ["The","loud","voice","is","famous","to","silence,","which","knew","it","would",
"inherit","the","earth","before","anybody","said","so."];
var words2= ["The","cat","sleeping","on","the","fence","is","famous","to","the","birds","watching","him","from","the",
"birdhouse."];
var words3= ["The","tear","is","famous,","briefly,","to","the","cheek."];
var words4= ["The","idea","you","carry","close","to","your","bosom","is","famous","to","your","bosom."];
var words5= ["The","boot","is","famous","to","the","earth,","more","famous","than","the","dress","shoe,","which","is",
"famous","only","to","floors."];
var words6= ["The","bent","photograph","is","famous","to","the","one","who",
"carries","it","and","not","at","all","famous","to","the","one","who","is","pictured."];
var words7= ["I","want","to","be","famous","to","shuffling","men","who","smile","while","crossing","streets,","sticky",
"children","in","grocery","lines,","famous","as","the","one","who","smiled","back."];
var words8= ["I","want","to","be","famous","in","the","way","a","pulley","is","famous,","or","a","buttonhole,",
"not","because","it","did","anything","spectacular,","but","because","it","never","forgot","what",
"it","could","do."];

function hoverWord() {
  var word = this.html();
  if (word == "famous" || word == "famous,") {
    this.style('color', '#d78f68');
  } else {
    this.style('color', '#ecbba0');
  }
}



function setup() {
  //console.log(this);
	noCanvas();

  var wordP = select("#words");
  var wordP1 = select("#words1");
	var wordP2 = select("#words2");
	var wordP3 = select("#words3");
	var wordP4 = select("#words4");
	var wordP5 = select("#words5");
	var wordP6 = select("#words6");
	var wordP7 = select("#words7");
	var wordP8 = select("#words8");


	for (var i = 0; i < words.length; i++) {
    var word = createSpan(words[i]);
    //word.style("margin-left", "10px");
    word.parent(wordP);
    word.mouseOver(hoverWord);

    var space = createSpan(" ");
    space.parent(wordP);
  }

	for (var i = 0; i < words1.length; i++) {
		var word1 = createSpan(words1[i]);
		word1.parent(wordP1);
		word1.mouseOver(hoverWord);

		var space1 = createSpan(" ");
		space1.parent(wordP1);
	}
	for (var i = 0; i < words2.length; i++) {
		var word2 = createSpan(words2[i]);
		word2.parent(wordP2);
		word2.mouseOver(hoverWord);

		var space2 = createSpan(" ");
		space2.parent(wordP2);
	}
	for (var i = 0; i < words3.length; i++) {
		var word3 = createSpan(words3[i]);
		word3.parent(wordP3);
		word3.mouseOver(hoverWord);

		var space3 = createSpan(" ");
		space3.parent(wordP3);
	}
	for (var i = 0; i < words4.length; i++) {
		var word4 = createSpan(words4[i]);
		word4.parent(wordP4);
		word4.mouseOver(hoverWord);

		var space4 = createSpan(" ");
		space4.parent(wordP4);
	}
	for (var i = 0; i < words5.length; i++) {
		var word5 = createSpan(words5[i]);
		word5.parent(wordP5);
		word5.mouseOver(hoverWord);

		var space5 = createSpan(" ");
		space5.parent(wordP5);
	}
	for (var i = 0; i < words6.length; i++) {
		var word6 = createSpan(words6[i]);
		word6.parent(wordP6);
		word6.mouseOver(hoverWord);

		var space6 = createSpan(" ");
		space6.parent(wordP6);
	}
	for (var i = 0; i < words7.length; i++) {
		var word7 = createSpan(words7[i]);
		word7.parent(wordP7);
		word7.mouseOver(hoverWord);

		var space7 = createSpan(" ");
		space7.parent(wordP7);
	}
	for (var i = 0; i < words8.length; i++) {
		var word8 = createSpan(words8[i]);
		word8.parent(wordP8);
		word8.mouseOver(hoverWord);

		var space8 = createSpan(" ");
		space8.parent(wordP8);
	}

}

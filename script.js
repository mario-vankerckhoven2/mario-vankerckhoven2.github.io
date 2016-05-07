

var totalkills = 0 ;
var LoginTijd = Date.now();


// autochecker voor collisions tussen virus en witte bloedcel
function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
    return false;
  }
  else {

    var newVirusHeight = Math.floor(Math.random() *  270);
    var newVirusWidth = Math.floor(Math.random()* 420);


		var left = $("#virus").offset().left;
		if (left < 430)
		{
		    TweenLite.to("#virus", 0, {left:newVirusWidth, ease:Power2.easeInOut});
		    TweenLite.to("#virus", 0, {top:newVirusHeight, ease:Power2.easeInOut});
		}

    totalkills = totalkills +1;

    var huidigeTijd = Date.now();
    var speeltijd = (huidigeTijd - LoginTijd);
    var seconden  = Math.floor(speeltijd/1000);


    $( "#scoreTrivia" ).html( "<p><b>You have killed a total of "+totalkills+" virusses</b></p>" );

    if (totalkills > 9)
    {
        if (totalkills >12)
        {
          $( "#scoreTrivia").append("<p id='doubleDigits'> Triple Digits!!!!!</p>");
        }
        else
        {
          $( "#scoreTrivia").append("<p id='doubleDigits'> Double Digits!!!!!</p>");
    }}

    $( "#scoreTrivia").append("<br></br>");
    $( "#scoreTrivia").append("<b>You have been killing virusses for:</b>");
    $( "#scoreTrivia").append("<br></br>");

    if (seconden > 59)  {
        if (seconden > 119)  {
            var minuten = Math.floor(seconden / 60);
            seconden = seconden - (minuten*60);
            $( "#scoreTrivia").append("<b>"+minuten+" minuten en "+seconden+" seconden</b>");
        }
        else {

            var minuten = Math.floor(seconden / 60);
            seconden = seconden - (minuten*60);
            $( "#scoreTrivia").append("<b>"+minuten+" minuut en "+seconden+" seconden</b>");

        }}
        else {
            $( "#scoreTrivia").append("<b>"+seconden+" seconden</b>");
        }
      $( "#specials" ).html( "<h3><b>test</b></h3>" );
	      return true;
       }
}


// AI voor virusbewegingen
function VirusAI() {
    var richtingVirus = Math.floor(Math.random()*5);
    if (richtingVirus==1){
        var top = $("#virus").offset().top;
        if (top > 60)
        {
            TweenLite.to("#virus", 0.2, {top:"-=35", ease:Power2.easeInOut});

        }}

    else if (richtingVirus== 2) {
        var top = $("#virus").offset().top;
        if (top <265)
        {
            TweenLite.to("#virus", 0.2, {top:"+=35", ease:Power2.easeInOut});

        }}

    else if (richtingVirus==3) {
        var left = $("#virus").offset().left;
        if (left > 45)
        {
            TweenLite.to("#virus",0.2, {left:"-=35", ease:Power2.easeInOut});

        }}
    else{
        var left = $("#virus").offset().left;
        if (left < 430)
        {
            TweenLite.to("#virus", 0.25, {left:"+=35", ease:Power2.easeInOut});

        }}}



// systeem voor informatie uit virus



//timers
window.setInterval(function() {
$('#result').text(collision($('#witblo'), $('#virus')));
}, 200);


window.setInterval(function(){
  VirusAI() },200);




 // Bewegingscontrollers voor witte bloedcel
function WBComhoog() {
    var top = $("#witblo").offset().top;
    if (top > 60)
    {
        TweenLite.to("#witblo", 0.25, {top:"-=35px", ease:Power2.easeInOut});
    }}


function WBComlaag() {
    var top = $("#witblo").offset().top;
    if (top <265)
    {
        TweenLite.to("#witblo", 0.25, {top:"+=35", ease:Power2.easeInOut});
    }}


function WBCnaarlinks() {
    var left = $("#witblo").offset().left;
    if (left > 45)
    {
        TweenLite.to("#witblo", 0.25, {left:"-=35", ease:Power2.easeInOut});
    }}

function WBCnaarrechts() {
    var left = $("#witblo").offset().left;
    if (left < 430)
    {
        TweenLite.to("#witblo", 0.25, {left:"+=35", ease:Power2.easeInOut});
    }}


// Arrow keys added for keyboard fans
$(document).keyup(function(e) {
    switch(e.which) {
        case 37: // naarlinks
        WBCnaarlinks();
        break;

        case 38: // naarboven
        WBComhoog();
        break;

        case 39: // naarrechts
        WBCnaarrechts();
        break;

        case 40: //naaronder
        WBComlaag();
        break;

        default: return; // exit
    }
    e.preventDefault();

});

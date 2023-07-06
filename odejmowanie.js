var pytania = [];
pytania[0] = "5-3=_";
pytania[1] = "_-4=3";
pytania[2] = "9-_=4";
pytania[3] = "_-8=0";
pytania[4] = "6-_=5";
pytania[5] = "38-15=__";
pytania[6] = "__-34=52";
pytania[7] = "63-__=44";
pytania[8] = "92-12=__";
pytania[9] = "__-38=23";
var odpowiedzi1 = [];
odpowiedzi1[0] = 4;
odpowiedzi1[1] = 7;
odpowiedzi1[2] = 4;
odpowiedzi1[3] = 10;
odpowiedzi1[4] = 2;
odpowiedzi1[5] = 17;
odpowiedzi1[6] = 86;
odpowiedzi1[7] = 28;
odpowiedzi1[8] = 71;
odpowiedzi1[9] = 50;
var odpowiedzi2 = [];
odpowiedzi2[0] = 2;
odpowiedzi2[1] = 5;
odpowiedzi2[2] = 7;
odpowiedzi2[3] = 9;
odpowiedzi2[4] = 3;
odpowiedzi2[5] = 23;
odpowiedzi2[6] = 70;
odpowiedzi2[7] = 29;
odpowiedzi2[8] = 80;
odpowiedzi2[9] = 82;
var odpowiedzi3 = [];
odpowiedzi3[0] = 3;
odpowiedzi3[1] = 9;
odpowiedzi3[2] = 6;
odpowiedzi3[3] = 8;
odpowiedzi3[4] = 1;
odpowiedzi3[5] = 28;
odpowiedzi3[6] = 94;
odpowiedzi3[7] = 19;
odpowiedzi3[8] = 70;
odpowiedzi3[9] = 71;
var odpowiedzi4 = [];
odpowiedzi4[0] = 1;
odpowiedzi4[1] = 8;
odpowiedzi4[2] = 5;
odpowiedzi4[3] = 7;
odpowiedzi4[4] = 0;
odpowiedzi4[5] = 13;
odpowiedzi4[6] = 68;
odpowiedzi4[7] = 20;
odpowiedzi4[8] = 69;
odpowiedzi4[9] = 61;
var popodpowiedzi = [];
popodpowiedzi[0] = 2;
popodpowiedzi[1] = 7;
popodpowiedzi[2] = 5;
popodpowiedzi[3] = 8;
popodpowiedzi[4] = 1;
popodpowiedzi[5] = 23;
popodpowiedzi[6] = 86;
popodpowiedzi[7] = 19;
popodpowiedzi[8] = 80;
popodpowiedzi[9] = 61;
var odpowiedzi = [];
odpowiedzi[0] = 0;
odpowiedzi[1] = 0;
odpowiedzi[2] = 0;
odpowiedzi[3] = 0;
odpowiedzi[4] = 4;
odpowiedzi[5] = 0;
odpowiedzi[6] = 0;
odpowiedzi[7] = 0;
odpowiedzi[8] = 0;
odpowiedzi[9] = 0;

var answer = new Audio("answer.wav");
var win = new Audio("win.wav");
var lose = new Audio("lose.wav");

window.onload = sprawdzian;

function sprawdzian()
{
	var tescik="";
	
	for (i=0; i<10; i++)
	{
		tescik=tescik+'<div class = "ustawsiecholero">'+'<div class="pytanie">'+(i+1)+'. '+pytania[i]+'</div>'+
		'<div class="przyciski" onclick="przypisanie1('+i+')" id="klikacz1'+i+'"> A.'+odpowiedzi1[i]+'</div>'+
		'<div class="przyciski" onclick="przypisanie2('+i+')" id="klikacz2'+i+'"> B.'+odpowiedzi2[i]+'</div>'+
		'<div class="przyciski" onclick="przypisanie3('+i+')" id="klikacz3'+i+'"> C.'+odpowiedzi3[i]+'</div>'+
		'<div class="przyciski" onclick="przypisanie4('+i+')" id="klikacz4'+i+'"> D.'+odpowiedzi4[i]+'</div>'+
		'<br>'+'</div>';
	}
	document.getElementById("test").innerHTML=tescik;
	
	
}


function przypisanie1(nr)
{
	var przycisk1="klikacz1"+nr;
	var przycisk2="klikacz2"+nr;
	var przycisk3="klikacz3"+nr;
	var przycisk4="klikacz4"+nr;
	odpowiedzi[nr]=odpowiedzi1[nr];
	document.getElementById(przycisk1).style.color="yellow";
	document.getElementById(przycisk1).style.cursor="default";
	document.getElementById(przycisk2).style.color="#DCDCDC";
	document.getElementById(przycisk2).style.cursor="pointer";
	document.getElementById(przycisk3).style.color="#DCDCDC";
	document.getElementById(przycisk3).style.cursor="pointer";	
	document.getElementById(przycisk4).style.color="#DCDCDC";
	document.getElementById(przycisk4).style.cursor="pointer";
	answer.play();
	}

function przypisanie2(nr)
{
	var przycisk1="klikacz1"+nr;
	var przycisk2="klikacz2"+nr;
	var przycisk3="klikacz3"+nr;
	var przycisk4="klikacz4"+nr;
	odpowiedzi[nr]=odpowiedzi2[nr];
	document.getElementById(przycisk2).style.color="yellow";
	document.getElementById(przycisk2).style.cursor="default";
	document.getElementById(przycisk1).style.color="#DCDCDC";
	document.getElementById(przycisk1).style.cursor="pointer";
	document.getElementById(przycisk3).style.color="#DCDCDC";
	document.getElementById(przycisk3).style.cursor="pointer";	
	document.getElementById(przycisk4).style.color="#DCDCDC";
	document.getElementById(przycisk4).style.cursor="pointer";
	answer.play();
}

function przypisanie3(nr)
{
	var przycisk1="klikacz1"+nr;
	var przycisk2="klikacz2"+nr;
	var przycisk3="klikacz3"+nr;
	var przycisk4="klikacz4"+nr;
	odpowiedzi[nr]=odpowiedzi3[nr];
	document.getElementById(przycisk3).style.color="yellow";
	document.getElementById(przycisk3).style.cursor="default";
	document.getElementById(przycisk2).style.color="#DCDCDC";
	document.getElementById(przycisk2).style.cursor="pointer";
	document.getElementById(przycisk1).style.color="#DCDCDC";
	document.getElementById(przycisk1).style.cursor="pointer";	
	document.getElementById(przycisk4).style.color="#DCDCDC";
	document.getElementById(przycisk4).style.cursor="pointer";
	answer.play();
}

function przypisanie4(nr)
{
	var przycisk1="klikacz1"+nr;
	var przycisk2="klikacz2"+nr;
	var przycisk3="klikacz3"+nr;
	var przycisk4="klikacz4"+nr;
	odpowiedzi[nr]=odpowiedzi4[nr];
	document.getElementById(przycisk4).style.color="yellow";
	document.getElementById(przycisk4).style.cursor="default";
	document.getElementById(przycisk2).style.color="#DCDCDC";
	document.getElementById(przycisk2).style.cursor="pointer";
	document.getElementById(przycisk3).style.color="#DCDCDC";
	document.getElementById(przycisk3).style.cursor="pointer";	
	document.getElementById(przycisk1).style.color="#DCDCDC";
	document.getElementById(przycisk1).style.cursor="pointer";
	answer.play();
	}
	
	

function sprawdz()
{
	
var points = 0;
	
for (i=0; i<10; i++)
	{
		if (popodpowiedzi[i]==odpowiedzi[i])
		{
			points++;
			if (popodpowiedzi[i]==odpowiedzi1[i])
			{
				var przycisk="klikacz1"+i;
				document.getElementById(przycisk).style.border = "3px solid green";
				document.getElementById(przycisk).style.borderRadius = 	"15px";
				document.getElementById(przycisk).style.color = "green";
				zablokujklik(i);
			}
			if (popodpowiedzi[i]==odpowiedzi2[i])
			{
				var przycisk="klikacz2"+i;
				document.getElementById(przycisk).style.border = "3px solid green";
				document.getElementById(przycisk).style.borderRadius = 	"15px";
				document.getElementById(przycisk).style.color = "green";
				zablokujklik(i);
			}
			if (popodpowiedzi[i]==odpowiedzi3[i])
			{
				var przycisk="klikacz3"+i;
				document.getElementById(przycisk).style.border = "3px solid green";
				document.getElementById(przycisk).style.borderRadius = 	"15px";
				document.getElementById(przycisk).style.color = "green";
				zablokujklik(i);
			}
			if (popodpowiedzi[i]==odpowiedzi4[i])
			{
				var przycisk="klikacz4"+i;
				document.getElementById(przycisk).style.border = "3px solid green";
				document.getElementById(przycisk).style.borderRadius = 	"15px";
				document.getElementById(przycisk).style.color = "green";
				zablokujklik(i);
			}
			
		}	
		if (popodpowiedzi[i]!=odpowiedzi[i] && odpowiedzi[i]==odpowiedzi1[i])
		{
			var przycisk="klikacz1"+i;
			document.getElementById(przycisk).style.textDecoration = "line-through";
			document.getElementById(przycisk).style.textDecorationStyle = "solid";
			document.getElementById(przycisk).style.color = "red";
			document.getElementById(przycisk).style.textDecorationColor = "red";
		}
		if (popodpowiedzi[i]!=odpowiedzi[i] && odpowiedzi[i]==odpowiedzi2[i])
		{
			var przycisk="klikacz2"+i;
			document.getElementById(przycisk).style.textDecoration = "line-through";
			document.getElementById(przycisk).style.textDecorationStyle = "solid";
			document.getElementById(przycisk).style.color = "red";
			document.getElementById(przycisk).style.textDecorationColor = "red";
		}
		if (popodpowiedzi[i]!=odpowiedzi[i] && odpowiedzi[i]==odpowiedzi3[i])
		{
			var przycisk="klikacz3"+i;
			document.getElementById(przycisk).style.textDecoration = "line-through";
			document.getElementById(przycisk).style.textDecorationStyle = "solid";
			document.getElementById(przycisk).style.color = "red";
			document.getElementById(przycisk).style.textDecorationColor = "red";
		}
		if (popodpowiedzi[i]!=odpowiedzi[i] && odpowiedzi[i]==odpowiedzi4[i])
		{
			var przycisk="klikacz4"+i;
			document.getElementById(przycisk).style.textDecoration = "line-through";
			document.getElementById(przycisk).style.textDecorationStyle = "solid";
			document.getElementById(przycisk).style.color = "red";
			document.getElementById(przycisk).style.textDecorationColor = "red";
		}
	}
	
	
	if (points>5)
	{
		document.getElementById("rezultat").innerHTML='<br>'+"Gratulacje! Udało Ci się opanować odejmowanie! Twój wynik: "+points+" na 10 punktów" + '<br><br>';
		win.play();

	
	}
	else
	{
		document.getElementById("rezultat").innerHTML='<br>'+"Niestety, nie udało Ci się opanować odejmowania! Twój wynik: "+points+" na 10 punktów"+'<br>'+'<br>';
		lose.play();
	}
}

function zablokujklik (nr)
{
	var guzik1="klikacz1"+nr;
	var guzik2="klikacz2"+nr;
	var guzik3="klikacz3"+nr;
	var guzik4="klikacz4"+nr;
	document.getElementById(guzik1).setAttribute("onclick",";");
	document.getElementById(guzik2).setAttribute("onclick",";");
	document.getElementById(guzik3).setAttribute("onclick",";");
	document.getElementById(guzik4).setAttribute("onclick",";");
	document.getElementById(guzik1).style.cursor="default";
	document.getElementById(guzik2).style.cursor="default";	
	document.getElementById(guzik3).style.cursor="default";
	document.getElementById(guzik4).style.cursor="default";	
}
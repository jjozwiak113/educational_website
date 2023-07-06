var pytania = [];
pytania[0] = "3*2=_";
pytania[1] = "6*5=__";
pytania[2] = "_*4=32";
pytania[3] = "8*_=8";
pytania[4] = "9*_=27";
pytania[5] = "3*_=0";
pytania[6] = "8*7=__";
pytania[7] = "_*9=63";
pytania[8] = "8*6=__";
pytania[9] = "_*7=28";
var odpowiedzi1 = [];
odpowiedzi1[0] = 6;
odpowiedzi1[1] = 28;
odpowiedzi1[2] = 6;
odpowiedzi1[3] = 2;
odpowiedzi1[4] = 4;
odpowiedzi1[5] = 1;
odpowiedzi1[6] = 56;
odpowiedzi1[7] = 7;
odpowiedzi1[8] = 24;
odpowiedzi1[9] = 6;
var odpowiedzi2 = [];
odpowiedzi2[0] = 8;
odpowiedzi2[1] = 17;
odpowiedzi2[2] = 8;
odpowiedzi2[3] = 3;
odpowiedzi2[4] = 5;
odpowiedzi2[5] = 12;
odpowiedzi2[6] = 64;
odpowiedzi2[7] = 8;
odpowiedzi2[8] = 48;
odpowiedzi2[9] = 2;
var odpowiedzi3 = [];
odpowiedzi3[0] = 4;
odpowiedzi3[1] = 30;
odpowiedzi3[2] = 10;
odpowiedzi3[3] = 1;
odpowiedzi3[4] = 9;
odpowiedzi3[5] = 4;
odpowiedzi3[6] = 63;
odpowiedzi3[7] = 9;
odpowiedzi3[8] = 32;
odpowiedzi3[9] = 4;
var odpowiedzi4 = [];
odpowiedzi4[0] = 3;
odpowiedzi4[1] = 35;
odpowiedzi4[2] = 5;
odpowiedzi4[3] = 0;
odpowiedzi4[4] = 3;
odpowiedzi4[5] = 0;
odpowiedzi4[6] = 65;
odpowiedzi4[7] = 3;
odpowiedzi4[8] = 56;
odpowiedzi4[9] = 3;
var popodpowiedzi = [];
popodpowiedzi[0] = 6;
popodpowiedzi[1] = 30;
popodpowiedzi[2] = 8;
popodpowiedzi[3] = 1;
popodpowiedzi[4] = 3;
popodpowiedzi[5] = 0;
popodpowiedzi[6] = 56;
popodpowiedzi[7] = 7;
popodpowiedzi[8] = 48;
popodpowiedzi[9] = 4;
var odpowiedzi = [];
odpowiedzi[0] = 0;
odpowiedzi[1] = 0;
odpowiedzi[2] = 0;
odpowiedzi[3] = 10;
odpowiedzi[4] = 0;
odpowiedzi[5] = 10;
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
		document.getElementById("rezultat").innerHTML='<br>'+"Gratulacje! Udało Ci się opanować mnożenie! Twój wynik: "+points+" na 10 punktów" + '<br><br>';
		win.play();

	
	}
	else
	{
		document.getElementById("rezultat").innerHTML='<br>'+"Niestety, nie udało Ci się opanować mnożenia! Twój wynik: "+points+" na 10 punktów"+'<br>'+'<br>';
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
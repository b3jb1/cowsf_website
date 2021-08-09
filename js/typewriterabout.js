var i = 0;
var txt = 'Cow Software Foundation is a foundation focused on making cow software.';
var speed = 70;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}
typeWriter()

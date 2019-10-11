function myFunction1() {
	document.getElementById("id01").style.display = "block";
	document.getElementById("id02").style.display = "none";
	document.getElementById("id03").style.display = "none";
	document.getElementById("id04").style.display = "none";
	document.getElementById("id05").style.display = "none";
}
function myFunction2() {
	document.getElementById("id01").style.display = "none";
	document.getElementById("id02").style.display = "block";
	document.getElementById("id03").style.display = "none";
	document.getElementById("id04").style.display = "none";
	document.getElementById("id05").style.display = "none";
}
function myFunction3() {
	document.getElementById("id01").style.display = "none";
	document.getElementById("id02").style.display = "none";
	document.getElementById("id03").style.display = "block";
	document.getElementById("id04").style.display = "none";
	document.getElementById("id05").style.display = "none";
}
function myFunction4() {
	document.getElementById("id01").style.display = "none";
	document.getElementById("id02").style.display = "none";
	document.getElementById("id03").style.display = "none";
	document.getElementById("id04").style.display = "block";
	document.getElementById("id05").style.display = "none";
}
function myFunction5() {
	document.getElementById("id01").style.display = "none";
	document.getElementById("id02").style.display = "none";
	document.getElementById("id03").style.display = "none";
	document.getElementById("id04").style.display = "none";
	document.getElementById("id05").style.display = "block";
}
function myFunction6() {
	document.getElementById("searchTrainings").style.display = "block";
	document.getElementById("signup").style.display = "none";

}
function myFunction7() {
	document.getElementById("searchTrainings").style.display = "none";
	document.getElementById("signup").style.display = "block";

}
function myFunction8() {
	document.getElementById("searchTrainings").style.display = "block";
	document.getElementById("currentTrainings").style.display = "none";
	document.getElementById("completedTrainings").style.display = "none";
}
function myFunction9() {
	document.getElementById("searchTrainings").style.display = "none";
	document.getElementById("currentTrainings").style.display = "block";
	document.getElementById("completedTrainings").style.display = "none";
}
function myFunction10() {
	document.getElementById("searchTrainings").style.display = "none";
	document.getElementById("currentTrainings").style.display = "none";
	document.getElementById("completedTrainings").style.display = "block";
}
function myFunction11() {
	document.getElementById("editSkills").style.display = "block";
	document.getElementById("currentTrainings").style.display = "none";
	document.getElementById("completedTrainings").style.display = "none";
	document.getElementById("payment").style.display = "none";

}
function myFunction12() {
	document.getElementById("editSkills").style.display = "none";
	document.getElementById("currentTrainings").style.display = "block";
	document.getElementById("completedTrainings").style.display = "none";
	document.getElementById("payment").style.display = "none";
}
function myFunction13() {
	document.getElementById("editSkills").style.display = "none";
	document.getElementById("currentTrainings").style.display = "none";
	document.getElementById("completedTrainings").style.display = "block";
	document.getElementById("payment").style.display = "none";
}
function myFunction14() {
	document.getElementById("editSkills").style.display = "none";
	document.getElementById("currentTrainings").style.display = "none";
	document.getElementById("completedTrainings").style.display = "none";
	document.getElementById("payment").style.display = "block";
}
function adminCommission(){
	document.getElementById("id01").style.display = "block";
}
var modal = document.getElementById('id01');
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
var modal = document.getElementById('id02');
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
var modal = document.getElementById('id03');
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
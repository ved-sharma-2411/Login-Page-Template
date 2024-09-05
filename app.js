const wrapper = document.querySelector('.wrapper')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')

registerLink.onclick = () => {
    wrapper.classList.add('active')
}

loginLink.onclick = () => {
    wrapper.classList.remove('active')
}

var btn = document.getElementById('reveal');
var box = document.getElementById('pass');
var fak = document.getElementById('fakepass');
const isEmpty = str => !str.trim().length;

btn.addEventListener('click', function() {
	fak.innerHTML='';
	var x = box.value.length;
	for(var i=0; i<x; i++ ){fak.innerHTML=fak.innerHTML+'&bullet;';}
	fak.classList.toggle('scan');
	this.classList.toggle('open');
	box.classList.toggle('active');
	(box.type=='password') ? box.type='text' : setTimeout(function(){ box.type='password' }, 500);;	
});

box.addEventListener("input", function() {
  if(!isEmpty(this.value)) btn.removeAttribute('disabled'); else btn.setAttribute('disabled', 'disabled');
});


var nnn = document.getElementById('reveall');
var bbb = document.getElementById('passs');
var fff = document.getElementById('fakepasss');
const isEmpty2 = str => !str.trim().length;

nnn.addEventListener('click', function() {
	fff.innerHTML='';
	var x = bbb.value.length;
	for(var i=0; i<x; i++ ){fff.innerHTML=fff.innerHTML+'&bullet;';}
	fff.classList.toggle('scan');
	this.classList.toggle('open');
	bbb.classList.toggle('active');
	(bbb.type=='password') ? bbb.type='text' : setTimeout(function(){ bbb.type='password' }, 500);;	
});

bbb.addEventListener("input", function() {
  if(!isEmpty(this.value)) nnn.removeAttribute('disabled'); else nnn.setAttribute('disabled', 'disabled');
});


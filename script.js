const takeValue=(x)=> {
	document.getElementById('inputwindow').value += x;
}

const clearInput = (y)=> {
	document.getElementById('inputwindow').value = y;
}

const calculateResult = ()=> {
	var result = eval(document.getElementById('inputwindow').value);
	document.getElementById('inputwindow').value = result;
}

document.getElementById('toggle').addEventListener("click", ()=>document.querySelector('body').classList.toggle('dark'))
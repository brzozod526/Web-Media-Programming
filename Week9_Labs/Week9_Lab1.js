var start = new Date();

function stoptime(){
	var stop = new Date();
  start.getTime();
  var final = (stop - start)/600;
  alert ("You have been on this page for " + final + " seconds");
}

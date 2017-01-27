var count = 0;

function changeOpacity() 
{
    	
    if (count > 0)
    {
	document.getElementById("imageClick1").style.opacity = "1";
	count --;
    }
    else if (count < 1)
    {
    	document.getElementById("imageClick1").style.opacity = "0.5";
	count ++;
    }
}
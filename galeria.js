var num=1;

function siguiente()
{
    num++;
    if(num>5)
    num=1;
          
        var foto=document.getElementById("foto");
        foto.src="foto"+num+".jpg";
    }

function atras()
{
    num--;
    if(num<1)
        num=5;
        var foto=document.getElementById("foto");
        foto.src="foto"+num+".jpg";
    
}
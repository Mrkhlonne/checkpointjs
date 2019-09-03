function bold()
{

var getText=document.getElementById("text");
if(getText.style.fontWeight!="bold")
{

    getText.style.fontWeight="bold";

   
}else{
    getText.style.fontWeight="normal";
};

}


function italic()
{

var getText=document.getElementById("text");
if(getText.style.fontStyle!="italic")
{

    getText.style.fontStyle="italic";

   
}else{
    getText.style.fontStyle="normal";
};

}


function underline()
{

var getText=document.getElementById("text");
if(getText.style.textDecoration!="underline")
{

    getText.style.textDecoration="underline";

   
}else{
    getText.style.textDecoration="none";
};

}


function changesize(){

    document.getElementById("text").style.fontSize = document.getElementById("size").value+'px';
}

}


function chsize(){

    document.getElementById("text").style.fontSize = document.getElementById("size").value+'px';
}
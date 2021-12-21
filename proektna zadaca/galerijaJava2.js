var k;
function start(){
    ime=window.prompt("Внеси име","Anonymous");
    for(k=1;k<1000;k++){
        if(localStorage.getItem("like"+k)==null){
            var brL=document.getElementById("likes"+k).innerHTML=0;
        }
        if(localStorage.getItem("kom"+k)==null){
          var brL=document.getElementById("komentar"+k).innerHTML="";
      }
        var brL=document.getElementById("likes"+k).innerHTML=localStorage.getItem("like"+k);
        var brK=document.getElementById("komentar"+k).innerHTML=localStorage.getItem("kom"+k);       
    }
    }

var brSliki=20;
$(document).ready(function() {
    $("#add").click(function() {
      $("#upload").click();
    });
  
    $("#upload").change(function() {
      if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = imageIsLoaded;
        reader.readAsDataURL(this.files[0]);
      }
    });
  
    var i=1;
    var j=2;
    var k=3;
    var brojac=1;
    var m=21;
    var p=21;
    $(document).ready(function() {
        if(localStorage.getItem("brSl")>20)
        {
        for(p=21;p<50;p++){
        if(localStorage.getItem("okolina"+p)==null){
            break;
        }
          $("#sliki").append(localStorage.getItem("okolina"+p));
          $("#"+localStorage.getItem("id1")).append(localStorage.getItem("novaSlika"+p));
          $("#"+localStorage.getItem("id2")).append(localStorage.getItem("novLajk"+p));
          $("#"+localStorage.getItem("id3")).append(localStorage.getItem("novKom"+p));
        }
     //   localStorage.removeItem("novLajk");
     //   localStorage.removeItem("novKom");
      //  localStorage.removeItem("okolina");
        }
  });
    function imageIsLoaded(e) {
      //var picture = "<img src='" + e.target.result + "' style='width:300px;height:400px;' class='galerijaImg1'><figcaption><button onclick='Counter(button1)' id='button1' class='firstButtonLike'> <span id='heart1' style='font-size: x-large;''>&#10084;</span> <label id='likes1' style='color:black'>0</label> </button> <form class='formMargin'><br><input type='text' size='31' maxlength='100' placeholder='Напиши коментар...' id='input1'> <input type='button' value='Постирај' id='k1' onclick='komentiraj(this)'> <p id='komentar1' style = 'width: 310px; height: 80px; overflow: scroll;'> <hr></p></form></figcaption> ";
     // picture+= "<form class='formMargin'><br><input type='text' size='31' maxlength='100' placeholder='Напиши коментар...' id='input1'> <input type='button' value='Постирај' id='k1' onclick='komentiraj(this)'> <p id='komentar1' style = 'width: 310px; height: 80px; overflow: scroll;'> <hr></p></form>";
     var suma1=i;
     var suma2=j;
     var suma3=k;
      var id1="tuka"+suma1;
      var id2="tuka"+suma2;
      var id3="tuka"+suma3;
      localStorage.setItem("brojac",brojac);
      //kod za da se zacuvuva vo localStorage
     if(localStorage.getItem("brojac")==1)
    {
     brSliki++;
     localStorage.setItem("brSl",brSliki);
     var okolina="<p><div> <div id='"+id1+"'> </div> <div id='"+id2+"'></div> <div id='"+id3+"'></div> </div></p> ";
   //  localStorage.setItem("okolina",okolina);
     var picture= "<img src='"+e.target.result+"' width='300' height='400' class='galerijaImg1'>";
     var lajk= "<button onclick='Counter(button"+localStorage.getItem("brSl")+")' id='button"+localStorage.getItem("brSl")+"'class='firstButtonLike'><span id='heart"+localStorage.getItem("brSl")+"' style='font-size: x-large;'>&#10084;</span><label id='likes"+localStorage.getItem("brSl")+"' style='color:black'>0</label></button>";
     var form= " <form  class='formMargin'><br> <input type='text'  size='31' maxlength='100' placeholder='Напиши коментар...' id='input"+localStorage.getItem("brSl")+"'><input type='button' value='Постирај' id='k"+localStorage.getItem("brSl")+"' onclick='komentiraj(this)'><p id='komentar"+localStorage.getItem("brSl")+"' style = 'width: 310px; height: 80px; overflow: scroll;'> <hr></p></form>";
     localStorage.setItem("id1",id1);
     localStorage.setItem("id2",id2);
     localStorage.setItem("id3",id3);
    
        $("#sliki").append(okolina);
        localStorage.setItem("novaSlika"+localStorage.getItem("brSl"),picture)
        $("#"+id1).append(picture);
        $("#"+id2).append(lajk);
        localStorage.setItem("novLajk"+localStorage.getItem("brSl"),lajk);
        $("#"+id3).append(form);
        localStorage.setItem("novKom"+localStorage.getItem("brSl"),form);
        localStorage.setItem("okolina"+localStorage.getItem("brSl"),okolina);
     brojac++;
     localStorage.setItem("brojac",brojac);
     m++;
     
  }
  //kod za da ne se zacuvuva vo localStorage
  /*else if(brojac==1) 
{  brSliki++;
   var picture = "<img src='"+e.target.result+"'width='300' height='400'  class='galerijaImg1'>";
   var lajk = "<button onclick='Counter(button"+m+")' id='button"+m+"' class='firstButtonLike'><span id='heart"+m+"' style='font-size: x-large;'>&#10084;</span><label id='likes"+m+"' style='color:black'>0</label></button>";
   var form = " <form  class='formMargin'><br> <input type='text'  size='31' maxlength='100' placeholder='Напиши коментар...' id='input"+m+"'><input type='button' value='Постирај' id='k"+m+"' onclick='komentiraj(this)'><p id='komentar"+m+"' style = 'width: 310px; height: 80px; overflow: scroll;'> <hr></p></form>";
   
   $("#"+id1).append(picture);
   $("#"+id2).append(lajk);
   $("#"+id3).append(form);
   brojac++;
   m++;
}*/
//kod za da se zacuvuva vo localStorage
  else if(localStorage.getItem("brojac")==2)
  { brSliki++;
    localStorage.setItem("brSl",brSliki);
    var okolina="<p><div> <div id='"+id1+"'> </div> <div id='"+id2+"'></div> <div id='"+id3+"'></div> </div></p> ";
  //  localStorage.setItem("okolina",okolina);
    var picture= "<img src='"+e.target.result+"' width='300' height='400' class='galerijaImg1'>";
    var lajk= "<button onclick='Counter(button"+localStorage.getItem("brSl")+")' id='button"+localStorage.getItem("brSl")+"'class='buttonLike'><span id='heart"+localStorage.getItem("brSl")+"' style='font-size: x-large;'>&#10084;</span><label id='likes"+localStorage.getItem("brSl")+"' style='color:black'>0</label></button>";
    var form= " <form  class='formMargin'><br> <input type='text'  size='31' maxlength='100' placeholder='Напиши коментар...' id='input"+localStorage.getItem("brSl")+"'><input type='button' value='Постирај' id='k"+localStorage.getItem("brSl")+"' onclick='komentiraj(this)'><p id='komentar"+localStorage.getItem("brSl")+"' style = 'width: 310px; height: 80px; overflow: scroll;'> <hr></p></form>";
    localStorage.setItem("id1",id1);
    localStorage.setItem("id2",id2);
    localStorage.setItem("id3",id3);

       $("#sliki").append(okolina);
       localStorage.setItem("novaSlika"+localStorage.getItem("brSl"),picture)
       $("#"+id1).append(picture);
       $("#"+id2).append(lajk);
       localStorage.setItem("novLajk"+localStorage.getItem("brSl"),lajk);
       $("#"+id3).append(form);
       localStorage.setItem("novKom"+localStorage.getItem("brSl"),form);
       localStorage.setItem("okolina"+localStorage.getItem("brSl"),okolina);
     brojac++;
     localStorage.setItem("brojac",brojac);
     m++;

  }
  //kod za da ne se zacuvuva vo localStorage
  /*else if(brojac==2) 
{  brSliki++;
   var picture = "<img src='"+e.target.result+"'width='300' height='400'  class='galerijaImg1'>";
   var lajk = "<button onclick='Counter(button"+m+")' id='button"+m+"' class='buttonLike'><span id='heart"+m+"' style='font-size: x-large;'>&#10084;</span><label id='likes"+m+"' style='color:black'>0</label></button>";
   var form = " <form  class='formMargin'><br> <input type='text'  size='31' maxlength='100' placeholder='Напиши коментар...' id='input"+m+"'><input type='button' value='Постирај' id='k"+m+"' onclick='komentiraj(this)'><p id='komentar"+m+"' style = 'width: 310px; height: 80px; overflow: scroll;'> <hr></p></form>";
   
   $("#"+id1).append(picture);
   $("#"+id2).append(lajk);
   $("#"+id3).append(form);
   brojac++;
   m++;
}*/
//kod za da se zacuvuva vo localStorage
  else if(localStorage.getItem("brojac")==3)
  {  brSliki++;
    localStorage.setItem("brSl",brSliki);
    var okolina="<p><div> <div id='"+id1+"'> </div> <div id='"+id2+"'></div> <div id='"+id3+"'></div> </div></p> ";
    var picture= "<img src='"+e.target.result+"' width='300' height='400' class='galerijaImg1'>";
    var lajk= "<button onclick='Counter(button"+localStorage.getItem("brSl")+")' id='button"+localStorage.getItem("brSl")+"'class='buttonLike3'><span id='heart"+localStorage.getItem("brSl")+"' style='font-size: x-large;'>&#10084;</span><label id='likes"+localStorage.getItem("brSl")+"' style='color:black'>0</label></button>";
    var form= " <form  class='formMargin'><br> <input type='text'  size='31' maxlength='100' placeholder='Напиши коментар...' id='input"+localStorage.getItem("brSl")+"'><input type='button' value='Постирај' id='k"+localStorage.getItem("brSl")+"' onclick='komentiraj(this)'><p id='komentar"+localStorage.getItem("brSl")+"' style = 'width: 310px; height: 80px; overflow: scroll;'> <hr></p></form>";
    localStorage.setItem("id1",id1);
    localStorage.setItem("id2",id2);
    localStorage.setItem("id3",id3);

       $("#sliki").append(okolina);
       localStorage.setItem("novaSlika"+localStorage.getItem("brSl"),picture)
       $("#"+id1).append(picture);
       $("#"+id2).append(lajk);
       localStorage.setItem("novLajk"+localStorage.getItem("brSl"),lajk);
       $("#"+id3).append(form);
       localStorage.setItem("novKom"+localStorage.getItem("brSl"),form);
       localStorage.setItem("okolina"+localStorage.getItem("brSl"),okolina);
     brojac++;
     localStorage.setItem("brojac",brojac);
     m++;
     
  }
    //kod za da ne se zacuvuva vo localStorage
  /*
else if(brojac==3)
{ brSliki++;
  var picture = "<img src='"+e.target.result+"'width='300' height='400'  class='galerijaImg'>";
  var lajk = "<button onclick='Counter(button"+m+")' id='button"+m+"' class='buttonLike3'><span id='heart"+m+"' style='font-size: x-large;'>&#10084;</span><label id='likes"+m+"' style='color:black'>0</label></button>";
  var form = " <form  class='formMargin'><br> <input type='text'  size='31' maxlength='100' placeholder='Напиши коментар...' id='input"+m+"'><input type='button' value='Постирај' id='k"+m+"' onclick='komentiraj(this)'><p id='komentar"+m+"' style = 'width: 310px; height: 80px; overflow: scroll;'> <hr></p></form>";
   
   $("#"+id1).append(picture);
   $("#"+id2).append(lajk);
   $("#"+id3).append(form);
   brojac++;
   m++;
   
}
  */
 //kod za da se zacuvuva vo localStorage
  else if(localStorage.getItem("brojac")==4)
  { brSliki++;
    localStorage.setItem("brSl",brSliki);
    var okolina="<p><div> <div id='"+id1+"'> </div> <div id='"+id2+"'></div> <div id='"+id3+"'></div> </div></p> ";
  //  localStorage.setItem("okolina",okolina);
    var picture= "<img src='"+e.target.result+"' width='300' height='400' class='galerijaImg1'>";
    var lajk= "<button onclick='Counter(button"+localStorage.getItem("brSl")+")' id='button"+localStorage.getItem("brSl")+"'class='buttonLike3'><span id='heart"+localStorage.getItem("brSl")+"' style='font-size: x-large;'>&#10084;</span><label id='likes"+localStorage.getItem("brSl")+"' style='color:black'>0</label></button>";
    var form= " <form  class='formMargin'><br> <input type='text'  size='31' maxlength='100' placeholder='Напиши коментар...' id='input"+localStorage.getItem("brSl")+"'><input type='button' value='Постирај' id='k"+localStorage.getItem("brSl")+"' onclick='komentiraj(this)'><p id='komentar"+localStorage.getItem("brSl")+"' style = 'width: 310px; height: 80px; overflow: scroll;'> <hr></p></form>";
    localStorage.setItem("id1",id1);
    localStorage.setItem("id2",id2);
    localStorage.setItem("id3",id3);
   
       $("#sliki").append(okolina);
       localStorage.setItem("novaSlika"+localStorage.getItem("brSl"),picture)
       $("#"+id1).append(picture);
       $("#"+id2).append(lajk);
       localStorage.setItem("novLajk"+localStorage.getItem("brSl"),lajk);
       $("#"+id3).append(form);
       localStorage.setItem("novKom"+localStorage.getItem("brSl"),form);
       localStorage.setItem("okolina"+localStorage.getItem("brSl"),okolina);
       brojac=1;
       localStorage.setItem("brojac",brojac);
       i+=3;
       j+=3;
       k+=3;
       m++;
  }
  //kod za da ne se zacuvuva vo localStorage
  /*
  else if(brojac==4)
{  brSliki++;
   var picture = "<img src='"+e.target.result+"'width='300' height='400' class='galerijaImg'>";
   var lajk = "<button onclick='Counter(button"+m+")' id='button"+m+"' class='buttonLike3'><span id='heart"+m+"' style='font-size: x-large;'>&#10084;</span><label id='likes"+m+"' style='color:black'>0</label></button>";
   var form = " <form  class='formMargin'><br> <input type='text'  size='31' maxlength='100' placeholder='Напиши коментар...' id='input"+m+"'><input type='button' value='Постирај' id='k"+m+"' onclick='komentiraj(this)'><p id='komentar"+m+"' style = 'width: 310px; height: 80px; overflow: scroll;'> <hr></p></form>";
  
   $("#"+id1).append(picture);
   $("#"+id2).append(lajk);
   $("#"+id3).append(form);
   brojac=1;
   i+=3;
   j+=3;
   k+=3;
   m++;
}
  */
    }
  
  });
  

  var i;

  var koj=new Array(1000);
  for(i=0;i<1000;i++){
    //likes[i]=0;
    koj[i]=1;
  }
  function Counter(button){
   for(i=1;i<1000;i++){
       var pom="button"+i;
        if(button.id==pom){
            var like=localStorage.getItem("like"+i);
             if(like==null){
             like=0;
             localStorage.setItem("like"+i,like);
             }
            if(koj[i-1]%2!=0){
            // likes[i-1]++;
             koj[i-1]++;
             var like2=localStorage.getItem("like"+i);
             like2++;
             localStorage.setItem("like"+i,like2);
             document.getElementById("likes"+i).innerHTML=localStorage.getItem("like"+i);
             document.getElementById("heart"+i).style.color='crimson';
            }
            else{
              koj[i-1]++;
            // likes[i-1]--;
             var like2=localStorage.getItem("like"+i);
             like2--;
             localStorage.setItem("like"+i,like2);
             document.getElementById("likes"+i).innerHTML=localStorage.getItem("like"+i);
             document.getElementById("heart"+i).style.color='burlywood';
            }
         }}
        };
      
  

var ime;
var komentari=new Array(1000);
var j;
for(j=0;j<1000;j++){
    komentari[j]="";
}
var ime;
var komentari=new Array(1000);
var j;
for(j=0;j<1000;j++){
    komentari[j]="";
}
function komentiraj(element){
for(j=1;j<1000;j++){
    var komm="k"+j;
    if(element.id==komm){
    var input=document.getElementById("input"+j).value;
    if(input!=""){
    var site=localStorage.getItem("kom"+j);
    komentari[j]=ime+": "+"<label>"+input+"</label>"+"<br>";
    }

    if(site==null){
        localStorage.setItem("kom"+j,komentari[j]);
        var kkom=document.getElementById("komentar"+j).innerHTML=komentari[j];
    }
    else{
    site=komentari[j];
    var prom=localStorage.getItem("kom"+j);
    localStorage.setItem("kom"+j,prom+site);
    var kkom=document.getElementById("komentar"+j).innerHTML=localStorage.getItem("kom"+j);
}

    }
}

}
window.addEventListener("load", start, false);
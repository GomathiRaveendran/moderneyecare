      var d= new Date();
      var cnt=1;
      var slideIndex = 0;

      function carousel() {
      var i;
      var x = document.getElementById("myImg");
      for (i = 1; i < 4; i++) {
        x.src= "images/"+i+".jpg";
      }
      slideIndex++;
      if (slideIndex > 3) {slideIndex = 1}
      x.src="images/"+slideIndex+".jpg";
      setTimeout(carousel, 2000); // Change image every 2 seconds
      }

      function changes()
      {
        if(cnt==3){cnt=1;}
        else cnt=cnt+1;
        document.getElementById('myImg').src="images/"+cnt+".jpg";
      }

      function design1(ttl)
      {
        x=document.getElementById('desg1');
        x.innerHTML=ttl;
      }

      function design2(ttl)
      {
        x=document.getElementById('desg2');
        x.innerHTML=ttl;
      }

      function design3(ttl)
      {
        x=document.getElementById('desg3');
        x.innerHTML=ttl;
      }

      function design4(ttl)
      {
        x=document.getElementById('desg4');
        x.innerHTML=ttl;
      }
      
      function design5(ttl)
      {
        x=document.getElementById('desg5');
        x.innerHTML=ttl;
      }

      function dat()
      {
         document.getElementById("dispdate").innerHTML="Current date and time: "+d.getHours()+":"+d.getMinutes()+", "+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
      }
      dat();

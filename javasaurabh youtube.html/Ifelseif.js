
        //  var time = 24
        // var time = prompt("enter your time")
        //  if(time<=10){
        //      document.write("good moring")
        //  }
        //  else if( time<=16){
        //      document.write("good afternon")
        //  }
        //  else if( time<=22){
        //      document.write("good evening")
        //  }
        //  else{
        //      document.write("good neight")
        //  }
         
    //     var per = 10
    //     var per = prompt("enter your percentage")
    //     if(per >=80 && per<=100){
    //         document.write("you are merit")

    //     }
    //    else if(per >=60 && per<=79){
    //         document.write("you are 1st division")

    //     }
    //    else if(per >=45 && per<=60){
    //         document.write("you are 2nd division")

    //     }
    //      else if(per >=33 && per<=45){
    //         document.write("you are 3rd divison")

    //     }
    //      else if(per <=33 ){
    //         document.write("you are fail")

    //     }
    //     else{
    //         document.write("you presant not valid")

    //     }
        
    let business =prompt("account your number100")
    let account =prompt(" business  your number100")
    let hindi =prompt("economic your number100")
    let engilsh =prompt("engilsh  your number100")
    let economic =prompt("hindi your number100")
    var per
    let res = number(business)+number(account)+number(economic)+number(engilsh)+number(hindi);
    var   per = number(res)/5;
    var pc = number(res)*100/500

        document.write(+per)
        document.write(+res)
      
     if( per <= 33 ){
            document.write("you are fail")
    } else if(per >=33 && per<=45){
            document.write("you are 3rd divison")
    }
    else if(per >=45 && per<=60){
            document.write("you are 2nd division")

        }else if(per >=60 && per<=79){
            document.write("you are 1st division")

        }
       else if(per >=80 && per<=100){
            document.write("you are merit")
        }
        else{
            document.write("you presant not valid")

        }
   
/*console.log("ali abbas");
console.log("ali \\ abbas");
console.log('ali "abbas"');
var firstname = "ali" , secname ="abbas";
console.log(firstname + " " + secname);
// Template Literals or Template Strings
console.log( `${firstname}  ${secname}` );
console.log( `${firstname}  \\ ${secname}` );
console.log( `${firstname} " "  ${secname}` );
console.log( `${firstname} \n ${secname}` );

let info =  `<div> 
            <h3>${firstname}</h3>
            <p> ${secname}</p>
            <span>${secname}</span>
            </div>`

document.write(info);
// will printer 4 time in browser   the repeat() is es6
document.write(info.repeat(4));*/
var my_input = document.getElementById("em"),
    my_pass = document.getElementById("pass"),
    email_error = document.getElementById("email-error"),
    pass_error = document.getElementById("pass-error"),
    my_btn = document.getElementById("btn-login");
    
    my_btn.onclick = function(){
      
      // to remove outeline on btn when onclick
        my_btn.style.outline = " none";
      // show error email if was field is emoty
      if(my_pass.value.length === 0)
      {
        pass_error.style.display="block";  
        my_pass.focus();
      }
      // show error pass if was field is emoty
      if(my_input.value.length === 0)
      {
        email_error.style.display="block";
        my_input.focus();
      }
      // show error email if was length more 11
      if(my_input.value.length >= 12 )
      {
        email_error.style.display="block";
        my_input.focus();

      }
      // show error pass if was length more 8
      if( my_pass.value.length >= 8)
      {
        pass_error.style.display="block";
        my_pass.focus();
      }
    }


  

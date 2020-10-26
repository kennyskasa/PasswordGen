//take random character from input string.
function generateRandCharacter(str)
  {
    let num = Math.floor(Math.random()*str.length);
    return str[num];
  }

//disables generate button if user selects no options
function disableButton()
    {
      let checkbox = document.querySelectorAll("input");
      let button = document.getElementById("generate");
      if ( checkbox[0].checked == false &&
           checkbox[1].checked == false &&
           checkbox[2].checked == false &&
           checkbox[3].checked == false )
          { 
            button.disabled = true;
          }
        else button.disabled = false;
    }

    //function for password generation and validation
function generatePassword()
    {
      let digits = '0123456789';
      let lowers = 'abcdefghijklmnopqrstuvwxyz';
      let uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let symbols ='!@#$%^&*()_+=?<>,.';
      let workingString = '';
      let password = '';
      let pattSpec = /[!@#$%^&*()_+=?<>,.]/;
      let pattUp = /[A-Z]/;
      let pattLo = /[a-z]/;
      let pattDig = /\d/;

      let checkbox = document.querySelectorAll("input");  

      if (checkbox[0].checked)
        {
          workingString += uppers;
        }
      if (checkbox[1].checked)
        {
          workingString += lowers;
        }
      if (checkbox[2].checked)
        {
          workingString += digits;
        }
      if (checkbox[3].checked)
        {
          workingString += symbols;
        }
      // loop to generate password and check if password meets user critiria.
      // 
      while (true) {
        password = '';
        for (n=1;n<=slider.value;n++)
        {
            password += generateRandCharacter(workingString);
        }
        if (checkbox[0].checked)
            {
                if (!pattUp.test(password))
                    {
                        continue;
                    }
            }
           else {
              if (pattUp.test(password))
                {
                  continue;
                }
            } 
        if (checkbox[1].checked)
            {
                if (!pattLo.test(password))
                    {
                        continue;
                    }
            }
            else {
              if (pattLo.test(password))
                {
                  continue;
                }
            } 
        if (checkbox[2].checked)
            {
                if (!pattDig.test(password))
                    {
                        continue;
                    }
            }
          else
              {
                if (pattDig.test(password))
                  {
                    continue;
                  }
              }
        if (checkbox[3].checked)
            {
                if (!pattSpec.test(password))
                    {
                        continue;
                    }
            }
         else  {
            if ( pattSpec.test(password) )
              {
                continue;
              }
          } 
        document.getElementById("password").value = password;
        break;
    }
  }
//copy password to clipboard
function copyPass()
    {
      let copyText = document.getElementById('password');
      copyText.select();
      copyText.setSelectionRange(0,9999);
      document.execCommand('copy');
      alert("Copied the text: " + copyText.value);
    }

//init function
//adding listeneres, setting values     
function init()
    {
      let slider = document.getElementById("slider");
      let output = document.getElementById("passlen");
      output.value = slider.value; 
      slider.oninput = function()
       {
          output.value = this.value;
       }
      document.querySelectorAll("input")[0].addEventListener("click",disableButton);
      document.querySelectorAll("input")[1].addEventListener("click",disableButton);
      document.querySelectorAll("input")[2].addEventListener("click",disableButton);
      document.querySelectorAll("input")[3].addEventListener("click",disableButton);
      document.getElementById("generate").addEventListener("click",generatePassword);
      document.getElementById("copy").addEventListener("click",copyPass); 
    }   

init();

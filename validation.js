document.getElementById('signupbutton').addEventListener('click',function (){
    document.getElementById('inputname').addEventListener('input', function(){
        document.getElementById('nameerror').style.display = 'none';
    })
    document.getElementById('inputemail').addEventListener('input', function(){
        document.getElementById('emailerror').style.display = 'none';
    })
    document.getElementById('inputpasswd').addEventListener('input', function(){
        document.getElementById('passwderror').style.display = 'none';
    })
    document.getElementById('inputpasswd2').addEventListener('input', function(){
        document.getElementById('passwd2derror').style.display = 'none';
    })

    var inputname = document.getElementById('inputname').value;
    var inputemail = document.getElementById('inputemail').value;
    var inputpasswd = document.getElementById('inputpasswd').value;
    var inputpasswd2 = document.getElementById('inputpasswd2').value;
    var spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var format = inputemail.includes("@gmail.com")

    if(inputname == '' || inputemail == '' || inputpasswd == '' || inputpasswd2 == '' )
    {
        alert("Properly Fill The Details !")
    }
    else{
        if (spChars.test(inputname))
        {
        let nameError = document.getElementById('nameerror')
        nameError.textContent = 'Name cannot contain special characters ! '
        nameError.style.display = 'block'
        }
        else if(!format){
            console.log("hello")
            let emailError = document.getElementById('emailerror')
            emailError.textContent = 'Invalid format ! '
            emailError.style.display = 'block'
        }
        else if(inputpasswd.length < 6){
            let passwdError = document.getElementById('passwderror')
            passwdError.textContent = 'password should be minimum 6 characters'
            passwdError.style.display = 'block'
        }
        else if(inputpasswd2 != inputpasswd)
        {
            let passwd2Error = document.getElementById('passwd2derror')
            passwd2Error.textContent = 'Password not match'
            passwd2Error.style.display = 'block'
        }
        else{
            document.querySelector('h1').textContent = 'SignUp Successfull :)'
            document.querySelector('button').style.display = 'none'
            document.getElementById('name').style.display = 'none'
            document.getElementById('username').style.display= 'none'
            document.getElementById('passwd').style.display= 'none'
            document.getElementById('passwd2').style.display= 'none'
            alert("SignUp Successfull :)")
            
        }
    }
    
        
      
        
})







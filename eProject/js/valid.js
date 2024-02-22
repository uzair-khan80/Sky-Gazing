function validation()
{
    let uname = document.getElementById('uname').value;
    let email = document.getElementById('mail').value;
    let number = document.getElementById('num').value;
    let message = document.getElementById('msg').value;

    let nameCheck = /^[a-zA-Z].{3,20}$/;
    let emailCheck = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    let numCheck = /^(\+92|0)[0-9]{10}$/;
    let msgCheck = /^[a-zA-Z].{3,20}$/;

    if(nameCheck.test(uname))
    {
        document.getElementById('nameError').innerHTML = "";
    }
    else
    {
        document.getElementById('nameError').innerHTML = "** Invalid Username";
        return false;
    }

    if(emailCheck.test(email))
    {
        document.getElementById('emailError').innerHTML = "";
    }
    else
    {
        document.getElementById('emailError').innerHTML = "** Invalid User Email";
        return false;
    }


    if(numCheck.test(number))
    {
        document.getElementById('numError').innerHTML = "";
    }
    else
    {
        document.getElementById('numError').innerHTML = "** Invalid Number";
        return false;
    }

    if(msgCheck.test(message))
    {
        document.getElementById('msgError').innerHTML = "";
    }
    else
    {
        document.getElementById('msgError').innerHTML = "** Invalid Message";
        return false;
    }

    if(nameCheck.test(uname) && emailCheck.test(email) &&
    msgCheck.test(message) && numCheck.test(number))
    {
        alert("Your Form Has Been Submitted Succesfully");
    }
    else
    {
        alert("Invalid Attempt");
    }
   
}
function validate()
{

    var name = document.getElementById("initString").value;
    var lname = document.getElementById("str2").value;
    var empNum = document.getElementById("firstNum").value;

    var fullName = name+ " " + lname;
   document.getElementById("inputStatus").innerHTML =fullName;

    if (name.length <=2)
    {
        document.getElementById("inputStatus").innerHTML = "Name not long enough";
    }

    if  (empNum <100  || empNum >=1000)   
    {
        document.getElementById("inputStatus").innerHTML = "number is not 3 digits";
    }
}
function strings()
{
    var string1 = document.getElementById("firstStr").value;
    var string2 = document.getElementById("secondStr").value;

    var splitStr = string1.split("");
   // alert(splitStr);// no alerts in your assignment - use document.getelementbyid().innerhtml = 
    var reverseStr = splitStr.reverse();
  //  alert(reverseStr);
    var joinStr = reverseStr.join("");
  //  alert(joinStr);

    if (string1 == joinStr)
    {
        alert("palindrome");
    }
    else{
        alert("NOT a palindrome");
    }

    var i = 0;
    var reversed = "";
    for (i = string1.length-1;i>=0; i--)
    {
        reversed += string1[i];  //reversed = reversed + string1[i]
    }

    if (reversed == string1)
    {
        document.getElementById("string info").innerHTML = "PALINDROME";
    }
    else
    {
        document.getElementById("string info").innerHTML = "NOT  a PALINDROME";
    }
    //substring(a,b)  a = starting position(index) b = length
    var sub1 = string1.substring(0,3);
    //alert(sub1);

    var rep = string1.replace(/qwe/, "asd");
    alert(rep);


}
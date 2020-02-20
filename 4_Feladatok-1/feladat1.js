    "use strict"

    function myFunction() {
        var input = document.getElementById("myinput").value;
        var count = 1;
        var x = "";

        //console.log(input);
        //console.log(document.getElementById("myinput").value);

        if (input == "")
        {
            document.getElementById("myoutput").innerHTML = "Empty input string!";
            return;
        }

        for (x in input) 
        {
            if (input[x] == " ")
            {
                count++;
            }
        }
        document.getElementById("myoutput").innerHTML = count;
    }



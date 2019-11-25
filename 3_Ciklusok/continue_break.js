    function myFunction() {
        // The break statement "jumps out" of a loop.
        // The continue statement "jumps over" one iteration in the loop.
        for (i = 0; i < 100; i++) 
        {
            if (i == 1)
                continue;

            if (i == 2)
                break;

            text += "The number is " + i + "<br>";
        }
    }



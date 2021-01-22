// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.


function parse( data )
{
      let control = 0
    kept = []
    data = data.split("")
    for(let d = 0;d < data.length;d++){
        if (data[d] == 'i')
         control++

    else if (data[d] == 'd')
            control--

    else if (data[d] == 's')
            control = Math.pow(control,2)

    else if  (data[d] == 'o')
             kept.push(control)
    }
    return kept
}
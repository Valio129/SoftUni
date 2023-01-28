function solve(array) {
    /*
        get pattern 
        loop through the array and find the first and the last match of
        the pattern
        create regex 
    */
   let text = 'astalavista baby'
   let regex = /(?<pattern>sta)/gm
   let match = [...text.matchAll(regex)]
   console.log(text.substring(match[match.length - 1].index , match[match.length - 1][0].length));
}
solve(['astalavista baby',
    'sta'])
solve(['##mtm!!mm.mm*mtm.#',

    'mtm'])
function solve(array) {
    array = array.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
          }
          if (a.length < b.length) {
            return -1;
          }
          return a.localeCompare(b);
        });
        console.log(array.join('\n'));
}
    

solve(['alpha',
    'beta', 'gamma']);
solve(['test',
'Deny', 'omen',
'Default']
);
solve(['Isacc',
'Theodor', 'Jack',
'Harrison',
'George']
);
function combine(n: number, k: number): number[][] {
    let myArray = [];
    for (let i=1; i<n+1; i++) {
        myArray.push(i);
    }
    console.log(myArray)
    
    const result = [];
    function recurse(current: any[], toAdd: any[]) {
        if (toAdd.length === 0 || current.length === k) {
            if (current.length ===k ) {
                 result.push(current);
            }
           
        } else {
            for (let j = 0; j<toAdd.length; j++) {
                recurse([...current, toAdd[j]],toAdd.slice(j+1));
            }
        }
    }

    recurse([], myArray);
    return result;

};
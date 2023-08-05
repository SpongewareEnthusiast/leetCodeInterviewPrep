function lengthOfLongestSubstring(s: string): number {
    if (s==='') { return 0};
    if (s.length === 1) {return 1};
    let currentMax = 0;
    // Iterate over the whole word 
    for (let i=0; i<s.length; i++) {
        let currentLetters = [];
        currentLetters.push(s[i]);
        //console.log(" i: " + i + " " + s[i])
        // Iterate over every subsequent letter until there is a repeated character
        for (let j=i+1; j<s.length; j++) {
           //console.log(" j: " + j + " " + s[j])
            if (currentLetters.indexOf(s[j])!==-1) {
                if (currentLetters.length > currentMax) {
                    currentMax = currentLetters.length;
                }
                currentLetters = [];
                break;
            } else {
                currentLetters.push(s[j]);
                if (currentLetters.length > currentMax) {
                    currentMax = currentLetters.length;
                }               
            }
           
        }
    }    
    return currentMax;
};
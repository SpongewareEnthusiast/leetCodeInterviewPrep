function groupAnagrams(strs: string[]): string[][] {
    let result: string [] []= [];
    let wordMap = new Map<string, string[]>();
    for (const word of strs) {
        let alphabetical = word.split('').sort().join('');
        if (wordMap.has(alphabetical)) {
            let temp: string[] = [];
            temp.push(word);
            console.log(word);
            temp.push(...wordMap.get(alphabetical))
            wordMap.set(alphabetical, temp)
        } else {
            wordMap.set(alphabetical, [word]);
        }
    }
    console.log(wordMap)
    for (const [key,value] of wordMap) {
        result.push(value)
    }
    return result;
};
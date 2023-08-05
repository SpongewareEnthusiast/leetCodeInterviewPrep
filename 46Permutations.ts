function permute(nums: number[]): number[][] {
    let result = [];
    console.log('start')
    function recurse(arr: any[], temp: any[]){
        
        let current = [];
        for (let i=0; i<arr.length; i++) {
            current = arr.splice(i,1);
            if (arr.length === 0) {
                result.push(temp.concat(current))
            }
            recurse(arr.slice(), temp.concat(current))
            arr.splice(i,0,current[0]);
        }
    }
    recurse(nums,[])
    return result;

};
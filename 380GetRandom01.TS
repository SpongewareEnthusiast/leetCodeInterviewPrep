class RandomizedSet {
    private set: Map <number, number>;
    private vals: number[];
    constructor() {
        this.set = new Map();
        this.vals = [];
    }

    insert(val: number): boolean {
        if (this.set.has(val)) {
            return false;
        } else {
            this.set.set(val, this.vals.length);
            this.vals.push(val)
            return true;
        }

    }

    remove(val: number): boolean {
        if (this.set.has(val)) {
            let position = this.set.get(val);
            if (position !== this.vals.length-1) {
                let lastItem = this.vals[this.vals.length-1];
                let desired = this.vals[position];
                this.vals[position] = lastItem;
                this.vals[this.vals.length-1] = desired;
                this.set.set(lastItem, position )
            }
            this.vals.pop();
            this.set.delete(val);
            return true
        } else {
            return false;
        }       
    }

    getRandom(): number {
        return this.vals[Math.floor(Math.random()*this.vals.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
class HashTable {
    constructor(limit = 14) {
        this.storage = []
        this.limit = limit
    }

    _hash(key, max) {
        let hash = 0

        for (let idx = 0; idx < key.length; idx++) {
            hash += key.charCodeAt(idx)

        }

        return hash % max
    }

    printTable() {
        for (let idx = 0; idx < this.storage.length; idx++) {
            if (this.storage[idx] !== undefined) {
                console.log(`Bucket ${idx}: ${JSON.stringify(this.storage[idx])}`);
            } else {
                console.log(`Bucket ${idx} Empty`);
            }

        }
    }

    set(key, value) {
        const index = this._hash(key, this.limit)

        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]]
        } else {
            let inserted = false

            for (let idx = 0; idx < this.storage[index].length; idx++) {
                if (this.storage[index][idx][0] === key) {
                    this.storage[index][idx][1] = value
                    inserted = true
                }
            }

            if (inserted === false) {
                this.storage[index].push([key, value])
            }
        }
    }
}

module.exports = HashTable;

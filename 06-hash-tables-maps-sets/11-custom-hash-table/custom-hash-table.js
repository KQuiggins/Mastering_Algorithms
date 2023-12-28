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

    get(key) {
        const index = this._hash(key, this.limit)

        if (this.storage[index] === undefined) {
            return undefined
        } else {
            for (let idx = 0; idx < this.storage[index].length; idx++) {
                if (this.storage[index][idx][0] === key) {
                    return this.storage[index][idx][1]
                }
            }
        }
    }

    remove(key) {
        const index = this._hash(key, this.limit);

        if (this.storage[index]) {
            for (let idx = 0; idx < this.storage[index].length; idx++) {
                if (this.storage[index][idx][0] === key) {
                    this.storage[index].splice(idx, 1);
                    if (this.storage[index].length === 0) {
                        this.storage[index] = undefined; // Clearing the bucket if empty
                    }
                    break; // Exit the loop once the key is found and removed
                }
            }
        }
    }

    has(key) {
        const index = this._hash(key, this.limit);

        if (this.storage[index]) {
            for (let idx = 0; idx < this.storage[index].length; idx++) {
                if (this.storage[index][idx][0] === key) {
                    return true;
                }
            }
        }
        return false;
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

}

module.exports = HashTable;

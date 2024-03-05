class Queue {
    constructor() {
        this.head = 0;
        this.tail = 0;
        this.queue = [];
        this.maxSize = 100;
    }
    getLength() {
        return this.tail - this.head;
    }

    isEmpty() {
        return this.getLength() === 0;
    }

    isFull() {
        return this.getLength() === this.maxSize;
    }

    enqueue(value) {
        if (this.isFull()) {
            return "Queue is empty";
        }

        this.queue[this.tail] = value;
        this.tail++;
        return true;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const value = this.queue[this.head];
        this.head++;
        return value;
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue[this.head];
    }
}

module.exports = Queue;

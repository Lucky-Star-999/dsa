// A queue is an object (an abstract data structure - ADT) that allows the following operations:
//     Enqueue: Add an element to the end of the queue
//     Dequeue: Remove an element from the front of the queue
//     IsEmpty: Check if the queue is empty
//     IsFull: Check if the queue is full
//     Peek: Get the value of the front of the queue without removing it

class Queue {
    constructor(capacity) {
        this.items = [];
        this.capacity = capacity;
        this.front = -1;
        this.rear = -1;
    }

    enqueue(item) {
        if (this.isFull()) {
            console.log('Queue is full!');
            return;
        }
        if (this.isEmpty()) {
            this.front = 0;
        }
        this.rear++;
        this.items[this.rear] = item;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is empty!');
            return;
        }
        let item = this.items[this.front];
        this.front++;
        if (this.front > this.rear) {
            this.clear()
        }
        return item;
    }

    isEmpty() {
        return this.front <= -1 && this.rear <= -1
    }

    isFull() {
        return this.rear === this.capacity - 1;
    }

    peek() {
        if (this.isEmpty()) {
            console.log('Queue is empty!');
            return;
        }
        return this.items[this.front];
    }

    clear() {
        this.items = [];
        this.front = -1;
        this.rear = -1;
    }
}

let queue = new Queue(2);
queue.enqueue(123);
console.log(queue.peek());
queue.enqueue(456);
console.log(queue.dequeue());
console.log(queue.peek());
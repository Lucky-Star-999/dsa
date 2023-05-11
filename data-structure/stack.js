// There are some basic operations that allow us to perform different actions on a stack.
//      Push: Add an element to the top of a stack
//      Pop: Remove an element from the top of a stack
//      IsEmpty: Check if the stack is empty
//      IsFull: Check if the stack is full
//      Peek: Get the value of the top element without removing it

class Stack {
    constructor(capacity) {
        this.items = [];
        this.capacity = capacity;
        this.currentSize = 0;
    }

    push(item) {
        if (this.isFull()) {
            console.log('Stack overflow');
            return;
        }
        this.items[this.currentSize] = item;
        this.currentSize++;
    }

    pop() {
        if (this.isEmpty()) {
            console.log('The stack is empty!');
            return;
        }
        this.currentSize--;
        return this.items[this.currentSize];
    }

    isEmpty() {
        return this.currentSize === 0;
    }

    isFull() {
        return this.currentSize >= this.capacity;
    }

    peek() {
        if (this.isEmpty()) {
            console.log('The stack is empty!');
            return;
        }
        return this.items[this.currentSize - 1];
    }
}

let stack = new Stack(3);
stack.push(12);
stack.push(9);
stack.push(36);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
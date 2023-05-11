class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insertLast(node) {
        if (this.head === null) {
            this.head = node;
            return;
        }

        if (this.head.next === null) {
            this.head.next = node;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    removeLast() {
        let currentNode = this.head;
        while (currentNode.next != null) {
            if (currentNode.next.next == null) {
                currentNode.next = null;
                break;
            } else {
                currentNode = currentNode.next;
            }
        }
    }

    print() {
        let currentNode = this.head;
        console.log(currentNode.data);
        while (currentNode.next != null) {
            currentNode = currentNode.next;
            console.log(currentNode.data);
        }
    }
}

let head = new Node(5);
let node1 = new Node(10);
let node2 = new Node(15);
let node3 = new Node(90);

let linkedList = new LinkedList(head);
linkedList.insertLast(node1);
linkedList.insertLast(node2);
linkedList.insertLast(node3);
linkedList.print();
console.log('-------');
linkedList.removeLast();
linkedList.print();

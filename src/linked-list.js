const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;

        this.length = 0;
    }

    append(data) {
        let node = new Node(data);

        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;
        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        let currentNode = this._head,
            count = 0;

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode.data;
    }

    insertAt(index, data) {
        let node = new Node(data);
        let currentNode = this._head,
            count = 0;

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }

        if (!currentNode) {
            currentNode = node;
        } else {
            node.prev = currentNode.prev;
            node.next = currentNode;
            currentNode.prev = node;
            if (node.prev) {
                node.prev.next = node;
            }
        }

        this.length++;

        return this;
    }

    isEmpty() {
        return this.length > 0 ? false : true;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;

        return this;
    }

    deleteAt(index) {
        let currentNode = this._head,
            count = 0;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        if (!currentNode.next && !currentNode.prev) {
            currentNode = null;
        } else {
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }

        return this;
    }

    reverse() {
        let head = this._head,
            tail = this._tail;

        for (let i = 0; i < this.length - 1; i += 2) {
            let temp = head.data;
            head.data = tail.data;
            tail.data = temp;

            tail = tail.prev;
            head = head.next;
        }

        return this;
    }

    indexOf(data) {
        let currentNode = this._head,
            length = this.length,
            count = 0;

        while (count < length) {
            if (currentNode.data == data) {
                return count;
            }
            currentNode = currentNode.next;
            count++;
        }

        return -1;
    }
}

module.exports = LinkedList;
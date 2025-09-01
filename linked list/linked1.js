class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    traverseIterative() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size ++;
    }

    addMiddle(index, data){
        if(index < 0 || index >this.size){
            console.log("invalid position");
            return
        }
        const newNode = new Node(data);

        if(index === 0 ){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

}


const linkedlist = new LinkedList();
linkedlist.addFirst(5);
linkedlist.addFirst(7);

linkedlist.addLast(100);
linkedlist.addLast(9);

linkedlist.print();
class Node {
  constructor(public data: number, public next: Node | null = null) {}
}

export class LinkedList {
  head: Node | null = null;
  length: number = 0;

  add(data: number) {
    this.length++;

    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    node.next = new Node(data);
  }

  at(index: number): Node {
    const error = new Error("Index out of bound!");
    if (index >= this.length) throw error;
    if (!this.head) throw error;

    let counter = 0;
    let node = this.head;
    while (node.next) {
      if (counter === index) break;
      node = node.next;
      counter++;
    }

    return node;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error("Comparing values of empty Linked List");
    return this.at(leftIndex).data <= this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number) {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

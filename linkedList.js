class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.startNode = null;
  }

  append(value) {
    let newNode = new Node();
    newNode.value = value;

    if (this.startNode == null) {
      this.startNode = newNode;
    } else {
      let currentNode = this.startNode;

      while (currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = newNode;
    }
  }

  prepend(value) {
    let newNode = new Node();
    newNode.value = value;
    newNode.nextNode = this.startNode;
    this.startNode = newNode;
  }

  size() {
    if (this.startNode == null) {
      return 0;
    }

    let size = 0;
    let currentNode = this.startNode;
    while (currentNode != null) {
      size++;
      currentNode = currentNode.nextNode;
    }
    return size;
  }

  head() {
    return this.startNode;
  }

  tail() {
    if (this.startNode == null) {
      return null;
    }

    let currentNode = this.startNode;
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    if (this.startNode == null) {
      return null;
    }
    let i = 0;
    let currentNode = this.startNode;
    while (currentNode != null && index != i) {
      currentNode = currentNode.nextNode;
      i++;
    }
    return currentNode;
  }

  pop() {
    if (this.startNode != null) {
      let currentNode = this.startNode.nextNode;
      let prevNode = this.startNode;
      while (currentNode.nextNode != null) {
        prevNode = currentNode;
        currentNode = currentNode.nextNode;
      }
      prevNode.nextNode = null;
    }
  }

  contains(value) {
    if (this.startNode == null) {
      return false;
    }
    let currentNode = this.startNode;
    while (currentNode != null) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    if (this.startNode == null) {
      return null;
    }
    let currentNode = this.startNode;
    let index = 0;
    while (currentNode != null) {
      if (currentNode.value == value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let currentNode = this.startNode;
    let str = "";
    while (currentNode != null) {
      str += "( " + currentNode.value + " ) -> ";
      currentNode = currentNode.nextNode;
    }
    str += "null";
    return str;
  }

  insertAt(value, index) {
    if (index < 0) {
      console.log("index should be greater than 0");
      return;
    }
    let newNode = new Node();
    newNode.value = value;

    if (this.startNode == null) {
      this.startNode = newNode;
    } else {
      let i = 0;
      let currentNode = this.startNode;
      let prevNode = null;
      while (currentNode != null && index != i) {
        prevNode = currentNode;
        currentNode = currentNode.nextNode;
        i++;
      }
      prevNode.nextNode = newNode;
      newNode.nextNode = currentNode;
    }
  }

  removeAt(index) {
    if (index < 0) {
      console.log("index must be greater than or equal to 0")
      return;
    }
    if (this.startNode != null) {
      let i = 0;
      let currentNode = this.startNode;
      let prevNode = null;
      while (currentNode.nextNode != null && index != i) {
        prevNode = currentNode;
        currentNode = currentNode.nextNode;
        i++;
      }
      if (index != i) {
        return;
      }
      if(index == 0){
        this.startNode = currentNode.nextNode;
      }else{
        prevNode.nextNode = currentNode.nextNode;
      }
    }else{
      console.log("List is already empty")
    }
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");

list.prepend("turtle");

list.insertAt("rabbit", 2);

list.pop();

list.removeAt(2);

console.log(list.toString());

console.log(list.contains("snake"));
console.log(list.contains("hamster"));

console.log(list.find("snake"));
console.log(list.find("hamster"));
console.log(list.find("turtle"));

console.log(list.at(2).value);

console.log(list.head().value);

console.log(list.tail().value);

console.log(list.size());

class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.user = 'André';
  }

  showUser() {
    console.log(this.user);
  }
}

const MyList = new TodoList();

document.getElementById('newtodo').onclick = function () {
  MyList.add('New Todo');
}

MyList.showUser();

class Math {
  static add(a, b) {
    return a + b;
  }
}

console.log(Math.add(1, 2));
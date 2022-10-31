function cats(catsArr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let token of catsArr) {
      token = token.split(' ')
      let name, age;
      
        let cat = new Cat(token[0], token[1])
        cat.meow()
    }
}
cats(['Mellow 2', 'Tom 5']);
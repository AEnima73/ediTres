/*
It's just a try to demo of Observer pattern, also a demo of some OOP opportunities of JavaScript
The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their metnhods.
In our demo the zoo is a subject and the members of zoo will be observers.As soon the zoo will be opened, all member will receive notifications. 
*/

class ZooMember {
// All zoo members will have names
   constructor (name){
       this.name = name || 'Noname';
   }
   
  // default method, children classes shoul rewrite it
  onOpen(){
        document.write(`${this.name} keep silent<br>`); 
    }

}

//Someone must take care of the animals in zoo, so there must be workers
class Worker extends ZooMember {
// A zoo worker must introduce himself to visitors when the zoo is open
    constructor (name) {
        super (name); //call of parent class (ZooMember) constructor to save name
    }

    onOpen(){
        document.write(`Hi, my name is ${this.name}, I work here...<br>`); 
    }
}

class Animal extends ZooMember {
// Animals should have unical exclamation corresponding to their type
    constructor (name, voice ) {
        super(name); //call of parent class (ZooMember) constructor  to save name
        this.voice = voice || 'keep silent';
    }

    onOpen(){
        document.write(`${this.name}: ${this.voice}<br>`); 
    }
}

class Lion extends Animal {
// Setup exclamation for lions
    constructor (name) {
        super (name, "R-R-R!"); ////call of parent class (Animal) constructor to save name and exclamation
    }
}

class Zebra extends Animal {
// Setup exclamation for zebras
    constructor (name) {
        super (name, "Yahoo!");
    }
}

class Hippo extends Animal {
// Setup exclamation for hippo, from Madagascar cartoon :)
    constructor (name) {
        super (name, "Moto-Moto!");
    }
}

class Giraffe extends Animal {
// Setup exclamation for giraffe
    constructor (name) {
        super (name, "Oops!");
    }
}

class Turtle extends ZooMember {
// Turtle will keep silent, so we don't overwrite onOpen method
    constructor (name) {
        super (name); //call of parent class (ZooMember) constructor to save name
    }
}

class Zoo {
//Zoo will consist from workers and animals
   constructor (name) {
        this.name = name;
        this.Members=new Array(0);
        document.write(`Building "Zoo ${name}"...<br>`);
   }
   
  //After the worker or animal accepted to the zoo, he might be notified about opening
  AddNewMember (newMemberType, name) {
       try{
            if (eval(`this.Members.push(new ${newMemberType}(name))`)) 
                document.write(`${name} (${newMemberType}) has been accepted to zoo...<br>`);
       }
       catch (Err) {
           document.write(`<p style="color:red">Error: ${Err}</p>`);
       }
   }

//As soon zoo been opened, all members will receive notification
   OpenZoo() {
       document.write(`<p>"Zoo ${this.name}" has been opened. Total members: ${this.Members.length}</p>`);
       //
       for (let Member of this.Members) {
               Member.onOpen(); //Notifing all members about opening
        }
   }
}

var MyZoo = new Zoo ("Madagascar");

MyZoo.AddNewMember ("Worker", "Sam");
MyZoo.AddNewMember ("Lion", "Max");
MyZoo.AddNewMember ("Zebra", "Martin");
MyZoo.AddNewMember ("Hippo", "Gloria");
MyZoo.AddNewMember ("Giraffe", "Melman");
MyZoo.AddNewMember ("Turtle", "Alice");

MyZoo.OpenZoo();

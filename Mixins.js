// Mixins is a class that contains methods that
// can be used by other classes without inheriting from that class.

function mixin(target, ...sources) {
    Object.assign(target.prototype, ...sources)
}

const canEat = {
    eat() {
        console.log('eating');
    }
};

const canWalk = {
    walk() {
        console.log('walking');
    }
};

const canSwim = {
  swim() {
      console.log('swimming');
  }
};

function Person() {}

mixin(Person, canEat, canWalk);

function Goldfish() {}

mixin(Goldfish, canEat, canSwim);
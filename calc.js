class Calc {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    sum() {
        return this.a + this.b
    }

    diff() {
        return this.a - this.b
    }

    prod() {
        return this.a * this.b
    }

    div() {
        return this.a / this.b
    }
}

const mathy = new Calc(1, 2);
mathy.sum();
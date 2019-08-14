/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: the target of "this" will be the window or console Object.

* 2. Implicit Binding: the object before a dot is "this" 

* 3. New binding: refers to an object that is made by a constructor function 

* 4. Explicit binding: when a call or apply method is used "this" is given a definition 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

        window.year = 1998;

        function sayYear() {
            console.log(`The car was made in ${this.year}`)
        }

        const car = {
            make: 'Ford',
            year: 1998,
            model: 'GT'
        }

        sayYear()

// Principle 2

// code example for Implicit Binding

        // const car = {
        //     make: 'Ford',
        //     year: 2008,
        //     model: 'Taurus',
        //     type() {
        //         console.log(`This car is a ${this.year} ${this.make} ${this.model}.`)
        //     }
        // }

        // car.type()

// Principle 3

// code example for New Binding

        // function Type (make, model, year) {
        //     this.make = make;
        //     this.model = model;
        //     this.year = year;
        // }

        // const car = new Type('Tesla', 'Model Y', 2019);

        // console.log(car);

// Principle 4

// code example for Explicit Binding

        // function type() {
        //     console.log(`This car is a ${this.year} ${this.make} ${this.model}.`)
        // }


        // const car = {
        //     make: 'Toyota',
        //     year: 2009,
        //     model: 'Prius',
        // }


        // type.call(car)

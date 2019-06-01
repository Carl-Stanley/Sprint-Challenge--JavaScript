// Final commit. Just making sure everything made it to the repo. 

// 1. Copy and paste your prototype in here and refactor into class syntax.

/* Original Function and prototypes 

function CuboidMaker(object) {
    this.length = object.length;
    this.width  = object.width;
    this.height = object.height;
  }

  CuboidMaker.prototype.Volume = function() {
 
    return this.length * this.width   * this.height;
  
  };

  CuboidMaker.prototype.surfaceArea = function () {

    return  2 * (this.length * this.width + this.length * this.height + this.width * this.height );
  
  };
*/

class CuboidMaker {

    constructor(obj) {
        this.length = obj.length;
        this.height = obj.height;
        this.width = obj.width
    }

    Volume () {
        return this.length * this.width   * this.height;
    };

    surfaceArea () {
        return  2 * (this.length * this.width + this.length * this.height + this.width * this.height );
    }; 
    

}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.Volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// Trying the stretch. 

// https://www.wikihow.com/Find-the-Surface-Area-of-a-Cube

class CubeMaker extends CuboidMaker {
    constructor(theCube) {
        super(theCube);
    }
    anotherVolumeMaker () {
        return this.height * this.width * this.length;
    };
    cubeSurfaceArea () {
        
        // Check first to confirm all dimensions are congruent. 
        // https://www.mathopenref.com/cube.html
        
        if((this.length == this.width) && (this.width == this.height )) {

            var surfaceA = 0; 
            
            surfaceA = this.length * this.width * 6;

            return (`Cube surface area is ${surfaceA}`);

            } else {
                  // If one dimension is different than the others, it's not a cube. 
                return "This is not a cube. One side is longer that the others. Consult your owner's manual on cubes";
            }
    };

};

const aCube = new CubeMaker({
    width: 4,
    height: 4,
    length: 4 
 });

 const aCube2 = new CubeMaker({
    width: 4,
    height: 5,
    length: 4 
 });



console.log(aCube.cubeSurfaceArea());
console.log(aCube2.cubeSurfaceArea());


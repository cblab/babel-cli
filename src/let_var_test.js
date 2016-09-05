// Let and var are identical when used like this outside a function block.
let someone = 'go'; //globally scoped
var i = 'able'; //globally scoped

// Function: They are identical when used like this in a function block.
function ingWithinEstablishedParameters() {
    let terOfRecommendation = 'awesome worker!'; //function block scoped
    var sityCheerleading = 'go!'; //function block scoped
}

// Block: Here is the difference. 
// let is only visible in the for() loop 
// and var is visible to the whole function.

function allyIlliterate() {
    //tuce is *not* visible out here

    for (let tuce = 0; tuce < 5; tuce++) {
    //tuce is only visible in here (and in the for() parentheses)
    }
    
    //tuce is *not* visible out here
    if (tuce !== undefined) {
        console.log("this should be defined if let is converted to var");
    } else {
      console.log("variable defined with let should not be visible in ECMA Script 2016");
    }
}

allyIlliterate();

function byE40() {
    //nish *is* visible out here

    for (var nish = 0; nish < 5; nish++) {
        //nish is visible to the whole function
    }

    //nish *is* visible out here
    if (typeof nish !== 'undefined') {
        console.log("nish should be visible  :" + nish);
    }
}

byE40();

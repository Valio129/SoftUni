function extensibleObject() {
    let myObj =  {
        __proto__: {},
        extend: function (objToBeExtended) {
            for (const key in objToBeExtended) {
                // console.log(key);
                if (typeof objToBeExtended[key] !== "function") {
                    myObj[key] = objToBeExtended[key];
                } else {
                    Object.getPrototypeOf(myObj)[key] = objToBeExtended[key];
                    
                }
            }
        }
        
    };
    return myObj
}
const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
};
myObj.extend(template);
console.log(myObj);
console.log(Object.getPrototypeOf(myObj));
/*

This Class contains constructor & function for displaying message in HTML

*/
var TypeScript = (function () {
    //parameterised constructor
    function TypeScript(name, version) {
        this.name = name;
        this.version = version;
    }
    /*
    function which will return the message with the string
    and value which is passed to the constructor.
    */
    TypeScript.prototype.DisplayName = function () {
        return this.name + " & version is " + this.version;
    };
    return TypeScript;
}());
;
var s = new TypeScript('Hello Welcome to TypeScript', 2.201);
var res = s.DisplayName();
document.body.innerHTML = res;
//console.log(''+res);

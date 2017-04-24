/*

This Class contains constructor & function for displaying message in HTML

*/

class TypeScript
{

    // private properties
    private name:string ;
    private version:number;

    //parameterised constructor
    public constructor(name:string,version:number)
    {
        this.name=name;
        this.version=version;
    }

    /*
    function which will return the message with the string 
    and value which is passed to the constructor.
    */

    public DisplayName():string
    {
        return `${this.name} & version is ${this.version}`;
    }
   
};


var s = new TypeScript('Hello Welcome to TypeScript',2.201);
var res = s.DisplayName();
document.body.innerHTML = res;
//console.log(''+res);

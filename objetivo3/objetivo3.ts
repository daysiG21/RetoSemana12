interface iFormula{
  constante:number
  lado:number
  mostrarInfo():void
}
class Formula implements iFormula{
  private _constante:number;
  public _lado:number;

  constructor(constante:number,lado:number){
    this._constante = constante
    this._lado=lado
  }

  get constante(){
    return this._constante
  }

  set constante(nuevaConstante:number){
    this._constante=nuevaConstante
  }

  get lado(){
    return this._lado
  }

  set lado(nuevoLado:number){
    this._lado=nuevoLado
  }

  mostrarInfo(){
    console.log(`El area es ${this.constante * this.lado }`)
  }
 
}

let res:Formula = new Formula(5,2)

console.log(res.mostrarInfo())



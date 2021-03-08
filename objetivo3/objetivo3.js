var Formula = /** @class */ (function () {
    function Formula(constante, lado) {
        this._constante = constante;
        this._lado = lado;
    }
    Object.defineProperty(Formula.prototype, "constante", {
        get: function () {
            return this._constante;
        },
        set: function (nuevaConstante) {
            this._constante = nuevaConstante;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Formula.prototype, "lado", {
        get: function () {
            return this._lado;
        },
        set: function (nuevoLado) {
            this._lado = nuevoLado;
        },
        enumerable: false,
        configurable: true
    });
    Formula.prototype.mostrarInfo = function () {
        console.log("El area es " + this.constante * this.lado);
    };
    return Formula;
}());
var res = new Formula(5, 2);
console.log(res.mostrarInfo());

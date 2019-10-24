var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    return Human;
}());
var Deputy = /** @class */ (function (_super) {
    __extends(Deputy, _super);
    function Deputy(firstName, lastName, age, bribeTaker, sizeBribe) {
        var _this = _super.call(this, weigth, heigth) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.age = age;
        _this.bribeTaker = bribeTaker;
        _this.sizeBribe = sizeBribe;
        return _this;
    }
    Deputy.prototype.buyOver = function () {
        if (!this.bribeTaker) {
            console.log('NO');
        }
        if (!this.bribeTaker && this.sizeBribe > 1000000) {
            console.log('Take a bribe $$$');
        }
        if (this.bribeTaker) {
            console.log('Take a bribe $$$');
        }
    };
    return Deputy;
}(Human));
var Faction = /** @class */ (function () {
    function Faction(listOfDeputies) {
        this.listOfDeputies = listOfDeputies;
    }
    Faction.prototype.addDeputy = function () {
    };
    Faction.prototype.deleteDeputy = function () {
    };
    Faction.prototype.deleteDeputyBribe = function () {
    };
    Faction.prototype.getDeputiMaxBribe = function () {
    };
    Faction.prototype.getAllDeputies = function () {
    };
    Faction.prototype.deleteAllDeputy = function () {
    };
    Faction.prototype.getSumBribeFaction = function () {
    };
    return Faction;
}());

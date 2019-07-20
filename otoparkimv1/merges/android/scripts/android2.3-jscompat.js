// Android 2.3'te Function.prototype.bind() desteği için Polyfill
(function () {
    if (!Function.prototype.bind) {
        Function.prototype.bind = function (thisValue) {
            if (typeof this !== "function") {
                throw new TypeError(this + " cannot be bound as it is not a function");
            }

            // bind(), çağrının başına bağımsız değişkenlerin eklenmesine de izin verir
            var preArgs = Array.prototype.slice.call(arguments, 1);

            // "this" değerinin ve bağımsız değişkenlerin ekleneceği asıl işlev
            var functionToBind = this;
            var noOpFunction = function () { };

            // Kullanılacak "this" bağımsız değişkeni
            var thisArg = this instanceof noOpFunction && thisValue ? this : thisValue;

            // Elde edilen bağlı işlev
            var boundFunction = function () {
                return functionToBind.apply(thisArg, preArgs.concat(Array.prototype.slice.call(arguments)));
            };

            noOpFunction.prototype = this.prototype;
            boundFunction.prototype = new noOpFunction();

            return boundFunction;
        };
    }
}());

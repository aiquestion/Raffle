saveSetting = function () { };
loadSetting = function () { };
(function () {
    "use strict";

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            saveSetting = function (raffle) {
                Office.context.document.settings.set("RaffleStorage", JSON.stringify(raffle))
                Office.context.document.settings.saveAsync();
            };
            loadSetting = function () {
                var content = Office.context.document.settings.get("RaffleStorage");
                if (!content) return null;
                return JSON.parse(content);
            };
            var setting = loadSetting();
            if (setting) {
                init_runtime();
            }
        });
    };
})();
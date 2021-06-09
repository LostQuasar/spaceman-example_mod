"use strict";

const EXAMPLE_ITEM = require("./src/EXAMPLE_ITEM");

class main {
    constructor() {
        Logger.info(`Loading: spaceman-example_mod`);

        ModLoader.onLoad["EXAMPLE_ITEM"] = EXAMPLE_ITEM.onLoadMod;
    }
}

module.exports.main = new main();

"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class EXAMPLE_ITEM {
    static onLoadMod() {
        const itemId = "EXAMPLE_ITEM";
        const itemClone = "54009119af1c881c07000029"; //The id of the item you would like the clone see https://items.sp-tarkov.com/
        const itemCategory = "5b47574386f77428ca22b341"; //See https://docs.sp-tarkov.com/#resources/other.md
        const itemFleaPrice = 99999; //The average price of the item on the flea and when selling to traders
        const itemPrefabPath = "EXAMPLE_ITEM.bundle";
        const itemLongName = "Example item long name";
        const itemShortName = "EXAMPLE";
        const itemDescription = "Example item description.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Prefab.Path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        SpaceApi.CreateTraderAssort(itemId+"_ragfairOffer", itemId, "ragfair", itemFleaPrice, "RUB", 1);
    }
}
module.exports = EXAMPLE_ITEM;
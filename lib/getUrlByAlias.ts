import {UrlProps} from "@/types";
import {ObjectId} from "mongodb";
import getCollection, {URLS_COLLECTION} from "@/db";

export default async function getUrlByAlias(alias:string): Promise<UrlProps|null>{
    // const urlId = ObjectId.createFromHexString(alias);

    const urlCollection = await getCollection(URLS_COLLECTION);
    const data = await urlCollection.findOne({alias:alias}); // assuming there is only one alias

    if (data===null){
        console.log("No object with the alias {" + alias + "} found.")
        return null;
    }

    return {
        id: data.id,
        alias: data.alias,
        url: data.url
    };

}

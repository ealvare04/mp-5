import {UrlProps} from "@/types";
// import {ObjectId} from "mongodb";
import getCollection, {URLS_COLLECTION} from "@/lib/db";

export default async function getUrlByAlias(alias:string): Promise<UrlProps|null>{
    // const urlId = ObjectId.createFromHexString(alias);

    const urlsCollection = await getCollection(URLS_COLLECTION);
    const data = await urlsCollection.findOne({alias:alias}); // assuming there is only one alias

    if (data===null){
        console.log("No object with the alias {" + alias + "} found.")
        return null;
    }

    return {
        id: data.id,
        alias: alias,
        url: data.url
    };
}

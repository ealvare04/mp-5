"use server";

import {UrlProps} from "@/types";
import getCollection, {URLS_COLLECTION} from "@/db";


export default async function createNewUrl(alias:string, url:string,):Promise<UrlProps | null>{

    // fill spaces in alias for spinal case
    alias = alias.replaceAll(" ", "-");

    // check if URL is valid

    // check if alias is not already in use
    const urlsCollection = await getCollection(URLS_COLLECTION);
    const data = await urlsCollection.findOne({alias:alias}); // assuming there is only one alias
    if (data!==null){
        console.log("Alias {" + alias + "} already exists!!!");
        return null;
    }


    const u = {
        alias: alias,
        url: url,
    }

    const res = await urlsCollection.insertOne(u); // mongo db create one

    if (!res.acknowledged){
        return null; // not successful, don't create a new object
    }

    console.log(res);

    // AHA
    // returns a plain object
    return {
        id: res.insertedId.toString(),
        alias: alias,
        url: url,
    };
}
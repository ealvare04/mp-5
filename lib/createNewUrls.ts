"use server";

import {UrlProps} from "@/types";
import getCollection, {URLS_COLLECTION} from "@/db";

async function urlIsValid(url: string):Promise<boolean> {
    try {
        const res = await fetch(url, {method: "HEAD"}); // GET but without message body
        console.log(res.ok);
        return res.ok; // OK status
    }
    catch {
        return false; // not OK status
    }
}

export default async function createNewUrl(alias:string, url:string,):Promise<UrlProps | null>{

    // fill spaces in alias for spinal case
    alias = alias.replaceAll(" ", "-");

    // check if URL is valid
    if (!await urlIsValid(url)) {
        console.log("{" + url + "} is not a valid URL!!!");
        return null;
    }

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
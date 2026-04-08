"use server";

import {UrlProps} from "@/types";
import getCollection, {URLS_COLLECTION} from "@/db";


export default async function createNewUrl(alias:string, url:string,):Promise<UrlProps | null>{

    const u = {
        alias: alias,
        url: url,
    }

    const urlsCollection = await getCollection(URLS_COLLECTION);
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
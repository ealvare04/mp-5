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
        return null;
    }

    return {...u, id: res.insertedId.toHexString()};
}
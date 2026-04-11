import getUrlByAlias from "@/lib/getUrlByAlias";
import {redirect} from "next/navigation";

export default async function FullUrlPage({params}: {params:Promise<{alias:string}>}) {
    const {alias} = await params;

    let url;
    try {
        // get the url prop
        url = await getUrlByAlias(alias);
    }
    catch (error) {
        console.log("ERROR CAUGHT: " + error);
        return redirect(`/error`);
    }

    // moved outside of try/catch block to stop redirect(...) from throwing
    if (url===null){
        return redirect(`/error`);
    }

    console.log("LONG URL: " + url.url);
    return redirect(url.url); // redirect to the long url
}
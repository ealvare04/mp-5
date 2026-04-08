import getUrlByAlias from "@/lib/getUrlByAlias";
import {redirect} from "next/navigation";

export default async function FullUrlPage({params}: {params:Promise<{alias:string}>}) {
    const {alias} = await params;

    try {
        // get the url prop
        const url = await getUrlByAlias(alias);
        if (url===null){
            return redirect(`/error`);
        }
        return redirect(url.url); // redirect to the long url
    }
    catch (error) {
        console.log("ERROR: " + error);
        return redirect(`/error`);
    }
}
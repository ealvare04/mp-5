import createNewUrl from "@/lib/createNewUrls";
import {UrlProps} from "@/types";
import {useState} from "react";
import {Textarea} from "@mui/joy";
import {Button, FormHelperText, TextField} from "@mui/material"

export default function NewUrlForm({
                                    append,
                                   }: {
    append: (newUrl: UrlProps) => void;
}) {
    const [alias, setAlias] = useState(""); // the alias to shorten the url to
    const [url, setUrl] = useState(""); // the actual long url

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault(); // prevent form from automatically updating
                createNewUrl(alias, url)
                    .then((u) => {
                            if(!u) {
                                console.log("Alias already exists!");
                                return;
                            }
                            append(u);
                        }
                    )
                    .catch((err) => console.error(err));
            }}
        >
            <TextField
                variant="filled"
                sx={{backgroundColor: "white", width: "100%"}}
                label="Alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />

            <Textarea
                sx={{
                    padding: "0.5rem",
                    height: "100px",
                    width: "100%",
                    borderRadius: 0,
                }}
                variant="soft"
                placeholder="Long URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <FormHelperText>What URL would you like to shorten?</FormHelperText>
            <div className="w-full flex justify-center">
                <Button type="submit" variant="contained" sx={{width: "80px"}}>
                    Create
                </Button>
            </div>
        </form>
    )

}
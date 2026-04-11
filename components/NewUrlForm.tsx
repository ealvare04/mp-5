import createNewUrl from "@/lib/createNewUrls";
import {UrlProps} from "@/types";
import {useState} from "react";
import {Textarea} from "@mui/joy";
import {Button, FormHelperText, TextField} from "@mui/material"

import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
`;

const StyledError = styled.h2`
    color: red;
    text-align: center;
`;

export default function NewUrlForm({
                                    append,
                                   }: {
    append: (newUrl: UrlProps) => void;
}) {
    const [alias, setAlias] = useState(""); // the alias to shorten the url to
    const [url, setUrl] = useState(""); // the actual long url
    const [error, setError] = useState(""); // if an error occurs

    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault(); // prevent form from automatically updating
                createNewUrl(alias, url)
                    .then((u) => {
                            if(!u) return;
                            append(u);
                            setAlias("");
                            setUrl("");
                            setError("");
                        }
                    )
                    .catch((err) => {
                        if (err.message === "INVALID_URL") setError("URL is invalid.");
                        else if (err.message == "ALIAS_TAKEN") setError(`"${alias}" is already taken.`);
                        else setError("Something went wrong.");
                    });
            }}
        >
            <TextField
                variant="filled"
                sx={{backgroundColor: "white", width: "50%"}}
                label="Alias"
                value={alias}
                required={true}
                onChange={(e) => setAlias(e.target.value)}
            />

            <Textarea
                sx={{
                    padding: "0.5rem",
                    height: "100px",
                    width: "50%",
                    borderRadius: 0,
                }}
                variant="soft"
                placeholder="Long URL"
                value={url}
                required={true}
                onChange={(e) => setUrl(e.target.value)}
            />

            <FormHelperText sx={{textAlign: "center"}}>What URL would you like to shorten today?</FormHelperText>

            <StyledError>
                {error}
            </StyledError>

            <Button type="submit"
                    variant="contained"
                    sx={{
                        width: "80px",
                        backgroundColor: "#F0D8A1",
                        color: "black",
                    }}
            >
                Create
            </Button>
        </StyledForm>
    )

}
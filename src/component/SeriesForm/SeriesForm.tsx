import React ,{ useState,ChangeEvent } from "react";
import { TextField,Grid,Button, Typography, useTheme, Zoom } from "@mui/material";
import { Icon } from "@iconify/react";

export const SeriesForm = () => {
    const HeightImg = "50vh";

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };
    
    return (
        <div
            style={{
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Zoom in={true} timeout={{ enter: 1000, exit: 0 }}>
                <div style={{
                        background: "white",
                        height: HeightImg,
                        width: HeightImg,
                        borderRadius: 10,
                        margin: "3vh",
                        display:"flex",
                        alignContent:"center",
                        flexDirection:"column",
                        justifyContent:"start"
                    }}>
                        <TextField style={{margin:"1em"}} label="name" required value={name} onChange={handleNameChange}/>
                        <TextField style={{margin:"1em"}} label="description" value={description} onChange={handleDescriptionChange}/>
                        <Grid item alignSelf={"center"}>
                            <Button
                                type="button"
                                variant="contained"
                            >
                                ajouter une serie
                            </Button>
                        </Grid>
                </div>
            </Zoom>
        </div>
    );
}
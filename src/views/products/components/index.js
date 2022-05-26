import {
    Box,
    Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField
} from "@mui/material";
import React, { useState } from "react";

export default function EditDiealog({ open, handleClose, handleEdit }) {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [stock, setStock] = useState('')
    const [price, setPrice] = useState('')

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editar producto</DialogTitle>
            <DialogContent>
                <Box noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="nombre"
                                fullWidth
                                id="nombre"
                                label="Nombre"
                                autoFocus
                                onChange={e => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="descripcion"
                                fullWidth
                                id="descripcion"
                                label="Descripción"
                                autoFocus
                                onChange={e => setDescription(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="stock"
                                label="Stock"
                                name="stock"
                                type={'number'}
                                onChange={e => setStock(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="price"
                                label="Precio"
                                name="price"
                                type={'number'}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={() => { handleEdit(name, description, stock, price); handleClose() }}>Editar</Button>
            </DialogActions>
        </Dialog>
    );
}
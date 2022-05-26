import React, { useEffect, useState } from "react";
import { Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { getItems, deleteItem, updateItem } from "../../application/api";
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditDiealog from "./components";

export default function TableItem() {

    const [items, setItems] = useState()
    const [isLoading, setLoading] = useState(true)
    const [open, setOpen] = useState(false);
    const [id, setId] = useState('');

    useEffect(() => {
        obteinItems()
    }, [])

    const obteinItems = async () => {
        const response = await getItems()
        setItems(response)
        setLoading(false)
    }

    const handleRemove = async (id) => {
        setLoading(true)
        try {
            await deleteItem(id)
            obteinItems()
        } catch (error) {

        }
    }

    const handleEdit = async (name, description, stock, price) => {
        setLoading(true)
        const newProduct = { name, description, stock, price }
        try {
            await updateItem(id, newProduct)
            obteinItems()
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    const handleOpenDialog = (ID) => {
        setId(ID)
        setOpen(true);
    };

    const handleClose = () => {
        setId('')
        setOpen(false);
    };

    return (
        <>
            {isLoading ?
                <>
                    <CircularProgress />
                </>
                :
                <Container >
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead
                                sx={{
                                    backgroundColor: '#00000030',
                                }}
                            >
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell align="left">Descripción</TableCell>
                                    <TableCell align="right">Stock</TableCell>
                                    <TableCell align="right">Precio</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items ? items.map((item, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:nth-of-type(odd)': {
                                                backgroundColor: '#00000010',
                                            },
                                        }}
                                    >
                                        <TableCell component="th" scope="item">
                                            {item.name}
                                        </TableCell>
                                        <TableCell align="left">{item.description}</TableCell>
                                        <TableCell align="right">{item.stock}</TableCell>
                                        <TableCell align="right">{item.price}</TableCell>
                                        <TableCell align="right">
                                            <IconButton
                                                onClick={() => handleRemove(item.id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton
                                                onClick={() => {
                                                    handleOpenDialog(item.id);
                                                }}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                                    :
                                    <></>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <EditDiealog
                        open={open}
                        handleClose={handleClose}
                        handleEdit={handleEdit}
                    />
                </Container>
            }
        </>
    )

}
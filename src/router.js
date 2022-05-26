import React, { useContext } from 'react';
import {
    Navigate,
    Route, Routes,
} from 'react-router-dom';
import AddItem from './views/add'
import Layout from './layout';
import TableItem from './views/products';
import Login from './views/login';
import Registrar from './views/register';
import { userContext } from './context/authContext';
import { CircularProgress } from '@mui/material';

const PublicRoutes = () => (
    <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route path="/add" element={<Navigate to="/login" />} />
        <Route path="/table" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registrar />} />
    </Routes>
);

const PritaveRoutes = () => (
    <Layout>
        <Routes>
            <Route exact path="/" element={<Navigate to="/table" />} />
            <Route path="/login" element={<Navigate to="/table" />} />
            <Route path="/add" element={<AddItem />} />
            <Route path="/table" element={<TableItem />} />
        </Routes>
    </Layout>
);

export default function Router() {

    const { user, loading } = useContext(userContext)

    if (loading) return <CircularProgress />

    if (!user) return <PublicRoutes />

    return (
        <PritaveRoutes />
    );


}
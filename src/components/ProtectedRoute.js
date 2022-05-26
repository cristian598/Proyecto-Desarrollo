import { useContext } from "react";
import { userContext } from "../context/authContext";
import { Navigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export function ProtectedRoute({ children }) {
    const { user, loading } = useContext(userContext)

    if (loading) return <CircularProgress />

    if (!user) return <Navigate to='/login' />

    return <> {children} </>

}
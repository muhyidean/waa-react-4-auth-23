
import { Routes, Route } from "react-router";
import Login from '../components/Login/Login'
import UserProfile from '../components/UserProfile/UserProfile'
import Counter from '../components/Counter/Counter'
import React from 'react';
import RequireAuth from "../components/RequireAuth";
import Missing from "../components/Missing";

export default function PageRoutes() {
    return (
        <Routes>
            {/* public pages */}
            <Route path='/login' element={<Login />} />

            {/* protected pages */}
            <Route element={<RequireAuth />}>
                <Route path='/' element={<UserProfile />} />
                <Route path='/user' element={<UserProfile />} />
                <Route path='/counter' element={<Counter />} />
            </Route>
            {/* catch all  */}
            <Route path="*" element={<Missing />} />
        </Routes>
    )
}
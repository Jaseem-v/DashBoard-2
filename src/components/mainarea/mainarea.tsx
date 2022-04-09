import React from 'react';
import { SimpleGrid, Container, } from '@mantine/core';
import UsersInfo from './userinfo/UserInfo';
import { Routes, Route, Navigate } from "react-router-dom"
import DashBoard from './dashboard/DashBoard';


export default function Mainarea() {

    const data = [
        {
            avatar: 'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            name: "Robert Wolfkisser", job: "Engineer", email: "rob_wolf@gmail.com", phone: "+91 95346 85271"
        },
        {
            avatar: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
            name: "Jill Jailbreaker",
            job: "ENGINEER",
            email: "jj@breaker.com",
            phone: "+44 (934) 777 12 76"

        },
        {
            avatar: "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
            name: "Henry Silkeater",
            job: "DESIGNER",
            email: "henry@silkeater.io",
            phone: "+44 (901) 384 88 34"

        },
        {
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
            name: "Bill Horsefighter",
            job: "DESIGNER",
            email: "bhorsefighter@gmail.com",
            phone: "+44 (667) 341 45 22"

        },
        {
            avatar: "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
            name: "Bill Horsefighter",
            job: "MANAGER",
            email: "jeremy@foot.dev",
            phone: "+44 (881) 245 65 65"

        },
        {
            avatar: 'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
            name: "Robert Wolfkisser", job: "Engineer", email: "rob_wolf@gmail.com", phone: "+91 95346 85271"
        },
        {
            avatar: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
            name: "Jill Jailbreaker",
            job: "ENGINEER",
            email: "jj@breaker.com",
            phone: "+44 (934) 777 12 76"

        },
        {
            avatar: "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
            name: "Henry Silkeater",
            job: "DESIGNER",
            email: "henry@silkeater.io",
            phone: "+44 (901) 384 88 34"

        },
        {
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
            name: "Bill Horsefighter",
            job: "DESIGNER",
            email: "bhorsefighter@gmail.com",
            phone: "+44 (667) 341 45 22"

        },
        {
            avatar: "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
            name: "Bill Horsefighter",
            job: "MANAGER",
            email: "jeremy@foot.dev",
            phone: "+44 (881) 245 65 65"

        },

    ]

    return (
        <Container my="md">

            <Routes>
                <Route
                    path="/"
                    element={<DashBoard />}
                />
                <Route
                    path="/users"
                    element={
                        <SimpleGrid cols={1} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
                            <UsersInfo data={data} />
                            {/* {getChild(BASE_HEIGHT)} */}
                        </SimpleGrid>
                    }
                />

                <Route path="*" element={<Navigate to="/" />} />


            </Routes>
        </Container>
    );
}
import { NextPage } from "next";
import React, { useEffect } from "react";
import axios from "axios";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
    useEffect(() => {
        axios.get("/api/hacks").then((res) => {
            console.log(res);
        });
    }, []);

    return (
        <>
            <div className="">home-page</div>
        </>
    );
};

export default Home;

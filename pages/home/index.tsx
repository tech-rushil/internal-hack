import { NextPage } from "next";
import React, { useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/card";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
    useEffect(() => {
        axios.get("/api/hacks").then((res) => {
            console.log(res);
        });
    }, []);

    return (
        <>
            <div className="lr-pad-d lr-pad-m">
                <div className="card-list">
                    <Card />
                </div>
            </div>
            <style jsx>{`
                .card-list {
                    margin-top: 4rem;
                }
            `}</style>
        </>
    );
};

export default Home;

import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/card";
import { HacksInterface } from "../api/hacks/data";
import CardList from "../../components/CardList/cardList";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
    const [hacks, setHacks] = useState<HacksInterface[]>([]);
    const [employeeData, setEmployeeData] = useState<any>({});

    const fetchHacks = () => {
        console.log("Here");
        axios.get("/api/hacks").then((res) => {
            if (res?.data?.data?.hacks) {
                console.log("hello here", res.data.data.hacks);
                setHacks(res.data.data.hacks);
            }

            if (res?.data?.data?.employee_data) {
                setEmployeeData(res.data.data.employee_data);
            }
        });
    };

    useEffect(() => {
        fetchHacks();
    }, []);

    return (
        <>
            <div className="lr-pad-d lr-pad-m">
                <div className="card-list">
                    <CardList hacks={hacks} employeeData={employeeData} />
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

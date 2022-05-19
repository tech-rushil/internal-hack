import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { HacksInterface } from "../api/hacks/data";
import CardList from "../../components/CardList/cardList";
import CreateHackForm from "../../components/Form/createHackForm";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
    const [hacks, setHacks] = useState<HacksInterface[]>([]);
    const [employeeData, setEmployeeData] = useState<any>({});

    const fetchHacks = () => {
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

    const updateVotes = (hack_id: string) => {
        console.log("Hack id", hack_id);
        axios.put("/api/hacks", { hack_id, vote_id: 10001 }).then((res) => {
            if (res?.data?.status === 1) {
                // Votes updated
                fetchHacks();
            }
        });
    };

    const handleUpVotes = (e: React.MouseEvent<HTMLElement>) => {
        if ((e.target as Element)?.getAttribute("data-hackid")) {
            let hack_id: string | null = (e.target as Element)?.getAttribute("data-hackid");
            hack_id && updateVotes(hack_id);
        }
        e.stopPropagation();
    };

    return (
        <>
            <div className="lr-pad-d lr-pad-m">
                <div className="create-form">
                    <div className="title h1-heading">Create a new hack</div>
                    <CreateHackForm fetchHacks={fetchHacks} />
                </div>

                <div className="card-list" onClickCapture={handleUpVotes}>
                    <CardList hacks={hacks} employeeData={employeeData} />
                </div>
            </div>
            <style jsx>{`
                .create-form {
                    margin-top: 2rem;
                }

                .card-list {
                    margin-top: 4rem;
                }

                .title {
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 24px;
                    color: var(--pink-shade-1);
                }
            `}</style>
        </>
    );
};

export default Home;

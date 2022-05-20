import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import axios from "axios";
import router from "next/router";
import { HacksInterface } from "../api/hacks/data";
import CardList from "../../components/CardList/cardList";
import CreateHackForm from "../../components/Form/createHackForm";
import Sorter from "../../components/Sorter/sorter";
import { __getCookie } from "../../utils/cookie.utils";
import { message } from "antd";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
    const [hacks, setHacks] = useState<HacksInterface[]>([]);
    const [employeeData, setEmployeeData] = useState<any>({});

    const fetchHacks = (sortby: string = "date", order: string = "desc") => {
        axios.get("/api/hacks", { params: { sortby, order } }).then((res) => {
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
        if (__getCookie("hack_emp_id").cookieExists) {
            fetchHacks();
        } else {
            message.warn("Login to continue");
            router.replace("/");
        }
    }, [fetchHacks]);

    const updateVotes = (hack_id: string) => {
        console.log("Hack id", hack_id);

        axios
            .put("/api/hacks", { hack_id, vote_id: __getCookie("hack_emp_id").cookieValue })
            .then((res) => {
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
                <div className="sort-row f-d f-h-e">
                    <Sorter fetchHacks={fetchHacks} />
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

                .sort-row {
                    margin-top: 4rem;
                }
            `}</style>
        </>
    );
};

export default Home;

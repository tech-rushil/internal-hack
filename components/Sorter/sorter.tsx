import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpShortWide, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";

const { Option } = Select;

interface SorterProps {
    fetchHacks: (sortby: string, order: string) => void;
}

const Sorter: NextPage<SorterProps> = ({ fetchHacks }) => {
    const [order, setOrder] = useState<string>("desc");
    const [sortBy, setSortBy] = useState("date");

    useEffect(() => {
        fetchHacks(sortBy, order);
    }, [order, sortBy]);

    const handleChange = (value: string) => {
        setSortBy(value);
    };

    const handleOrderBy = () => {
        if (order === "desc") setOrder("asc");
        else setOrder("desc");
    };

    return (
        <>
            <div className="f-d f-v-c">
                <Select
                    defaultValue="date"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    value={sortBy}
                >
                    <Option value="date">Date</Option>
                    <Option value="votes">Votes</Option>
                </Select>
                <div className="icon-box f-d f-h-c f-v-c c-pointer" onClick={handleOrderBy}>
                    <FontAwesomeIcon
                        icon={faArrowDownWideShort}
                        style={{
                            pointerEvents: "none",
                            display: order === "desc" ? "block" : "none",
                        }}
                        className={"custom-up-icon"}
                    />
                    <FontAwesomeIcon
                        icon={faArrowUpShortWide}
                        style={{
                            pointerEvents: "none",
                            display: order !== "desc" ? "block" : "none",
                        }}
                    />
                </div>
            </div>
            <style jsx>{`
                .icon-box {
                    width: 32px;
                    height: 32px;
                    border: 1px solid var(--pink-shade-1);
                    border-left: unset;
                    border-radius: 2px;
                    color: var(--dove);
                    background: var(--pink-shade-1);
                    transition: all 0.2s;
                }
            `}</style>
        </>
    );
};

export default Sorter;

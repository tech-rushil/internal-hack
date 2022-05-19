import React from "react";
import type { NextPage } from "next";
import { HacksInterface } from "../../pages/api/hacks/data";
import Card from "../Card/card";

interface CardListProps {
    hacks: HacksInterface[];
    employeeData: any;
}

const CardList: NextPage<CardListProps> = ({ hacks, employeeData }) => {
    const renderCards = () => {
        return hacks.map((ele, idx) => (
            <Card hack={ele} employeeData={employeeData} key={`card-${idx}`} idx={idx + 1} />
        ));
    };

    return <>{renderCards()}</>;
};

export default CardList;

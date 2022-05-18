import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { HacksInterface } from "../../pages/api/hacks/data";
import moment from "moment";
import Tag from "../Tag/tag";

interface CardProps {
    hack: HacksInterface;
    employeeData: any;
}

const Card: NextPage<CardProps> = ({ hack, employeeData }) => {
    let votesEmpIds = hack.votes_ids.slice(0, 4);

    return (
        <>
            <div className="hack-card f-d f-v-s">
                <div className="hack-id">{hack.hack_id}</div>
                <div className="hack-details">
                    <h2 className="body-big font-wt-700 title">{hack.title}</h2>
                    <div className="desc body-small">{hack.desc}</div>
                    <div className="tags-list f-d">
                        {hack.tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </div>
                    <div className="creation-date f-d f-v-c">
                        <div className="author body-caption">
                            {employeeData[hack.created_by.emp_id]?.name}
                        </div>
                        <div className="dot"></div>
                        <div className="date body-caption">
                            {moment(hack.created_by.date * 1000).fromNow()}
                        </div>
                    </div>
                </div>
                <div className="hack-data f-d">
                    {votesEmpIds.map((emp_id) => (
                        <div className="user-image">
                            <Image
                                src={employeeData[emp_id]?.profile_pic}
                                alt="usr"
                                objectFit="contain"
                                width={60}
                                height={60}
                            />
                        </div>
                    ))}
                    <div className="votes round-circle-border f-d f-h-c f-v-c">
                        {hack.total_votes}
                    </div>
                    <div className="upvote-btn round-circle-border c-pointer f-d f-h-c f-v-c">
                        <FontAwesomeIcon icon={faChevronUp} />
                    </div>
                </div>
            </div>
            <div className="divider" />
            <style jsx>{`
                .hack-card {
                    gap: 24px;
                }

                .hack-card .tags-list {
                    margin-top: 10px;
                }

                .hack-card .hack-id {
                    margin-top: 4px;
                }

                .hack-card .hack-details .title {
                    margin-bottom: 8px;
                    letter-spacing: 2px;
                }

                .hack-card .creation-date {
                    gap: 8px;
                    margin-top: 10px;
                }

                .hack-card .creation-date .dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50px;
                    background-color: var(--gray);
                }

                .hack-card .hack-data {
                    flex-grow: 1;
                    justify-content: end;
                    gap: 16px;
                    width: 36%;
                }

                .hack-card .hack-data .user-image {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    overflow: hidden;
                }

                .round-circle-border {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    border: 1px solid var(--gray);
                }

                .divider {
                    margin: 32px 0px;
                    width: 100%;
                    border-bottom: 2px solid var(--shell);
                }
            `}</style>
        </>
    );
};

export default Card;

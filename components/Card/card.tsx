import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface CardProps {}

const Card: NextPage<CardProps> = () => {
    return (
        <>
            <div className="hack-card f-d f-v-s">
                <div className="hack-id">1</div>
                <div className="hack-details">
                    <h2 className="body-big font-wt-700 title">Control,Alt,Delete</h2>
                    <div className="desc body-small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum
                        faucibus.
                    </div>
                    <div className="creation-date f-d f-v-c">
                        <div className="author body-caption">Rushil</div>
                        <div className="dot"></div>
                        <div className="date body-caption">3 Hours Ago</div>
                    </div>
                </div>
                <div className="hack-data f-d">
                    <div className="user-image">
                        <Image
                            src="https://randomuser.me/api/portraits/women/80.jpg"
                            alt="usr"
                            objectFit="contain"
                            width={60}
                            height={60}
                        />
                    </div>
                    <div className="user-image">
                        <Image
                            src="https://randomuser.me/api/portraits/men/81.jpg"
                            alt="usr"
                            objectFit="contain"
                            width={60}
                            height={60}
                        />
                    </div>
                    <div className="user-image">
                        <Image
                            src="https://randomuser.me/api/portraits/women/82.jpg"
                            alt="usr"
                            objectFit="contain"
                            width={60}
                            height={60}
                        />
                    </div>
                    <div className="user-image">
                        <Image
                            src="https://randomuser.me/api/portraits/men/83.jpg"
                            alt="usr"
                            objectFit="contain"
                            width={60}
                            height={60}
                        />
                    </div>

                    <div className="votes round-circle-border f-d f-h-c f-v-c">4</div>
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

                .hack-card .hack-id {
                    margin-top: 4px;
                }

                .hack-card .hack-details .title {
                    margin-bottom: 8px;
                    letter-spacing: 2px;
                }

                .hack-card .creation-date {
                    gap: 8px;
                    margin-top: 8px;
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

import type { NextPage } from "next";
import React from "react";

interface TagProps {
    children: string;
}

const Tag: NextPage<TagProps> = (props) => {
    return (
        <>
            <div className="tag">{props.children}</div>
            <style jsx>{`
                .tag {
                    font-size: 12px;
                    padding: 0 7px;
                    background: #fff0f6;
                    border: 1px solid #ffadd2;
                    color: #c41d7f;
                    height: auto;
                    border-radius: 2px;
                    margin-right: 8px;
                }
            `}</style>
        </>
    );
};

export default Tag;

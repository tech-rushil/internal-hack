type createdBy = {
    emp_id: number;
    date: number;
};

interface HacksInterface {
    hack_id: number;
    title: string;
    desc: string;
    tags: string[]; // Store the tags mapped to hack
    votes_ids: number[]; // Store the emp_id of users
    total_votes: number; // Store the number of total_votes
    created_by: createdBy; // Object to store the details of user_created hack
}

export const Hacks: HacksInterface[] = [
    {
        hack_id: 1,
        title: "Ctrl + Alt + Delete",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus.",
        tags: ["Tech", "Future"],
        votes_ids: [10001, 10002],
        total_votes: 2,
        created_by: {
            emp_id: 10001,
            date: 1652860206,
        },
    },
    {
        hack_id: 2,
        title: "Hackoberfest",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus.",
        tags: ["Tech", "Future", "Bitcoin"],
        votes_ids: [10001, 10002, 10003],
        total_votes: 3,
        created_by: {
            emp_id: 10002,
            date: 1652860206,
        },
    },
    {
        hack_id: 3,
        title: "Hackoberfest",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus.",
        tags: ["Java", "Feature", "Javascript"],
        votes_ids: [10001, 10002],
        total_votes: 3,
        created_by: {
            emp_id: 10001,
            date: 1652860206,
        },
    },
];

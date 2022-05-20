import hacks from "./../hacks/index";

test("sorting by date", () => {
    const req = {
        query: { sortby: "date", order: "asc" },
        method: "GET",
    };

    const json = jest.fn();

    const status = jest.fn(() => {
        return {
            end: function () {},
            json,
        };
    });
    const res = {
        setHeader: jest.fn(),
        status,
    };

    hacks(req, res);

    // The oldest hack is hack id 3 Dated Thursday, May 12, 2022 4:33:29 PM
    expect(json.mock.calls[0][0].status).toEqual(1);
    expect(json.mock.calls[0][0]["data"]["hacks"][0]["hack_id"]).toEqual(3);
});

test("hack creation", () => {
    let req = {
        body: { title: "hack tilte", desc: "hack desc", tags: ["Feature"] },
        method: "POST",
    };

    let json = jest.fn();

    let status = jest.fn(() => {
        return {
            end: function () {},
            json,
        };
    });
    let res = {
        setHeader: jest.fn(),
        status,
    };

    hacks(req, res);

    expect(json.mock.calls[0][0].status).toEqual(1);

    // Make a call to get all hacks and check no 1
    req.method = "GET";
    json = jest.fn();
    status = jest.fn(() => {
        return {
            end: function () {},
            json,
        };
    });
    res = {
        setHeader: jest.fn(),
        status,
    };
    hacks(req, res);

    expect(json.mock.calls[0][0].status).toEqual(1);
    expect(json.mock.calls[0][0].data.hacks[0].title).toEqual("hack tilte");
});

test("hack upvote", () => {
    let req = {
        body: { hack_id: "1", vote_id: "10003" },
        method: "PUT",
    };

    let json = jest.fn();

    let status = jest.fn(() => {
        return {
            end: function () {},
            json,
        };
    });
    let res = {
        setHeader: jest.fn(),
        status,
    };

    hacks(req, res);

    expect(json.mock.calls[0][0].status).toEqual(1);
});

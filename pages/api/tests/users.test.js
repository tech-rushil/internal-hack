import users from "./../users/check";

test("check success login", () => {
    // const check for if employee_id is present in dara for not
    const req = {
        body: { empId: 10001 },
        method: "POST",
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

    users(req, res);

    expect(json.mock.calls[0][0].status).toEqual(1);
    expect(json.mock.calls[0][0].data.emp_id).toEqual(10001);
});

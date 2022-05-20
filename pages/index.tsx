import type { NextPage } from "next";
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import styles from "./../styles/login.module.css";
import axios from "axios";
import router from "next/router";
import { __setCookie } from "../utils/cookie.utils";

interface LoginProps {}

const Login: NextPage<LoginProps> = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const onFinish = (values: any) => {
        setLoading(true);
        axios.post("/api/users/check", { empId: values["emp_id"] }).then((res) => {
            if (res?.data && res.data?.status === 0) {
                message.error("User not found", 2);
            }
            if (res?.data && res.data?.status === 1) {
                message.success("Login Successfully, please wait while we redirect you", 2);
                __setCookie("hack_emp_id", res.data.data.emp_id, 5, "day");
                setTimeout(() => {
                    router.replace("/home");
                }, 100);
            }
            setLoading(false);
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <div className="login-card f-d f-h-c f-v-c f-vt">
                <h2 className="h1-heading title">Hello Again!</h2>
                <div className="body-medium text-c-d">
                    Welcome back you&apos;ve been <br /> missed
                </div>

                <Form
                    name="login-form"
                    className={styles["login-form"]}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className="body-caption">Employee id</div>
                    <Form.Item
                        label={null}
                        name="emp_id"
                        rules={[{ required: true, message: "Please input your employee id!" }]}
                    >
                        <Input
                            placeholder="Please input your employee id eg. 10001!"
                            className={styles["input"]}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={styles["login-btn"]}
                            loading={loading}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <style jsx>{`
                .login-card {
                    width: 400px;
                    border-radius: 8px;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                }
            `}</style>
        </>
    );
};

export default Login;

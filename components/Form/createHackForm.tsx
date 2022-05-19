import type { NextPage } from "next";
import * as React from "react";
import { Form, Input, Button, Select } from "antd";
import axios from "axios";

const { TextArea } = Input;
const { Option } = Select;

interface CreateHackFormProps {
    fetchHacks: () => void;
}

const CreateHackForm: NextPage<CreateHackFormProps> = ({ fetchHacks }) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        form.resetFields();
        axios
            .post("/api/hacks", {
                title: values.title,
                tags: values.tags,
                desc: values.desc,
                emp_id: 10003,
            })
            .then((res) => {
                console.log(res);
                fetchHacks();
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const tags = ["Tech", "Future", "Javascript", "Java", "Feature", "Fix"];

    return (
        <>
            <Form
                form={form}
                name="create-hack"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div className="input-row">
                    <div className="input-label body-small">Title</div>
                    <Form.Item
                        label={null}
                        name="title"
                        rules={[{ required: true, message: "Please input hack title!" }]}
                    >
                        <Input />
                    </Form.Item>
                </div>

                <div className="input-row">
                    <div className="input-label body-small">Description</div>
                    <Form.Item
                        label={null}
                        name="desc"
                        rules={[{ required: true, message: "Please input hack desc!" }]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                </div>

                <div className="input-row">
                    <div className="input-label body-small">Tags</div>
                    <Form.Item
                        label={null}
                        name="tags"
                        rules={[{ required: true, message: "Please input hack tags!" }]}
                    >
                        <Select
                            mode="multiple"
                            style={{ width: "100%" }}
                            placeholder="select one tag"
                            optionLabelProp="label"
                        >
                            {tags.map((ele, idx) => (
                                <Option key={idx} value={ele}>
                                    {ele}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="submit-btn">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <style jsx>{`
                .input-row {
                    width: 50%;
                }
            `}</style>
        </>
    );
};

export default CreateHackForm;

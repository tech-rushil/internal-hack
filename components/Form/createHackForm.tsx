import type { NextPage } from "next";
import * as React from "react";
import { Form, Input, Button, Select } from "antd";

const { TextArea } = Input;
const { Option } = Select;

interface CreateHackFormProps {}

const CreateHackForm: NextPage<CreateHackFormProps> = () => {
    return (
        <>
            <Form
                name="create-hack"
                initialValues={{ remember: true }}
                onFinish={() => {}}
                onFinishFailed={() => {}}
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
                            <Option value="china" label="China">
                                China
                            </Option>
                            <Option value="usa" label="USA">
                                USA
                            </Option>
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

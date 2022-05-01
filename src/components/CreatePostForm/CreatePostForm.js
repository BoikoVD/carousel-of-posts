import React from 'react';
import { Form, Input } from 'antd';
import './CreatePostForm.css';

function CreatePostForm({ form }) {

  return (
    <Form
      form={form}
      name="createPostForm"
      layout="vertical"
      autoComplete="off"
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Please input the title of collection!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="body"
        label="Body"
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Please input the text of collection!',
          },
        ]}
      >
        <Input.TextArea rows="3" />
      </Form.Item>
    </Form>
  );
}

export default CreatePostForm;
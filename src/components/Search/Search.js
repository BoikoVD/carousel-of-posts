import React from 'react';
import NumberFormat from 'react-number-format';
import { Button, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './Search.css';

function Search({ goToSlide }) {

  return (
    <Form
      name="searchForm"
      layout="horizontal"
      onFinish={(values) => goToSlide(values.searchAmount - 1)}
      className='searchForm'
    >
      <Form.Item
        name="searchAmount"
        required={false}
        className='formItem'
      >
        <NumberFormat
          decimalScale={0}
          fixedDecimalScale={true}
          allowNegative={false}
          placeholder="Input Id"
          className="ant-input numberInput"
        />
      </Form.Item>
      <Form.Item className='formItem'>
        <Button type="primary" htmlType="submit"><SearchOutlined /></Button>
      </Form.Item>
    </Form>
  );
}

export default Search;
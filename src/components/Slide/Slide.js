import React from 'react';
import { Card } from 'antd';
import Comments from '../Comments/Comments';
import './Slide.css';

function Slide({ title, body, postId }) {

  return (
    <Card
      title={title}
      bordered={true}
      size='default'
      headStyle={{ color: '#1890ff', fontSize: '18px' }}
      bodyStyle={{ fontSize: '16px' }}
      extra={<div style={{ marginLeft: '30px', color: '#949494' }}>Id: {postId}</div>}
      actions={[
        <Comments postId={postId} />
      ]}
    >
      <p>{body}</p>
    </Card>
  );
}

export default Slide;

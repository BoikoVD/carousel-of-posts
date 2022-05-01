import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Collapse, Comment, Avatar, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import * as actions from '../../store/actions/actions';
import './Comments.css';

const { Panel } = Collapse;

function Comments({ postId }) {
  const allComments = useSelector(state => state.comments.comments);
  const dispatch = useDispatch();

  let comments = allComments.find(c => c.postId === postId);
  if (!comments) {
    comments = { postId, comments: [], isLoading: false }
  }

  const onChangeHandle = () => {
    dispatch(actions.getCommentsAC(postId));
  }

  return (
    <Collapse ghost onChange={onChangeHandle}>
      <Panel header="Comments" key={postId} >
        <div className='commentPanel'>
          {
            comments.isLoading
              ?
              <Spin size="default" />
              :
              comments.comments.map((comment) => {
                if (comment.postId === postId) {
                  return (
                    <Comment
                      author={<div className='commentAuthor'>{comment.name}</div>}
                      avatar={<Avatar size='normal' icon={<UserOutlined />} className='commentAvatar' />}
                      content={<p className='commentText'>{comment.body}</p>}
                      key={comment.id}
                    />
                  )
                }
              })
          }
        </div>
      </Panel>
    </Collapse>
  );
}

export default Comments;

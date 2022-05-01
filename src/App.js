import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Form } from 'antd';
import * as actions from './store/actions/actions';
import Header from './components/Header/Header';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import Carousel from './components/Carousel/Carousel';
import 'swiper/css/swiper.css';
import './App.css';

function App() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [form] = Form.useForm();
  const swiperRef = React.useRef(null);
  const dispatch = useDispatch();

  const goToSlide = (id) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(id);
    }
  };

  const onCreatePost = (values) => {
    dispatch(actions.createPostAC(values.title, values.body));
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const cancelModal = () => {
    setIsModalVisible(false);
  };

  React.useEffect(() => {
    dispatch(actions.getPostsAC());
  }, []);

  return (
    <div className="app">
      <Header showModal={showModal} goToSlide={goToSlide} />
      <Carousel swiperRef={swiperRef} />
      <Modal
        title="Create a post"
        centered
        visible={isModalVisible}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreatePost(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
        onCancel={cancelModal}
      >
        <CreatePostForm form={form} />
      </Modal>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setStatus("Tiêu đề và nội dung không được để trống!");
      return;
    }

    const newPost = { title, content };

    try {
      await axios.post("http://localhost:3000/posts", newPost);
      navigate("/posts");
    } catch (error) {
      console.error("Lỗi khi tạo bài viết:", error);
      setStatus("Có lỗi xảy ra.");
    }
  };

  return (
    <Container className="my-5">
      <h1>Tạo bài viết mới</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            value={title}
            placeholder="Nhập tiêu đề"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={content}
            placeholder="Nhập nội dung"
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Tạo bài viết
        </Button>
        {status && <Alert variant="danger" className="mt-3">{status}</Alert>}
      </Form>
    </Container>
  );
};

CreatePost.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default CreatePost;

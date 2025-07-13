import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/posts/${id}`);
        if (data) {
          setTitle(data.title);
          setContent(data.content);
        }
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setStatus("Tiêu đề và nội dung không được để trống!");
      return;
    }

    try {
      await axios.put(`http://localhost:3000/posts/${id}`, { title, content });
      navigate("/posts");
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error);
      setStatus("Có lỗi xảy ra.");
    }
  };

  return (
    <Container className="my-5">
      <h1>Chỉnh sửa bài viết</h1>
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

        <Button variant="success" type="submit">
          Cập nhật bài viết
        </Button>
        {status && <Alert variant="danger" className="mt-3">{status}</Alert>}
      </Form>
    </Container>
  );
};

EditPost.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default EditPost;

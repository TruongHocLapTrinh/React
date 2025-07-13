// import React, { useState, useEffect } from "react";

// const PostList = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // fetch("http://localhost:3000/useraccounts")
//       fetch("http://localhost:3000/posts") // API GET Posts
//       .then((response) => response.json()) // Chuyển dữ liệu về dạng JSON
//       .then((data) => {
//         setData(data); // Lưu dữ liệu vào state
//         setLoading(false); // Đánh dấu việc tải xong
//       })
//       .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
//   }, []); // Chạy 1 lần khi component được mount

//   if (loading) {
//     return <div>Đang tải...</div>; // Hiển thị thông báo đang tải
//   }

//   return (
//     <div>
//       <h1>Danh sách bài viết</h1>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//           </li>
//         ))}

//         {/* {data.map((useraccounts) => (
//           <li key={useraccounts.username}>
//             <h3>{useraccounts.email}</h3>
//             <p>{useraccounts.password}</p>
//           </li>
//         ))} */}
//       </ul>
//     </div>
//   );
// };

// export default PostList;

// import React, { useState, useEffect } from "react";

// const PostList = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Sử dụng useEffect để thực hiện tác vụ fetching khi component mount
//   useEffect(() => {
//     // Định nghĩa hàm async để thực hiện fetch dữ liệu
//     const fetchData = async () => {
//       try {
//         // Gửi yêu cầu fetch và chờ kết quả
//         const response = await fetch("http://localhost:3000/posts");
//         if (!response.ok) {
//           throw new Error("Không thể lấy dữ liệu");
//         }
//         const data = await response.json();  // Chuyển dữ liệu về dạng JSON
//         setData(data);  // Lưu dữ liệu vào state
//         setLoading(false);  // Đánh dấu việc tải xong
//       } catch (error) {
//         console.error("Lỗi khi lấy dữ liệu:", error);
//       }
//     };

//     fetchData();  // Gọi hàm fetchData khi component mount
//   }, []);  // Chạy 1 lần khi component được mount

//   if (loading) {
//     return <div>Đang tải...</div>;  // Hiển thị thông báo đang tải
//   }

//   return (
//     <div>
//       <h1>Danh sách bài viết</h1>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const PostList = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Sử dụng useEffect để thực hiện tác vụ fetching khi component mount
//   useEffect(() => {
//     // Định nghĩa hàm async để thực hiện fetching dữ liệu
//     const fetchData = async () => {
//       try {
//         // Gửi yêu cầu GET với axios và chờ kết quả
//         const response = await axios.get("http://localhost:3000/posts");
//         setData(response.data);  // Lưu dữ liệu vào state từ phản hồi
//         setLoading(false);  // Đánh dấu việc tải xong
//       } catch (error) {
//         console.error("Lỗi khi lấy dữ liệu:", error);
//       }
//     };

//     fetchData();  // Gọi hàm fetchData khi component mount
//   }, []);  // Chạy 1 lần khi component được mount

//   if (loading) {
//     return <div>Đang tải...</div>;  // Hiển thị thông báo đang tải
//   }

//   return (
//     <div>
//       <h1>Danh sách bài viết</h1>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Container, ListGroup, Spinner } from "react-bootstrap";

const PostList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setData(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" /> Đang tải...
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h1>Danh sách bài viết</h1>
      <Link to="/create">
        <Button variant="primary" className="mb-3">
          Tạo bài viết mới
        </Button>
      </Link>

      {data.length === 0 ? (
        <p>Không có bài viết nào!</p>
      ) : (
        <ListGroup>
          {data.map((post) => (
            <ListGroup.Item key={post.id}>
              <h5>{post.title}</h5>
              <p>{post.content}</p>
              <Button
                variant="warning"
                className="me-2"
                as={Link}
                to={`/edit/${post.id}`}
              >
                Chỉnh sửa
              </Button>
              <Button
                variant="danger"
                as={Link}
                to={`/delete/${post.id}`}
              >
                Xóa
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default PostList;


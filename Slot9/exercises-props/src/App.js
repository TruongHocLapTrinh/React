import "./App.css";
import Welcome from "./components/Welcome";
import UserProfile from "./components/UserProfile"
import NameList from "./components/NameList";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "./components/StudentCard"; 
import img1 from "./images/student1.png";
import img2 from "./images/student2.png";
import img3 from "./images/student3.png";

function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
  const students = [
    { name: "traltb1@fe.edu.vn", age: 39, avatar: img1 },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: img2 },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: img3 },
  ];

  return (
    <>
      <Welcome name="traltb@fe.edu.vn" />
      <Welcome name="fptdn@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {/*Duyệt qua mảng students và truyền từng đối tượng student vào Student Card*/}
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;

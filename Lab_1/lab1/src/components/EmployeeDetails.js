const employee = { name: "John Doe", age: 30, department: "IT" };

const EmployeeDetails = () => {
  const { name, age, department } = employee;
  return (
    <div>
      <h1>Exer 1</h1>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </div>
  );
};

export default EmployeeDetails;

import React, { useReducer, useState } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  ListGroup,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

// Reducer
function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.newName } : item
        ),
      };
    default:
      return state;
  }
}

// Initial state
const initialState = {
  items: [],
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [filterText, setFilterText] = useState("");
  const [sortOption, setSortOption] = useState("created");

  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  // Add item
  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = {
        id: Date.now(),
        name: newItemName.trim(),
        createdAt: new Date(),
      };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  // Remove item
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  // Save edited item
  const handleSaveEdit = (id) => {
    if (editedName.trim()) {
      dispatch({ type: "EDIT_ITEM", id, newName: editedName.trim() });
      setEditingId(null);
      setEditedName("");
    }
  };

  // Filter and sort items
  const filteredItems = state.items
    .filter((item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "alphabet") {
        return a.name.localeCompare(b.name);
      } else {
        return a.createdAt - b.createdAt;
      }
    });

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="offset-md-2">
          <Form>
            <Form.Group controlId="formItem">
              <Form.Label>Add New Item:</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="Enter item name"
                />
                <Button variant="primary" onClick={handleAddItem}>
                  Add
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="filterItem" className="mt-3">
              <Form.Label>Filter Items:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search item"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Sort By:</Form.Label>
              <DropdownButton
                title={
                  sortOption === "alphabet" ? "Alphabetical" : "Created Time"
                }
                onSelect={(e) => setSortOption(e)}
              >
                <Dropdown.Item eventKey="created">Created Time</Dropdown.Item>
                <Dropdown.Item eventKey="alphabet">Alphabetical</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Form>

          <h4 className="mt-4">Item List:</h4>
          <ListGroup>
            {filteredItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {editingId === item.id ? (
                  <>
                    <Form.Control
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      className="me-2"
                    />
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => handleSaveEdit(item.id)}
                    >
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    <span>{item.name}</span>
                    <div>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => {
                          setEditingId(item.id);
                          setEditedName(item.name);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;

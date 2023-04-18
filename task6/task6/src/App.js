import { useState } from "react";
import './App.css';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Header from './components/Header/Header';

function App() {
  const [objects, setObjects] = useState([]);
  const [newObject, setNewObject] = useState({});
  const [editing, setEditing] = useState(false);
  const [editingObject, setEditingObject] = useState({});


  
  const handleCreate = (e) => {
    e.preventDefault();
    const id = Date.now();
    setObjects([...objects, { ...newObject, id }]);
    setNewObject({});
  };

  const handleDelete = (id) => {
    const filteredObjects = objects.filter((object) => object.id !== id);
    setObjects(filteredObjects);
  };

  const handleEdit = (id) => {
    const objectToEdit = objects.find((object) => object.id === id);
    setEditingObject(objectToEdit);
    setEditing(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedObjects = objects.map((object) => {
      if (object.id === editingObject.id) {
        return editingObject;
      }
      return object;
    });
    setObjects(updatedObjects);
    setEditingObject({});
    setEditing(false);
  };

  return (
    <div className="container">
      <Header/>
      <AboutUs/>
      <div className="row">
        <div className="col-md-6">
          <h1 className="title">Objects</h1>
          <form onSubmit={editing ? handleUpdate : handleCreate} className="form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={editingObject.name || newObject.name}
                onChange={(e) =>
                  editing
                    ? setEditingObject({ ...editingObject, name: e.target.value })
                    : setNewObject({ ...newObject, name: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                className="form-control"
                value={editingObject.description || newObject.description}
                onChange={(e) =>
                  editing
                    ? setEditingObject({ ...editingObject, description: e.target.value })
                    : setNewObject({ ...newObject, description: e.target.value })
                }
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {editing ? "Update" : "Create"}
            </button>
            {editing && (
              <button onClick={() => setEditing(false)} className="btn btn-secondary ml-2">
                Cancel
              </button>
            )}
          </form>
        </div>
        <div className="col-md-6">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {objects.map((object) => (
                <tr key={object.id}>
                  <td>{object.name}</td>
                  <td>{object.description}</td>
                  <td>
                    <button onClick={() => handleEdit(object.id)} className="btn btn-primary mr-2">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(object.id)} className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
        </div>
      </div>
     
    </div>
  );
}
      



export default App
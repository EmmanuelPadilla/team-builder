import React, { useState } from "react";
import { render } from "react-dom";

const userList = [];

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};


export default function SimpleForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
    const {submit} = props


  const change = (evt) => {
    
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };


  const handleSubmit = (evt) => {
    
    evt.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      role: formValues.role,
      email: formValues.email.trim(),
    };
    // 
    submit(newUser)
    setFormValues(initialFormValues);
  };

  return (
    <div className="container">
      <h1>Simple Form</h1>

      

      <form onSubmit={handleSubmit}>
          <label>Name
        <input
          name="name"
          type="text"
          value={formValues.name}
          onChange={change}
        />
        </label>
        <label>Email
        <input
          name="email"
          type="email"
          value={formValues.email}
          onChange={change}
        />
        </label>
        <label>Role
          <select name='role' value={formValues.role} onChange={change}>
            <option value="">-- select role --</option>
            <option value="lineCook">Line Cook</option>
            <option value="prep">Kitchen Prep</option>
            <option value="host">Host</option>
            <option value="server">Server</option>
            <option value="Buss">Busser</option>
          </select>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}


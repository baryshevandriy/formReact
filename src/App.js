import React, { createRef } from 'react';
import "./reset.css";
import "./App.css";
import Field from "./Field.jsx";
import FieldTextarea from "./FieldTextarea.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.name = createRef();
    this.surname = createRef();
    this.birthday = createRef();
    this.telephone = createRef();
    this.website = createRef();
    this.aboutMe = createRef();
    this.technology = createRef();
    this.project = createRef();
  }

  cancellation = (event) => {
    event.preventDefault()
    this.name.current.input.current.value = "";
    this.surname.current.input.current.value = "";
    this.telephone.current.input.current.value = "";
    this.birthday.current.input.current.value = "";
    this.website.current.input.current.value = "";
    this.aboutMe.current.input.current.value = "";
    this.technology.current.input.current.value = "";
    this.project.current.input.current.value = "";
  }

  save = (event) => {
    event.preventDefault();
    alert(JSON.stringify({
      name: this.name.current.input.current.value,
      surname: this.surname.current.input.current.value,
      telephone: this.telephone.current.input.current.value,
      brithday: this.birthday.current.input.current.value,
      website: this.website.current.input.current.value,
      aboutMe: this.aboutMe.current.input.current.value,
      technology: this.technology.current.input.current.value,
      project: this.project.current.input.current.value
    }));
  }

  render() {
    return (
      <div className='content-block'>
        <h2>Creating form</h2>
        <form>
          <Field ref={this.name} name="Name"></Field>
          <Field ref={this.surname} name="Surname"></Field>
          <Field ref={this.birthday} type="date" name="Birthday"></Field>
          <Field ref={this.telephone} type="tel" name="Telephone"></Field>
          <Field ref={this.website} type="url" name="Website link"></Field>

          <FieldTextarea ref={this.aboutMe} name="About me"></FieldTextarea>
          <FieldTextarea ref={this.technology} name="Using technology"></FieldTextarea>
          <FieldTextarea ref={this.project} name="Last project"></FieldTextarea>

          <button onClick={(event) => this.cancellation(event)}>Cancel</button>
          <button onClick={(event) => this.save(event)}>Save</button>

        </form>
      </div>
    );
  }
}

export default App;

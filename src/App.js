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

    this.state = {
      name: "",
      surname: "",
      birthday: "",
      telephone: "",
      website: "",
      aboutMe: "",
      technology: "",
      project: ""
    }
  }

  cancellation = (event) => {
    event.preventDefault();
    this.name.current.input.current.value = "";
    this.surname.current.input.current.value = "";
    this.telephone.current.input.current.value = "";
    this.birthday.current.input.current.value = "";
    this.website.current.input.current.value = "";
    this.aboutMe.current.input.current.value = "";
    this.technology.current.input.current.value = "";
    this.project.current.input.current.value = "";

    this.name.current.setState({ error: "" });
    this.surname.current.setState({ error: "" });
    this.birthday.current.setState({ error: "" });
    this.telephone.current.setState({ error: "" });
    this.website.current.setState({ error: "" });
    this.aboutMe.current.setState({ error: "" });
    this.technology.current.setState({ error: "" });
    this.project.current.setState({ error: "" });

    this.aboutMe.current.setState({ count: 0 });
    this.technology.current.setState({ count: 0 });
    this.project.current.setState({ count: 0 });
  }

  cancellationResult = (event) => {
    event.preventDefault();
    this.name.current.input.current.value = "";
    this.surname.current.input.current.value = "";
    this.telephone.current.input.current.value = "";
    this.birthday.current.input.current.value = "";
    this.website.current.input.current.value = "";
    this.aboutMe.current.input.current.value = "";
    this.technology.current.input.current.value = "";
    this.project.current.input.current.value = "";

    this.name.current.setState({ error: "" });
    this.surname.current.setState({ error: "" });
    this.birthday.current.setState({ error: "" });
    this.telephone.current.setState({ error: "" });
    this.website.current.setState({ error: "" });
    this.aboutMe.current.setState({ error: "" });
    this.technology.current.setState({ error: "" });
    this.project.current.setState({ error: "" });

    this.aboutMe.current.setState({ count: 0 });
    this.technology.current.setState({ count: 0 });
    this.project.current.setState({ count: 0 });

    document.querySelector(".content-block__form").style.display = "block";
    document.querySelector(".content-block__result-form").style.display = "none";
  }

  save = (event) => {
    event.preventDefault()
    this.name.current.input.current.value = this.name.current.input.current.value.trim();
    this.surname.current.input.current.value = this.surname.current.input.current.value.trim();
    this.telephone.current.input.current.value = this.telephone.current.input.current.value.trim();
    this.birthday.current.input.current.value = this.birthday.current.input.current.value.trim();
    this.website.current.input.current.value = this.website.current.input.current.value.trim();
    this.aboutMe.current.input.current.value = this.aboutMe.current.input.current.value.trim();
    this.technology.current.input.current.value = this.technology.current.input.current.value.trim();
    this.project.current.input.current.value = this.project.current.input.current.value.trim();
    let regTest = /[A-Z]/;
    let errors = [];
    if (this.name.current.input.current.value === "") {
      this.name.current.setState({ error: "Field is empty" });
      errors.push("is empty");
    }
    else if (!regTest.test(this.name.current.input.current.value[0])) {
      this.name.current.setState({ error: "First symbol must be upper case" });
      errors.push("upper case must be");
    }
    else {
      this.name.current.setState({ error: "" });
    }

    if (this.surname.current.input.current.value === "") {
      this.surname.current.setState({ error: "Field is empty" });
      errors.push("is empty");
    }
    else if (!regTest.test(this.surname.current.input.current.value[0])) {
      this.surname.current.setState({ error: "First symbol must be upper case" });
      errors.push("upper case must be");
    }
    else {
      this.surname.current.setState({ error: "" });
    }

    if (this.birthday.current.input.current.value === "") {
      this.birthday.current.setState({ error: "Field is empty" });
      errors.push("is empty");
    }
    else {
      this.birthday.current.setState({ error: "" });
    }

    if (this.telephone.current.input.current.value.length < 12) {
      this.telephone.current.setState({ error: "Telephone must contains 9 numbers" });
      errors.push("phone number error");
    }
    else {
      this.telephone.current.setState({ error: "" });
    }

    if (this.website.current.input.current.value === "") {
      this.website.current.setState({ error: "Field is empty" });
      errors.push("is empty");
    }
    else {
      this.website.current.setState({ error: "" });
    }

    if (this.aboutMe.current.input.current.value === "") {
      this.aboutMe.current.setState({ error: "Field is empty" });
      errors.push("is empty");
    }
    else {
      this.aboutMe.current.setState({ error: "" });
    }

    if (this.technology.current.input.current.value === "") {
      this.technology.current.setState({ error: "Field is empty" });
      errors.push("is empty");
    }
    else {
      this.technology.current.setState({ error: "" });
    }

    if (this.project.current.input.current.value === "") {
      this.project.current.setState({ error: "Field is empty" });
      errors.push("is empty");
    }
    else {
      this.project.current.setState({ error: "" });
    }

    if (this.aboutMe.current.state.count > 600) {
      errors.push("limit exceeded");
    }

    if (this.technology.current.state.count > 600) {
      errors.push("limit exceeded");
    }

    if (this.project.current.state.count > 600) {
      errors.push("limit exceeded");
    }

    console.log(errors, errors.length);

    if (errors.length === 0) {
      this.setState({
        name: this.name.current.input.current.value,
        surname: this.surname.current.input.current.value,
        telephone: this.telephone.current.input.current.value,
        birthday: this.birthday.current.input.current.value,
        website: "https://" + this.website.current.input.current.value,
        aboutMe: this.aboutMe.current.input.current.value,
        technology: this.technology.current.input.current.value,
        project: this.project.current.input.current.value
      });
      document.querySelector(".content-block__form").style.display = "none";
      document.querySelector(".content-block__result-form").style.display = "block";
    }
  }

  render() {
    return (
      <div className='content-block'>
        <div className='content-block__form'>
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
        <div className='content-block__result-form'>
          <h2>{this.state.name} {this.state.surname}</h2>
          <div className='result-entry'>birthday: {this.state.birthday}</div>
          <div className='result-entry'>telephone: {this.state.telephone}</div>
          <div className='result-entry'>website: {this.state.website}</div>
          <div className='result-entry'>aboutMe: {this.state.aboutMe}</div>
          <div className='result-entry'>technology: {this.state.technology}</div>
          <div className='result-entry'>project: {this.state.project}</div>
          <button onClick={(event) => this.cancellationResult(event)}>Cancel</button>
        </div>
      </div>
    );
  }
}


export default App;

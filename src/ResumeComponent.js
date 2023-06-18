import React from "react";
import { generateCV } from "./GenerateCv";
import { AddAcadField } from "./GenerateCv";
import { addNewEField } from "./GenerateCv";
import Select from "react-select";
//import Stack from "@mui/material/Stack";
//import Autocomplete from "@mui/material/Autocomplete";
//import TextField from "@mui/material/TextField";
import { useState } from "react";

function ResumeComponent() {
  const colourOptions = [
    { value: "first Option", label: "A++" },
    { value: "Second Option", label: "Adobe Photoshop" },
    { value: "Third Option", label: "Account Management" },
    { value: "Fourth Option", label: "AutoCad" },
    { value: "Fifth Option", label: "Accounting" },
    { value: "Sixth Option", label: "Adverting" },
    { value: "Seventh Option", label: "Adobe Illustrator" },
    { value: "Eighth Option", label: "Adobe Indesign" },
    { value: "Nineth Option", label: "Agile Methodologies" },
    { value: "Tenth Option", label: "Auditing" },
    { value: "12th Option", label: "Business Strategy" },
    { value: "13th Option", label: "Business Developement" },
    { value: "14th Option", label: "Budegting" },
    { value: "15th Option", label: "Business Analytics" },
    { value: "16th Option", label: "Business Playing" },
    { value: "17th Option", label: "Business Process Improvement" },
    { value: "18th Option", label: "Banking" },
    { value: "19th Option", label: "Business Intelligence(BI)" },
    { value: "20th Option", label: "Business to Business(B2B)" },
    { value: "21th Option", label: "Blogging" },
    { value: "22th Option", label: "Brand Management" },
    { value: "23th Option", label: "C++" },
    { value: "24th Option", label: "Customer Service" },
    { value: "25th Option", label: "Communication" },
    { value: "26th Option", label: "Customer Relationship Management(CRM)" },
    { value: "27th Option", label: "Cascading Style Sheets(CSS)" },
    { value: "28", label: "Construction Management" },
    { value: "29", label: "Data Analyis" },
    { value: "30", label: "Digital Marketing" },
    { value: "31", label: "Data Entry" },
    { value: "32", label: "Digital Media" },
    { value: "33", label: "Editing" },
    { value: "34", label: "Event Management" },
    { value: "35", label: "Ecommerce" },
    { value: "36", label: ".Net Framework" },
    { value: "37", label: "Finance" },
    { value: "38", label: "Git" },
    { value: "39", label: "Graphics" },
    { value: "40", label: "German" },
    { value: "41", label: "HTML" },
    { value: "42", label: "Hotel Management" },
    { value: "43", label: "HR Consulting" },
    { value: "44", label: "IT Service Management" },
    { value: "45", label: "Java" },
    { value: "46", label: "Javascript" },
    { value: "47", label: "jQuery" },
    { value: "48", label: "JSON" },

    { value: "49", label: "Jenkins" },
    { value: "50", label: "Kubernates" },
    { value: "51", label: "Linux" },

    { value: "52", label: "Microsoft Excel" },
    { value: "53", label: "Microsoft PowerPoint" },
    { value: "54", label: "Microsoft Word" },
    { value: "55", label: "Microsoft Office" },
    { value: "56", label: "Microsoft Outlook" },

    { value: "57", label: "Network Administration" },
    { value: "58", label: "Network Security" },
    { value: "59", label: "Nodejs" },
    { value: "60", label: "Network Design" },
    { value: "61", label: "Oracle Database" },
    { value: "62", label: "Python" },
    { value: "63", label: "SQL" },
    { value: "64", label: "Visual Studio" },
    { value: "65", label: "Web Developement" },
    { value: "66", label: "Web Design" },
    { value: "67", label: "Windows Server" },
    { value: "68", label: "XML" },
    { value: "69", label: "XCode" },
    { value: "70", label: "ZenDesk" },
  ];

  const [selectedOption, setSelectedOptions] = useState([]);

  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
    console.log(selectedOption);
  };

  return (
    <>
      <div className="container" id="cv-form">
        <h1 className="text-center py-2">Resume Builder</h1>
        {/* Two Sections Personal and Professional are solely components */}
        <div className="row">
          <div className="col-md-6">
            {/* Personal Info Section */}
            <h3 className="text-primary">Personal Information</h3>

            {/* Name */}
            <div className="form-group py-2">
              <label htmlFor="nameField">Your Name</label>
              <input
                type="text"
                id="nameField"
                placeholder="Enter Your Name"
                className="form-control"
              />
            </div>

            {/* Email */}
            <div className="form-group py-2">
              <label htmlFor="emailField">Your Email</label>
              <input
                type="email"
                id="emailField"
                placeholder="Enter Your Email"
                className="form-control"
              />
            </div>

            {/* Phone Number */}
            <div className="form-group py-2">
              <label htmlFor="phoneField">Your Phone Number</label>
              <input
                type="text"
                id="phoneField"
                placeholder="Enter Your Phone Number"
                className="form-control"
              />
            </div>

            {/* Address */}
            <div className="form-group py-2">
              <label htmlFor="addressField">Your Address</label>
              <textarea
                rows="5"
                id="contactField"
                placeholder="Enter Your Address"
                className="form-control"
              />
            </div>

            <p className="text-secondary my-3">Important Links</p>

            {/* Links */}
            {/* Linked IN */}
            <div className="form-group py-2">
              <label htmlFor="linkedField">Your LinkedIn</label>
              <input
                type="text"
                id="linkedField"
                placeholder="Enter Your LinkedIn URl"
                className="form-control"
              />
            </div>

            {/* GITHUB */}
            <div className="form-group py-2">
              <label htmlFor="gitHubField">Your LinkedIn</label>
              <input
                type="text"
                id="gitHubField"
                placeholder="Enter Your GitHub URl"
                className="form-control"
              />
            </div>
          </div>

          <div className="col-md-6">
            {/* Professional */}

            <h3 className="text-primary">Professional Section</h3>
            {/* SSC */}
            <div className="form-group py-2">
              <label htmlFor="sscField" className="py-2">
                SSC(10 th Standard)
              </label>
              <input
                type="number"
                id="sscField"
                placeholder="Enter Your SSC Percentage"
                className="form-control"
              />
            </div>
            {/* HSC */}
            <div className="form-group py-2">
              <label htmlFor="hscField" className="py-2">
                HSC(12 th Standard)
              </label>
              <input
                type="number"
                id="hscField"
                placeholder="Enter Your HSC Percentage"
                className="form-control"
              />
            </div>

            {/* Work Experience */}
            <div className="form-group py-2" id="we">
              <label className="py-2">
                Tell Me Your Work Experiences in short words
              </label>
              <textarea
                type="text"
                id="workField"
                placeholder="Enter Here"
                rows="3"
                className="form-control workField"
              />
              {/* New Text Area Transitions */}
              <div className="container text-xl-left mt-3" id="weAddButton">
                <button
                  onClick={addNewEField}
                  className="btn btn-primary btn-sm"
                >
                  Add More Experiences.
                </button>
              </div>
            </div>

            {/* Academic Qualification */}
            <div className="form-group py-2" id="ac">
              <label htmlFor="acadField" className="py-2">
                Tell Me Your Academics(Undegrad)
              </label>
              <textarea
                type="text"
                id="acadField"
                placeholder=""
                rows="3"
                className="form-control acadField"
              />
              <div className="container text-xl-left mt-3" id="aqAddButton">
                <button
                  onClick={AddAcadField}
                  className="btn btn-primary btn-sm"
                >
                  Add More Qualifications.
                </button>
              </div>
            </div>

            {/* Skills Section */}
            <div className="form-group py-2">
              <label htmlFor="skillField" className="py-2">
                Tell Me What are your Skills.
              </label>

              <Select
                defaultValue={[colourOptions[2], colourOptions[3]]}
                isMulti={true}
                value={selectedOption}
                closeMenuOnSelect={false}
                name="colors"
                options={colourOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/* Generate Button */}
        <div className="container text-center mt-3 py-2">
          <button onClick={generateCV} className="btn btn-success btn-md">
            Generate Resume
          </button>
        </div>
      </div>

      {/* CV TEMPLATE */}
      <div className="container" id="cv-template">
        <h2 className="py-2">Youre Resume is generated</h2>
        <div className="row">
          <div className="col-md-4 text-center py-5 background">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
              alt=""
              className="img-fluid my-image py-2"
            />
            <div className="container">
              {/* Personal Section */}
              <p id="nameT1" className="fw-bold">
                Zaid Bhati
              </p>
              <p id="emailT">Email</p>
              <p id="addressT">Address</p>
              <p id="phoneT">Phone Number</p>
              <hr />
              {/* Link Section */}
              <p className="m-2">
                <a id="LinkT" href=""></a>
              </p>
              <p className="m-2">
                <a id="GitT" href="links"></a>
              </p>
            </div>
          </div>
          {/* Professional Section */}
          <div className="col-md-8 py-5">
            <h1 id="nameT2" className="text-center fw-bold">
              Zaid Bhati
            </h1>
            {/* Cards */}
            <div className="card mt-4">
              <div className="div-header background">
                <h3 className="py-2 text-center fw-bold">Education</h3>
              </div>
              <div className="card-body">
                <p id="tenthT">10 th marks</p>
                <p id="twelveT">10 th marks</p>
              </div>
            </div>
            {/* Work Expo */}
            <div className="card mt-4">
              <div className="div-header background">
                <h3 className="py-2 text-center fw-bold">Work Experience</h3>
              </div>
              <div className="card-body">
                <ul id="weT">
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </li>
                </ul>
              </div>
            </div>
            {/* Academic */}
            <div className="card mt-4">
              <div className="div-header background">
                <h3 className="py-2 text-center fw-bold">
                  Academic Qualification
                </h3>
              </div>
              <div className="card-body">
                <ul id="aqT">
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </li>
                </ul>
              </div>
            </div>
            {/* Skills Section */}
            <div className="card mt-4">
              <div className="div-header background">
                <h3 className="py-2 text-center fw-bold">Skills</h3>
              </div>
              <div className="card-body">
                <ul id="skillT">
                  {selectedOption?.map((selectOption) => {
                    <li>{selectOption.label}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeComponent;

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function DisplayContact() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [company, setCompany] = useState([]);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    getData();
  });

  return (
    <div className="container">
      <h1>Contact</h1>
      <div className="accordion" id="accordionFlushExample">
        {data.map((person: any) => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={
                  selected === person.id
                    ? "accordion-button collapsing" +
                      "accordion-button collapse show"
                    : "accordion-button collapsed"
                }
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                onClick={() => {
                  setSelected(person.id), setCompany(person.id);
                }}
              >
                {person.name} ({person.username})
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className={
                selected === person.id
                  ? "accordion-collapse show"
                  : "accordion-collapse collapse"
              }
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <strong>Website:</strong> <a> {person.website}</a>
                <br></br>
                <strong>Email:</strong> <a> {person.email}</a>
                <br></br>
                <strong>Phone Number:</strong> {person.phone}
                <br></br>
                <strong>Address:</strong> {person.address.suite}&nbsp;
                {person.address.street} ,&nbsp;{person.address.city} , &nbsp;
                {person.address.zipcode}
                <br></br>
                <div className="accordion" id="accordionFlushExample">
                  <div className="accordion-item  ">
                    <h2 className="accordion-header">
                      <button
                        className={
                          company === person.company.name
                            ? "accordion-button collapsing" +
                              "accordion-button collapse show"
                            : "accordion-button collapsed"
                        }
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                        onClick={() => setCompany(person.company.name)}
                      >
                        Company: {person.company.name}
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className={
                        company === person.company.name
                          ? "accordion-collapse"
                          : "accordion-collapse collapse"
                      }
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <strong>Catch Phrase:</strong>{" "}
                        <a>{person.company.catchPhrase}</a>
                        <br></br>
                        <strong>BS: </strong> <a> {person.company.bs}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayContact;

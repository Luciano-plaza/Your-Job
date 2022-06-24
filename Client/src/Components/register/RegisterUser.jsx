import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getAllTechnologies } from "../../Redux/Actions/Actions";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Widget } from "@uploadcare/react-widget";
import style from "./register.module.css";
import validateUser from "./ValidateUser";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function RegisterUser({ props }) {
  const { user } = useAuth0();
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua & Deps",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Rep",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo {Democratic Rep}",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland {Republic}",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea North",
    "Korea South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar, {Burma}",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "St Kitts & Nevis",
    "St Lucia",
    "Saint Vincent & the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const allTechnologies = useSelector((state) => state.technologies);
  const [technologies, setTechnologies] = useState([]);
  const [employ, setEmploy] = useState(false);
  const [uuidImage, setUuidImage] = useState(false);
  const [selectedTechs, setSelected] = useState([]);
  const [country, setCountry] = useState("");
  const [uuid, setUuid] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
    linkedin: "",
    desc: "",
    employ: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllTechnologies());
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setTechnologies(
      allTechnologies.filter((t) => !selectedTechs.includes(t.name))
    );
    // eslint-disable-next-line
  }, [selectedTechs]);
  useEffect(() => {
    setTechnologies(allTechnologies);
    // eslint-disable-next-line
  }, [allTechnologies]);

  useEffect(() => {
    setErrors(
      validateUser({
        ...input,
      })
    );
  }, [input]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const addTechs = (tech) => {
    if (!selectedTechs.includes(tech)) {
      let aux = [tech];
      setSelected(selectedTechs.concat(aux));
    }
  };

  const removeTech = (tech) => {
    let aux = selectedTechs.filter((element) => element !== tech);
    setSelected(aux);
    console.log(aux);
  };

  const addCountry = (country) => {
    setCountry(country);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(errors);
    if (Object.keys(errors).length > 0) {
      console.log(errors);
      return;
    }
    let empleado = employ ? "empleado" : "desempleado";
    if (employ) {
      let company = input.employ;
      let descript = input.desc;
      setInput({
        ...input,
        desc: descript.concat(` This user Works at ${company}`),
      });
    }
    console.log(user?.email);
    let dob = new Date(input.age);
    let image = undefined;
    uuidImage
      ? (image = `https://ucarecdn.com/${uuidImage}/`)
      : (image = user?.picture);
    let newUser = {
      email: user?.email,
      name: input.name,
      employment_status: empleado,
      age: dob,
      image: image,
      description: input.desc,
      technologies: selectedTechs,
      nationality: country,
      url: input.linkedin,
      cv: `ucarecdn.com/${uuid}/`,
      premium: 0,
    };
    console.log(newUser);

    dispatch(await createUser(newUser));

    navigate("/");
  };

  return (
    <div className={style.containerRegisterUser}>
      <div className={style.containerCard}>
        <h2>User Info</h2>
        <Card className="text-center" style={{ width: "80%", padding: "20px" }}>
          <form
            className={style.containeForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <label>Name: </label>
            <br />
            <input
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Full name"
              autoComplete="off"
              required
            />
            <br />
            <span className={style.danger}>{errors.name}</span>
            <br />
            <label>Email:</label>
            <br />
            <input
              name="email"
              value={user?.email}
              placeholder="Email"
              autoComplete="off"
              onMouseEnter={(e) => {
                handleChange(e);
              }}
              disabled
            />
            <br />
            <span className={style.danger}>{errors.email}</span>
            <br />
            <label>Date of Birth:</label>
            <br />
            <input
              type="date"
              name="age"
              required
              onChange={(e) => {
                handleChange(e);
                // console.log(e.target.value);
              }}
            />
            <br />
            <br />
            <div className={style.containerTechnologies}>
              <Dropdown className="d-inline mx-2" autoClose="outside">
                <label>Technologies:</label>
                <br />
                <Dropdown.Toggle id="dropdown-autoclose-outside">
                  Select Technologies
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {technologies &&
                    technologies.map((tech, index) => {
                      return (
                        <Dropdown.Item
                          onClick={() => {
                            addTechs(tech.name);
                          }}
                          key={index}
                        >
                          {tech.name}
                        </Dropdown.Item>
                      );
                    })}
                </Dropdown.Menu>
              </Dropdown>

              <ul>
                {selectedTechs?.map((tech, index) => (
                  <div key={index}>
                    <li
                      onClick={() => {
                        removeTech(tech);
                      }}
                    >
                      {` ${tech} `}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <br />
            <label>Country of Origin: {country}</label>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <DropdownButton
                id="dropdown-basic-button"
                title="Select Country"
                style={{ height: "10px" }}
              >
                <div style={{ height: "150px", overflowY: "scroll" }}>
                  {countries.map((country, index) => {
                    return (
                      <Dropdown.Item
                        onClick={() => {
                          addCountry(country);
                        }}
                        key={index}
                      >
                        {country}
                      </Dropdown.Item>
                    );
                  })}
                </div>
              </DropdownButton>
            </div>
            <br />
            <br />
            <input
              name="linkedin"
              onChange={(e) => handleChange(e)}
              placeholder="Linkedin Profile"
              autoComplete="off"
              required
            />
            <br />
            <span className={style.danger}>{errors.linkedin}</span>
            <br />
            <textarea
              name="desc"
              onChange={(e) => handleChange(e)}
              placeholder="Description"
              cols="40"
            />
            <br />
            <div className={style.containerCheck}>
              <div>
                <label>Are you employed?</label>
                <input
                  type="checkbox"
                  name="employment"
                  id=""
                  onClick={() => setEmploy(!employ)}
                />
                <br />
                <input
                  type="text"
                  name="employ"
                  placeholder="Place of employment"
                  style={{ display: employ ? "" : "none" }}
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                />
              </div>
              <div>
                <label>CV:</label>{" "}
                <Widget
                  publicKey="de7dc23d760e287d1cb0"
                  clearable
                  onChange={(file) => {
                    setUuid(file.uuid);
                  }}
                />
              </div>
              <label>Profile Picture:</label>
              <Widget
                publicKey="de7dc23d760e287d1cb0"
                clearable
                imagesOnly
                crop=""
                onChange={(file) => {
                  setUuidImage(file.uuid);
                }}
              />
            </div>
            {/* <input type={"file"} name="cv" onChange={(e) => handleChange(e)} /> */}
            <Button variant="primary" size="small" type="submit">
              Submit
            </Button>
          </form>
          <br />
          <div></div>
        </Card>
      </div>
    </div>
  );
}

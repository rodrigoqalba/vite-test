import { useState } from "react";
import "./register.css";

const skills = [
    { value: "react", label: "React" },
    { value: "vuejs", label: "Vue.js" },
    { value: "svelte", label: "Svelte" },
    { value: "angular", label: "Angular" },
    { value: "javascript", label: "JavaScript" },
    { value: "nodejs", label: "Node.js" }
];

const initialState = {
    name: "",
    email: "",
    password: ""
};

const Register = () => {
    const [state, setState] = useState(initialState);
    const [subscribe, setSubscribe] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [ successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleInputChange = (event) => {
        const { name, value } event.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrorMsg("");
        setSuccessMSg("");
        const allFieldsEntered = Object.keys(state).every(
            (key) => state[key].trim() !== "" && selectedSkill && subscribe
        );
        if (allFieldsEntered) {
            // code for doing registration
            setSuccessMsg("You have successfully registered");
            setTimeout(() => {
                setSuccessMsg("");
                setState(initialState);
                setSelectedSkill(null);
                setSubscribe(false);
            }, 2000);
        } else {
            setErrorMsg("All the field are required.");
        }
    }
};


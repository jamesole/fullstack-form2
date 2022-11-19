import axios from 'axios';
import React, {useState} from 'react';

export default function GetStudents(props) {


    const [students, setStudents] = useState([]);


    function getStudents() {
        axios.get("http://localhost:8000/form")
        .then((res) => setStudents(res.data)).catch((error) => console.log(error.response.data)); 
    }

    const newArray = students.map((student) => {
        const index = students.indexOf(student) + 1;
        return (
            <div>
                <h4>Student {index}</h4>
                <ul>
                    <li>Hello my name is {student.name}</li>
                    <br></br>
                    <li>I am a {student.year}, studying {student.major}</li>
                    <br></br>
                    <li>Am I a member of Greek Life? {(student.greek) ? 'yes' : 'no'}</li>
                </ul>
                <hr></hr>
            </div>
        )
    })

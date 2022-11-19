import React, {useState} from "react";
import axios from 'axios';
export default function Form(props) {

    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [major, setMajor] = useState('');
    const [greek, setGreek] = useState(false);

    function changedName(e) {
        setName(e.target.value);
    }

    function yearClick(e) {
        setYear(e.target.value);
    }

    function greekClick(e) {
        setGreek(e.target.value);
    }

    function majorClick(e) {
        setMajor(e.target.value);
    }
    
    
    
    function submit (e) {
        const student = {
            name: name,
            year: year,
            major: major,
            greek: greek
        }

        axios.post('http://localhost:8000/form', student).then(res => console.log(res)).catch((error) => {
            console.log(error.response.data)
        })

        console.log(student);
    }
    return(
        <div>
            <form onSubmit={submit}>
                <label>Name:</label>
                <input type={'text'} onChange={changedName} valued={name} required/>

                <fieldset>
                    <legend>Year: </legend>
                    
                    <div>
                        <input type={'radio'} onClick={yearClick} id='freshman' name="year" value={'freshman'} required/>
                        <label>Freshman</label>
                    </div>

                    <div>
                        <input type={'radio'} id='sophmore' name="year" value={'sophmore'} onClick={yearClick} />
                        <label>Sophmore</label>
                    </div>

                    <div>
                        <input type={'radio'} id='junior' name="year" value={'junior'} onClick={yearClick} />
                        <label>Junior</label>
                    </div>

                    <div>
                        <input type={'radio'} id='senior' name="year" value={'senior'} onClick={yearClick} />
                        <label>Senior</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Major: </legend>
                    
                    <div>
                        <input type={'radio'} id='finance' name="major" value={'finance'} onClick={majorClick} required/>
                        <label>Finance</label>
                    </div>

                    <div>
                        <input type={'radio'} id='real estate' name="major" value={'real estate'} onClick={majorClick}/>
                        <label>Real Estate</label>
                    </div>

                    <div>
                        <input type={'radio'} id='accounting' name="major" value={'accounting'} onClick={majorClick}/>
                        <label>Accounting</label>
                    </div>

                    <div>
                        <input type={'radio'} id='economics' name="major" value={'economics'} onClick={majorClick}/>
                        <label>Economics</label>
                    </div>

                    <div>
                        <input type={'radio'} id='marketing' name="major" value={'marketing'} onClick={majorClick}/>
                        <label>Marketing</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Are you in Greek Life?</legend>

                    <div>
                        <input type={'radio'} id='true' name="greek" value={true} onClick={greekClick}/>
                        <label>Yes</label>
                    </div>

                    <div>
                        <input type={'radio'} id='false' name="greek" value={false} onClick={greekClick}/>
                        <label>No</label>
                    </div>

                </fieldset>
                <br></br>
                <button type="submit">Submit</button>
                <br></br>
                <br></br>
                <br></br>
            </form>
        </div>
    );
}

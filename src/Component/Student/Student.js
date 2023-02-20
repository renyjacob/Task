import React,{useState} from "react";
import { useSelector } from "react-redux";
import "./Student.css";

const Student=()=>{
//   const studList = useSelector((store) => store.stud.studentList);
  const [studentList, setStudentList] = useState([]);
  const [student, setStudent] = useState({
    firstName : "",
    middleName : "",
    lastName : "",
    class : "",
    gender : "",
    dateOfBirth : false,
    placeOfBirth : "",
    nationality : "",
    religion : "",
    bloodGroup : 0,
    motherTongue : "",
    passportNo : "",
    passportPlaceOfIssue : "",
    passportDateOfIssue:"",
    passportDateOfExpiry:"",
    cividId:"",
    cividIdDateOfExpiry:"",
    previousSchoolAttended:"",
    datee:"",
    illness:"",
    photo:"",
    buildingNo:"",
    flatNo:"",
    BlockNo:"",
    streetNo:"",
    FloorNo:"",
    country:"",
    city:"",
    zipcode:""
  });

  const handleChange =(event)=>{
  [event.target.name]=event.target.value;
  }

    return(
        <>
        <div className="first-div">
            <div><button>.</button></div>
             <span style={{color:"darkblue"}}>Student Details</span>
             <div><button>.</button></div>
             <span style={{color:"darkblue"}}>Father's/Guardian Details</span>
             <div><button>.</button></div>
             <span style={{color:"darkblue"}}>Mother's Details</span>
        </div>
        <div className="note">
        <h4>Note:Fill the Online Registration form according to your passport details</h4>
        </div>
        <div className="container">
        <header>Student Details</header>   
        <form action="#">
        <div className="form first">
        <div className="details personal">
            <span className="title">Student Details</span>

            <div className="fields">
                <div className="input-fields">
                    <label>First Name</label>
                    <input type="text" required name="firstName" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Middle Name</label>
                    <input type="text" required name="middleName" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Last Name</label>
                    <input type="text" required name="lastName" onChange={handleChange}/>
                </div>

                <div className="fields-one">
                <div className="input-fields">
                    <label>Class</label>
                    <select required name="class" onChange={handleChange}>
                        <option>Select</option>
                    </select>
                </div>
                <div className="input-fields">
                    <label>Gender</label>
                    <select required name="gender" onChange={handleChange}>
                        <option>Select</option>
                    </select>
                </div>
                <div className="input-fields">
                    <label>Date of Birth</label>
                    <input type="date" required name="dateOfBirth" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Place of Birth</label>
                    <input type="text" required name="placeOfBirth" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Nationality</label>
                    <input type="text" required name="nationality" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Religion</label>
                    <select required name="religion" onChange={handleChange}>
                        <option>Select</option>
                    </select>
                </div>

                <div className="input-fields">
                    <label>Blood Group</label>
                    <input type="text" required name="bloodGroup" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Mother Tongue</label>
                    <input type="text" required name="motherTongue" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Passport Number</label>
                    <input type="number" required name="passportNo" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Passport Place of Issue</label>
                    <input type="text" required name="passportPlaceOfIssue" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Passport Date of Issue</label>
                    <input type="date" required name="passportDateOfIssue" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Passport Date of Expiry</label>
                    <input type="date" required name="passportDateOfExpiry" onChange={handleChange}/>
                </div>
                </div>

                <div className="fields-two">
                <div className="input-fields">
                    <label>Civil ID No</label>
                    <input type="number" required name="civilId" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Civil ID Date of Expiry</label>
                    <input type="date" required name="cividIdDateOfExpiry" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Previous School Attended</label>
                    <input type="text" required name="previousSchoolAttended" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Date Child Entered Kuwait</label>
                    <input type="date" required name="datee" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Specify Child Illness(if any)</label>
                    <input type="text" required name="illness" onChange={handleChange}/>
                </div>
                </div>
                <div className="fields">
                <div className="input-fields">
                <label>Photo</label>
                    <input type="file" required name="photo" onChange={handleChange}/>
                    <br></br>
                    (allow jpg.jpeg.png and size less than 5 MB)
                </div>
                </div>
            </div>
            <span className="title" style={{backgroundColor:" #C2BFBF"}}>Home Address</span>
            <div className="fields-one">
                <div className="input-fields">
                    <label>Building No</label>
                    <input type="number" required name="buildingNo" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Flat No</label>
                    <input type="number" required name="flatNo" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Block No</label>
                    <input type="number" required name="blockNo" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Street No</label>
                    <input type="number" required name="streetNo" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Floor No</label>
                    <input type="number" required name="floorNo" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Country</label>
                    <input type="text" required name="country" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>City</label>
                    <input type="text" required name="city" onChange={handleChange}/>
                </div>
                <div className="input-fields">
                    <label>Zip Code</label>
                    <input type="number" required name="zipcode" onChange={handleChange}/>
                </div>
                </div>
                <button className="btn">Next</button>
        </div>
        </div>    
        </form>    
        </div>
        </>
    )
}
export default Student;
import axios from "axios";
import { useCallback, useState } from "react";

function App() {

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [dob, setDOB] = useState('')
  const [image, setImage] = useState('')
  const [hash, setHash] = useState('')
  const [gender, setGender] = useState('')
  const [stateOfOrigin, setStateOfOrigin] = useState('')

  const handleSumbit = useCallback(async(e)=> {
    e.preventDefault();
  
      const data = new FormData();
      data.append('first_name', firstname);
      data.append('last_name', lastname);
      data.append('phone_number', phoneNumber);
      data.append('email', email);
      data.append('date_of_birth', dob);
      data.append('state', stateOfOrigin);
      data.append('profile_image', image);
      data.append('gender', gender);
      data.append('hash', hash);
      console.log('data', data);
     fetch('https://www.ppfnhealthcare.com/api/beneficiary',{
      method: 'POST',
      mode: 'no-cors',
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => console.log(response)).catch(error => console.error(error));
    
  },[dob, email, firstname, gender, hash, image, lastname, phoneNumber, stateOfOrigin])

  return (
  <div>
    <form style={{
      width: 400,
      margin: 'auto',
      marginTop: 100,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <input type="text" value={firstname} onChange={(e) => setFirstName(e.currentTarget.value)} placeholder="Firstname" name="first_name" />
      <input type="text" value={lastname} onChange={(e) => setLastName(e.currentTarget.value)} placeholder="Lastname" name="last_name" />
      <input type="text" value={gender} onChange={(e) => setGender(e.currentTarget.value)} placeholder="Gender" name="gender" />
      <input type="password" value={hash} onChange={(e) => setHash(e.currentTarget.value)} placeholder="Password" name="hash" />
      <input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Email Address" name="email" />
      <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.currentTarget.value)} min={14} max={14} minLength={14} maxLength={14  } placeholder="Phone  Number" name="phone_number" />
      <input type="date" value={dob} onChange={(e) => setDOB(e.currentTarget.value)} placeholder="Date of birth" name="dob" />
      <input type="select" value={stateOfOrigin} onChange={(e) => setStateOfOrigin(e.currentTarget.value)} placeholder="State of Origin" name="state" />
      <input type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} placeholder="Select Image" name="image" />
      <button type="button" name="submit" onClick={handleSumbit}>Submit</button>
    </form>
  </div> 
  );
}

export default App;

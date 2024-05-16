import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div class="container">
    <form>
      <h1>Doctor Sign-up</h1>
          <label for="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" required></input>
           
          <label for="middle_name">Middle Name</label>
          <input type="text" id="middle_name" name="middle_name"></input>
      
          <label for="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" required></input>
      
          <label for="gender">Gender</label>
          <select id="gender" name="gender" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="other">Other</option>
          </select>
      
          <label for="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" required></input>
     
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" required></input>
      
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required></input>
      
          <label for="address">Address</label>
          <input type="text" id="address" name="address"></input>
   
          <label for="license_number">Medical License Number</label>
          <input type="text" id="license_number" name="license_number" required></input>
      
          <label for="specialty">Medical Specialty</label>
          <input type="text" id="specialty" name="specialty" required></input>
      
          <label for="board">Medical Board/Association</label>
          <input type="text" id="board" name="board" required></input>
      
          <label for="practice_name">Hospital/Practice Name</label>
          <input type="text" id="practice_name" name="practice_name" required></input>
      
          <label for="experience">Years of Experience</label>
          <input type="number" id="experience" name="experience" required></input>
      
          <label for="school">Medical School Attended</label>
          <input type="text" id="school" name="school" required></input>

          <label for="board_certifications">Board Certifications</label>
          <input type="text" id="board_certifications" name="board_certifications"></input>
      
          <label for="education">Continuing Medical Education</label>
          <input type="text" id="education" name="education"></input>

          <label for="profile_picture">Profile Picture</label>
          <input type="file" id="profile_picture" name="profile_picture"></input>

          <label for="username">Username</label>
          <input type="text" id="username" name="username" required></input>
      
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required></input>

          <input type="checkbox" id="terms" name="terms" required></input>
          <label for="terms">I agree to the <a href="terms.html" target="_blank">Terms and Conditions</a></label>

          <button type="submit">Sign Up</button>
      </form>    
  </div>
  )
}

export default Signup

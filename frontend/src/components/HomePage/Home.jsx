import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <header>
        <div className="logo-container">
          {/* Placeholder for your logo */}
          <img src="https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Logo" />
          <h1>HOSPITAL MANAGEMENT</h1>
        </div>
        <nav>
        <ul>
          <li>
            <Link to="/signup" className="nav-link">
              <button>Signup</button>
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              <button>Login</button>
            </Link>
          </li>
        </ul>
      </nav>
     </header>
     <hr></hr>
     <br></br>
      <section className="slider">
        {/* Placeholder for sliding images */}
        <img src="https://c1.wallpaperflare.com/preview/367/290/569/various-dentist-doctor-healthcare.jpg" alt="Slider Image 1" />
        <div className="left">Exceptional care. Every patient. Every day.</div>
      </section>
      <br></br>
      <hr></hr>
      <br></br>
      <h1 className="raftaar">
        BEST SUPER SPECIALITY HOSPITAL IN NAGPUR
      </h1>
      <br></br>
      <div className="container">
      <div className="box">
        <img src="https://images.clinicspots.com/tr:n-facility_profile_desktop/JaA90PFNFm59KwKdxixceursxkb7hzGe2AKZtJV9.jpeg" alt="Hospital Exterior - Hospital Name 1" />
        <h2>Meditrina Hospital</h2>
        <p>The State-of-the-Art Radio-diagnostics and NABL Accreditated Pathology Lab.</p>
      </div>
      <div className="box">
        <img src="https://images.clinicspots.com/tr:n-facility_profile_desktop/JaA90PFNFm59KwKdxixceursxkb7hzGe2AKZtJV9.jpeg" alt="Hospital Exterior - Hospital Name 2" />
        <h2>Wockhardt Super Speciality Hospital</h2>
        <p>It has decades of experience in high-end Super speciality care.</p>
      </div>
      <div className="box">
        <img src="https://c4.wallpaperflare.com/wallpaper/96/377/232/anime-everlasting-summer-hospital-original-anime-wallpaper-preview.jpg" alt="Hospital Exterior - Hospital Name 3" />
        <h2>Krims Hospitals</h2>
        <p>The hospital in Nagpur has round a clock presence of ICU, MICU and SICU teams.</p>
      </div>
      <div className="box">
        <img src="https://c4.wallpaperflare.com/wallpaper/96/377/232/anime-everlasting-summer-hospital-original-anime-wallpaper-preview.jpg" alt="Hospital Exterior - Hospital Name 4" />
        <h2>New Era Hospital</h2>
        <p>NMC awarded them the cleanest hospital award.</p>
      </div>
      <div className="box">
        <img src="https://c4.wallpaperflare.com/wallpaper/96/377/232/anime-everlasting-summer-hospital-original-anime-wallpaper-preview.jpg" alt="Hospital Exterior - Hospital Name 5" />
        <h2>Care Hospital</h2>
        <p>It Has internationally acclaimed doctors, qualified and competent medical, nursing, paramedical</p>
      </div>
      <div className="box">
        <img src="https://c4.wallpaperflare.com/wallpaper/96/377/232/anime-everlasting-summer-hospital-original-anime-wallpaper-preview.jpg" alt="Hospital Exterior - Hospital Name 6" />
        <h2>Alexis Multispeciality Hospital</h2>
        <p>The Multispeciality Hospital is an Oncology Hospital in Mankapur, Nagpur</p>
      </div>
    </div>
    <hr></hr>
    <br></br>
    <br></br>
      <div className="column">
        <div className="column1">
          <h3>Latest News and Updates:</h3>
          <p>
          Share recent advancements in healthcare, new treatments, or updates within the hospital.
Include information about any technological updates or improvements in your system.
          </p>
        </div>
        <div className="column2">
          <h3>Blockchain Integration Highlights:</h3>
          <p>
          Provide brief explanations or updates on how blockchain is enhancing security, transparency, and efficiency within the hospital system.
          </p>
        </div>
        <div className="column3">
          <h3>Health Tips and Wellness Advice:</h3>
          <p>
          Share health and wellness tips to educate and engage visitors.
Provide links to relevant articles or resources on maintaining a healthy lifestyle.
          </p>
        </div>
      </div>
      <footer>
        {/* Placeholder for your footer content */}
        <div className="footer-col">
          <div className="f1">
            <h1><i className="fas">	&#xf0f8;</i>HOSPITAL</h1>
            <p>Share important announcements, such as changes in hospital policies, new services, or upcoming maintenance schedules.
Ensure that critical information is easily accessible to both staff and patients.</p>
          </div>
          <div className="f2">
            <h1>For Patients</h1>
            <ul>
              <li> Search for Doctors</li>
              <li>login</li>
              <li>register</li>
              <li>booking</li>
              <li> Patient Dashboard</li>
            </ul>
          </div>
          <div className="f3">
            <h1>For Doctors</h1>
            <ul>
              <li>Appointments</li>
              <li>chat</li>
              <li>Login</li>
              <li>Register</li>
              <li>Doctor Dashboard</li>
            </ul>
          </div>
          <div className="f4">
            <h1>Contact Us</h1>
            <ul>
              <li>
22, Sri Kanchi Nagar, Cheranmanagar,
Coimbatore, India.</li>
              <li><i></i> +91 9942576886</li>
              <li> www.dreamstechnologies.com</li>
              <li>business@dreamstechnologies.com</li>
            </ul>
          </div>
        </div>
         <div className="verify">
         <p>&copy; 2023 HOSPITAL MANAGEMENT. All rights reserved.</p>
         </div>
      </footer>
    </div>
  );
};

export default Home;


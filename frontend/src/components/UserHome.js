import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import UserVotePage from "./UserVotePage";
import UserNav from "./UserNav";
import Foot from './foot'

function UserHome() {
  const location = useLocation();
  const id = location.pathname.split("/").pop(); 
  const host = process.env.REACT_APP_HOST
  const [userData, setUserData] = useState({
    name: "",
    Id: "",
    phoneNumber: "", 
    address: "",
    DateOfBirth:"",
    Gender:""
  });

  useEffect(() => {
    if (id) {
      fetch(`${host}/VoterListRoute/get-voter/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data) { 
            const user = data;
            setUserData({
              name: user.name,
              Id: user.Id,
              phoneNumber: user.PhoneNumber, 
              address: user.Address,
              DateOfBirth:user.DateOfBirth,
              Gender:user.Gender
            });
          } else {
            console.error("No user data found for id:", id);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [id]);
  return (
    <div >
      <UserNav/>
    <div className="container " >
      <div className="row jusfify-content-center mb-5 mt-4">
      <h1 className="container text-center" style={{textDecoration:"underline" ,textUnderlineOffset:"6px" ,fontFamily:"var(--font3)"}}>Your Details <i class="fa-solid fa-circle-info"></i></h1>
        
      <div className="col-md-6 usernavFont">
              <p style={{paddingLeft:"0.8vh",fontWeight:"bolder",fontSize:"3vh"}} className="mt-3">Name</p>
              <div style={{ border: "1px solid #D0D0D0",borderRadius:"7px",backgroundColor:"#D0D0D0	" }}>
                <p style={{padding:"1vh 0vh 0vh 1vh",fontSize:"3vh"}}>{userData.name}</p>
              </div>

              <p style={{paddingLeft:"0.8vh",fontWeight:"bolder",fontSize:"3vh"}} className="mt-3">Id</p>
              <div style={{ border: "1px solid #D0D0D0",borderRadius:"7px",backgroundColor:"#D0D0D0	" }}>
                <p style={{padding:"1vh 0vh 0vh 1vh",fontSize:"3vh"}}>{userData.Id}</p>
              </div>
                <div style={{ overflowX: "hidden", whiteSpace: "nowrap" }}>
                    <p style={{paddingLeft:"0.8vh",fontWeight:"bolder",fontSize:"3vh"}} className="mt-3">Phone Number</p>
              </div>
              <div style={{ border: "1px solid #D0D0D0",borderRadius:"7px",backgroundColor:"#D0D0D0	" }}>
                <p style={{padding:"1vh 0vh 0vh 1vh",fontSize:"3vh"}}>{userData.phoneNumber}</p>
              </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div style={{ overflowX: "hidden", whiteSpace: "nowrap" }}>
              <p style={{paddingLeft:"0.8vh",fontWeight:"bolder",fontSize:"3vh"}} className="mt-3">Date of Birth</p>
      </div>
              <div style={{ border: "1px solid #D0D0D0",borderRadius:"7px",backgroundColor:"#D0D0D0	" }}>
                <p style={{padding:"1vh 0vh 0vh 1vh",fontSize:"3vh"}}>{userData.DateOfBirth}</p>
              </div>
              
              <p style={{paddingLeft:"0.8vh",fontWeight:"bolder",fontSize:"3vh"}} className="mt-3 ">Address</p>
              <div style={{ border: "1px solid #D0D0D0",borderRadius:"7px",backgroundColor:"#D0D0D0	" }} >
                <p style={{padding:"1vh 0vh 0vh 1vh",fontSize:"3vh"}} >{userData.address}</p>
              </div>
              <p style={{paddingLeft:"0.8vh",fontWeight:"bolder",fontSize:"3vh"}} className="mt-3 ">Gender</p>
              <div style={{ border: "1px solid #D0D0D0",borderRadius:"7px",backgroundColor:"#D0D0D0	" }} >
                <p style={{padding:"1vh 0vh 0vh 1vh",fontSize:"3vh"}} >{userData.Gender}</p>
              </div>
          </div>
          </div>
      <UserVotePage Id={userData.Id}/>
      
    </div>
                <Foot/>
    </div>
  );
}

export default UserHome;

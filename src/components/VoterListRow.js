import Axios from "axios";
import {Link} from "react-router-dom";
function VoterListRow(props)
{
    const {_id,name,Id,PhoneNumber,Address,DateOfBirth,Gender} = props.obj; //Object destruction
   
    const handleClick = () =>{
        Axios.delete("http://localhost:5000/VoterListRoute/delete-Voter/" + _id )
        .then((res)=>{
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
   
    return(
        <tr class="text-center">
            <td>{name}</td>
            <td>{Id}</td>
            <td>{PhoneNumber}</td>
            <td>{Address}</td>
            <td>{DateOfBirth}</td>
            <td>{Gender}</td>
            <td class="d-flex align-items-center justify-content-center">
                <Link class="text-decoration-none text-light" to={"/Admin/EditVoter/"+_id}><button class="btn btn-warning mr-2" style={{color:"white"}}>Edit <i class="fa-solid fa-pen-to-square"></i></button></Link>&ensp;
                <span style={{cursor:"pointer"}} onClick={handleClick}><i class="fa-solid fa-trash-can"></i></span>
            </td>
        </tr>
    )
}
export default VoterListRow;


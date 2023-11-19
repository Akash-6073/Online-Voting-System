import Axios from "axios";
import {Link} from "react-router-dom";
function AdminListRow(props)
{
    const {_id,name,username,phonenumber,email,address,password} = props.obj; //Object destruction
   
    const handleClick = () =>{
        Axios.delete("http://localhost:5000/AdminsRoute/delete-Admin/" + _id )
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
            <td>{username}</td>
            <td>{phonenumber}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{password}</td>
            <td class="d-flex justify-content-center align-items-center">
                <Link class="text-decoration-none text-light" to={"/Admin/EditAdmin/"+_id}><button class="btn btn-warning mr-2" style={{color:"white"}}>Edit <i class="fa-solid fa-pen-to-square"></i></button></Link>&ensp;
                <span style={{cursor:"pointer"}} onClick={handleClick} class=""><i class="fa-solid fa-trash-can"></i></span>
            </td>
        </tr>
    )
}
export default  AdminListRow;


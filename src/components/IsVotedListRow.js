import Axios from "axios";
function IsVotedListRow(props)
{
    const {_id,Id,PartyVoted} = props.obj; //Object destruction
    
    const handleClick = () =>{
        Axios.delete("http://localhost:5000/ISVotedRoute/delete-isvoted/" + _id )
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
            <td>{Id}</td>
            <td>{PartyVoted}</td>
            <td class="d-flex justify-content-center">
                <button onClick={handleClick} class="btn btn-secondary">Delete <i class="fa-solid fa-trash-can"></i></button>
            </td>
        </tr>
    )
}
export default IsVotedListRow;


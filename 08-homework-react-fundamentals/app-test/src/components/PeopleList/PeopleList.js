import userList from "../helper/userList";
import PeopleListStyled from "./PeopleListStyled";


const PeopleList = () => {

    return (
        <>
            < PeopleListStyled>
                <h3>People who recommend us</h3>
                {userList.map(user => <li key={user.id}>{user.name}</li>)}
            </PeopleListStyled>
        </>

    )


}





export default PeopleList;
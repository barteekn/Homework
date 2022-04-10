import { StyledList } from "./List.styled";

const List = ({list}) => {
const renderList = () => list.map(listElement =>(
        <li key={listElement.id}>
            {listElement.user}
        </li>
        
    ));
         return (
        <StyledList>
            <h2>Muzyka relaksujeeeee:</h2>
                {renderList()}    
        </StyledList>
    )
};

export default List;
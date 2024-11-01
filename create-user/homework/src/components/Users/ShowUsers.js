import UserInfo from "./UserInfo";

const ShowUsers = (props) => {

    return (
        <div className="users">
            {props.users.map((user) => (
                <UserInfo 
                    key={user.id}
                    name={user.name}
                    age={user.age}
                />
            ))}            
        </div>
    )

}

export default ShowUsers;
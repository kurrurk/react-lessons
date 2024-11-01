import NewUserForm from './NewUserForm';

const CreateUser= (props) => {

    const saveUserDataHandler = (inputNewUser) => { 

        const newUser = {
            ...inputNewUser,
            id: Math.random().toString()
        }

        props.onAddNewUser(newUser);

    };

    return (
        <div className='create-new-user'>
            <NewUserForm onSaveUserData={saveUserDataHandler}/>
        </div>
    )

}

export default CreateUser;
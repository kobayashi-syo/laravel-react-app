import NavBar from "../../Components/NavBar";

const Index = (props) => {
    return (
        <>
            <h1>ユーザー一覧</h1>
            <ul>
                {props.users.map((user) => (
                    // <li key={user.id}>{user.name}</li>
                    <li>
                        <ul>
                            <li key={user.id}>{user.name}</li>
                            <li key={user.id}>{user.email}</li>
                        </ul>
                    </li>
                ))}
            </ul>
            <NavBar />
        </>
    );
};

export default Index;

import { useEffect, useState } from 'react';
import { CardImg, CardTitle, Card } from 'reactstrap';
import '../index.css';

const UserDetail = () => {
const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch("https://reqres.in/api/users")
        .then(res =>res.json())
        .then(gfg => {console.log(gfg.data); setUsers(gfg.data)} );

        // console.log(users[1].id)
    },[])
    

    return(
        <>
        <p>HI</p>
        {users.map((item) => {
        return (
        <Card>
            <CardImg 
                src={`${item.avatar}`}
                style={
                    {
                        height: "20%",
                        width:"20%",
                        display:"block",
                        margin: "0 auto"
                    }
                }
             />
            <CardTitle className='a'>{item.first_name}</CardTitle>
        </Card>
        );
        })
        }

    </>

    );
}
export default UserDetail;
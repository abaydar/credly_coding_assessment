import React, { useState, useEffect } from 'react'
import User from './User'

export default function UserList() {

    const [users, setUsers] = useState([])

    const fetchUsers = () => {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => setUsers(users))
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            <ul className='users'>
                {users.map(user => (
                    <User key={user.id} user={user}/>
                ))}
            </ul>
        </div>
    )
}

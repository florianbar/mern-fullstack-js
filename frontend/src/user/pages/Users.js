import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {id: "u1", name: "Flo Bar", image: "dsa", places: 2 },
        {id: "u2", name: "Candy Bar", image: "dsad", places: 4 }
    ];

    return <UsersList items={USERS} />;
};

export default Users;
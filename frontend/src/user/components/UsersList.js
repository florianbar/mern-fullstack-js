import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card/Card';
import './UsersList.css';

const UsersList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No users found.</h2>
                </Card>
            </div>
        );
    }

    const items = props.items.map(user => (
        <UserItem 
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places} 
        />
    ));

    return (
        <ul className="users-list">
            {items}
        </ul>
    );
};

export default UsersList;
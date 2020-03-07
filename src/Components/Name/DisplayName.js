import React from 'react';
// context consumer
import { ShowDataConsumer } from '../../Context/ShowData.context';

const DisplayName = () => {
    return (
        <ShowDataConsumer>
            {({ user }) => (
                <div>
                    <div data-testid='username'>{user}</div>
                </div>
            )}
        </ShowDataConsumer>
    )
}

export default DisplayName;
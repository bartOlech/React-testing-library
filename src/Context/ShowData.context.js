import React, { Component } from 'react';

const ShowDataContext = React.createContext();

export class ShowDataProvider extends Component {
    state = {
        user: 'Bart'
    }

    render() {
        const { children } = this.props;
        const { user } = this.state;

        return (
        <ShowDataContext.Provider value={{
            user
        }}>
                {children}
            </ShowDataContext.Provider>
        )
    }
}

export const ShowDataConsumer = ShowDataContext.Consumer;
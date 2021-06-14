import React from 'react';
import { useHistory } from 'react-router';
import './Main.scss';

const Main = () => {

    let history = useHistory();

    return (
        <div className="Main">
            <button onClick={() => {
                history.push('./room')
            }}>방 구경가기 👀</button>            
        </div>
    );
};

export default Main;
import React from 'react';
import { useHistory } from 'react-router';
import './Main.scss';

const Main = () => {

    let history = useHistory();

    return (
        <div className="Main">
            <h1>어떤 방을 찾으세요?</h1>
            <button onClick={() => {
                history.push('./rooms')
            }}>방 구경가기 👀</button>            
        </div>
    );
};

export default Main;
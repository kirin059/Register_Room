import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import './Main.scss';

const Main = (props) => {
    console.log(props.state)

    let history = useHistory();

    return (
        <div className="Main">
            <div className="introduce">
                <h1>어떤 방을 찾으세요?</h1>
                <button onClick={() => {
                    history.push('./rooms')
                }}>방 구경가기 👀</button>
            </div>
            <div className="recommend">
                <p>방방의 추천 매물</p>
                <ul>
                    {
                        props.state.map((a,i) => {
                            return (
                                <li><img src={props.state[i].thumbnail} onClick={() => {
                                    history.push("/rooms")
                                }}/></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

function Props(state) {
    return {
        state: state
    }
}
export default connect(Props)(Main);
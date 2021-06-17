import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const SelectedList = (props) => {
    let history = useHistory();
    let [list, setList] = useState(props.state);
    return (
        <div className="info_container">
               {
                    list&&list.map((a, i) => {
                        return (
                            <div className="main_info" key={i}>
                                <img src={list[i].thumbnail} alt="room image" onClick={() => {
                                    history.push('./room/' + list[i].pk)
                                }}/>
                                <div className="sub_info">
                                    <p>가격: {list[i].depositAmount}</p>
                                    <p>주소: {list[i].address}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
    );
};

function Props(state) {
    return {
        state: state
    }
}
export default connect(Props)(SelectedList);

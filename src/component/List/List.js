import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import './List.scss';

const List = (props) => {
    console.log(props.state)
    
    let history = useHistory();

    function showTab() {
        let tab = document.querySelector('.tab_container');
        tab.style.display = 'block'
    }

    let [list, setList] = useState([]);

    useEffect(() => {
        setList(props.state)
    }, [])
    console.log(list)


    return (
        <div className="List">
            <div className="header">
                <span onMouseOver={() => { showTab() }}>방 목록 전체보기</span>
            </div>
            <div className="tab_container">
                <div className="tab">
                    <p onClick={() => { setList(props.state.filter(item => item.canceled == true)) }}>올린 방</p>
                    <p onClick={() => { setList(props.state.filter(item => item.canceled == false)) }}>내린 방</p>
                </div>             
            </div>            
            <div className="info_container">
               {
                    list.map((a, i) => {
                        return (
                            <div className="main_info" key={i}>
                                <img src={props.state[i].thumbnail} alt="room image" onClick={() => {
                                    history.push('./room/' + props.state[i].pk)
                                }}/>
                                <div className="sub_info">
                                    <p>가격: {props.state[i].depositAmount}</p>
                                    <p>주소: {props.state[i].address}</p>
                                </div>
                            </div>
                        )
                    })
                } 
            </div>
            <button onClick={() => { history.push('/room/register') }}>방 등록하기</button> 
        </div>
    );
};

function Props(state) {
    return {
        state: state
    }
}
export default connect(Props)(List);


  

           
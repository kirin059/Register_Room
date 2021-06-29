import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import './List.scss';

const List = (props) => {
    
    let history = useHistory();

    function showTab() {
        let tab = document.querySelector('.tab_container');
        tab.style.display = 'block'
    }
     
    return (
        <div className="List">
            <div className="header">
                <span onMouseOver={() => { showTab() }}>방 목록 전체보기 👆</span>
            </div>
            <div className="tab_container">
                <div className="tab">
                    <p onClick={() => { props.dispatch({type: 'upload'}) }}>올린 방</p>
                    <p onClick={() => { props.dispatch({type: 'download'}) }}>내린 방</p>
                </div>             
            </div>            
            <div className="info_container">
               {
                    props.state.map((a, i) => {
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
            <button onClick={() => { history.push('/room/register') }}><i class="fas fa-plus-circle"></i></button>      
        </div>
    );
};

function Props(state) {
    return {
        state: state
    }
}
export default connect(Props)(List);


  

           
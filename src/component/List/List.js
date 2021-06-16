import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import './List.scss';

import itemData from '../../itemData';  // 임의로 현재 페이지에 state값 지정해보자

const List = (props) => {
    
    let history = useHistory();

    function showTab() {
        let tab = document.querySelector('.tab_container');
        tab.style.display = 'block'
    }

    let [list, setList] = useState(itemData);

    // useEffect(() => {
    //     setList( [...list])
    // }, [])
    console.log(list)


    return (
        <div className="List">
            <div className="header">
                <span onMouseOver={() => { showTab() }}>방 목록 전체보기</span>
            </div>
            <div className="tab_container">
                <div className="tab">
                    <p onClick={() => { setList(list.filter(item => item.canceled == true)) }}>올린 방</p>
                    <p onClick={() => { setList(list.filter(item => item.canceled == false)) }}>내린 방</p>
                </div>             
            </div>            
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


  

           
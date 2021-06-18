import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import './Detail.scss';

const Detail = (props) => {
    let history = useHistory();
    let { pk } = useParams();
    let selectedRoom = props.state.find(function (a) {
        return a.pk == pk;
    });
    
    
    function roomOff() {
        let roomOff = document.querySelector('.roomOff');
        let mainInfo = document.querySelector('.main_info');

        roomOff.addEventListener('click', () => {
            mainInfo.style.display = 'none';
        })
    }

    return (
        <div className="Detail">
            <div className="header">
                <span>방 상세 정보</span>
            </div>
       
            <div className="main_info">
                <img src={selectedRoom.thumbnail} alt="room image" />
                <div className="sub_info">
                    <div className="sub_info_top">
                        <p>{selectedRoom.realEstate} / {selectedRoom.realEstatePriceType}</p> {/* 전세면 임대료 항목 안보이게 */}
                        <p className="price">{selectedRoom.depositAmount}</p>
                    </div>
                    <div className="sub_info_main">
                        <p>주소: {selectedRoom.address} { selectedRoom.detailAddress}</p>
                        <p>공급면적: {selectedRoom.leasableArea} m2</p>
                        <p>해당층: {selectedRoom.floor} 층</p>
                        <p>방향: {selectedRoom.sunlightDirection} </p>
                        <p>임대료: {selectedRoom.rentAmount} 원</p>
                    </div>
                    <div className="sub_info_bottom">
                        <p>관리비: {selectedRoom.maintenanceFee} </p>
                        <p>관리항목: {selectedRoom.maintenanceFeeItems} </p>
                        <p>반려동물: {selectedRoom.pet} </p>
                    </div>
                    
                    
                    
                </div>
            </div>

            {
                selectedRoom.canceled === true
                    ? (<div>
                            <button className="roomOff" onClick={roomOff}>방내리기</button>
                            <button onClick={() => { history.push('/room/register') }}>수정</button>
                        </div>)
                    :<button onClick={() => { history.push('/room/register') }}>방올리기</button>
            }
            

        
        </div>
    );
};

function Props(state) {
    return {
        state: state
    }
}
export default connect(Props)(Detail);
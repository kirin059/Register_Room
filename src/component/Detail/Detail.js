import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import './Detail.scss';

const Detail = (props) => {
    let history = useHistory();
    let { pk } = useParams();
    let selectedRoom = props.state.find(function(a) {
        return a.pk == pk;
    });

    function roomOff() {
        let mainInfo = document.querySelector('.main_info');
        let roomOff = document.querySelector('.roomOff');
        mainInfo.style.display = 'none';
        roomOff.disabled="disabled"
    }

   const [roomInfo, setRoomInfo] = useState({
        img: selectedRoom.thumbnail,
        address: selectedRoom.address,
        detailAddress: selectedRoom.detailAddress,
        realEstate: selectedRoom.realEstate,
        realEstatePriceType: selectedRoom.realEstatePriceType,
        depositAmount: selectedRoom.depositAmount,
        rentAmount: selectedRoom.rentAmount,
        maintenanceFee: selectedRoom.maintenanceFee,
        maintenanceFeeItems: selectedRoom.maintenanceFeeItems,
        floor: selectedRoom.floor,
        sunlightDirection: selectedRoom.sunlightDirection,
        leasableArea: selectedRoom.leasableArea,       
        pet: selectedRoom.pet,
        car: selectedRoom.car,
        canceled: selectedRoom.canceled
   })
    
    sessionStorage.setItem("users", JSON.stringify(roomInfo));

    return (
        <div className="Detail">
            <div className="header">
                <span>방 상세 정보</span>
            </div>
       
            <div className="main_info">
                <img src={roomInfo.img} alt="room image" />
                <div className="sub_info">
                    <div className="sub_info_top">
                        <p>{roomInfo.realEstate} / {roomInfo.realEstatePriceType}</p>
                        <p className="price">{roomInfo.depositAmount}</p>
                    </div>
                    <div className="sub_info_main">
                        <p>주소: {roomInfo.address} { roomInfo.detailAddress}</p>
                        <p>공급면적: {roomInfo.leasableArea} m2</p>
                        <p>해당층: {roomInfo.floor} 층</p>
                        <p>방향: {roomInfo.sunlightDirection} </p>
                        {
                            roomInfo.realEstate === "MONTHLY"
                                ? (<p>임대료: {roomInfo.rentAmount} 원</p>)
                                : null
                        }
                    </div>
                    <div className="sub_info_bottom">
                        <p>관리비: {roomInfo.maintenanceFee} </p> 
                        <p>관리항목:
                         {
                                roomInfo.maintenanceFeeItems.map((a, i) => {
                                return (<span style={{'marginRight': '10px'}}>{roomInfo.maintenanceFeeItems[i]}</span>)
                            })
                         }
                         </p>
                        {
                            roomInfo.pet == true
                                ? (<p>반려동물: 가능 </p>)
                                : (<p>반려동물: 불가능 </p>)
                        }
                        {
                            roomInfo.car == true
                                ? (<p>주차: 가능 </p>)
                                : (<p>주차: 불가능 </p>)
                        } 
                    </div> 
                </div>
            </div>
            {
                roomInfo.canceled === true
                ? (<div>
                        <button className="roomOff" onClick={roomOff}>방내리기</button>
                    </div>)
                :(<button className="roomModify" onClick={() => {
                    history.push('/room/register') }}>수정</button>)
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
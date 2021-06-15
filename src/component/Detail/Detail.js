import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import './Detail.scss';

const Detail = (props) => {

    let { pk } = useParams();

    let selectedRoom = props.state.find(function (a) {
        return a.pk == pk;
    });
    console.log(selectedRoom)

    return (
        <div className="Detail">
            <div className="header">
                <span>방 상세 정보</span>
            </div>
   
           
       
            <div className="main_info">
                <img src={selectedRoom.thumbnail} alt="room image" />
                <div className="sub_info">
                    <p>가격: {selectedRoom.depositAmount}</p>
                    <p>주소: {selectedRoom.address}</p>
                    <p>상세주소: { selectedRoom.detailAddress}</p>
                </div>
            </div>

        
        </div>
    );
};

function Props(state) {
    return {
        state: state
    }
}
export default connect(Props)(Detail);
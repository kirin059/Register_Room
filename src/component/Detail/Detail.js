import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import './Detail.scss';

const Detail = (props) => {

    let { roomPK } = useParams();
    let selectedRoom = props.state.find(function (a) {
        return a.pk == roomPK;
    });
    console.log(selectedRoom)

    return (
        <div className="Detail">
            <div className="header">
                <span>방 상세 정보</span>
            </div>
            {
                selectedRoom&&selectedRoom.map((a, i) => {
                    return (
                        <div className="main_info" key={i}>
                            <img src={selectedRoom[i].thumbnail} alt="room image" />
                            <div className="sub_info">
                                <p>가격: {selectedRoom[i].depositAmount}</p>
                                <p>주소: {selectedRoom[i].address}</p>
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
export default connect(Props)(Detail);
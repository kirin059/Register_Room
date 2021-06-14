import React from 'react';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import './List.scss';

const List = (props) => {

    let history = useHistory();

    return (
        <div className="List">
            
            <Nav justify variant="tabs" defaultActiveKey="/home" className="tab_container">
                <Nav.Item>
                    <Nav.Link href="/home" className="tab">올린 방</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className="tab">내린 방</Nav.Link>
                </Nav.Item>
            </Nav>

            
                {
                    props.state.map((a, i) => {
                        return (
                            <div className="info_container" ket={i}>
                                <img src={props.state[i].thumbnail} alt="room image" />
                                <p>가격: {props.state[i].depositAmount}</p>
                                <p>주소: {props.state[i].address}</p>
                            </div>
                        )
                    })
                }
                
            
            <div className="footer">
                <button onClick={() => {
                    history.push('/room/register');
                }}>방 등록 페이지 이동</button>
            </div>
            
            
        </div>
    );
};

function Props(state) {
    return {
        state: state
    }
}
export default connect(Props)(List);

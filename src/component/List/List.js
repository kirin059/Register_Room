import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { CSSTransition } from 'react-transition-group';
//import Tab from '../Tab/Tab';
import './List.scss';

const List = (props) => {

    let history = useHistory();

    // let [push, setPush] = useState(0)
    // let [switchs, setSwitchs] = useState(false)  //CSSTransition

    // function switchTab() {
    //     if (push === 0) {
    //         if (props.state.canceled === true) {
    //             return setSwitchs(true)
    //         }     
    //     }
    //     else if (props.state.canceled === false && push === 1) {
    //         setSwitchs(!switchs)
    //     }
    // }
    

    // useEffect(() => {
    //     switchTab()  
    //          });

    return (
        <div className="List">
            
            <Nav justify variant="tabs" defaultActiveKey="link-0" className="tab_container">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" className="tab" onClick={() => { props.dispatch({type: 'upload'}) }}>올린 방</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className="tab" onClick={() => { props.dispatch({type: 'download'}) }}>내린 방</Nav.Link>
                </Nav.Item>
            </Nav>
                
            
            {/* <CSSTransition in={switchs} classNames="effect" timeout={500}>   */}
                {/* <Tab push={push} setSwitchs={setSwitchs}/> */}
                <>
                {
                    props.state.map((a, i) => {
                        return (
                            <div className="info_container" key={i}>
                                <img src={props.state[i].thumbnail} alt="room image" />
                                <p>가격: {props.state[i].depositAmount}</p>
                                <p>주소: {props.state[i].address}</p>
                            </div>
                        )
                    })
                } 
                </>
            {/* </CSSTransition> */}
            
            <div className="footer">
                <button onClick={() => { history.push('/room/register') }}>방 등록 페이지 이동</button>
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


  

           
// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';

// const Tab = (props) => {

//     useEffect( ()=> {
//         props.setSwitchs(true)
//     });

//     if (props.push === 0 || props.state.canceled === true) {
//         return (
//             <div className="info_container">
//                 <img src={props.state.thumbnail} alt="room image" />
//                 <p>가격: {props.state.depositAmount}</p>
//                 <p>주소: {props.state.address}</p>
//             </div >
//             }
//         )
//     else if (props.push === 1 || props.state.canceled === false) {
//         return (
//             <div className="info_container">
//                 <img src={props.state.thumbnail} alt="room image" />
//                 <p>가격: {props.state.depositAmount}</p>
//                 <p>주소: {props.state.address}</p>
//             </div>
                
//          )
//     }
// };

// function Props(state) {
//     return {
//         state: state
//     }
// }
// export default connect(Props)(Tab);
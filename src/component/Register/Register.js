import React, { useState } from 'react';
import { ModalBody } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import Modal from '../Modal/Modal';
import './Register.scss';

const Register = (props) => {
    // window.addEventListener("beforeunload", function (e) {
    //     e.preventDefault();
    //     e.returnValue = "";
    //   });
    
//       let backControl = function(callbackFunction) {
//         //window 내 mouse 위치 여부를 체크하기 위한 변수 
//         window.innerDoc = false; 		

//         window.addEventListener('mouseover', function() {    
//             window.innerDoc = true;
//         }); 
//         window.addEventListener('mouseout', function() {                
//             window.innerDoc = false;
//         });
          
//         // 바로 이전 페이지로 이동하는 것을 막기위해 history State 추가 
//         history.pushState({page:"first"},  document.title, location.pathname + '#first');
        
//         //popstate Event Listener 
//         window.addEventListener('popstate', function() { 
//             // history State 추가하여 페이지 이동 막음 (뒤로가기 막기)
//             history.pushState({page:"historyChanged"},  document.title, location.pathname + '#changed');	
          
//             // window 영역 밖에서 history가 변경 됐을경우 callbackFunction 실행 ( 뒤로가기 버튼 등 )  
//             // 이전 POST 페이지에 정상적으로 데이터 재전송하여 SUBMIT 등 수행
//             if (!window.innerDoc) { 
//                 callbackFunction();
//             } 
//         });  
//   }
  
//   // window 영역 밖의 핸들링 되지 않은 버튼으로 history 변경 이동했을 경우 실행할 Function
//   var callbackFunction = function() {
//       // document.referrer 등 체크하여 이전 POST 페이지로 정상 이동 할 수 있도록 데이터 생성 및 추가 및 submit
//       // window 내 버튼 등을 통한 이동 외에 페이지 이동 불가 alret 안내 등 처리 
//   }
  
//   //뒤로가기 방지 이벤트
//   backControl(callbackFunction);
    
 
    
    // window.history.pushState(null, '', ['./room/register']);
    // window.onpopstate = () => { history.go(1);  };

    let [input, setInput] = useState('');
    let [inputs, setInputs] = useState('');

    let { pk } = useParams();
    let selectedRoom = props.state.find(function (a) {
        return a.pk == pk;
    });
    
    let [modal, setModal] = useState(false)
      
    function monthly() {
        let monthly = document.querySelector('.monthly')
        let jeonse = document.querySelector('.jeonse')
        let selling = document.querySelector('.selling')

        if (monthly.style.display == 'none') {
            monthly.style.display = 'block';
            jeonse.style.display = 'none';
            selling.style.display = 'none';
        } else {
            monthly.style.display = 'none';
        }
    }

    function jeonse() {
        let jeonse = document.querySelector('.jeonse')
        let monthly = document.querySelector('.monthly')
        let selling = document.querySelector('.selling')

        if (jeonse.style.display == 'none') {
            jeonse.style.display = 'block';
            monthly.style.display = 'none';
            selling.style.display = 'none';
        } else {
            jeonse.style.display = 'none';
        }  
    }

    function selling() {
        let selling = document.querySelector('.selling')
        let jeonse = document.querySelector('.jeonse')
        let monthly = document.querySelector('.monthly')

        if (selling.style.display == 'none') {
            selling.style.display = 'block';
            jeonse.style.display = 'none';
            monthly.style.display = 'none';
        } else {
            selling.style.display = 'none';
        }
    }

    function scrollPrevent() {
        let body = document.querySelector('body')
        body.style.overflow = 'hidden'
    }
    

    return (
        <div className="Register">
            <div className="header">
                <span>방 등록하기</span>
            </div>

            <form name="form">
                <div className="info_frame">
                    <header>매물 기본 정보</header>
                 
                    <div className="main">
                        <div className="category">주소</div>
                        <div className="content">
                            <input type="text" placeholder="주소" />
                            <input type="text" placeholder="상세주소" />
                        </div>
                    </div>
                    <div className="main">
                        <div className="category">매물 종류</div>
                        <div className="content_flex">
                            <input type="radio" id="select1" name="room"/><label for="select1">원룸</label>
                            <input type="radio" id="select2" name="room"/><label for="select2">투룸</label>
                            <input type="radio" id="select3" name="room" /><label for="select3">아파트</label>
                            <input type="radio" id="select4" name="room"/><label for="select4">오피스텔</label>
                        </div>
                        </div>
                    <div className="main">
                        <div className="category">거래 종류</div>
                        <div className="content_flex">
                            <input type="radio" id="select5" name="price" onClick={ monthly }/><label for="select5">월세</label>
                            <input type="radio" id="select6" name="price" onClick={ jeonse }/><label for="select6">전세</label>
                            <input type="radio" id="select7" name="price" onClick={ selling }/><label for="select7">매매</label>
                        </div>
                    </div>
                    <div className="main monthly" style={{ "display": "none" }}>
                        <div className="content_flex">
                            <div className="category" style={{"backgroundColor":"#fae69d"}}>월세</div>
                            <input type="number" placeholder="보증금(월세)" />
                            <input type="number" placeholder="임대료(월세)" />
                        </div>
                    </div>
                    <div className="main jeonse" style={{ "display": "none" }}>
                        <div className="content_flex">
                            <div className="category" style={{"backgroundColor":"#fae69d"}}>전세</div>
                            <input type="number" placeholder="보증금(전세)" />
                        </div>
                    </div>
                    <div className="main selling" style={{ "display": "none" }}>
                        <div className="content_flex">
                            <div className="category" style={{"backgroundColor":"#fae69d"}}>매매</div>
                            <input type="number" placeholder="매매가" />
                        </div>
                    </div> 
                </div>
                <div className="info_frame">
                    <header>매물 상세 정보</header>
                    
                    <div className="main" id="maintenance">
                        <div className="category">관리비</div>
                        <div className="content">
                            <input type="number" placeholder="관리비 입력(전/월세)" />
                            <div className="content_flex maintenanceFeeItems">
                                <p>관리비항목<br /><span style={{'color':'#326CF9', 'fontSize':'14px'}}>(다중선택)</span></p>
                                <input type="checkbox" id="select8" /><label for="select8">전기</label>
                                <input type="checkbox" id="select9" /><label for="select9">가스</label>
                                <input type="checkbox" id="select10" /><label for="select10">수도</label>
                                <input type="checkbox" id="select11" /><label for="select11">인터넷</label>
                                <input type="checkbox" id="select12" /><label for="select12">TV</label>
                            </div>
                        </div>
                    </div>  
                    <div className="main">
                        <div className="category">층수</div>
                        <div className="content_flex">
                            <input type="radio" id="select13" name="step"/><label for="select13">1~80층</label>
                            <input type="radio" id="select14" name="step"/><label for="select14">옥탑</label>
                            <input type="radio" id="select15" name="step"/><label for="select15">반지하</label>
                        </div>
                    </div>
                    <div className="main">
                        <div className="category">방향</div>
                        <div className="content">
                            <div className="content_flex">
                                <input type="radio" id="select16" name="direction"/><label for="select16">EAST(동)</label>
                                <input type="radio" id="select17" name="direction"/><label for="select17">WEST(서)</label>
                                <input type="radio" id="select18" name="direction" /><label for="select18">SOUTH(남)</label>
                                <input type="radio" id="select19" name="direction" /><label for="select19">NORTH(북)</label>
                                <input type="radio" id="select20" name="direction"/><label for="select20">SOUTH_EAST(남동)</label>
                                <input type="radio" id="select21" name="direction" /><label for="select21">SOUTH_WEST(남서)</label>
                                <input type="radio" id="select22" name="direction"/><label for="select22">NORTH_WEST(북서)</label>
                                <input type="radio" id="select23" name="direction" /><label for="select23">NORTH_EAST(북동)</label>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                        <div className="category">전용 면적</div>
                        <div className="content_flex">
                            <input name="area_p" type="number" onChange={(e) => {
                                setInput(e.target.value * 3.31)
                                setInputs(e.target.value);
                            }} value={inputs} />
                            <p>평</p>
                            <input name="area_m" type="number" onChange={(e) => {
                                setInput(e.target.value)
                                setInputs(e.target.value / 3.31);
                            }} value={input} />
                            <p>m<sup>2</sup></p>
                        </div>
                    </div>
                   
                </div>
                <div className="info_frame">
                    <header>매물 추가 정보</header>
                    <div className="main">
                        <div className="category">반려동물</div>
                        <div className="content_flex">
                            <input type="radio" id="select24" name="animal"/><label for="select24">가능</label>
                            <input type="radio" id="select25" name="animal"/><label for="select25">불가능</label>
                        </div>
                    </div>
                    <div className="main">
                        <div className="category">주차 여부</div>
                        <div className="content_flex">
                            <input type="radio" id="select26" name="car"/><label for="select26">가능</label>
                            <input type="radio" id="select27" name="car"/><label for="select27">불가능</label>
                        </div>
                    </div>                    
                </div>
                <button type="button" id="submit" onClick={() => {
                    setModal(true);
                    scrollPrevent()
                }}>등록</button>
            </form>
            {
                    modal === true
                    ? <Modal setModal={setModal} />
                    : null
                }
        </div>
    );
};

function Props(state) {
    return {
        state: state
    }
}
export default connect(Props)(Register);

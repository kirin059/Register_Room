import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';
import './Register.scss';

const Register = (props) => {
    window.addEventListener("beforeunload", function (e) {
        e.preventDefault();
        e.returnValue = "";
      });

    let [input, setInput] = useState('');
    let [inputs, setInputs] = useState('');
    let [modal, setModal] = useState(false);
    let [detail, setDetail] = useState({
        realEstate: null,
        realEstatePriceType: null,
        depositAmount: 0,
        address: null,
        rentAmount: 0,
        detailAddress: null,
        leasableArea:null,
        floor: "",
        sunlightDirection: null,
        realEstate: null,
        maintenanceFee: null,
        maintenanceFeeItems: [],
        pet: false,
        canceled: false
    })
         
    function handleMonthly() {
        const monthly = document.querySelector('.monthly')
        const jeonse = document.querySelector('.jeonse')
        const selling = document.querySelector('.selling')
        if (monthly.style.display == 'none') {
            monthly.style.display = 'block';
            jeonse.style.display = 'none';
            selling.style.display = 'none';
        } else {
            monthly.style.display = 'none';
        }
    }

    function handleJeonse() {
        const monthly = document.querySelector('.monthly')
        const jeonse = document.querySelector('.jeonse')
        const selling = document.querySelector('.selling')
        if (jeonse.style.display == 'none') {
            jeonse.style.display = 'block';
            monthly.style.display = 'none';
            selling.style.display = 'none';
        } else {
            jeonse.style.display = 'none';
        }  
    }

    function handleSelling() {
        const monthly = document.querySelector('.monthly')
        const jeonse = document.querySelector('.jeonse')
        const selling = document.querySelector('.selling')
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

    function validation() {
        let address = document.querySelector('input[name=address]')
        let detailAddress = document.querySelector('input[name=detail_address]')
        let maintenance = document.querySelector('input[name=maintenance]')
        let area = document.querySelector('input[name=area_p]')
        let room = document.querySelectorAll('input[name=room]')
        let price = document.querySelectorAll('input[name=price]')
        let item = document.querySelectorAll('input[name=items]')
        let step = document.querySelectorAll('input[name=step]')
        let direction = document.querySelectorAll('input[name=direction]')
        let animal = document.querySelectorAll('input[name=animal]')
        let car = document.querySelectorAll('input[name=car]')
        let submit = document.querySelector('#submit')

        if ((!address.value || !detailAddress.value || !maintenance.value || !area.value) ||
            (!room[0].checked && !room[1].checked && !room[2].checked && !room[3].checked) ||
            (!price[0].checked && !price[1].checked && !price[2].checked) ||
            (!item[0].checked && !item[1].checked && !item[2].checked && !item[3].checked && !item[4].checked) ||
            (!step[0].checked && !step[0].checked && !step[0].checked) ||
            (!direction[0].checked && !direction[1].checked && !direction[2].checked && !direction[3].checked && !direction[4].checked && !direction[5].checked && !direction[6].checked && !direction[7].checked) ||
            (!animal[0].checked && !animal[1].checked) || (!car[0].checked && !car[1].checked)) {
            alert("모든 항목을 입력해주세요");
            submit.removeEventListener('click', handleSubmit)
            return false;
        } else {          
            handleSubmit()
            return false;
        }       
    }

    function handleSubmit() {
        setModal(true);
        scrollPrevent()
    }

    useEffect(() => {
        let info = sessionStorage.getItem('users');
        if (info) {
            info = JSON.parse(info);
            setDetail(info);
            setInput(info.leasableArea)
            setInputs(info.leasableArea / 3.31)
        }
    }, [])

    return (
        <div className="Register">
            <div className="header">
                <span>방 등록하기</span>
            </div>
            <form name="form" method="get" action="/" >
                <div className="info_frame">
                    <header>매물 기본 정보</header>
                    <div className="main">
                        <div className="category">주소</div>
                        <div className="content">
                            <input name="address" type="text" placeholder="주소" value={ detail.address }/>
                            <input name="detail_address" type="text" placeholder="상세주소" value={ detail.detailAddress }/>
                        </div>
                    </div>
                    <div className="main">
                        <div className="category">매물 종류</div>
                        <div className="content_flex">
                            <input type="radio" id="select1" name="room" /><label for="select1">원룸</label>
                            <input type="radio" id="select2" name="room"/><label for="select2">투룸</label>
                            <input type="radio" id="select3" name="room" /><label for="select3">아파트</label>
                            <input type="radio" id="select4" name="room" /><label for="select4">오피스텔</label>
                        </div>
                    </div>
                    <div className="main">
                        <div className="category">거래 종류</div>
                        <div className="content_flex">
                            <input type="radio" id="select5" name="price" onClick={ handleMonthly } /><label for="select5">월세</label>
                            <input type="radio" id="select6" name="price" onClick={ handleJeonse } /><label for="select6">전세</label>
                            <input type="radio" id="select7" name="price" onClick={ handleSelling } /><label for="select7">매매</label>
                        </div>
                    </div>
                    <div className="main monthly" style={{ "display": "none" }}>
                        <div className="content_flex">
                            <div className="category" style={{"backgroundColor":"#fae69d"}}>월세</div>
                            <input type="number" placeholder="보증금(월세)" value={ detail.depositAmount }/>
                            <input type="number" placeholder="임대료(월세)" value={ detail.rentAmount }/>
                        </div>
                    </div>
                    <div className="main jeonse" style={{ "display": "none" }}>
                        <div className="content_flex">
                            <div className="category" style={{"backgroundColor":"#fae69d"}}>전세</div>
                            <input type="number" placeholder="보증금(전세)" value={ detail.depositAmount }/>
                        </div>
                    </div>
                    <div className="main selling" style={{ "display": "none" }}>
                        <div className="content_flex">
                            <div className="category" style={{"backgroundColor":"#fae69d"}}>매매</div>
                            <input type="number" placeholder="매매가" value={ detail.depositAmount }/>
                        </div>
                    </div> 
                </div>
                <div className="info_frame">
                    <header>매물 상세 정보</header> 
                    <div className="main" id="maintenance">
                        <div className="category">관리비</div>
                        <div className="content">
                            <input name="maintenance" type="number" placeholder="관리비 입력(전/월세)" />
                            <div className="content_flex maintenanceFeeItems" style={{borderLeft:"none"}}>
                                <p>관리비항목<br /><span style={{'color':'#326CF9', 'fontSize':'14px'}}>(다중선택)</span></p>
                                <input type="checkbox" id="select8" name="items" /><label for="select8">전기</label>
                                <input type="checkbox" id="select9" name="items" /><label for="select9">가스</label>
                                <input type="checkbox" id="select10" name="items" /><label for="select10">수도</label>
                                <input type="checkbox" id="select11" name="items" /><label for="select11">인터넷</label>
                                <input type="checkbox" id="select12" name="items" /><label for="select12">TV</label>
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
                            <div className="content_flex" style={{borderLeft:"none"}}>
                                <input type="radio" id="select16" name="direction"/><label for="select16">EAST(동)</label>
                                <input type="radio" id="select17" name="direction"/><label for="select17">WEST(서)</label>
                                <input type="radio" id="select18" name="direction" /><label for="select18">SOUTH(남)</label>
                                <input type="radio" id="select19" name="direction" /><label for="select19">NORTH(북)</label>
                                <input type="radio" id="select20" name="direction" /><label for="select20">SOUTH_EAST(남동)</label>
                                <input type="radio" id="select21" name="direction" /><label for="select21">SOUTH_WEST(남서)</label>
                                <input type="radio" id="select22" name="direction" /><label for="select22">NORTH_WEST(북서)</label>
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
                <button type="button" id="submit" onClick={validation}>등록</button>
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

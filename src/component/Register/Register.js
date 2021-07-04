import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';
import './Register.scss';

const Register = (props) => {
    window.addEventListener("beforeunload", function (e) {
        e.preventDefault();
        e.returnValue = "";
      });
    let [address, setAdress] = useState('');
    let [detailAddress, setDetailAddress] = useState('');
    let [maintenanceFee, setMaintenanceFee] = useState('');
    let [deposit, setDeposit] = useState('');
    let [rentFee, setRentFee] = useState('');
    let [input, setInput] = useState('');
    let [inputs, setInputs] = useState('');
    let [modal, setModal] = useState(false);
    let [detail, setDetail] = useState({
        address: null,
        detailAddress: null,
        realEstate: null,
        realEstatePriceType: null,
        depositAmount: 0,
        rentAmount: 0,
        maintenanceFee: 0,
        maintenanceFeeItems: [],
        floor: [],
        sunlightDirection: null,
        leasableArea:0,
        pet: null,
        car: null,
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
        let room = document.querySelectorAll('input[name=realEstate]')
        let price = document.querySelectorAll('input[name=realEstatePriceType]')
        let item = document.querySelectorAll('input[name=items]')
        let floor = document.querySelectorAll('input[name=floor]')
        let direction = document.querySelectorAll('input[name=direction]')
        let animal = document.querySelectorAll('input[name=animal]')
        let car = document.querySelectorAll('input[name=car]')
        let submit = document.querySelector('#submit')

        if ((!address.value || !detailAddress.value || !maintenance.value || !area.value) ||
            (!room[0].checked && !room[1].checked && !room[2].checked && !room[3].checked) ||
            (!price[0].checked && !price[1].checked && !price[2].checked) ||
            (!item[0].checked && !item[1].checked && !item[2].checked && !item[3].checked && !item[4].checked) ||
            (!floor[0].checked && !floor[0].checked && !floor[0].checked) ||
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
            setAdress(info.address);
            setDetailAddress(info.detailAddress);
            setMaintenanceFee(info.maintenanceFee);
            setDeposit(info.depositAmount);
            setRentFee(info.rentAmount);
            setInput(info.leasableArea);
            setInputs(info.leasableArea / 3.31);
        }

        return () => {

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
                            <input name="address" type="text" placeholder="주소" onChange={ (e) => {setAdress(e.target.value)} } value={ address }/>
                            <input name="detail_address" type="text" placeholder="상세주소" onChange={ (e) => {setDetailAddress(e.target.value)} } value={ detailAddress }/>
                        </div>
                    </div>
                    <div className="main">
                        <div className="category">매물 종류</div>
                        <div className="content_flex">
                            <input type="radio" id="select1" name="realEstate"
                                checked={ detail.realEstate === 'SEMI_BASEMENT' ? true : null }
                                /><label for="select1">원룸</label>
                            <input type="radio" id="select2" name="realEstate"
                                checked={detail.realEstate === 'SEMI_BASEMENTs' ? true : null}
                            /><label for="select2">투룸</label>
                            <input type="radio" id="select3" name="realEstate"
                                checked={ detail.realEstate === 'APARTMENT' ? true : null}
                             /><label for="select3">아파트</label>
                            <input type="radio" id="select4" name="realEstate"
                                checked={ detail.realEstate === 'EFFICIENCY_APARTMENT' ? true : null}
                            /><label for="select4">오피스텔</label>
                        </div>
                    </div>

                    <div className="main">
                        <div className="category">거래 종류</div>
                        <div className="content_flex">
                            <input type="radio" id="select5" name="realEstatePriceType"
                                checked={ detail.realEstatePriceType === '월세' ? true : null}
                                onClick={handleMonthly} /><label for="select5">월세</label>
                            <input type="radio" id="select6" name="realEstatePriceType"
                                checked={detail.realEstatePriceType === '전세' ? true : null}
                                onClick={handleJeonse} /><label for="select6">전세</label>
                            <input type="radio" id="select7" name="realEstatePriceType"
                                checked={detail.realEstatePriceType === '매매' ? true : null}
                                onClick={handleSelling} /><label for="select7">매매</label>
                        </div>
                    </div>
                    <div className="main monthly" style={{ "display": "none" }}>
                        <div className="content_flex">
                            <div className="category" style={{"backgroundColor":"#fae69d"}}>월세 <br/>보증금/임대료</div>
                            <input type="number" placeholder="보증금(월세)" onChange={ (e) => {setDeposit(e.target.value)} } value={ deposit }/>
                            <input type="number" placeholder="임대료(월세)" onChange={ (e) => {setRentFee(e.target.value)} } value={ rentFee }/>
                        </div>
                    </div>
                    <div className="main jeonse" style={{ "display": "none" }}>
                        <div className="content_flex">
                            <div className="category" style={{"backgroundColor":"#fae69d"}}>전세 보증금</div>
                            <input type="number" placeholder="보증금(전세)" onChange={ (e) => {setDeposit(e.target.value)} } value={ deposit }/>
                        </div>
                    </div>
                    <div className="main selling" style={{ "display": "none" }}>
                        <div className="content_flex">
                            <div className="category" style={{"backgroundColor":"#fae69d"}}>매매가</div>
                            <input type="number" placeholder="매매가" onChange={ (e) => {setDeposit(e.target.value)} } value={ deposit }/>
                        </div>
                    </div> 
                </div>
                <div className="info_frame">
                    <header>매물 상세 정보</header> 
                    <div className="main" id="maintenance">
                        <div className="category">관리비</div>
                        <div className="content">
                            <input name="maintenance" type="text" placeholder="관리비 입력(전/월세)" onChange={ (e) => {setMaintenanceFee(e.target.value)} } value={ maintenanceFee }/>
                            <div className="content_flex maintenanceFeeItems" style={{borderLeft:"none"}}>
                                <p>관리비항목<br /><span style={{'color':'#326CF9', 'fontSize':'14px'}}>(다중선택)</span></p>
                                <input type="checkbox" id="select8" name="items"
                                checked={ detail.maintenanceFeeItems.includes("ELECTRIC") ? true : null}/><label for="select8">전기</label>
                                <input type="checkbox" id="select9" name="items"
                                checked={ detail.maintenanceFeeItems.includes("GAS") ? true : null}/><label for="select9">가스</label>
                                <input type="checkbox" id="select10" name="items"
                                checked={ detail.maintenanceFeeItems.includes("WATERWORKS") ? true : null}/><label for="select10">수도</label>
                                <input type="checkbox" id="select11" name="items"
                                checked={ detail.maintenanceFeeItems.includes("INTERNET") ? true : null}/><label for="select11">인터넷</label>
                                <input type="checkbox" id="select12" name="items"
                                checked={ detail.maintenanceFeeItems.includes("TV") ? true : null}/><label for="select12">TV</label>
                            </div>
                        </div>
                    </div>  
                    <div className="main">
                        <div className="category">층수</div>
                        <div className="content_flex">
                            {/* checked 다시 점검 */}
                            <input type="radio" id="select13" name="floor"
                                // detail.floor.some((i) => { return ["1", "2", "3", "7"].includes(i) }) ? true : null
                                checked={ detail.floor == "1" ? true : null}/><label for="select13">1~80층</label>
                            <input type="radio" id="select14" name="floor"
                            checked={ detail.floor == "top" ? true : null}/><label for="select14">옥탑</label>
                            <input type="radio" id="select15" name="floor"
                            checked={ detail.floor == "basement" ? true : null}/><label for="select15">반지하</label>
                        </div>
                    </div>
                    <div className="main">
                        <div className="category">방향</div>
                        <div className="content">
                            <div className="content_flex" style={{borderLeft:"none"}}>
                                <input type="radio" id="select16" name="direction"
                                checked={ detail.sunlightDirection == "EAST" ? true : null}/><label for="select16">EAST(동)</label>
                                <input type="radio" id="select17" name="direction"
                                checked={ detail.sunlightDirection == "WEST" ? true : null}/><label for="select17">WEST(서)</label>
                                <input type="radio" id="select18" name="direction"
                                checked={ detail.sunlightDirection == "SOUTH" ? true : null}/><label for="select18">SOUTH(남)</label>
                                <input type="radio" id="select19" name="direction"
                                checked={ detail.sunlightDirection == "NORTH" ? true : null}/><label for="select19">NORTH(북)</label>
                                <input type="radio" id="select20" name="direction"
                                checked={ detail.sunlightDirection == "SOUTH_EAST" ? true : null}/><label for="select20">SOUTH_EAST(남동)</label>
                                <input type="radio" id="select21" name="direction"
                                checked={ detail.sunlightDirection == "SOUTH_WEST" ? true : null}/><label for="select21">SOUTH_WEST(남서)</label>
                                <input type="radio" id="select22" name="direction"
                                checked={ detail.sunlightDirection == "NORTH_WEST" ? true : null}/><label for="select22">NORTH_WEST(북서)</label>
                                <input type="radio" id="select23" name="direction"
                                checked={ detail.sunlightDirection == "NORTH_EAST" ? true : null}/><label for="select23">NORTH_EAST(북동)</label>
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
                            <input type="radio" id="select24" name="animal"
                            checked={ detail.pet == true ? true : null}/><label for="select24">가능</label>
                            <input type="radio" id="select25" name="animal"
                            checked={ detail.pet == false ? true : null}/><label for="select25">불가능</label>
                        </div>
                    </div>
                    <div className="main">
                        <div className="category">주차 여부</div>
                        <div className="content_flex">
                            <input type="radio" id="select26" name="car"
                            checked={ detail.car == true ? true : null}/><label for="select26">가능</label>
                            <input type="radio" id="select27" name="car"
                            checked={ detail.car == false ? true : null}/><label for="select27">불가능</label>
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

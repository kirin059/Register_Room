import React from 'react';
import './Register.scss';

const Register = () => {
    return (
        <div className="Register">
            <div className="header">
                <span>방 등록하기</span>
            </div>

            <form>
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
                        <div className="category">가격 종류(전월세)</div>
                        <div className="content_flex">
                            <input type="radio" id="select5" name="price"/><label for="select5">월세</label>
                            <input type="radio" id="select6" name="price"/><label for="select6">전세</label>
                            <input type="radio" id="select7" name="price"/><label for="select7">매매</label>
                        </div>
                    </div>

                    {/* 월/전세/매매중 하나를 클릭하면 보이게 display:none한 뒤, 클릭하면 보여지도록*/}
                    {/* 월세*/}
                    <div className="main" style={{"display":"none"}}>
                        <div className="category" style={{"backgroundColor":"#fae69d"}}>월세</div>
                            <div className="content_flex">
                                <input type="number" placeholder="보증금" />
                                <input type="number" placeholder="임대료(월세)" />
                        </div>
                    </div>
                    {/* 전세*/}
                    <div className="main" style={{"display":"none"}}>
                        <div className="category" style={{"backgroundColor":"#fae69d"}}>전세</div>
                            <div className="content_flex">
                                <input type="number" placeholder="보증금(전세)" />
                        </div>
                    </div>
                    {/* 매매*/}
                    <div className="main" style={{"display":"none"}}>
                        <div className="category" style={{"backgroundColor":"#fae69d"}}>매매</div>
                            <div className="content_flex">
                                <input type="number" placeholder="보증금(전세)" />
                        </div>
                    </div>  
                </div>



                <div className="info_frame">
                    <header>매물 상세 정보</header>
                    \
                    <div className="main">
                        <div className="category">관리비(월/전세클릭시만 입력가능)</div>
                            <div className="content">
                                <input type="number" placeholder="관리비 입력" />
                                <input placeholder="관리 항목"></input>
                        </div>
                    </div>  

                        <div className="room_floor">층수</div>
                        <div className="room_sunlightDirection">방향</div>
                        <div className="room_leasableArea">전용 면적</div>
                   
                </div>

                <div className="info_frame">
                    <header>매물 추가 정보</header>
                   
                        <div className="room_pet">반려동물</div>
                        <div className="room_option">옵션 항목</div>
                    
                </div>

            </form>
        </div>
    );
};

export default Register;
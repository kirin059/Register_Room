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
                        <div className="category"><span>주소</span></div>
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
                    
                    {/* 월/전세클릭시만 입력가능 */}
                    <div className="main">
                        <div className="category">관리비</div>
                            <div className="content">
                                <input type="number" placeholder="관리비 입력" />
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
                            </div>
                            <div className="content_flex">
                                <input type="radio" id="select20" name="direction"/><label for="select20">SOUTH_EAST(남동)</label>
                                <input type="radio" id="select21" name="direction" /><label for="select21">SOUTH_WEST(남서)</label>
                                <input type="radio" id="select22" name="direction"/><label for="select22">NORTH_WEST(북서)</label>
                                <input type="radio" id="select23" name="directionep" /><label for="select23">NORTH_EAST(북동)</label>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                        <div className="category">전용 면적</div>
                        <div className="content_flex">
                            <input type="number" />
                            <p>평</p>
                            <input type="number" />
                            <p>m2</p>
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

                <button type="submit">등록</button>

            </form>
        </div>
    );
};

export default Register;
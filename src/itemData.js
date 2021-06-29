const roomItems = [
    {
        "pk": 1, 
        "address": "서울 성동구 왕십리로 125", // 주소
        "detailAddress": "KD타워 101호", // 상세주소
        "realEstate": "APARTMENT", // 매물종류
        "realEstatePriceType": "JEONSE", // 가격종류
        "depositAmount": 200000000, // 보증금 또는 매매가
        "rentAmount": 0, // 임대료
        "maintenanceFee": 100000, // 관리비
        "maintenanceFeeItems": ["ELECTRIC"], // 관리항목
        "floor": "1", // 층수
        "sunlightDirection": "NORTH", // 방향
        "leasableArea": 119.00, // 평수, m2
        "pet": true, // 애완동물 여부
        "thumbnail": "https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_960_720.jpg", // 썸네일 주소
        "canceled": false // 올린방, 내린방 여부
      },
      {
        "pk": 2,
        "address": "서울 성동구 왕십리로 125",
        "detailAddress": "KD타워 반지하",
        "realEstate": "SEMI_BASEMENT",
        "realEstatePriceType": "SELLING",
        "depositAmount": 500000000,
        "rentAmount": 0,
        "maintenanceFee": 0,
        "maintenanceFeeItems": [],
        "floor": "1",
        "sunlightDirection": "SOUTH",
        "leasableArea": 33.05,
        "pet": false,
        "thumbnail": "https://media.istockphoto.com/photos/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-up-picture-id1188452511?s=612x612",
        "canceled": false
      },
      {
        "pk": 3,
        "address": "서울 성동구 왕십리로 125",
        "detailAddress": "KD타워 710호",
        "realEstate": "EFFICIENCY_APARTMENT",
        "realEstatePriceType": "MONTHLY",
        "depositAmount": 200000000,
        "rentAmount": 1000000,
        "maintenanceFee": 50000,
        "maintenanceFeeItems": ["ELECTRIC", "WATERWORKS"],
        "floor": "7",
        "sunlightDirection": "SOUTH_EAST",
        "leasableArea": 231.40,
        "pet": false,
        "thumbnail": "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg",
        "canceled": true
      },
      {
        "pk": 4,
        "address": "서울 성동구 왕십리로 123",
        "detailAddress": "성동아파트 101호",
        "realEstate": "APARTMENT",
        "realEstatePriceType": "MONTHLY",
        "depositAmount": 300000000,
        "rentAmount": 2000000,
        "maintenanceFee": 80000,
        "maintenanceFeeItems": ["ELECTRIC", "WATERWORKS", "INTERNET"],
        "floor": "1",
        "sunlightDirection": "NORTH_WEST",
        "leasableArea": 301.50,
        "pet": false,
        "thumbnail": "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg",
        "canceled": true
      },
      {
        "pk": 5,
        "address": "서울 성동구 왕십리로 120",
        "detailAddress": "청동오피스텔 510호",
        "realEstate": "EFFICIENCY_APARTMENT",
        "realEstatePriceType": "JEONSE", 
        "depositAmount": 800000000, 
        "rentAmount": 0,
        "maintenanceFee": 200000, 
        "maintenanceFeeItems": ["ELECTRIC", "WATERWORKS", "INTERNET", "TV"],
        "floor": "5",
        "sunlightDirection": "EAST",
        "leasableArea": 550.40,
        "pet": true,
        "thumbnail": "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_960_720.jpg",
        "canceled": false
      }
];
  
export default roomItems;
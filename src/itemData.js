const roomItems = [
    {
        "pk": 1, 
        "address": "서울 관악구 행복로 96", // 주소
        "detailAddress": "KD타워 101호", // 상세주소
        "realEstate": "APARTMENT", // 매물종류
        "realEstatePriceType": "전세", // 가격종류
        "depositAmount": 200000000, // 보증금 또는 매매가
        "rentAmount": 0, // 임대료
        "maintenanceFee": 100000, // 관리비
        "maintenanceFeeItems": ["ELECTRIC"], // 관리항목
        "floor": "1", // 층수
        "sunlightDirection": "NORTH", // 방향
        "leasableArea": 119.00, // 평수, m2
        "pet": true, // 애완동물 여부
        "car": true,
        "thumbnail": "https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_960_720.jpg", // 썸네일 주소
        "canceled": false // 올린방, 내린방 여부
      },
      {
        "pk": 2,
        "address": "서울 관악구 행복로 83",
        "detailAddress": "KD타워 반지하",
        "realEstate": "SEMI_BASEMENT",
        "realEstatePriceType": "매매",
        "depositAmount": 500000000,
        "rentAmount": 0,
        "maintenanceFee": 0,
        "maintenanceFeeItems": ["ELECTRIC"],
        "floor": "1",
        "sunlightDirection": "SOUTH",
        "leasableArea": 33.05,
        "pet": false,
        "car": false,
        "thumbnail": "https://media.istockphoto.com/photos/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-up-picture-id1188452511?s=612x612",
        "canceled": false
      },
      {
        "pk": 3,
        "address": "서울 관악구 행복로 100",
        "detailAddress": "KD타워 710호",
        "realEstate": "EFFICIENCY_APARTMENT",
        "realEstatePriceType": "월세",
        "depositAmount": 200000000,
        "rentAmount": 1000000,
        "maintenanceFee": 50000,
        "maintenanceFeeItems": ["ELECTRIC", "WATERWORKS"],
        "floor": "basement",
        "sunlightDirection": "SOUTH_EAST",
        "leasableArea": 231.40,
        "pet": false,
        "car": true,
        "thumbnail": "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg",
        "canceled": true
      },
      {
        "pk": 4,
        "address": "서울 관악구 행복로 123",
        "detailAddress": "성동아파트 101호",
        "realEstate": "APARTMENT",
        "realEstatePriceType": "월세",
        "depositAmount": 300000000,
        "rentAmount": 2000000,
        "maintenanceFee": 80000,
        "maintenanceFeeItems": ["ELECTRIC", "WATERWORKS", "INTERNET"],
        "floor": "top",
        "sunlightDirection": "NORTH_WEST",
        "leasableArea": 301.50,
        "pet": false,
        "car": true,
        "thumbnail": "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg",
        "canceled": true
      },
      {
        "pk": 5,
        "address": "서울 관악구 행복로 120",
        "detailAddress": "청동오피스텔 510호",
        "realEstate": "EFFICIENCY_APARTMENT",
        "realEstatePriceType": "전세", 
        "depositAmount": 800000000, 
        "rentAmount": 0,
        "maintenanceFee": 200000, 
        "maintenanceFeeItems": ["ELECTRIC", "WATERWORKS", "INTERNET", "TV"],
        "floor": "top",
        "sunlightDirection": "EAST",
        "leasableArea": 550.40,
        "pet": true,
        "car": false,
        "thumbnail": "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_960_720.jpg",
        "canceled": false
      },
      {
        "pk": 6,
        "address": "서울 관악구 행복로 32",
        "detailAddress": "행복아파트 103호",
        "realEstate": "EFFICIENCY_APARTMENT",
        "realEstatePriceType": "월세", 
        "depositAmount": 1200000000, 
        "rentAmount": 3500000,
        "maintenanceFee": 500000, 
        "maintenanceFeeItems": ["ELECTRIC", "WATERWORKS", "INTERNET", "TV"],
        "floor": "1",
        "sunlightDirection": "SOUTH_WEST",
        "leasableArea": 800.40,
        "pet": false,
        "car": true,
        "thumbnail": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "canceled": false
      }
];
  
export default roomItems;
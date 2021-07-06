// 동물 DB
const petData = [
  { 
    imgUrl: 'images/dog01.jpg', // 이미지 주소
    name: "미미", // 동물 이름
    type: "dog"
  },
  { 
    imgUrl: 'images/dog02.jpg',
    name: "뭉뭉이",
    type: "dog"
  },
  { 
    imgUrl: 'images/dog03.jpg',
    name: "벤지",
    type: "dog"
  },
  { 
    imgUrl: 'images/dog04.jpg',
    name: "댕댕이",
    type: "dog"
  },
  { 
    imgUrl: 'images/dog05.jpg',
    name: "몽실이",
    type: "dog"
  },
  { 
    imgUrl: 'images/dog06.jpg',
    name: "이쁜이",
    type: "dog"
  },
  { 
    imgUrl: 'images/cat01.jpg',
    name: "야옹이1",
    type: "cat"
  },
  { 
    imgUrl: 'images/cat02.jpg',
    name: "야옹이2",
    type: "cat"
  },
  { 
    imgUrl: 'images/cat03.jpg',
    name: "야옹이3",
    type: "cat"
  },
  { 
    imgUrl: 'images/cat04.jpg',
    name: "야옹이4",
    type: "cat"
  },
  { 
    imgUrl: 'images/cat05.jpg',
    name: "야옹이5",
    type: "cat"
  },
  { 
    imgUrl: 'images/cat06.jpg',
    name: "야옹이6",
    type: "cat"
  },
  { 
    imgUrl: 'images/bird01.jpg',
    name: "새1",
    type: "bird"
  },
  { 
    imgUrl: 'images/bird02.jpg',
    name: "새2",
    type: "bird"
  },
  { 
    imgUrl: 'images/bird03.jpg',
    name: "새3",
    type: "bird"
  },
  { 
    imgUrl: 'images/bird04.jpg',
    name: "새4",
    type: "bird"
  },
  { 
    imgUrl: 'images/bird05.jpg',
    name: "새5",
    type: "bird"
  },
  { 
    imgUrl: 'images/bird06.jpg',
    name: "새6",
    type: "bird"
  },
];

function getPetData(type) {
  var html = ''; // html 변수
  // 동물 데이터 불러오기
  for(var i = 0; i < petData.length; i++) {
    // 해당 type의 동물만 출력
    if(petData[i].type == type){
      html += `
      <li>
        <a href="#">
          <img 
            src="${petData[i].imgUrl}"
            alt="${petData[i].name}"
          >
          <div class="caption">
            <h4>${petData[i].name}</h4>
          </div>
        </a>
      </li>` 
    }
  }

  // html 목록 출력
  $('.pet-list').html(html)
}


/* 메인 함수 */
$(function(){
  // 현재 페이지 URL값에서 type 값을 가져오기
  var query = location.search.split('=');
  var type = query[1]
  console.log(query[1]);

  // 동물 출력 함수: getPetData(type)
  // undefined는 전달된 값이 없을때 기본 데이터(개)
  if(query[1] == undefined) {
    getPetData('dog');
  } else {
    getPetData(type);
  }

});
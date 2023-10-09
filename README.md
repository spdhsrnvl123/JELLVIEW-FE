# ✨JView-Frontend
<img width="900" alt="스크린샷 2023-10-07 오후 9 31 02" src="https://github.com/spdhsrnvl123/JELLVIEW-FrontEnd/assets/83896466/48a7eb67-dd1e-4e18-a1fb-941a20bab888">

## 프로젝트 개요

### 주제
젤리 정보 & 리뷰 서비스

### 목적
젤리 정보에 따른 각 제품에 대한 정보들을 고객들에게 제공하고 리뷰 서비스로 다른 고객들의 정보를 공유하여 나에게 맞는 젤리를 찾을 수 있습니다.

## 개발 기간
2023.08.19 ~ 2023.09.15 - 완료<br />
2023.10.01 ~ 2023.10.08 - 보완

## 요구사항 정의서

<table>
    <tr>
        <th>요구사항ID</th>
        <th>대분류</th>
        <th>중분류</th>
        <th>소분류</th>
        <th>요구사항명</th>
        <th>요구사항내용</th>
        <th>개발 난이도</th>
    </tr>
    <tr>
        <td>JELLY001</td>
        <td>사용자</td>
        <td>홈</td>
        <td>젤리제품명입력</td>
        <td>젤리정보조회</td>
        <td>1. 홈 페이지 검색창에서 젤리 상품명 입력 <br />2. 비 로그인 사용자도 상품 검색 가능<br />
3. 영어로 입력 불가능 <br />
4. 최대 50자까지 제한</td>
        <td>중</td>
    </tr>
    <tr>
        <td>JELLY002</td>
        <td>사용자</td>
        <td>마이페이지</td>
        <td>카카오로그인</td>
        <td>카카오로그인</td>
        <td>카카오로그인을 진행한다. 로그인이 완료시 후기 작성 가능</td>
        <td>상</td>
    </tr>
    <tr>
        <td>JELLY003</td>
        <td>사용자</td>
        <td>마이페이지</td>
        <td>로그아웃</td>
        <td>로그아웃</td>
        <td>로그아웃을 진행한다.</td>
        <td>하</td>
    </tr>
    <tr>
        <td>JELLY004</td>
        <td>사용자</td>
        <td>마이페이지</td>
        <td>프로필</td>
        <td>회원정보 프로필 조회</td>
        <td>카카오로그인을 진행한 회원의 성함 및 카카오프로필 사진을 조회한다.</td>
        <td>중</td>
    </tr>
    <tr>
        <td>JELLY005</td>
        <td>사용자</td>
        <td>젤리 상세정보</td>
        <td>젤리 영양 상세정보</td>
        <td>젤리 영양 정보 조회</td>
        <td>젤리 영양 정보를 모달창을 만들어서 정보를 제공(영양정보 100g당 - 열량, 지방, 포화지방, 탄수화물, 당류, 단백질, 나트륨 정보)</td>
        <td>중</td>
    </tr>
        <tr>
        <td>JELLY006</td>
        <td>사용자</td>
        <td>후기</td>
        <td>후기목록</td>
        <td>최근후기 조회</td>
        <td>작성한 후기를 날짜별로 조회</td>
        <td>하</td>
    </tr>
    <tr>
        <td>JELLY007</td>
        <td>사용자</td>
        <td>후기</td>
        <td>후기등록</td>
        <td>후기정보등록</td>
        <td>1. 별점, 내용을 등록<br />
2. 내용은 최대 300자가 넘어가지 않도록 규정 <br />
3.  별점 최대 5개 최소 1개</td>
        <td>하</td>
    </tr>
    <tr>
        <td>JELLY008</td>
        <td>사용자</td>
        <td>후기</td>
        <td>후기수정</td>
        <td>후기정보수정</td>
        <td>별점, 제목, 내용을 수정한다.</td>
        <td>하</td>
    </tr>
    <tr>
        <td>JELLY009</td>
        <td>사용자</td>
        <td>후기</td>
        <td>후기삭제</td>
        <td>후기정보삭제</td>
        <td>등록한 후기 정보를 삭제한다.</td>
        <td>하</td>
    </tr>
</table>

## 프로세스 흐름도

<img width="900" alt="Untitled" src="https://github.com/spdhsrnvl123/JELLVIEW-FrontEnd/assets/83896466/19ba8256-99a3-4011-994c-dcea7e5c7dbb" />

## 화면구성 및 매뉴얼

<table>
    <thead>
        <tr style="text-align:center">
            <td>1</td>
            <td>2</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </tbody>
        <thead >
        <tr style="text-align:center">
            <td>3</td>
            <td>4</td>
        </tr>
    </thead>
    <tbody>
        <tr> 
            <td></td>
            <td></td>
        </tr>
    </tbody>
          <thead >
        <tr style="text-align:center">
            <td>5</td>
            <td>6</td>
        </tr>
    </thead>
    <tbody>
        <tr> 
            <td></td>
            <td></td>
        </tr>
    </tbody>
            <thead >
        <tr style="text-align:center">
            <td>7</td>
            <td>8</td>
        </tr>
    </thead>
    <tbody>
        <tr> 
            <td></td>
            <td></td>
        </tr>
    </tbody>
              <thead >
        <tr style="text-align:center">
            <td>9</td>
            <td>10</td>
        </tr>
    </thead>
    <tbody>
        <tr> 
            <td></td>
            <td></td>
        </tr>
    </tbody>
                <thead >
        <tr style="text-align:center">
            <td>11</td>
            <td>12</td>
        </tr>
    </thead>
    <tbody>
        <tr> 
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

## 1차 통합테스트 결과

<table>
    <tr>
        <th>번호</th>
        <th>구분</th>
        <th>일자</th>
        <th>발생위치</th>
        <th>상세 오류내역</th>
        <th>타입</th>
        <th>유형</th>
        <th>목표</th>
        <th>완료</th>
        <th>비고</th>
    </tr>
    <tr>
        <td>1</td>
        <td>후기 조회</td>
        <td>09/14</td>
        <td>전체 후기 페이지 & 나의 후기 페이지</td>
        <td>새로고침 시 후기 표시 조회 오류</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/10</td>
        <td>수정확인</td>
    </tr>
        <tr>
        <td>2</td>
        <td>후기작성</td>
        <td>09/14</td>
        <td>젤리 상세 페이지</td>
        <td>상품 상세페이지에 후기작성 페이지로 이동 시 후기 작성 폼에 상품 자동 선택 오류</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/12</td>
        <td>수정확인</td>
    </tr>
        <tr>
        <td>3</td>
        <td>후기 작성</td>
        <td>09/14</td>
        <td>후기 작성 페이지</td>
        <td>후기 작성 페이지 400자 이상 입력가능</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/09</td>
        <td>최대 400자로 제한</td>
    </tr>
        <tr>
        <td>4</td>
        <td>후기 수정</td>
        <td>09/14</td>
        <td>전체 후기 페이지 & 나의 후기 페이지</td>
        <td>작성자에 따른 수정 버튼 표시 오류</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/13</td>
        <td>수정확인</td>
    </tr>
        <tr>
        <td>5</td>
        <td>후기 수정</td>
        <td>09/14</td>
        <td>전체 후기 페이지 & 나의 후기 페이지</td>
        <td>수정 시 작성한 값 초기화 오류</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/10</td>
        <td>수정확인</td>
    </tr>
        <tr>
        <td>6</td>
        <td>후기 수정</td>
        <td>09/14</td>
        <td>전체 후기 페이지 & 나의 후기 페이지</td>
        <td>수정 시 새로고침 시에만 새로운 후기 반영</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/09</td>
        <td>수정확인</td>
    </tr>
        <tr>
        <td>7</td>
        <td>후기 삭제</td>
        <td>09/14</td>
        <td>전체 후기 페이지 & 나의 후기 페이지</td>
        <td>작성자에 따른 삭제 버튼 표시 오류</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/13</td>
        <td>수정확인</td>
    </tr>
        <tr>
        <td>8</td>
        <td>후기 삭제</td>
        <td>09/14</td>
        <td>전체 후기 페이지 & 나의 후기 페이지</td>
        <td>삭제 시 새로고침 시에만 새로운 후기 반영</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/09</td>
        <td>수정확인</td>
    </tr>
        <tr>
        <td>9</td>
        <td>젤리 조회</td>
        <td>09/14</td>
        <td>메인 페이지(검색)</td>
        <td>젤리명 검색 시 완전 일치 검색결과 반환</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/10</td>
        <td>단어에 포함된 문자 입력 시 반환 완료</td>
    </tr>
        <tr>
        <td>10</td>
        <td>젤리 조회</td>
        <td>09/14</td>
        <td>메인 페이지(검색)</td>
        <td>검색명을 입력하지 않았을 경우 검색 결과 슬라이드쇼 두개 진행 오류</td>
        <td>UI오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/11</td>
        <td>수정확인</td>
    </tr>
        <tr>
        <td>11</td>
        <td>젤리 조회</td>
        <td>09/14</td>
        <td>젤리 상세 페이지</td>
        <td>상품 상세페이지에서 설명란 부분 박스 밖으로 표시</td>
        <td>UI오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/08</td>
        <td>수정확인</td>
    </tr>
        <tr>
        <td>12</td>
        <td>젤리 조회</td>
        <td>09/14</td>
        <td>메인 페이지(검색)</td>
        <td>최대 20자 이상 입력 가능</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/07</td>
        <td>최대 20자로 제한</td>
    </tr>
        <tr>
        <td>13</td>
        <td>로그인</td>
        <td>09/14</td>
        <td>메인 페이지</td>
        <td>비회원 URL 및 네비게이션 버튼으로 후기작성페이지, 마이페이지 접근</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/08</td>
        <td>수정확인</td>
    </tr>
    <tr>
        <td>14</td>
        <td>로그인</td>
        <td>09/14</td>
        <td>젤리 상세 페이지</td>
        <td>비회원 URL 및 버튼으로 후기작성페이지 접근</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/08</td>
        <td>수정확인</td>
    </tr>
    <tr>
        <td>15</td>
        <td>로그인</td>
        <td>09/14</td>
        <td>전체 후기 페이지</td>
        <td>비회원 URL 및 버튼으로 내가 작성한 후기 페이지 접근</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/08</td>
        <td>수정확인</td>
    </tr>
            <tr>
        <td>16</td>
        <td>로그아웃</td>
        <td>09/14</td>
        <td>마이페이지</td>
        <td>로그아웃 시 마이페이지 접속 유지 가능</td>
        <td>스크립트 오류</td>
        <td>수정</td>
        <td>09/15</td>
        <td>09/08</td>
        <td>수정확인</td>
    </tr>
</table>

### 1차 보완한 목록

- ApexChart 라이브러리를 이용하여 젤리 영양정보 데이터 시각화
- 카카오로그인 시 이메일 선택사항 체크 오류(이메일 필수사항으로 변경)
- 숫자로 별점를 선택하는게 아닌 별모양으로 아이콘 구현
- 각 젤리 상품마다 별점 평균 표시

### 2차 보완 예정 목록

- 리뷰 수정 일시 추가
- 리뷰카드 수정 시 수정한 날짜 표시
- 404 페이지 구현
- 리뷰 페이지 페이징 구현
- 백엔드 로직 try&catch 구문 추가하여 에러 검출 구현
- mapper부분 JPA가 아닌 MyBatis를 활용
- 배포

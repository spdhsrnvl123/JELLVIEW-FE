# JellFo-Client
젤리 리뷰 프로젝트

## 요구사항

<table>
    <tr>
        <th>요구사항ID</th>
        <th>대분류</th>
        <th>중분류</th>
        <th>소분류</th>
        <th>요구사항명</th>
        <th>요구사항내용</th>
        <th>화면ID</th>
    </tr>
    <tr>
        <td>JELLY001</td>
        <td>사용자</td>
        <td>홈</td>
        <td>젤리제품명입력</td>
        <td>젤리정보조회</td>
        <td>검색창에서 찾고자 하는 젤리 정보를 조회한다.</td>
        <td>Home.vue</td>
    </tr>
    <tr>
        <td>JELLY002</td>
        <td>사용자</td>
        <td>마이페이지</td>
        <td>카카오로그인</td>
        <td>카카오로그인</td>
        <td>카카오로그인을 진행한다. 로그인이 완료되면 Mypage컴포넌트로 리다이렉션 되어 카카오프로필이 조회된다.</td>
        <td>Login.vue</td>
    </tr>
    <tr>
        <td rowspan='2'>JELLY003</td>
        <td>사용자</td>
        <td>마이페이지</td>
        <td>로그아웃</td>
        <td>로그아웃</td>
        <td>로그아웃(로컬스토리지에 저장했던 토큰값을 제거 후 Home.vue 컴포넌트로 리다이렉션)을 진행한다.</td>
        <td rowspan='2'>Mypage.vue</td>
    </tr>
    <tr>
        <td>사용자</td>
        <td>마이페이지</td>
        <td>프로필</td>
        <td>회원정보 프로필 조회</td>
        <td>카카오로그인을 진행한 회원의 성함 및 카카오프로필 사진 및 내가 작성한 후기 갯수를 조회한다.</td>
    </tr>
    <tr>
        <td rowspan='3'>JELLY004</td>
        <td>사용자</td>
        <td>젤리 상세정보</td>
        <td>젤리 영양 상세정보</td>
        <td>젤리 영양 정보 조회</td>
        <td>표 형태로 영양 정보를 데이터시각화 해준다.</td>
        <td rowspan='3'>Detail.vue</td>
    </tr>
    <tr>
        <td>사용자</td>
        <td>젤리 상세정보</td>
        <td>젤리 맛 상세정보</td>
        <td>젤리 맛 정보 조회</td>
        <td>ApexChart라이브러리를 사용하여 화면에 단만, 신맛, 부들, 딱딱을 비율별로 데이터시각화 해준다.</td>
    </tr>
        <tr>
        <td>사용자</td>
        <td>후기관리</td>
        <td>후기목록</td>
        <td>최근후기 조회</td>
        <td>작성한 최신 날짜별로 5개의 후기 작성 제목과 별점을 보여준다.</td>
    </tr>
    <tr>
        <td>JELLY005</td>
        <td>사용자</td>
        <td>후기관리</td>
        <td>후기등록</td>
        <td>후기정보등록</td>
        <td>사진, 별점, 내용을 등록한다. 등록 후에는 Review.vue 컴포넌트로 리다이렉션 된다.</td>
        <td>Register.vue</td>
    </tr>
    <tr>
        <td rowspan='2'>JELLY006</td>
        <td>사용자</td>
        <td>후기관리</td>
        <td>후기수정</td>
        <td>후기정보수정</td>
        <td>사진, 별점, 내용을 수정한다.</td>
        <td rowspan='2'>Review.vue</td>
    </tr>
    <tr>
        <td>사용자</td>
        <td>후기관리</td>
        <td>후기삭제</td>
        <td>후기정보삭제</td>
        <td>등록한 후기 정보를 삭제한다.</td>
    </tr>
</table>
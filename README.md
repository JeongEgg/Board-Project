# IA(기능 정의) 설계

## 🚀 Auth

### 1. SignIn (로그인)
✅ url
```
POST /api/v1/auth/sign-in
```

✅ request
```
{
  *email: String,
  *password: String,
}
```
✅ response

  - 성공 
```
Http Status - 200 (OK)
{
  *code: "SU",
  *message: "Success.",
  *token: "jwt...",
  *expiredDate: 123456789
}
```

- 필수 정보 미입력


- 유효성 검사 실패
```
Http Status - 400 (Bad Request)
{
  *code: "VF",
  *message: "Validation failed."
}
- 로그인 실패 
```
Http Status - 401 (Unauthorized)
{
  *code: "SF",
  *message: "Login information mismatch."
}
```
- 데이터베이스 에러 
```
Http Status - 500 (Internal Server Error)
{
  code: "DBE",
  message: "Database Error."
}
```
---

### 2. SignUp (회원가입)

✅ url
```
POST /api/v1/auth/sign-up
```

✅ request
```
{
  *eamil: String,
  *password: String,
  *nickname: String,
  *telNumber: String,
  *address: String,
   addressDetail: String,
  *agreedPersonal: Boolean,
}
```
✅ response

- 성공 
```
Http Status - 200 (OK)
{
  *code: "SU",
  *message: "Success."
}
```
- 실패

- 유효성 검사 실패
```
Http Status - 400 (Bad Request)
{
  *code: "VF",
  *message: "Validation failed."
}
- 중복된 이메일
```
Http Status - 400 (Bad Request) 

{
  "code": "DE",
  "message": "Duplicate email."
}
```
- 중복된 닉네임
```
Http Status - 400 (Bad Request) 

{
  "code": "DN",
  "message": "Duplicate nickname."
}
```
- 중복된 휴대전화번호
```
Http Status - 400 (Bad Request) 

{
    "code": "DT",
    "message": "Duplicate telephone number."
}
```
- 데이터베이스 에러 Http Status - 500 (Internal Server Error)
```
{
  *code: "DBE",
  *message: "Database Error."
}
```

---

## 🚀 Board

### 3. weeklyTop3List (주간 상위 3 게시물 리스트)

✅ url
```
GET /api/v1/board/top-3
```

✅ Header
```

```

✅ response

- 성공 Http Status - 200 (OK)
```
{
  *code: "SU",
  *message: "Success.",
  *top3List: boardListItem[
    *boardNumber: int,
    *title: String,
    *content: String,
     boardTitleImage: String,
    *favoriteCount: int,
    *commentCount: int,
    *viewCount: int,
    *wrtieDatetime: String,
    *writerNickname: String,
     writerProfileImage: String,
  ]
}
```
- 실패

- 데이터베이스 에러 
```
Http Status - 500 (Internal Server Error)
{
  *code: "DBE",
  *message: "Database Error."
}
```

---

### 4. currentList (최신 게시물 리스트)

✅ url
```
GET /api/v1/board/latest-list
```

✅ response

- 성공 
```
Http Status - 200 (OK)
{
  *code: "SU",
  *message: "Success.",
  *currentList: boardListItem[
    *boardNumber: int,
    *title: String,
    *content: String,
     boardTitleImage: String,
    *favoriteCount: int,
    *commentCount: int,
    *viewCount: int,
    *wrtieDatetime: String,
    *writerNickname: String,
     writerProfileImage: String,
  ]
}
```
- 실패

- 데이터베이스 에러 

```
Http Status - 500 (Internal Server Error)
{
  code: "DBE",
  message: "Database Error."
}
```


---

### 5. popularWordList (인기 검색어 리스트)

✅ url
```
GET /api/v1/search/popular-list
```

✅ response

- 성공 Http Status - 200 (OK)
```
{
  code: "SU",
  message: "Success.",
  popularWordList: String[]
}
```

- 실패

- 데이터베이스 에러 Http Status - 500 (Internal Server Error)

```
{
  code: "DE",
  message: "Database Error."
}
```


---

### 6. searchList (검색 게시물 리스트)

✅ url
```
GET /api/v1/board/search-list/{searchWord}
GET /api/v1/board/search-list/{searchWord}/{preSearchWord}
```

✅ Header
```

```

✅ response

- 성공 
```
Http Status - 200 (OK)
{
  *code: "SU",
  *message: "Success.",
  *searchList: boardListItem[
    *boardNumber: int,
    *title: String,
    *content: String,
     boardTitleImage: String,
    *favoriteCount: int,
    *commentCount: int,
    *viewCount: int,
    *wrtieDatetime: String,
    *writerNickname: String,
     writerProfileImage: String,
  ]
}
```
- 실패

- 데이터베이스 에러 

```
Http Status - 500 (Internal Server Error)
{
  code: "DBE",
  message: "Database Error."
}
```

---

### 7. relativeWordList (관련 검색어 리스트)

✅ url
```
GET /api/v1/search/{searchWord}/relation-list
```

✅ Header
```

```

✅ response

- 성공 Http Status - 200 (OK)
```
{
  code: "SU",
  message: "Success.",
  relativeWordList: String[]
}
```

- 실패

- 데이터베이스 에러 

```
Http Status - 500 (Internal Server Error)
{
  code: "DBE",
  message: "Database Error."
}
```

---

### 8. boardDetail (게시물 상세 보기)

✅ url
```
GET /api/v1/board/{boardNumber}
```

✅ response

- 성공 
```
Http Status - 200 (OK)
{
  *code: "SU",
  *message: "Success.",
  *boardNumber: int,
  *title: String,
  *content: String,
  *boardImage: String,
  *wrtieDatetime: String,
  *writeEmail: String,
  *writerNickname: String,
   writerProfileImage: String,
}
```

- 실패

- 존재하지 않는 게시물 

```
Http Status - 400 (Bad Request)
{
  code: "NB",
  message: "No Existed Board Number."
}
```
- 데이터베이스 에러 

```
Http Status - 500 (Internal Server Error)
{
  code: "DBE",
  message: "Database Error."
}
```

---

### 9. favoriteList (좋아요 리스트)

✅ url
```
GET /api/v1/board/{boardNumber}/favorite-list
```

✅ Header
```

```

✅ response

- 성공 
```
Http Status - 200 (OK)
{
  *code: "SU",
  *message: "Success.",
  *favoriteList: FavoriteItem[
    *email: String,
    *nickname: String,
     profileImage: String,
  ]
}
```

- 실패

- 존재하지 않는 게시물 

```
Http Status - 400 (Bad Request)
{
  code: "NB",
  message: "No Existed Board Number."
}
```
- 데이터베이스 에러 

```
Http Status - 500 (Internal Server Error)
{
  code: "DBE",
  message: "Database Error."
}
```

---

### 10. putFavorite (좋아요 기능)

✅ url
```
PUT /api/v1/board/{boardNumber}/favorite
```

✅ Header
```
Authorization Bearer {token}
```

✅ request
```
{
  boardNumber: int
}
```

✅ response

- 성공 Http Status - 200 (OK)
```
{
  *code: "SU",
  *message: "Success.",
}
```

- 실패

- 데이터베이스 에러 Http Status - 500 (Internal Server Error)

```
{
  *code: "DE",
  *message: "Database Error."
}
```

---

### 11. commentList (댓글 리스트)

✅ url
```
GET /api/v1/board/{boardNumber}/comment-list
```

✅ Header
```

```

✅ response

- 성공 
```
Http Status - 200 (OK)
{
  *code: "SU",
  *message: "Success.",
  *commentList: CommentItem[
    *nickname: String,
     profileImage: String,
    *writeDatetime: String,
    *content: String,
  ]
}
```

- 실패
- 존재하지 않는 게시물
```
Http Status - 400 (Bad Request) 
{
  *code: "NB",
  *message: "This board does not exist."
}
```
- 데이터베이스 에러 Http Status - 500 (Internal Server Error)

```
{
  *code: "DBE",
  *message: "Database Error."
}
```

---

### 12. postComment (댓글 쓰기)

✅ url
```
POST /api/v1/board/{boardNumber}/comment
```

✅ Header
```
Authorization Bearer {token}
```

✅ request
```
{
  *content: String
}
```

✅ response

- 성공 
```
Http Status - 200 (OK)
{
  code: "SU",
  message: "Success.",
}
```

- 실패
- 유효성 검사 실패
```
Http Status - 400 (Bad Request)
{
  *"code": "VF",
  *"message": "Validation failed."
}
```
- 존재하지 않는 게시물 

```
Http Status - 400 (Bad Request) 
{
  *code: "NB",
  *message: "This board does not exist."
}
```

- 존재하지 않는 유저 

```
Http Status - 401 (Unauthorized) 

{
  *code: "NU",
  *message: "This user does not exist."
}
```

- 데이터베이스 에러 Http Status - 500 (Internal Server Error)

```
{
  code: "DE",
  message: "Database Error."
}
```

---

### 13. boardDelete (게시물 삭제)

✅ url
```
DELETE /api/v1/board/{boardNumber}
```

✅ Header
```
Authorization Bearer {token}
```

✅ response

- 성공 Http Status - 200 (OK)
```
{
  code: "SU",
  message: "Success.",
}
```
- 실패

- 존재하지 않는 게시물 Http Status - 400 (Bad Request)

```
{
  code: "NB",
  message: "No Existed Board."
}
```

- 존재하지 않는 유저 Http Status - 400 (Bad Request)

```
{
  code: "NU",
  message: "No Existed User."
}
```

- 권한 없음 Http Status - 403 (Forbidden)

```
{
  code: "NP",
  message: "No Permission."
}
```

- 데이터베이스 에러 Http Status - 500 (Internal Server Error)

```
{
  code: "DE",
  message: "Database Error."
}
```

---

### 14. boardWrite (게시물 쓰기)

✅ url
```
POST /api/v1/board
```

✅ Header
```
Authorization: Bearer {token}
```

✅ request
```
{
  *title: String,
  *content: String,
  *boardImageList: String[]
}
```

✅ response

- 성공 Http Status - 200 (OK)
```
{
  *code: "SU",
  *message: "Success.",
}
```

- 실패
- 유효성 검사 실패
```
Http Status - 400 (Bad Request)
{
  *code: "VF",
  *message": "Validation failed."
}
```
- 존재하지 않는 유저 

```
Http Status - 401 (Bad Request)
{
  *code: "NU",
  *message: "This user does not exist."
}
```

- 인증 실패 

```
Http Status - 401 (Unauthorized) 
{
  *code: "AF",
  *message: "Authorization Failed."
}
```

- 데이터베이스 에러 

```
Http Status - 500 (Internal Server Error)
{
  code: "DBE",
  message: "Database Error."
}
```

---

### 15. boardUpdate (게시물 수정)

✅ url
``` 
PATCH /api/v1/board/{boardNumber}
```

✅ Header
```
Authorization Bearer {token}
```

✅ request
```
{
  *title: String,
  *content: String,
  *boardImageList: String[]
}
```

✅ response

- 성공 Http Status - 200 (OK)
```
{
  code: "SU",
  message: "Success.",
}
```

- 실패

- 존재하지 않는 게시물 

```
Http Status - 400 (Bad Request) 
{
  "code": "NB",
  "message": "This board does not exist."
}
```

- 존재하지 않는 유저

```
Http Status - 401 (Unauthorized) 
{
  "code": "NU",
  "message": "This user does not exist."
}
```

- 인증 실패

```
Http Status - 401 (Unauthorized) 
{
  "code": "AF",
  "message": "Authorization Failed."
}
```

- 권한 없음
```
Http Status - 403 (Forbidden) 
{
  "code": "NP",
  "message": "Do not have permission."
}
```

- 데이터베이스 에러 

```
Http Status - 500 (Internal Server Error)
{
  code: "DBE",
  message: "Database Error."
}
```

---

### 16. getUser (유저 정보)

✅ url
```
GET /api/v1/user/{email}
```

✅ response

- 성공 
```
Http Status - 200 (OK)
{
  code: "SU",
  message: "Success.",
  email: String,
  nickname: String,
  profileImage: String
}
```

- 실패

- 존재하지 않는 유저 

```
Http Status - 400 (Bad Request)
{
  code: "NU",
  message: "No Existed User."
}
```

- 데이터베이스 에러 

```
Http Status - 500 (Internal Server Error)
{
  code: "DE",
  message: "Database Error."
}
```

---

### 17. userBoardList (특정 유저 게시물 리스트)

✅ url
```
GET /api/v1/board/user-board-list/{email}
```

✅ Header
```

```

✅ response

- 성공
```
Http Status - 200 (OK)
{
  *code: "SU",
  *message: "Success.",
  *boardList: boardListItem[
    *boardNumber: int,
    *title: String,
    *content: String,
     boardTitleImage: String,
    *favoriteCount: int,
    *commentCount: int,
    *viewCount: int,
    *wrtieDatetime: String,
    *writerNickname: String,
     writerProfileImage: String,
  ]
}
```
- 실패

- 존재하지 않는 유저
```
Http Status - 400 (Bad Request)
{
  *"code": "NU",
  *"message": "This user does not exist."
}
```

- 데이터베이스 에러 

```
Http Status - 500 (Internal Server Error)
{
  code: "DE",
  message: "Database Error."
}
```

---

### 18. patchNickName (닉네임 수정)

✅ url
```
PATCH /api/v1/user/nickname
```

✅ Header
```
Authorization Bear {Token}
```

✅ request
```
{
  nickname: String
}
```

✅ response

- 성공 Http Status - 200 (OK)
```
{
  code: "SU",
  message: "Success.",
}
```

- 실패

- 존재하지 않는 유저 Http Status - 400 (Bad Request)

```
{
  code: "NU",
  message: "No Existed User."
}
```

- 데이터베이스 에러 Http Status - 500 (Internal Server Error)

```
{
  code: "DE",
  message: "Database Error."
}
```

---

### 19. patchProfileImage (프로필 이미지 수정)

✅ url
```
PATCH /api/v1/user/profile-image
```

✅ Header
```

```

✅ request
```
{
  profileImage: String
}
```

✅ response

- 성공 Http Status - 200 (OK)
```
{
  code: "SU",
  message: "Success.",
}
```

- 실패

- 존재하지 않는 유저 Http Status - 400 (Bad Request)

```
{
  code: "NU",
  message: "No Existed User."
}
```

- 데이터베이스 에러 Http Status - 500 (Internal Server Error)

```
{
  code: "DE",
  message: "Database Error."
}
```

---

### 20. fileUpload (파일 업로드)

---

### 21. getFile (파일 다운로드)
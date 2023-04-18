## next_isr_exam

<br>

### 시작하기

```
npm install
node server
npm run build
npm run start
```

<br>

### what to do

json-server db에 기존 todo data가 2개가 존재함

todo 목록 또는 id에 대한 todo를 보여주는 SSR,SSG(fallback: false,true,blocking),ISR(revalidate, on-demand) 페이지가 존재한다.

todo를 추가했을 때 별개의 렌더링 방식을 가지는 페이지마다 어떻게 보여지는지 확인한다.

<br>

### pages

- `/`: 등록
- `/ssg` : static generation => 초기 2개 데이터만 계속 보임
- `/isr-10`: incremental static regeneration 10초마다 => 10초마다 갱신됨
- `/isr-on-demand`: incremental static regeneration on-demand => 업데이트 시 갱신됨
- `/ssr`: serverside render => 서버에서 최신 데이터 조회
- `/fallbackfalse/[id]`: fallback false ssg 페이지
- `/fallbacktrue/[id]`: fallback true ssg 페이지
- `/fallbackblocking/[id]`: fallback blocking ssg 페이지

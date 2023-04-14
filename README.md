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

### pages

- `/`: 등록
- `/ssg` : static generation => 초기 2개 데이터만 계속 보임
- `/isr-10`: incremental static regeneration 10초마다 => 10초마다 갱신됨
- `/isr-on-demand`: incremental static regeneration on-demand => 업데이트 시 갱신됨
- `/ssr`: serverside render => 서버에서 최신 데이터 조회

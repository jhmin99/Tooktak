# Tooktak
산학협력프로젝트 과목 (3230) 팀프로젝트입니다. 

## 실행 방법

- docker를 설치해주세요.
- 프로젝트 루트 디렉토리로 이동하여 `setup.sh` 스크립트에 실행 권한을 부여한 후 실행해주세요.
```
chmod +x setup.sh
./setup.sh
```
-  Docker Compose를 사용하여 컨테이너를 빌드하고 실행합니다.
```
docker-compose up --build
```
- 브라우저에서 url창에 `localhost`를 입력하면 서비스를 이용할 수 있습니다.
-------------------------------------------------------
실행되는 포트 번호입니다.
- frontend: 3000
- backend: 3001

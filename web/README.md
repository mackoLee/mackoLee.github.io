## Path설정하기
github에서는 따로 path에 때른 라우팅이 안되기 떄문에, path에 따른 파일구조를 설정해줘야한다.

/web/tests/i18n 으로 바로 접속 하게되면, 페이지를 불러 올 수 없다.
왜냐하면 파일 구조 상에는 /web/tests/i18n/index.html이 없기 때문이다.

이를 위해서 /web/tests/i18n/index.html을 만들어줘야하는데,

자동화를 하기 위한 여러가지 방법이 있지만, 우선 path를 설정해 주고 index.html을 만들어주는 방식으로 진행한다.

다이나믹 라우팅에서는 여전히 적용할 수 없지만, 그래도 최소한의 라우팅은 가능하다.

## 실행방법
```bash
python3 ./create_path.py
```

const $chatContainer = document.querySelector(".cont-chat");
const $chatRoom = document.querySelector(".chatroom");
const $chatInfo = document.querySelector(".chat-info");
const $chatBtn = document.querySelector(".btn-chatOpen");
const $adCarousel = document.querySelector("#kg-carousel");
const $chatCloseBtn = document.querySelector(".chat-close");
const $chatList = document.querySelector(".chat-list");
const $chatInput = document.querySelector(".inp-chat textarea");
const $sendForm = document.querySelector(".inp-chat");
const $btnChatOpen = document.querySelector(".btn-chatOpen");
const $question = document.querySelector(".user");
const $answer = document.querySelector(".chat-bot");
const $btnQue = document.querySelectorAll(".btn-que");

// openAI API
let url = `https://openai-api.jejucodingcamp.workers.dev/`;

// 유저의 질문
let question = false;

// 질문을 저장하는 객체
let data = [];

// 화면에 뿌려줄 데이터
let questionData = [];

// 첫 질문과 함께 보내줄 데이터
let inAdvance = [];

// 채팅 오픈시에 해당 문제 읽어오는 함수
  $btnChatOpen.addEventListener("click", async (e) => {
    e.preventDefault();
    inAdvance = [];
    data = [];
    questionData = [];
    printQuestion();
    const result = await axios(`/src/pages/question${PAGE_NAME}.md`)
      .then((res) => {
        inAdvance.push(
          {
            role: "system",
            content:
              "assistant는 친절한 자바스크립트 알고리즘의 힌트를 주는 선생님이다.",
          },
          {
            role: "user",
            content: "다음은 풀고자 하는 자바스크립트 알고리즘 문제 입니다.",
          },
          {
            role: "user",
            content: res.data,
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
});

// 스크롤 최하단 이동
const scrollToBottom = () => {
  // 너비가 1200px 이하이고 navBar가 열려있을 경우
  if(window.innerWidth <= 1200 && $container.classList.contains('menu-on')) {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
  // 너비가 1024px 이하일 경우
  else if (window.innerWidth <= 1024) {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
}

// 버튼 누르면 채팅창 활성화시키는 함수
const handleOpenChat = () => {
  $chatRoom.classList.add('open');
  $chatInfo.classList.add("close");
  $chatBtn.classList.add("close");
  $adCarousel.classList.add("close");
  $chatContainer.classList.add("open");
  $chatContainer.classList.remove("close");
}

$chatBtn.addEventListener("click", () => {
  handleOpenChat()
  scrollToBottom()
});

// 채팅 창 닫기 버튼 이벤트
const handleCloseChat = () => {
  $chatRoom.classList.remove('open');
  $chatInfo.classList.remove("close");
  $chatBtn.classList.remove("close");
  $adCarousel.classList.remove("close");
  $chatContainer.classList.remove("open");
  $chatContainer.classList.add("close");
}

$chatCloseBtn.addEventListener('click',()=>{
  handleCloseChat()
});

// 유저 질문 받아오는 함수
$chatInput.addEventListener("input", (e) => {
  e.preventDefault();
  if (question != e.target.value) {
    question = e.target.value;
  }
});

// 유저 질문 객체를 만들고 push
const sendQuestion = (question) => {
  if(question) {
    data.push({
      role: "user",
      content: question,
    });
    questionData.push({
      role: "user",
      content: question,
    });
  }
};

// 화면에 질문 그려주는 함수
const printQuestion = async() => {
  if(question) {
    let li = document.createElement("li");
    li.classList.add("user");
    questionData.map((el) => {
      li.innerText = el.content;
    });
    $chatList.appendChild(li);
    questionData = [];
    question=false;
  }
}

// 채팅 UI 삭제해주는 함수
$btnQue.forEach((element) => {
  element.addEventListener("click", () => {
    $chatList.replaceChildren();
  });
});

// 화면에 답변 그려주는 함수
const printAnswer = async (answer) => {
  let li = document.createElement("li");
  li.classList.add("chat-bot");
  li.innerText = answer;
  $chatList.appendChild(li);
};

// textarea size, focus 원복 함수
const focusOnTextarea = () => {
  $chatInput.style.height = "auto";
  $chatInput.focus()
}

// API 통신 관련 함수
const apiPost = async(config) => {
    let result = await axios(config)
        .then((res) => {
            const answer = res.data.choices[0].message.content;
            printAnswer(answer);
        })
        .catch((err) => {
          alert("답변 로딩시간을 초과하였습니다. 새로운 질문을 입력해주세요😢");
          console.log(err)
        })
};

// req 보내주는 함수
const sendReq = (test) => {
    $chatInput.value = null;
    sendQuestion(question);
    printQuestion();
    focusOnTextarea();

    // API 통신관련 config
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 90000, // 1분 30초로 설정
      data: JSON.stringify(test),
    };

    apiPost(config);
}

// submit
$sendForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // 첫질문시 inAdvance안에 있는 문제에 대한 정보를 함께 보내줌
  if (question && data.length < 1) {
    inAdvance.map((el) => {
      data.push(el);
    });
    sendReq(data);
  } else if (question && data.length >= 1) {
    sendReq(data);
  }
})

// Enter로 textarea 제출, shift + Enter로 줄바꿈
// $chatInput.addEventListener("keydown", (e) => {
//   if (e.keyCode === 13 && !e.shiftKey) {
//     e.preventDefault();
//     sendReq();
//   }
// });

// 채팅창 외부 클릭했을 때 채팅창 닫기
document.addEventListener('click', (e) => {
  const $img = $chatBtn.childNodes[1]
  const isBtn = e.target === $chatBtn || e.target === $img
  if(!$chatContainer.contains(e.target) && !isBtn){
    handleCloseChat()
  }
})
const quotes = [
    {
        quote: "만족은 결과가 아니라 과정에서 온다.",
        author: " - 제임스 딘"
    }, {
        quote: "자신감은 위대한 과업의 첫째 요건이다.",
        author: " - 사무엘 존슨"
    }, {
        quote: "약간의 광기도 없는 위대한 천재란 있을 수 없다.",
        author: " - 아리스토텔레스"
    }, {
        quote: "이 인생에서는 마지막에 웃는 자가 가장 오래 웃는 자다.",
        author: " - 존 메이스필드"
    }, {
        quote: "절대 허송세월 하지마라. 책을 읽든지, 쓰든지, 기도를 하든지, 명상을 하든지, 또는 공익을 위해 노력하든지, 항상 뭔가를 해라.",
        author: " - 토마스 아 켐피스"
    }, {
        quote: "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다.",
        author: " - 마하트마 간디"
    }, {
        quote: "오늘 누군가가 그늘에 앉아 쉴 수 있는 이유는 오래 전에 누군가가 나무를 심었기 때문이다.",
        author: " - 워런 버핏"
    }, {
        quote: "경험을 현명하게 사용한다면, 어떤 일도 시간 낭비는 아니다.",
        author: " - 오귀스트 르네 로댕"
    }, {
        quote: "좋은 친구는 일 분 안에 당신의 문제가 무엇인지 말해줄 수 있다. 말한 후에는 좋은 친구로 보이지 않을 수도 있다.",
        author: " - 아서 브리즈번"
    }, {
        quote: "운은 계획에서 비롯된다.",
        author: " - 브랜치 리키"
    }, {
        quote: "모든 전사 중 가장 강한 전사는 이 두 가지, 시간과 인내다.",
        author: " - 레프 톨스토이"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;

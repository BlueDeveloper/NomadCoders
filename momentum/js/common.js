/* return YYYYMMDD */
function YYYY_MM_DD() {
    const year = new Date().getFullYear();
    const month = (new Date().getMonth() + 1).toString().padStart(2, "0"); // 1월은 0부터 시작
    const date = new Date().getDate().toString().padStart(2, "0");

    return year + month + date;
}

/* return greetingString */
function hourlyGreeting(userName) {
    const nowHours = new Date().getHours();
    const day = new Date().getDay();
    if (day === 0 || day === 6) {
        return `${userName} 오늘은 즐거운 주말입니다~~!!😀`
    }
    if (0 <= nowHours && nowHours <= 2) {
        return `${userName}? 이제 잘 시간이에요. 😴`
    } else if (3 <= nowHours && nowHours <= 4) {
        return `세상에..! ${u > serName}?! 안주무시고 뭐하시는거죠? 😮`
    } else if (5 <= nowHours && nowHours <= 9) {
        return `좋은 아침입니다. ${userName}. `
    } else if (10 <= nowHours && nowHours <= 11) {
        return `곧 점심시간입니다. 메뉴는 정했나요?`
    } else if (12 <= nowHours && nowHours < 13) {
        return `지금은 점심시간이에요. 건들지 마세요`
    } else if (13 <= nowHours && nowHours <= 16) {
        return `힘내세요 ${userName} 아참.. TODO 확인하세요`
    } else if (17 === nowHours) {
        return `곧 ${userName}. 퇴근이에요!! ...혹시 야근 예정..?`
    } else if (18 <= nowHours && nowHours <= 21) {
        return `좋은 저녁입니다. ${userName}.`
    } else if (22 <= nowHours && nowHours <= 23) {
        return `${userName}. 이제 잘 준비하죠. 🥱`
    }
}

export const getDiffTime = (time) => {
  const currentTime = new Date();
  const targetTime = new Date(time);

  // 시간 차이 계산 (밀리초 단위)
  const timeDifference = new Date(currentTime).getTime() - new Date(targetTime).getTime();

  // 밀리초를 분, 시간, 일로 변환
  const minutesDifference = timeDifference / (1000 * 60);
  const hoursDifference = timeDifference / (1000 * 60 * 60);

  // 조건에 따라 처리
  if (Math.abs(minutesDifference) < 60) {
    const minutesAgo = Math.round(Math.abs(minutesDifference));
    return `${minutesAgo} 분 전`;
  } else if (Math.abs(hoursDifference) < 24) {
    const hoursAgo = Math.round(Math.abs(hoursDifference));
    return `${hoursAgo} 시간 전`;
  } else {
    // 날짜만 반환
    return time.split(" ")[0];
  }
};

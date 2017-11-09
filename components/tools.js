const pad0 = (value) => {
  const result = value.toString();
  return result.length < 2 ? `0${result}` : result;
};

const format = times => `${times.minutes}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;


export { pad0, format };

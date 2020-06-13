// @flow

/**
 * @function cycleTimeframes
 * @summary Cycles through TIMEFRAMES based on timeframe
 * @param {string} timeframe
 * @param {Function} setTimeFrame
 * @return {Function} setTimeframe
 * @exports cycleTimeframes
 */

const cycleTimeframes = (timeframe: string, setTimeframe: Function) => {
  const TIMEFRAMES = [
    "week",
    "2 weeks",
    "month",
    "3 months",
    "6 months",
    "year",
  ];

  let index = TIMEFRAMES.findIndex((element) => element === timeframe);

  if (index === TIMEFRAMES.length - 1) {
    return setTimeframe(TIMEFRAMES[0]);
  }
  return setTimeframe(TIMEFRAMES[++index]);
};

export default cycleTimeframes;

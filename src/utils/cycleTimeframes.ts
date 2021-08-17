import { TIMEFRAMES } from "../constants";

/**
 * @name cycleTimeframes
 * @type {Function}
 * @summary Cycles through TIMEFRAMES based on timeframe
 * @param {number} totalInactive
 * @param {string} timeframe
 * @param {React.SetStateAction} setTimeframe
 * @return {React.SetStateAction} setTimeframe
 */

const cycleTimeframes = (
  totalInactive: number,
  timeframe: string,
  setTimeframe: Function
) => {
  let index = TIMEFRAMES.findIndex((element) => element === timeframe);

  // when at last item or no more inactive profiles reset count
  if (index === TIMEFRAMES.length - 1 || !totalInactive) {
    return setTimeframe(TIMEFRAMES[0]);
  }

  return setTimeframe(TIMEFRAMES[++index]);
};

export default cycleTimeframes;

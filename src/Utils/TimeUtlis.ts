import moment, { unitOfTime } from "moment";

export type DurationUnit = unitOfTime.DurationConstructor;

export default class TimeUtlis {
  static formatMillisecondsToTimeConvert = (ms: moment.MomentInput) => {
    if (ms === null) {
      return "";
    }
    const formattedTime = moment(ms).format("h:mm A");
    return formattedTime;
  };
  static formatMillisecondsToTime = (ms: moment.MomentInput) => {
    if (ms === null) {
      return "";
    }
    const formattedTime = moment(ms).format("hh:mm:ss a");
    return formattedTime;
  };

  static convertTo24HourFormat = (time12h: moment.MomentInput) => {
    const time24h = moment(time12h, "hh:mm:ss a").format("HH:mm");

    return time24h;
  };
}

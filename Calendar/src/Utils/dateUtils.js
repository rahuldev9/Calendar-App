import dayjs from "dayjs";

export const isToday = (date) => dayjs().isSame(date, "day");
export const formatDate = (date) => dayjs(date).format("YYYY-MM-DD");

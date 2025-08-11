export function getSeasonWindow(today = new Date()) {
  const year = today.getFullYear();
  const july5 = new Date(year, 6, 5);
  let start, end;
  if (today >= july5) {
    start = new Date(year, 6, 5);
    end = new Date(year + 1, 6, 4, 23, 59, 59, 999);
  } else {
    start = new Date(year - 1, 6, 5);
    end = new Date(year, 6, 4, 23, 59, 59, 999);
  }
  return { start, end };
}

export function isInCurrentSeason(date) {
  const { start, end } = getSeasonWindow();
  return date >= start && date <= end;
}

export function isJuly5ResetDue(now = new Date()) {
  const year = now.getFullYear();
  const resetAt = new Date(year, 6, 5, 0, 0, 0, 0);
  return now >= resetAt;
}

export function formatDate(d) {
  const dt = new Date(d);
  return dt.toLocaleDateString();
}

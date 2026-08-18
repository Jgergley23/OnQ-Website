export type OnQEvent = {
  id: string;
  title: string;
  /** ISO date string, e.g. "2026-09-15" */
  date: string;
  time?: string;
  venue?: string;
  city?: string;
  description?: string;
  href?: string;
};

/** Populate with upcoming OnQ events. Leave empty until listings are ready. */
export const events: OnQEvent[] = [];

function startOfDay(d: Date) {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export function getUpcomingEvents(now = new Date()): OnQEvent[] {
  const cutoff = startOfDay(now).getTime();
  return events
    .filter((event) => new Date(event.date).getTime() >= cutoff)
    .sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
}

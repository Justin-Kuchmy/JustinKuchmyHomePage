export function formatTimeAgo(postedDate: Date)
{
    const currentDate = new Date();
    const yearDiff = currentDate.getFullYear() - postedDate.getFullYear();
    const monthDiff = currentDate.getMonth() - postedDate.getMonth();
    const dayDiff = currentDate.getDate() - postedDate.getDate();

    if (yearDiff > 0) {
      return yearDiff === 1 ? '1 year ago' : `${yearDiff} years ago`;
    } else if (monthDiff > 0) {
      return monthDiff === 1 ? '1 month ago' : `${monthDiff} months ago`;
    } else if (dayDiff > 0) {
      return dayDiff === 1 ? '1 day ago' : `${dayDiff} days ago`;
    } else {
      return 'Today';
    }
}

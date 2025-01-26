export function formatTime(ms: number) {
    if (ms < 1000) return `${ms}ms`;
    const seconds = ms / 1000;
    if (seconds < 60) return `${seconds.toFixed(1).replace(/\.0$/, '')}s`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${minutes.toFixed(1).replace(/\.0$/, '')}m`;
    const hours = minutes / 60;
    if (hours < 24) return `${hours.toFixed(1).replace(/\.0$/, '')}h`;
    const days = hours / 24;
    if (days < 7) return `${days.toFixed(1).replace(/\.0$/, '')}d`;
    const weeks = days / 7;
    if (weeks < 4.35) return `${weeks.toFixed(1).replace(/\.0$/, '')}w`;
    const months = days / 30.436875;
    if (months < 12) return `${months.toFixed(1).replace(/\.0$/, '')}mo`;
    const years = months / 12;
    return `${years.toFixed(2).replace(/\.0$/, '')}y`;
};
//gh copilot 🔥
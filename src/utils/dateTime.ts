/**
 * Helper methods for date and time format
 */

/**
 * Humanizes date object
 * @param date object
 * @returns string of date in format: January 1, 2021
 */
export function formatDate(date: Date): string {
    const formattedDate = date.toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return formattedDate
}

/**
 * Humanizes time object
 * @param date object
 * @returns string of date in format: 12:00 PM
 */
export function formatTime(date: Date): string {
    const formattedTime = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    return formattedTime
}

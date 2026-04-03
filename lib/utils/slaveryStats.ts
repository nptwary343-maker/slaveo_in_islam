// Utility functions to process and format slavery statistics

/**
 * Formats a number to a percentage string.
 * @param value - The number to format.
 * @returns Percentage string.
 */
function formatPercentage(value: number): string {
    return `${(value * 100).toFixed(2)}%`;
}

/**
 * Compares two slavery statistics and returns the difference as a percentage.
 * @param valueA - The first statistic.
 * @param valueB - The second statistic.
 * @returns The difference in percentage.
 */
function compareStatistics(valueA: number, valueB: number): string {
    const difference = valueB - valueA;
    return formatPercentage(difference / valueA);
}

/**
 * Formats a slavery statistic for display.
 * @param value - The statistic value.
 * @param label - Label for the statistic.
 * @returns Formatted statistic string.
 */
function formatStatistic(value: number, label: string): string {
    return `${label}: ${value.toLocaleString()}`;
}

export { formatPercentage, compareStatistics, formatStatistic };
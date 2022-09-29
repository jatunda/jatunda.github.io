/**
 * 
 * @param {*} progressBar jquery object
 * @param {*} percentInDecimal clamped between 0 and 1.
 */
export function setProgressBarPercent(progressBar, percentInDecimal) {
    percentInDecimal = clamp(percentInDecimal, 0, 1);
    let percent = (percentInDecimal * 100);
    progressBar.css("width", "" + percent + "%");
}

/**
 * clamps value between minimum and maximum value 
 * @param {*} value value to be clamped
 * @param {*} min minimum value
 * @param {*} max maximum value
 * @returns 
 */
export function clamp(value, min, max) {
    if(min > max) {
        let swap = min;
        min = max;
        max = swap;
    }
    return Math.max(min, Math.min(max, value));
}

export function displayFloat(num) {
    // if second number after decimal is not 0
    if((num * 100) % 10 >= 1)
    {
        return num.toFixed(2);
    } 
    
    if ((num * 10)% 10 >= 1)// first number is not 0
    {
        return num.toFixed(1);
    }

    return num.toFixed(0);
}
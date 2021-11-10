/// Follow directions in the markdown files to update the strings.
export function length(string) {
    return string.length;
}

export function reverseString(string) {
    const splitStr = string.split('');
    const revStr = splitStr.reverse('');
    const joinStr = revStr.join('');
    return joinStr;
}
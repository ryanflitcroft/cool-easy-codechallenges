/// Follow directions in the markdown files to update the strings.
export function length(string) {
    return string.length;
}

export function reverseString(string) {
    string = string.split('');
    string = string.reverse('');
    string = string.join('');
    return string;
}

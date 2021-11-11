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

export function concatenate(str1, str2) {
    return str1.concat(str2);
}

export function changeCase(str) {
    if (str === str.toLowerCase()) {
        return str = str.toUpperCase();
    } else if (str === str.toUpperCase()) {
        return str = str.toLowerCase();
    }
}



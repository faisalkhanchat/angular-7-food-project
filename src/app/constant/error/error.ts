import {toTitleCase} from '../messages/messages';
import {PATTERN} from '../pattern/patterns';

export const PATTERN_ERRORS = (pattern, key) => {
    if (pattern === PATTERN.email) {
        return `Please enter a valid ${key.toLowerCase()}`;
    }
    if (pattern === PATTERN.password) {
        return `${toTitleCase(key)} can not contain blank spaces`;
    }
    if (pattern === PATTERN.name) {
        return `${toTitleCase(key)} can not be blank`;
    }
    if (pattern === PATTERN.phone) {
        return `${toTitleCase(key)} must contain only digits`;
    }
    if (pattern === PATTERN.price) {
        return `${toTitleCase(key)} must be numeric`;
    }
};

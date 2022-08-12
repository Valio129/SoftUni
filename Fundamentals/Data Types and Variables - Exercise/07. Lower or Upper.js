function upper(input) {
    
    if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
        console.log(`upper-case`);
    } else if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
        console.log(`lower-case`);
    }
} upper('o')
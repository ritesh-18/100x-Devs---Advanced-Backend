"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = options;
function options(code, input = null) {
    const option = {
        method: "POST",
        url: "https://judge0-ce.p.rapidapi.com/submissions",
        params: {
            base64_encoded: "true",
            wait: "false",
            fields: "*",
        },
        headers: {
            "x-rapidapi-key": "a4cdb021c6msh7410169f6a55583p110c70jsn6b9b40ecbc36",
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "Content-Type": "application/json",
        },
        data: {
            language_id: 52,
            source_code: code,
            stdin: input,
        },
    };
    return option;
}

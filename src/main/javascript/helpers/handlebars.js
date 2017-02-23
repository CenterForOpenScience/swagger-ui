'use strict';

Handlebars.registerHelper('sanitize', function(html) {
    // Strip the script tags from the html, and return it as a Handlebars.SafeString
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('notequal', function(value1, value2, options) {
    if (value1 == value2) {
        return options.inverse(this);
    } else {
        return options.fn(this);
    }
});

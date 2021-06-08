export default {
    methods: {
        decode(string) {
            let HTMLSpecialCharMap = {
                '&amp;': '&',
                '&#038;': "&",
                '&lt;': '<',
                '&gt;': '>',
                '&quot;': '"',
                '&#039;': "'",
                '&#8217;': "’",
                '&#8216;': "‘",
                '&#8211;': "–",
                '&#8212;': "—",
                '&#8230;': "…",
                '&#8221;': '”'
            };
            return string.replace(/\&[\w\d\#]{2,5}\;/g, function(i) { return HTMLSpecialCharMap[i]; });
        }
    }
}

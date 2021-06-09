let keepSelectorS = false;
let keepSelectorBS = false;

let config = {
    selector: 'textarea',

    schema: "html5",

    branding: false,

    plugins: [
        "advlist autolink autoresize link image lists charmap hr anchor preview",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime nonbreaking",
        "table template paste importcss textpattern spellchecker emoticons help media visualblocks importcss"
    ],

    menubar: 'edit insert view format table tools help',

    content_css: '/css/app.css?' + new Date().getTime(),
    importcss_append: true,
    importcss_groups: [
        {
            title: 'Bootstrap',
            filter: getBootstrapStyle,
        },
        {
            title: 'SemaStyle',
            filter: getSemaStyle,
        },
    ],
    visualblocks_default_state: true,
};

function getSemaStyle(selector) {
    if (selector == '.semaStyleStart') {
        keepSelectorS = true;
        return false;
    } else if (selector == '.semaStyleEnd') {
        keepSelectorS = false;
    }
    return keepSelectorS;
}

function getBootstrapStyle(selector) {
    if (selector == '.bootstrapStyleStart') {
        keepSelectorBS = true;
        return false;
    } else if (selector == '.bootstrapStyleEnd') {
        keepSelectorBS = false;
    }
    return keepSelectorBS;
}

let editorType = {
    full: {
        toolbar: [
            'undo redo | bold italic underline strikethrough | alignjustify alignleft aligncenter alignright  | blockquote | formatselect | spellchecker',
            'cut copy paste removeformat | searchreplace | bullist numlist | outdent indent | hr | link unlink anchor image | code | insertdatetime',
            'table | subscript superscript | charmap | visualchars visualblocks nonbreaking | template emoticons | media | help | preview'
        ]
    },
    simple: {
        toolbar: [
            'undo redo | bold italic underline strikethrough | alignleft aligncenter alignright | blockquote | table | spellchecker',
            'cut copy paste removeformat | searchreplace | bullist numlist | code | charmap | visualblocks | link unlink'
        ],
    }
};

let tinyConfig = {
    getAPIKey: function () {
        return 'no-api-key';
    },
    getConfig: function (key = 'full') {
        if (!key || !editorType.hasOwnProperty(key))
        {
            // default to full if there is a key, but it doesn't exist
            key = 'full';
        }
        return Object.assign({}, config, editorType[key]);
    }
};

export default tinyConfig;


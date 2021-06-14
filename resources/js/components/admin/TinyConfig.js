let keepSelectorS = false;
let keepSelectorBS = false;

let config = {
    selector: 'textarea',

    schema: "html5",

    path_absolute: "/",
    relative_urls: false,

    plugins: [
        "advlist autolink autoresize link image lists charmap hr anchor preview",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime nonbreaking",
        "table template paste importcss textpattern spellchecker help media"
    ],

    menubar: 'edit insert view format table tools help',

    skin: false,
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

    image_title: true,
    automatic_uploads: true,
    images_upload_url: '/upload',
    file_picker_types: 'image',
    images_file_types: 'jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp,svg',
    images_reuse_filename: true,
    images_upload_handler: function (blobInfo, success, failure) {
        let xhr, formData;
        xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', '/upload');
        let token = document.head.querySelector('meta[name="csrf-token"]').content;
        xhr.setRequestHeader("X-CSRF-Token", token);
        xhr.onload = function() {
            let json;
            if (xhr.status !== 200) {
                failure('HTTP Error: ' + xhr.status);
                return;
            }
            json = JSON.parse(xhr.responseText);

            if (!json || typeof json.location != 'string') {
                failure('Invalid JSON: ' + xhr.responseText);
                return;
            }
            success(json.location);
        };
        formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());

        xhr.send(formData);
    },
    file_picker_callback: function(cb, value, meta) {
        let input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('name', 'file');
        input.setAttribute('accept', 'image/*');
        input.onchange = function() {
            let file = this.files[0];
            let fileName = file.name.replace(/\.[^/.]+$/, "") + '-' + (new Date()).getTime();

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                let blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                let base64 = reader.result.split(',')[1];
                let blobInfo = blobCache.create(fileName, file, base64);
                blobCache.add(blobInfo);
                cb(blobInfo.blobUri(), { title: file.name });
            };
        };
        input.click();
    }
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
            'undo redo | bold italic underline strikethrough forecolor backcolor| alignjustify alignleft aligncenter alignright  | blockquote | formatselect | spellchecker',
            'cut copy paste removeformat | searchreplace | bullist numlist | outdent indent | hr | link unlink anchor image | code | insertdatetime',
            'table | subscript superscript | charmap | visualchars visualblocks nonbreaking | media | help | preview'
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


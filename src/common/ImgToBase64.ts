import Api from "./Api";

const ImgToBase64 = (options: any, cb: Function) => {
    var img = document.createElement('img');
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var context = canvas.getContext('2d');
        if (context) {
            context.drawImage(img, 0, 0);
        }
        var imgDataUrl = canvas.toDataURL("image/png", 1.0);
        cb(imgDataUrl);
    };
    img.onerror = () => {
        Api.myPost('common/file/img_to_base64', { url: options.url }).then((data) => {
            cb(data);
        });
    };
    img.src = options.url;
    if (img.complete || img.complete === undefined) {
        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        img.src = options.url;
    }
};

export default ImgToBase64;

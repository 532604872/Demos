var FileUpload = function (options) {
    options = $().updateObject(options, {
        action: null,
        file: null,
        dropArea: null,
        acceptable: {
            image: true
        },
        format: {
            image: {
                jpg: true, jpeg: true, png: true, gif: true, bmp: true
            }
        },
        callback: {
            refuse: function () { },
            ready: function (files) { return files },
            progress: function () { },
            done: function () { },
            start: function () { },
            drop: {
                enterArea: function () { },
                leaveArea: function () { },
                drop: function () { },
                enterPage: function () { },
                leavePage: function () { }
            }
        }
    })

    var isFirefox = $().is.Firefox;
    var file = $(options.file).addEvent("change", function (o) {
        if (!o.files) {
            var files = [{ input: o, type: "", suffix: "", name: "", Type: ""}];
            files[0].name = o.value.split("\\").pop();
            if (o.value.indexOf(".") > 0) {
                files[0].suffix = o.value.match(/\.[a-zA-Z0-9]*$/)[0].substr(1);
                for (var key in options.format) {
                    if (options.format[key][files[0].suffix] != undefined) {
                        files[0].type = key;
                        files[0].Type = key;
                        break;
                    }
                }
            }
            incomingFiles(files);
        }
        else {
            incomingFiles(o.files);
        }
    })[0];
    function incomingFiles(files) {
        if (files.length > 0) {
            files = options.callback.ready(files) || files;
            for (var i = 0; i < files.length; i++) {
                if (!files[i].suffix && files[i].name.indexOf(".") > 0) {
                    files[i].suffix = files[i].name.match(/\.[a-zA-Z0-9]*$/)[0].substr(1);
                    files[i].Type = files[i].type.split("/")[0];
                }
                else {
                    files[i].suffix = "";
                    files[i].Type = "";
                }
                if (!options.acceptable[files[i].Type.toLowerCase()] || !options.format[files[i].Type.toLowerCase()][files[i].suffix.toLowerCase()]) {
                    options.callback.refuse(files[i]);
                    continue;
                }
                (function () {
                    var output = {};
                    output.file = files[i];
                    output.action = options.action;
                    options.callback.start(output);

                    if (window.FormData) {
                        var fd = new FormData();
                        fd.append('file', files[i]);
                        var xhr = new XMLHttpRequest();
                        xhr.upload.addEventListener('progress', function (e) {
                            output.progress = parseInt(e.loaded / e.total * 100);
                            options.callback.progress(output);
                        }, false)
                        xhr.onreadystatechange = function (e) {
                            if (xhr.readyState == 4) {
                                /*
                                xhr.responseText = {
                                s: 1,
                                id: 1,
                                src: "../upload/test.jpg"
                                }
                                */
                                output.result = eval("(" + xhr.responseText + ")");
                                options.callback.done(output);

                            }
                        }
                        xhr.open("POST", output.action + "#" + Math.random(), true);
                        xhr.send(fd);

                    }
                    else {
                        html4Upload(output);
                    }
                })()
            }
            file.value = "";
        }


    }
    if (options.dropArea) {
        var dropArea = $(options.dropArea).addEvent("dragenter", function (o) {
            options.callback.drop.enterArea(o);
        }).addEvent("dragleave", function (o) {
            options.callback.drop.leaveArea(o);
        }).addEvent("dragenter", function (e) {
            e.stopPropagation();
            e.preventDefault();
        }, 1).addEvent("dragover", function (e) {
            e.stopPropagation();
            e.preventDefault();
        }, 1).addEvent("drop", function (e) {
            e.stopPropagation();
            e.preventDefault();
            incomingFiles(e.dataTransfer.files);
        }, 1)

        dropArea.addEvent("click", function () {

            //fileClick(true);
            if (file.clicked) {
                file.clicked = false;
            }
            else {
                if (isFirefox) {
                    var m = document.createEvent("MouseEvents");
                    m.initEvent("click", true, true);
                    file.dispatchEvent(m);
                }
                else {
                    file.click();
                }
            }
        });
        $().addEvent("dragenter", function () {
            options.callback.drop.enterPage(dropArea);
        }).addEvent("dragleave", function () {
            options.callback.drop.leavePage(dropArea);
        });

    }
    var form;
    if (!window.FormData) {
        form = file.parentNode.appendChild($().createTag("form"));
        form.iframeList = form.append("div", "none");
        form.enctype = "multipart/form-data";
        form.method = "post";
        form.appendChild(file);
    }
    else {
        file.onclick = function (a) {
            if (!file.clicked) {
                file.clicked = true;
                return true;
            }
            else {
                return false;
            }
        }
    }

    function html4Upload(output) {
        var html4Frame = form.iframeList.append("div", "none", "<iframe name=\"" + output.file.name + "\">");
        form.action = output.action + "#" + Math.random();
        form.target = output.file.name;
        output.file.name = "file";
        $("iframe", html4Frame).addEvent("load", function (o) {
            output.result = eval("(" + o.contentDocument.body.innerHTML + ")");
            form.iframeList.removeChild(html4Frame);
            options.callback.done(output);
        })
        form.submit();
    }

}
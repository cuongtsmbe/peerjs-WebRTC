const createVideo = require("./createVideo");
const connectStream = require("./connectStream");
module.exports = function OpenVideo() {
    var constraints = window.constraints = {
        audio: true,
        video: true
    };

    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
            createVideo(stream, "myvideo");
            connectStream(stream);
        }).catch(function(error) {
            console.log('getUserMedia error: ' + error);
        });
};
module.exports = function(stream, idVideo) {
        const video = document.getElementById(idVideo);
        var videoTracks = stream.getVideoTracks();
        console.log('Got stream with constraints:', constraints);
        console.log('Using video device: ' + videoTracks[0].label);
        stream.onremovetrack = function() {
            console.log('Stream ended');
        };
        window.stream = stream; // make variable available to browser console
        video.srcObject = stream;
    } //mở video tại thẻ div với id chỉ định
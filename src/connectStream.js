// const Peer = require('simple-peer');
const createVideo = require("./createVideo");
// const Peer = require("peerjs");
const uid = require("uid");
// get video/voice stream
module.exports = function(st) {
    const stream = st;
    console.log("const stream :");
    console.log(stream);
    // var peer1 = new Peer({ initiator: location.hash === '#1', stream: stream });

    // peer1.on('signal', data => {
    //     console.log(JSON.stringify(data));
    //     $("#outcoming").html(JSON.stringify(data)); //tạo key 
    // });
    // peer1.on('connect', () => {
    //     console.log("connect");
    //     // wait for 'connect' event before using the data channel
    //     peer1.send('hey peer2, how is it going?')
    // })
    // $('#div-connect').click(function() {
    //     var dataIn = $("#incoming").val(); //nhập key từ phía friend
    //     console.log("button incoming thanh cong");
    //     peer1.signal(JSON.parse(dataIn));

    // });
    // peer1.on('stream', st => { //connected
    //     console.log("stream");
    //     // got remote video stream, now let's show it in a video tag
    //     createVideo(st, "friendvideo");
    // });

    function getID() {
        let id = Math.random().toString(16).substr(2, 8);
        $("#idConnect").html(id);
        return id;
    }
    const peer = new Peer(getID(), {
        secure: true,
        host: 'video-call-demo2306.herokuapp.com',
        port: 443,
    });
    console.log("peer : ");
    console.log(peer);
    $('#div-connect').click(function() {
        console.log("stream in click button");
        console.log(stream);
        var dataIn = $("#incoming").val(); //nhập key từ phía friend
        const call = peer.call(dataIn, stream);
        call.on('stream', (remoteStream) => {
            console.log("call stream created id friendvideo");
            createVideo(remoteStream, "friendvideo");
        });
    });




    peer.on('call', (call) => {
        call.answer(stream); // Answer the call with an A/V stream.
        call.on('stream', (remoteStream) => {
            createVideo(remoteStream, "friendvideo");
        });
    });



};
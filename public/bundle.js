(() => { var o = { 158: (o, e) => { for (var n, t = 256, r = []; t--;) r[t] = (t + 256).toString(16).substring(1);
                e.uid = function(o) { var e = 0,
                        c = o || 11; if (!n || t + c > 512)
                        for (n = "", t = 0; e < 256; e++) n += r[256 * Math.random() | 0]; return n.substring(t, t++ + c) } }, 839: (o, e, n) => { const t = n(215);
                n(158), o.exports = function(o) { const e = o;
                    console.log("const stream :"), console.log(e); const n = new Peer(function() { let o = Math.random().toString(16).substr(2, 8); return $("#idConnect").html(o), o }(), { secure: !0, host: "video-call-demo2306.herokuapp.com", port: 443 });
                    console.log("peer : "), console.log(n), $("#div-connect").click((function() { console.log("stream in click button"), console.log(e); var o = $("#incoming").val();
                        n.call(o, e).on("stream", (o => { console.log("call stream created id friendvideo"), t(o, "friendvideo") })) })), n.on("call", (o => { o.answer(e), o.on("stream", (o => { t(o, "friendvideo") })) })) } }, 215: o => { o.exports = function(o, e) { const n = document.getElementById(e); var t = o.getVideoTracks();
                    console.log("Got stream with constraints:", constraints), console.log("Using video device: " + t[0].label), o.onremovetrack = function() { console.log("Stream ended") }, window.stream = o, n.srcObject = o } }, 323: (o, e, n) => { const t = n(215),
                    r = n(839);
                o.exports = function() { var o = window.constraints = { audio: !0, video: !0 };
                    navigator.mediaDevices.getUserMedia(o).then((function(o) { t(o, "myvideo"), r(o) })).catch((function(o) { console.log("getUserMedia error: " + o) })) } } },
        e = {};

    function n(t) { var r = e[t]; if (void 0 !== r) return r.exports; var c = e[t] = { exports: {} }; return o[t](c, c.exports, n), c.exports }(() => { const o = n(323);
        $(document).ready((function() { console.log("23/06/2021 15:10p E201 Demo video call and have webpack to use to require and exports in clients web"), o() })) })() })();
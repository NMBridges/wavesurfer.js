'use strict';

// Create an instance
var wavesurfer = Object.create(WaveSurfer);

wavesurfer.on('ready', function () {
    // wavesurfer.addRegion({
    //     start: 10,
    //     end: 15,
    //     color: 'hsla(400, 100%, 30%, 0.1)'
    // });

    // wavesurfer.addRegion({
    //     start: 5,
    //     end: 7,
    //     color: 'hsla(200, 50%, 70%, 0.1)'
    // });
});

// Init & load audio file
document.addEventListener('DOMContentLoaded', function () {
    // Init
    wavesurfer.init({
        container: document.querySelector('#waveform'),
        waveColor: '#A8DBA8',
        progressColor: '#3B8686',
        backend: 'MediaElement'
    });

    // Load audio from URL
    var filepath = "../media/demo.wav"
    wavesurfer.load(filepath);
    wavesurfer.setFileName(filepath.split("/").slice(-1)[0].split("\\").slice(-1)[0].split(".")[0]);

    document.querySelector(
        '[data-action="play"]'
    ).addEventListener('click', wavesurfer.playPause.bind(wavesurfer));
    
    const wavesurferd = wavesurfer.export;
    document.querySelector(
        '[data-action="export"]'
    ).addEventListener('click', wavesurferd.bind(wavesurfer));

    wavesurfer.enableDragSelection({ slop: 5 });
});

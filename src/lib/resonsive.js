$("body").on('click', '.chat-btn a', function(e){
    e.stopPropagation();
    document.querySelector('.custom-app-wrapper').classList.remove('settings-open');
    document.querySelector('.custom-app-wrapper').classList.remove('participant-open');
    document.querySelector('#black_chat').style.display = 'block';
    document.querySelector('#red_chat').style.display = 'none';
    confo_variables.isChatViewOpen ? (confo_variables.isChatViewOpen = false) : (confo_variables.isChatViewOpen = true);
    document.querySelector('.custom-app-wrapper').classList.toggle('chat-bar-open');
    if (!navigator.userAgentData.mobile) {
        if (confo_variables.isAnnotate === true) {
            if (confo_variables.annotateStreamID.elementID == 'self-view') {
                confo_variables.adjustAnnotationCanvas('self-view');
            } else {
                confo_variables.adjustAnnotationCanvas(confo_variables.annotateStreamID.config.streamID);
            }
        }
        }
})


// document.querySelector("body").addEventListener("click", function (ele) {
//     document.querySelector('.custom-app-wrapper').classList.remove('chat-bar-open');
// });

$("body").on('click', '.chat-area', function(e){
    e.stopPropagation();
})


// document.querySelector('textarea').addEventListener('click', () => {
//     document.querySelector('#black_chat').style.display = 'block';
//     document.querySelector('#red_chat').style.display = 'none';
// });

$("body").on('click', '.recording-tools ul li.menu-icon', function(e){
    document.querySelector('.custom-app-wrapper').classList.toggle('menu-open');
})

$("body").on('click', '.left-icons-tools ul li.participant-btn', function(e1){
    e1.stopPropagation();
    document.querySelector('.custom-app-wrapper').classList.remove('settings-open');
    document.querySelector('.custom-app-wrapper').classList.remove('chat-bar-open');
    confo_variables.isChatViewOpen = false;
    document.querySelector('.custom-app-wrapper').classList.toggle('participant-open');
    if (!navigator.userAgentData.mobile) {
        if (confo_variables.isAnnotate === true) {
            if (confo_variables.annotateStreamID.elementID == 'self-view') {
                confo_variables.adjustAnnotationCanvas('self-view');
            } else {
                confo_variables.adjustAnnotationCanvas(confo_variables.annotateStreamID.config.streamID);
            }
        }
    }
})

$("body").on('click', '.left-icons-tools ul li.settings-btn', function(e1){
    e1.stopPropagation();
    document.querySelector('.custom-app-wrapper').classList.remove('participant-open');
    document.querySelector('.custom-app-wrapper').classList.remove('chat-bar-open');
    confo_variables.isChatViewOpen = false;
    document.querySelector('.custom-app-wrapper').classList.toggle('settings-open');
    if (!navigator.userAgentData.mobile) {
        if (confo_variables.isAnnotate === true) {
            if (confo_variables.annotateStreamID.elementID == 'self-view') {
                confo_variables.adjustAnnotationCanvas('self-view');
            } else {
                confo_variables.adjustAnnotationCanvas(confo_variables.annotateStreamID.config.streamID);
            }
        }
    }
})



// document.querySelector("body").addEventListener("click", function (ele) {
//     document.querySelector('.custom-app-wrapper').classList.remove('participant-open');
//     document.querySelector('.custom-app-wrapper').classList.remove('chat-bar-open');
//     document.querySelector('.custom-app-wrapper').classList.remove('settings-open');
//     confo_variables.isChatViewOpen = false;
// });


$("body").on('click', '.participants-area', function(e){
    e.stopPropagation();
})


$("body").on('click', '.settings-area', function(e){
    e.stopPropagation();
})


$("body").on('keydown', 'textarea', function(e){
    if (e.key === 'Enter') {
        chatSend();
    }
})

function closeArea() {
    confo_variables.isChatViewOpen = false;
    document.querySelector('.custom-app-wrapper').classList.remove('participant-open');
    document.querySelector('.custom-app-wrapper').classList.remove('chat-bar-open');
    document.querySelector('.custom-app-wrapper').classList.remove('settings-open');
    if (!navigator.userAgentData.mobile) {
        if (confo_variables.isAnnotate === true) {
            if (confo_variables.annotateStreamID.elementID == 'self-view') {
                confo_variables.adjustAnnotationCanvas('self-view');
            } else {
                confo_variables.adjustAnnotationCanvas(confo_variables.annotateStreamID.config.streamID);
            }
        }
     }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get close_btn element that closes the modal
var close_btn = document.querySelector('#close_btn');

var submit_btn = document.querySelector('#submit');

// When the user clicks the button, open the modal 
$("body").on('click', '#myBtn', function(e){
    //modal.style.display = "block";
    $('#myModal').show();
})


// When the user clicks on <span> (x), close the modal
$("body").on('click', 'close', function(e){
    //modal.style.display = "none";
    $('#myModal').hide();
})

$("body").on('click', '#close_btn', function(e){
    //modal.style.display = "none";
    $('#myModal').hide();
})


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        //modal.style.display = "none";
        $('#myModal').hide();
    }
}

// document.querySelector(".cm-screen-share a").addEventListener("click", function () {
//     document.querySelector('.custom-app-wrapper').classList.toggle('screen-open');
// });

// let len = document.querySelectorAll('.custom-multi-app-page .video-area .video-item').length - 1;
// document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.toggle('custom' + len);

// document.querySelector(".bottom-btns ul li.first-btn").addEventListener("click", function() {
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.toggle('custom1');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom2');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom3');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom4');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom5');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom6');
// });
// document.querySelector(".bottom-btns ul li.second-btn").addEventListener("click", function() {
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.toggle('custom2');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom1');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom3');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom4');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom5');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom6');
// });
// document.querySelector(".bottom-btns ul li.third-btn").addEventListener("click", function() {
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.toggle('custom3');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom1');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom2');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom4');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom5');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom6');
// });
// document.querySelector(".bottom-btns ul li.fourth-btn").addEventListener("click", function() {
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.toggle('custom4');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom1');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom2');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom3');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom5');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom6');
// });
// document.querySelector(".bottom-btns ul li.fifth-btn").addEventListener("click", function() {
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.toggle('custom5');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom1');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom2');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom3');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom4');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom6');
// });
// document.querySelector(".bottom-btns ul li.sixth-btn").addEventListener("click", function() {
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.toggle('custom6');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom1');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom2');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom3');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom4');
// 	document.querySelector('.custom-multi-app-page .video-area .row-fluid').classList.remove('custom5');
// });

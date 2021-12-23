import { Component, OnInit } from '@angular/core';

declare let confo_variables: any;
declare let toastr: any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  screenShare() {
    if (confo_variables.isShareReceived !== true) {
        confo_variables.shareScreen();
    }
    else {
        toastr.info('', 'Someone is sharing screen');
    }
  }

  stopScreenShare() {
    confo_variables.stopShareScreen();

  }

  startRecording() {
    if (confo_variables.isRecording === false) {
        confo_variables.startRecord();
    }
    else {

    }
  }

  stopRecording() {
    if (confo_variables.isRecording === true) {
        confo_variables.stopRecord();
    }
    else {

    }
  }

  copyUrl() {
    toastr.info('', 'URL Copied');
    confo_variables.copy();
  }

  muteAudio() {
    confo_variables.muteLocalAudio();
  }

  unmuteAudio() {
    confo_variables.unmuteLocalAudio();
  }


  muteVideo() {
    confo_variables.muteLocalVideo();
  }

  unmuteVideo() {
    confo_variables.unmuteLocalVideo();
  }

  disconnectCall() {
    confo_variables.callDisconnect();
  }
  
  lockRoom() {
    confo_variables.roomLock();
  }

  unlockRoom() {
    confo_variables.roomUnlock();
  }

}

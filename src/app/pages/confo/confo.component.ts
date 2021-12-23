import { Component, OnInit, OnDestroy, ViewEncapsulation, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

declare let EnxRtc: any;
declare let confo_variables: any;
declare let toastr: any;

@Component({
  selector: 'app-confo',
  templateUrl: './confo.component.html',
  styleUrls: ['./confo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfoComponent implements OnInit, OnDestroy {

  urlParams: object;
  camList = [];
  miclist = [];
  participants = [];
  clientId: any;
  room: any;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private renderer: Renderer2,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{
      this.urlParams = params

      let token = params['token'];

      if('app_id' in params && params['app_id']){
        confo_variables.appId = params['app_id'];
      }

      confo_variables.ConnectCall(token, (room) => {
        this.room = room;

        this.clientId = this.room.clientId;
        //this.participants = Array.from(this.room.userList).map(([key, value]) => ({value}));

        this.room.userList.forEach((key, value) => {
          if(this.clientId != key.clientId){
            this.participants.push(key)
          }          
        });

        this.room.addEventListener('user-connected', (event) => {
          if(this.clientId != event.clientId){
            this.participants.push(event)
          }
        })

        this.room.addEventListener('user-disconnected', (event) => {
          this.participants = this.participants.filter(item => {
            return item.clientId != event.clientId
          })
        })

        room.addEventListener("user-audio-muted", (event) => {
          this.participants.forEach(item =>{
            if(item.clientId == event.clientId){
                item.audioMuted = true
            }
          });
        })

        room.addEventListener("user-audio-unmuted", (event) => {
          this.participants.forEach(item =>{
            if(item.clientId == event.clientId){
                item.audioMuted = false
            }
          });
        })

        room.addEventListener("user-video-muted", (event) => {
          this.participants.forEach(item =>{
            if(item.clientId == event.clientId){
                item.videoMuted = true
            }
          });
        })

        room.addEventListener("user-video-unmuted", (event) => {
          this.participants.forEach(item =>{
            if(item.clientId == event.clientId){
                item.videoMuted = false
            }
          });
        })

      });
    })

    this.renderer.addClass(this.doc.body, 'custom-multi-app-page');

    toastr.options.positionClass = 'toast-top-right';

    this.getDevices();

    
  }


  getDevices(){

    EnxRtc.getDevices((arg) => {

        if (arg.result === 0) {

          this.camList = arg.devices.cam;
          this.miclist = arg.devices.mic;
            
          if (this.camList.length == 0) {
              toastr.info('', 'Camera not found');
              return false;
          }
          if (this.miclist.length == 0) {
              toastr.info('', 'Mic not found');
              return false;
          }
    
        } else if (arg.result === 1145) {
            toastr.info('', 'Your media devices might be in use with some other application.');
            return false;
        } else {
            toastr.info('', 'Error:');
            return false;
        }
    });
  }

  switchcam(cam){

  }

  switchmic(mic){

  }

  disconnectCall() {
    confo_variables.callDisconnect();
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.doc.body, 'custom-multi-app-page');
  }

}

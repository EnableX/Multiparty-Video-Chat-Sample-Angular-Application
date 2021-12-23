import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WhiteSpaceValidator } from '../../validators/whitespace.validator';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

declare let EnxRtc: any;
declare let toastr: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;

  loginForm: FormGroup;
  submitted = false;

  version_num = 1.5;
  urlParams: object;

  camList = [];
  miclist = [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) { 
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{
      this.urlParams = params
    })

    this.version_num = EnxRtc.version;

    this.loginForm = this.formBuilder.group({
      nameText: ['', [Validators.required, WhiteSpaceValidator.noWhiteSpace]]
    });

    this.addRecaptchaScript();

    toastr.options.positionClass = 'toast-top-right';

    this.getDevices();
  }

  renderReCaptch() {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : environment.recaptcha.siteKey,
      'callback': (response: any) => {
        let submitBtn = document.getElementById('joinRoom');
        submitBtn.removeAttribute('disabled');
        submitBtn.removeAttribute('aria-disabled');
        submitBtn.classList.remove('btn-outline-info', 'disabled');
        submitBtn.classList.add('btn-info');
      },
      expiredCallback: (response: any) => {
        window['grecaptcha'].reset();
      }
    });
  }
 
  addRecaptchaScript() {
 
    window['grecaptchaCallback'] = () => {
      this.renderReCaptch();
    }
 
    (function(d, s, id, obj){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptch(); return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));
 
  }

  captchaVerified(response: any) {
    console.log('reCAPTCHA response recieved:');
    console.log(response);
  }

  captchaExpired(response: any) {

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

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const myParam = this.urlParams['invite'];

    if(myParam == undefined){

      this.apiService.createRoom()
      .subscribe(data => {
        if(data['result'] ==0){
          
          const roomId = data['room'].room_id;

          if(roomId){
            this.apiService.joinRoom(roomId)
            .subscribe(roomData => {
                if(roomData['result'] == 0){
                  let role = 'moderator';
                  let retData = {
                      name: this.loginForm.value.nameText,
                      role: role,
                      roomId: roomId,
                      user_ref: this.loginForm.value.nameText,
                  };

                  this.apiService.createToken(retData)
                  .subscribe(tokenData => {
                    if(tokenData['result'] == 0){
                      this.router.navigate(['/confo'], {
                        queryParams: {
                          token: tokenData['token']
                        },
                      });
                    }
                  })
                }
                
            })
          }

        }
      })
    }else{
      let room_id, app_id;
      if (myParam.includes('-')) {
          let parms = myParam.split("-");
          room_id = parms[0];
          app_id = parms[1];
      }
      else {
          room_id = myParam;
      }

      let role = 'participant';
      let user_ref = this.loginForm.value.nameText;
      let retData = {
          name: user_ref,
          role: role,
          roomId: room_id,
          user_ref: user_ref,
      };
      if (app_id !== "") {
          retData['appId'] = app_id;
      }

      this.apiService.createToken(retData)
        .subscribe(tokenData => {
          if(tokenData['result'] == 0){
            this.router.navigate(['/confo'], {
              queryParams: {
                token: tokenData['token']
              },
            });
          }
        })
    }
  }

}

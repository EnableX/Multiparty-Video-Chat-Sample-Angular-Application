# Multiparty Video Calling Application using Angular (JS Framework) and EnableX Toolkit for Web

This is a sample multiparty video calling client application written in Angular that allows developers to implement video calling capabilities in their websites. The application runs on the web browsers (referred as client end point) and utilizes EnableX Web SDK to conduct an RTC session with its peers through EnableX Video Services. 

The client application performs the following tasks to facilitate an RTC session: 

* Get token from the application server 
* Connect to the room using the token 
* Publish audio/video streams in the room 
* Subscribe to remote audio/video streams in the room 
* Listen to any session related events

This sample client application also demonstrates the following features:

* Mute/Unmute video 
* Mute/Unmute audio 
* Disconnect

## 1 Get Started

### 1.1 Pre-Requisites

#### 1.1.1 App Id and App Key

* Create a free account on EnableX  [https://portal.enablex.io/cpaas/trial-sign-up/] 
* Create your Project
* Get the App ID and App Key generated against the Project


#### 1.1.2 Requirement

* Check your browser compatibility with EnableX [https://developer.enablex.io/video/browser-compatibility-of-enablex-video/]
* Download latest copy of Web SDK (EnxRtc.js) [https://developer.enablex.io/wp-content/uploads/EnxRtc.js.v1.9.3.zip?ver=1.9.3] and replace src/lib/EnxRtc.js 
* Install all project modules. Run `npm install` 

#### 1.1.3 SSL Certificate 

Use a valid SSL Certificate for your Domain and use it to configure your Web Service to make your domain accessible on HTTPS. 

## 2. Trial

Try a quick Video Call: https://try.enablex.io/ 
Sign up for a free trial https://portal.enablex.io/cpaas/trial-sign-up/


## 3 Installation

* Run node sample app server which needs to be configured separately, it is part of node sample app. Follow the README in node sample app package. 
* Use the node server URL, Port and configure the value in ./proxy.config.json. Currently it is set to https://localhost:4443 
* Run `npm install` 
* Run `npm start`. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.


## 4 Server API

EnableX Server API is a Rest API service meant to be called from Partners' Application Server to provision video enabled
meeting rooms. API Access is given to each Application through the assigned App ID and App Key. So, the App ID and App Key
are to be used as Username and Password respectively to pass as HTTP Basic Authentication header to access Server API.

For this application, the following Server API calls are used:

- https://developer.vcloudx.com/video-api/server-api/rooms-route/#create-room - To create a room
- https://developer.vcloudx.com/video-api/server-api/rooms-route/#get-room-info - To get information of the given Room
- https://developer.vcloudx.com/video-api/server-api/rooms-route/#create-token - To create Token for the given Room

To know more about Server API, go to:
https://developer.vcloudx.com/video-api/server-api/


## 5 Client API

Client End Point Application uses Web Toolkit EnxRtc.js to communicate with EnableX Servers to initiate and manage RTC Communications.

To know more about Client API, go to:
https://developer.enablex.io/video-api/client-api/
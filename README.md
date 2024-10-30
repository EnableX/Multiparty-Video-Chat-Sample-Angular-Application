# Build a Multiparty Video Calling Application with Angular: EnableX Toolkit for Web Integration Guide

Creating a Multiparty Video Calling Application with Angular and EnableX Toolkit for Web

In this guide, we'll walk you through building a multiparty video calling client application using Angular, a popular JavaScript framework. We'll leverage the power of the EnableX Toolkit for Web to enable real-time video calling within your website. This application runs seamlessly on web browsers and utilizes the EnableX Web SDK for establishing and managing RTC (Real-Time Communication) sessions via the EnableX Video Services platform.

Here's a breakdown of what this client application accomplishes:

1. Token Acquisition: It retrieves a secure token from your application server, which is essential for accessing the EnableX Video Services.

2. Room Connection: The application establishes a connection to a designated room using the obtained token, enabling users to join a video conference.

3. Audio/Video Publishing: Users can share their audio and video streams within the room, allowing for dynamic and interactive video conversations.

4. Remote Stream Subscription: It enables participants to subscribe to remote audio and video streams shared by other participants in the room.

5. Session Event Handling: The application listens to various session-related events, ensuring a smooth and reliable video calling experience.

Moreover, this sample client application showcases the following user-friendly features:

Video Mute/Unmute: Users can easily toggle their video feed on or off during the call.

Audio Mute/Unmute: Participants can mute or unmute their audio to control their presence in the conversation.

Disconnect: It provides a seamless way to leave the video call when needed.

By implementing this solution, you can enhance your website with multiparty video calling capabilities, offering a rich and engaging user experience for real-time communication.

## 1 Get Started

### 1.1 Pre-Requisites

#### 1.1.1 App Id and App Key

* Create a free account on EnableX  [https://www.enablex.io/free-trial/] 
* Create your Project
* Get the App ID and App Key generated against the Project


#### 1.1.2 Requirement

* Check your browser compatibility with EnableX [https://developer.enablex.io/docs/quickstart/video/browser-compatibility/index/]
* Download latest copy of Web SDK (EnxRtc.js) [https://developer.enablex.io/downloads/EnxRtc.js.v2.3.30.zip] and replace src/lib/EnxRtc.js 
* Install all project modules. Run `npm install` 

#### 1.1.3 SSL Certificate 

Use a valid SSL Certificate for your Domain and use it to configure your Web Service to make your domain accessible on HTTPS. 

## 2. Trial

Try a quick Video Call: https://try.enablex.io/ 
Sign up for a free trial https://www.enablex.io/free-trial/


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

- https://developer.enablex.io/docs/references/apis/video-api/content/api-routes/#create-a-room - To create a room
- https://developer.enablex.io/docs/references/apis/video-api/content/api-routes/#get-a-list-of-rooms - To get list of Rooms
- https://developer.enablex.io/docs/references/apis/video-api/content/api-routes/#get-room-information - To get information of the given Room
- https://developer.enablex.io/docs/references/apis/video-api/content/api-routes/#create-a-token - To create Token for the given Room


To know more about Server API, go to:
https://developer.enablex.io/docs/references/apis/video-api/index/


## 5 Client API

Client End Point Application uses Web Toolkit EnxRtc.js to communicate with EnableX Servers to initiate and manage RTC Communications.

To know more about Client API, go to:
https://developer.enablex.io/docs/references/sdks/video-sdk/web-sdk/index/

/*! For license information please see ovenplayer.provider.RtmpProvider.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n(382));t.default=function(e,t,n){var i={},a=null,u={name:r.PROVIDER_RTMP,element:e,mse:null,listener:null,canSeek:!1,isLive:!1,seeking:!1,state:r.STATE_IDLE,buffer:0,framerate:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[],adTagUrl:n};return i=(0,o.default)(u,t,null),a=i.super("destroy"),OvenPlayerConsole.log("RTMP PROVIDER LOADED."),i.destroy=function(){OvenPlayerConsole.log("RTMP : PROVIDER DESTROYED."),a()},i}},374:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pickCurrentSource=t.errorTrigger=t.separateLive=t.extractVideoElement=void 0;var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n(9));t.extractVideoElement=function(e){return o.default.isElement(e)?e:e.getVideoElement?e.getVideoElement():e.media?e.media:null},t.separateLive=function(e){return!(!e||!e.isDynamic)&&e.isDynamic()},t.errorTrigger=function(e,t){t&&(t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e))},t.pickCurrentSource=function(e,t,n){var r=Math.max(0,t);if(e)for(var o=0;o<e.length;o++)if(e[o].default&&(r=o),n.getSourceIndex()===o)return o;return r}},376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(377)),o=a(n(7)),i=(n(374),n(1));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n,a,u){var l="",s="",c={},g=!1,d={started:!1,active:!1,isVideoEnded:!1,checkAutoplayStart:!0},f=null,E=null,A=null,T=null,v=null,p=null,y=null,S=!1,m=!1;try{var _=function(){OvenPlayerConsole.log("AutoPlay Support : ","autoplayAllowed",S,"autoplayRequiresMuted",m),(y=new google.ima.AdsRequest).forceNonLinearFullSlot=!1,y.setAdWillAutoPlay(S),y.setAdWillPlayMuted(m),m&&t.trigger(i.PLAYER_WARNING,{message:i.WARN_MSG_MUTEDPLAY,timer:1e4,iconClass:i.UI_ICONS.volume_mute,onClickCallback:function(){t.setMute(!1)}}),y.adTagUrl=a,T.requestAds(y)};return l=google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,s=google.ima.AdErrorEvent.Type.AD_ERROR,google.ima.settings.setLocale("ko"),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0),f=function(e){console.log(e.getError().getVastErrorCode(),e.getError().getMessage());var n=e.getError().getInnerError();n&&console.log(n.getErrorCode(),n.getMessage()),v&&v.destroy(),t.trigger(i.STATE_AD_ERROR,{code:e.getError().getVastErrorCode(),message:e.getError().getMessage()}),d.active=!1,d.started=!0,t.play()},E=function(n){var o=new google.ima.AdsRenderingSettings;o.restoreCustomPlaybackStateOnAdBreakComplete=!0,v=n.getAdsManager(e,o),p=(0,r.default)(v,t,d,f),t.on(i.CONTENT_VOLUME,function(e){e.mute?v.setVolume(0):v.setVolume(e.volume/100)},c),g=!0},A=new google.ima.AdDisplayContainer(function(){var e=document.createElement("div");return e.setAttribute("class","ovp-ads"),e.setAttribute("id","ovp-ads"),n.getContainer().append(e),e}(),e),(T=new google.ima.AdsLoader(A)).addEventListener(l,E,!1),T.addEventListener(s,f,!1),function(){if(!e.play)return S=!0,m=!1,d.checkAutoplayStart=!1,_(),!1;var t=e.play();void 0!==t?t.then(function(){e.pause(),S=!0,m=!1,d.checkAutoplayStart=!1,_()}).catch(function(){e.muted=!0;var t=e.play();void 0!==t&&t.then(function(){e.pause(),S=!0,m=!0,d.checkAutoplayStart=!1,_()}).catch(function(){e.muted=!1,S=!1,m=!1,d.checkAutoplayStart=!1,_()})}):(e.pause(),S=!0,m=!1,d.checkAutoplayStart=!1,_())}(),c.isActive=function(){return d.active},c.started=function(){return d.started},c.play=function(){if(d.started)return new Promise(function(e,t){try{v.resume(),e()}catch(e){t(e)}});var e=0;return new Promise(function(t,r){!function o(){e++,g?n.isAutoStart()&&!S?(S=!0,d.started=!1,r(new Error("autoplayNotAllowed"))):(A.initialize(),v.init("100%","100%",google.ima.ViewMode.NORMAL),v.start(),d.started=!0,t()):e<300?setTimeout(o,100):r(new Error("admanagerLoadingTimeout"))}()})},c.pause=function(){v.pause()},c.videoEndedCallback=function(e){!p||!p.isAllAdComplete()&&p.isLinearAd()?(d.isVideoEnded=!0,T.contentComplete()):e()},c.isAutoPlaySupportCheckTime=function(){return d.checkAutoplayStart},c.destroy=function(){T&&(T.removeEventListener(l,E),T.removeEventListener(s,f)),v&&v.destroy(),A&&A.destroy(),p&&p.destroy();var e=(0,o.default)(n.getContainer()).find(".ovp-ads");e&&e.remove(),t.off(i.CONTENT_VOLUME,null,c)},c}catch(e){return null}}},377:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e&&e.__esModule}(n(7));var r=n(1);t.default=function(e,t,n,o){var i={},a={},u=null,l=google.ima.AdEvent.Type.AD_BUFFERING,s=google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,c=google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,g=google.ima.AdErrorEvent.Type.AD_ERROR,d=google.ima.AdEvent.Type.ALL_ADS_COMPLETED,f=google.ima.AdEvent.Type.CLICK,E=google.ima.AdEvent.Type.SKIPPED,A=google.ima.AdEvent.Type.COMPLETE,T=google.ima.AdEvent.Type.FIRST_QUARTILE,v=google.ima.AdEvent.Type.LOADED,p=google.ima.AdEvent.Type.MIDPOINT,y=google.ima.AdEvent.Type.PAUSED,S=google.ima.AdEvent.Type.RESUMED,m=google.ima.AdEvent.Type.STARTED,_=google.ima.AdEvent.Type.USER_CLOSE,P=google.ima.AdEvent.Type.THIRD_QUARTILE,C=!1,O=null;return a[s]=function(e){OvenPlayerConsole.log(e.type),n.started&&(n.active=!0,t.pause())},a[c]=function(e){OvenPlayerConsole.log(e.type),n.active=!1,!n.started||0!==t.getPosition()&&n.isVideoEnded||t.play()},a[g]=o,a[d]=function(e){OvenPlayerConsole.log(e.type),C=!0,n.isVideoEnded&&t.setState(r.STATE_COMPLETE)},a[f]=function(e){OvenPlayerConsole.log(e.type)},a[T]=function(e){OvenPlayerConsole.log(e.type)},a[l]=function(e){OvenPlayerConsole.log("AD_BUFFERING",e.type)},a[v]=function(n){OvenPlayerConsole.log(n.type);var o=e.getRemainingTime(),i=n.getAd();t.trigger(r.STATE_AD_LOADED,{remaining:o,isLinear:i.isLinear()})},a[p]=function(e){OvenPlayerConsole.log(e.type)},a[y]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PAUSED)},a[S]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PLAYING)},a[m]=function(o){OvenPlayerConsole.log(o.type);var i=o.getAd();O=i;var a={isLinear:i.isLinear(),duration:i.getDuration(),skipTimeOffset:i.getSkipTimeOffset()};t.trigger(r.AD_CHANGED,a),i.isLinear()?(t.setState(r.STATE_AD_PLAYING),n.started=!0,u=setInterval(function(){var n=e.getRemainingTime(),o=i.getDuration();t.trigger(r.AD_TIME,{duration:o,skipTimeOffset:i.getSkipTimeOffset(),remaining:n,position:o-n,skippable:e.getAdSkippableState()})},300)):t.play()},a[A]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},a[E]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},a[_]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},a[P]=function(e){OvenPlayerConsole.log(e.type)},Object.keys(a).forEach(function(t){e.removeEventListener(t,a[t]),e.addEventListener(t,a[t])}),i.setAdCompleteCallback=function(e){},i.isAllAdComplete=function(){return C},i.isLinearAd=function(){return!O||O.isLinear()},i.destroy=function(){OvenPlayerConsole.log("AdsEventListener : destroy()"),t.trigger(r.STATE_AD_COMPLETE),Object.keys(a).forEach(function(t){e.removeEventListener(t,a[t])})},i}},382:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(376)),o=l(n(93)),i=l(n(383)),a=n(374),u=n(1);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){OvenPlayerConsole.log("CORE loaded. ");var n={};(0,o.default)(n);var l=e.element,s=null,c=null;Object.defineProperty(l,"currentTime",{value:0,writable:!0}),e.adTagUrl&&((s=(0,r.default)(l,n,t,e.adTagUrl))||console.log("Can not load due to google ima for Ads.")),c=(0,i.default)(l,n,s?s.videoEndedCallback:null);var g=function(t){var r=e.sources[e.currentSource];OvenPlayerConsole.log("source loaded : ",r,"lastPlayPosition : "+t);var o=l.getCurrentSource();r.file!==o?l.load(r.file):0===t&&n.getPosition()>0&&n.seek(t)},d=function(e){e>0&&(t.isAutoStart()||n.play(),n.seek(e)),t.isAutoStart()&&n.play()};return n.triggerEventFromExternal=function(e,t){return c[e]?c[e](t):null},n.getName=function(){return e.name},n.canSeek=function(){return e.canSeek},n.setCanSeek=function(t){e.canSeek=t},n.isSeeking=function(){return e.seeking},n.setSeeking=function(t){e.seeking=t},n.setState=function(t){if(e.state!==t){var r=e.state;if(r===u.STATE_AD_PLAYING&&(t===u.STATE_ERROR||t===u.STATE_IDLE))return!1;if(s&&s.isAutoPlaySupportCheckTime());else{switch(t){case u.STATE_COMPLETE:n.trigger(u.PLAYER_COMPLETE);break;case u.STATE_PAUSED:n.trigger(u.PLAYER_PAUSE,{prevState:e.state,newstate:u.STATE_PAUSED});break;case u.STATE_AD_PAUSED:n.trigger(u.PLAYER_PAUSE,{prevState:e.state,newstate:u.STATE_AD_PAUSED});break;case u.STATE_PLAYING:n.trigger(u.PLAYER_PLAY,{prevState:e.state,newstate:u.STATE_PLAYING});case u.STATE_AD_PLAYING:n.trigger(u.PLAYER_PLAY,{prevState:e.state,newstate:u.STATE_AD_PLAYING})}e.state=t,n.trigger(u.PLAYER_STATE,{prevstate:r,newstate:e.state})}}},n.getState=function(){return e.state},n.setBuffer=function(e){},n.getBuffer=function(){if(l)return l.getBuffer?l.getBuffer():null},n.getDuration=function(){if(l)return l.getDuration?l.getDuration():0},n.getPosition=function(){if(l)return l.getPosition?l.getPosition():0},n.setVolume=function(e){if(l)return l.setVolume?l.setVolume(e):0},n.getVolume=function(){if(l)return l.setVolume?l.getVolume():0},n.setMute=function(){l&&l.setMute()},n.getMute=function(){if(l)return!!l.getMute&&l.getMute()},n.preload=function(r,o){OvenPlayerConsole.log("CORE : preload() ",r,o);var i=0;return e.sources=r,e.currentSource=(0,a.pickCurrentSource)(r,e.currentSource,t),new Promise(function(e,r){!function a(){return i++,l.isFlashReady&&l.isFlashReady()?(Object.defineProperty(l,"duration",{value:l.getDuration()}),g(o||0),i=0,function a(){return i++,l.isFileLoaded&&l.isFileLoaded()?(d(o),t.isMute()&&n.setMute(!0),t.getVolume()&&t.getVolume()<100&&n.setVolume(t.getVolume()),e()):i<300?void setTimeout(a,100):r(u.ERRORS[u.INIT_RTMP_SETUP_ERROR])}()):i<100?void setTimeout(a,100):r(u.ERRORS[u.INIT_RTMP_SETUP_ERROR])}()})},n.load=function(n){e.sources=n,e.currentSource=(0,a.pickCurrentSource)(n,e.currentSource,t),g(0),d(0)},n.play=function(){if(!l)return!1;n.getState()!==u.STATE_PLAYING&&(s&&s.isActive()||s&&!s.started()?s.play():l.play())},n.pause=function(){if(!l)return!1;n.getState()===u.STATE_PLAYING?l.pause():n.getState()===u.STATE_AD_PLAYING&&s.pause()},n.seek=function(e){l.seek(e)},n.setPlaybackRate=function(e){return 0},n.getPlaybackRate=function(){return 0},n.getSources=function(){return l?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t}}):[]},n.getCurrentSource=function(){return e.currentSource},n.setCurrentSource=function(r,o){if(e.currentQuality===r)return!1;if(r>-1&&e.sources&&e.sources.length>r){if(n.pause(),n.setState(u.STATE_IDLE),OvenPlayerConsole.log("source changed : "+r),e.currentSource=r,n.trigger(u.CONTENT_SOURCE_CHANGED,{currentSource:r}),t.setSourceIndex(r),o){var i=l.getCurrentTime()||0,a=0;g(i),function e(){a++,l.isFileLoaded&&l.isFileLoaded()?d(i):a<300?setTimeout(e,100):console.log("FileLoad failed")}()}return e.currentSource}},n.getQualityLevels=function(){return l?e.qualityLevels:[]},n.getCurrentQuality=function(){return l?e.currentQuality:null},n.setCurrentQuality=function(e){},n.isAutoQuality=function(){},n.setAutoQuality=function(e){},n.getFramerate=function(){return e.framerate},n.setFramerate=function(t){return e.framerate=t},n.seekFrame=function(t){var r=e.framerate,o=(l.getCurrentTime()*r+t)/r;o+=1e-5,n.pause(),n.seek(o)},n.stop=function(){OvenPlayerConsole.log("CORE : stop() "),l.stop()},n.destroy=function(){OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied"),n.stop(),s&&s.destroy(),n.off()},n.super=function(e){var t=n[e];return function(){return t.apply(n,arguments)}},n}},383:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(e,t,n){var o={isJSReady:function(){return!0},timeupdate:function(n){e.currentTime=n.position,t.trigger(r.CONTENT_TIME,n)},volumeChanged:function(e){t.trigger(r.CONTENT_VOLUME,e)},stateChanged:function(e){t.setState(e.newstate)},metaChanged:function(e){t.trigger(r.CONTENT_META,e)},error:function(e){t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e)}};return o}}}]);
// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

   // Set AdMobAds options:
  admob.setOptions({
	publisherId:          "ca-app-pub-5387430380370897/9000586926",  // Required
	interstitialAdId:     "ca-app-pub-5387430380370897/1474230946",  // Optional
	tappxIdAndroid:       "/120940746/Pub-15267-Android-0348",        // Optional
	tappxShare:           0.1,
	isTesting: false, // receiving test ads (do not test with real ads as your account will be banned)				// Optional
	bannerAtTop: false, // set to true, to put banner at top
	overlap: true, // set to true, to allow banner overlap webview
	offsetStatusBar: false, // set to true to avoid ios7 status bar overlap
	autoShowBanner: true, // auto show banners ad when loaded
	autoShowInterstitial: true // auto show interstitials ad when loaded	// Optional
  });

  // Start showing banners (atomatic when autoShowBanner is set to true)
  admob.createBannerView();

  // Request interstitial (will present automatically when autoShowInterstitial is set to true)
  //admob.requestInterstitialAd();

	//navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
});
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
	
    if (AdMob) AdMob.createBanner({
        adId: "ca-app-pub-5387430380370897/9000586926",
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        autoShow: true
    });
	// preppare and load ad resource in background, e.g. at begining of game level
	if(AdMob) AdMob.prepareInterstitial( {adId:"ca-app-pub-5387430380370897/1474230946", autoShow:false} );

	// show the interstitial later, e.g. at end of game level
	randomEvent(10, function() {
		if(AdMob) AdMob.showInterstitial();
	});
});

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
console.log(page.name);
    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
       // myApp.alert('1Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="twelveConstellationsDetail"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('2Here comes About page');
	//alert(123);

	//$(".twelveConstellationsDetailContents").html(toCode($(".twelveConstellationsDetailContents").html(),1));


})


$$(document).on('pause', function (e) {
	if($(".onoffswitch-checkbox2").is(':checked')=== true){

	}else{
		navigator.vibrate([]);
		window.clearInterval(IntervalVibrate);
		navigator.vibrate([]);
		IntervalVibrate="";
	}
})


$$(document).on('resume', function (e) {
	if(($(".onoffswitch-checkbox").is(':checked')=== true)){
		navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
		if(IntervalVibrate==""){
			IntervalVibrate = window.setInterval(function(){
				navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
			},11000);
		}
	}
})

// Dom elemetns
var mainContainer, exit, mtl, bannerDuration;
var boolLegal = false;


function setupDom(){
	mainContainer = document.getElementById('mainContainer');
	exit = document.getElementById('exit');
	for(var i=0;i<mainContainer.getElementsByTagName("img").length;i++){
		if(mainContainer.getElementsByTagName("img")[i].getAttribute("data-src") != null){
			mainContainer.getElementsByTagName("img")[i].src = mainContainer.getElementsByTagName("img")[i].getAttribute("data-src");
		}
	}
}

function animate(){
	//  GSDevTools.create();
	
	mtl = gsap.timeline({force3D: false,repeat:0, repeatDelay:0.5});
	// ---- Animation Timelines ------
	mtl.addLabel("frame1")
	// .set(["#frame02", "#frame03"], {visibility: "hidden" })
	.set(mainContainer, {visibility: "visible"})
	// .to(["#bar"], {y:250,ease:Power1.easeInOut }, "frame1+=2")
	
	
	.add( "frame2", "frame1+=1.5" )
	.to(["#copy1"], {opacity:0,duration:0.5, ease:Power2.easeNone }, "frame2")
	.to(["#copy2","#rtb"], {opacity:1,duration:0.5, ease:Power2.easeNone }, "frame2+=0.3")
	.from("#bar", {y:90,ease:Power1.easeInOut,duration:1.5}, "frame2")
	// .to("#copy2", {opacity:1,ease:Power1.easeInOut}, "frame2+=0.5")
	// .to("#copy2a", {opacity:1,ease:Power1.easeInOut}, "frame2+=1")

	// .add( "frame3", "frame2+=3.25" )
	// .to(["#frame04"], {opacity:1,duration:0.01 }, "frame3")
	// .to("#copy3", {opacity:1,ease:Power1.easeInOut}, "frame3+=0.5")
	// .to("#copy3a", {opacity:1,ease:Power1.easeInOut}, "frame3+=1")
	// .to("#copy3b", {opacity:1,ease:Power1.easeInOut}, "frame3+=1.5")
	// .from("#bar", {y:300,ease:Power1.easeInOut,duration:1.5}, "frame3+=1")
	// .to("#rtb", {opacity:1,ease:Power1.easeInOut}, "frame3+=2.25")

	bannerDuration = mtl.totalDuration();
	
}



/** Called on the window load event. **/
function init() {
  setupDom();
  addListeners()
  animate();

}

/** Add appropriate listeners after the creative's DOM has been set up. **/
function addListeners() {
  exit.addEventListener('click', exitClickHandler);
}

/** Background Exit **/
function exitClickHandler() {
	if(!boolLegal){
		window.open(window.clickTag)
	}
}

/** Main onload handler **/
window.addEventListener('load', init);


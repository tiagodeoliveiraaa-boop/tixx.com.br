(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[602,398,230,101],[0,0,600,400],[602,0,301,236],[602,238,320,158]]},
		{name:"index_atlas_NP_1", frames: [[0,0,320,1200]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.back_160x600 = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cta_160 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fog = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo_160 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.TAGLINE_160 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.fog();
	this.instance.setTransform(-404.95,-489.35,1.9983,1.9983,15.0129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.fog();
	this.instance_1.setTransform(-404.95,-489.35,1.9983,1.9983,15.0129);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-612,-489.3,1365.1,1082.6);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.TAGLINE_160();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,79);


(lib.gradient_radial_002copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.918)","rgba(255,255,255,0.427)","rgba(255,255,255,0.212)","rgba(255,255,255,0.09)","rgba(255,255,255,0.024)","rgba(255,255,255,0)"],[0,0.161,0.447,0.647,0.8,0.898,1],0,-0.5,0,0,-0.5,51.1).s().p("AlhFiQiSiTAAjPQAAjOCSiTQCTiSDOAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAQjOAAiTiSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradient_radial_002copy, new cjs.Rectangle(-50,-50,100,100), null);


(lib.gradient_radial_002 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FEFAA0","rgba(254,250,160,0)"],[0,1],0,0,0,0,0,51.4).s().p("AlkFlQiUiUAAjRQAAjQCUiUQCUiUDQAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRAAQjQAAiUiUg");
	this.shape.setTransform(50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradient_radial_002, new cjs.Rectangle(0,0,101,101), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmmDdIh7jdIB1jcINdAAIBxDbIhwDeg");
	this.shape.setTransform(88.45,17.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(33.8,-4.3,109.3,44.099999999999994), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cta_160();
	this.instance.setTransform(47,-3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(47,-3,115,50.5), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.949)","rgba(255,255,255,0.8)","rgba(255,255,255,0.6)","rgba(255,255,255,0.251)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0.361,0.447,0.569,0.675,0.808,0.898,1],0,-1,0,0,-1,94.9).s().p("AqQKSQkRkRAAmBQAAmAERkQQEQkRGAAAQGBAAERERQEQEQAAGAQAAGBkQERQkREQmBAAQmAAAkQkQg");
	this.shape.setTransform(93,93);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,186,186), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai/DpQgFAAgEgCIgJgEQgHgDgFgDIgKgJIgOgQIhThqIAABjIABALIADAIIAEAHIAIAJIhFAAQAHgHADgFQAEgFABgFQABgGAAgHIAAiEIAAgKQAAgFgCgDIgEgHIgIgJIBDAAIBgB8IAAhaIAAgMIgFgKIgIgMIA/AAIgGAJQgDADgBAEQgCAEAAADIgBALIAACxIgMgBgAERDbQgNgIgEgNIgjhfIgsCCIgMgDIgIgDIgIgDIgMgIQgEgEgEgGQgDgGgDgKIgwiFIgEgKQgCgFgDgDIgGgHIgJgJIBIAAIArCEIAghiIABgFIABgGQAAgGgDgFQgDgGgHgGIBBAAIArCHIAihlIACgGIAAgGQAAgFgCgFQgCgGgGgGIA9AAIhLDTQgVgGgNgJgAhlDXQgagOgNgXQgOgYgBgeQABggAPgXQAOgYAagOQAbgNAhAAQAhgBAYANQAZAOAPAWQANAYAAAdQAAAhgPAYQgOAZgbAOQgZAOgigBQghABgYgOgAhLA0QgMAJgHAOQgHAPAAATIAAAFIAAAFQADAXAJASQAJARAOAKQAPAJARABQAZgBANgRQAOgSAAgfQAAgYgJgUQgIgTgOgLQgOgLgTAAQgRAAgMAHgADsghIAIgIIAGgIIACgIIABgKIAAgtIgyhXIgHgKIgGgIIgHgHIgLgJIBOAAIApBRIAagvIAFgJIABgJIgBgHIgFgJIBBAAIhKB5IAAAtIABANQABAGAEAFQADAEAHAGgABxghQAGgGACgEQADgFAAgGIgBgHIgCgGIgHgVIhCAAIgHAVIgCAHIgBAIQAAAEACAFIAIAKIhJAAIAJgIIAHgIIAFgIIAEgKIA3iDQACgGABgEIABgIIgBgHIgEgKIA/AAIBACmIAEAKIAFAIIAGAIIAKAIgABnh4IgUg8IgXA8IArAAgAi/ghQAGgGADgEQAEgFABgGQACgGAAgHIgBiEIgBgMIgDgLQgDgFgFgGIBQAAIgHAJIgDAHIgDAJIgBAJIAACCIAQABIAMAAIAMAAIAMgBIATgCIANgFIANgIIgRAzgAl4ghIAJgIIAFgIIADgIIAAgKIAAiEIAAgKQAAgEgCgEIgDgHIgHgJIBgAAQAmAAAVAOQAUAOABAbQgBARgIANQgJANgPAIQgQAHgUAAIgIAAIgJgBIgHgCIgIgCIAEAAQAMAAAKgHQAJgFAFgKQAGgKABgMQAAgSgKgJQgKgIgUgBQgEAAgDAAIgJABIAACJIABANQACAGADAFQAEAEAHAGg");
	this.shape.setTransform(60.075,20.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(19.1,-13.2,82.4,66), null);


(lib.Snow1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(Math.random()*7);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(244,211,39,0.839)","rgba(244,211,39,0.6)","rgba(244,211,39,0)"],[0.6,0.631,1],0.2,0,0,0.2,0,5.3).s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgPAUAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgVAAQgUAAgOgPg");
	this.shape.setTransform(-0.5,0,0.6,0.6,0,0,0,-0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(168,193,213,0.839)","rgba(168,193,213,0.6)","rgba(168,193,213,0)"],[0.6,0.631,1],0.1,0,0,0.1,0,5.3).s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgPAUAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgVAAQgUAAgOgPg");
	this.shape_1.setTransform(-0.4875,0,0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.839)","rgba(255,255,255,0.6)","rgba(168,193,213,0)"],[0.6,0.631,1],0,0,0,0,0,2.7).s().p("AgRARQgHgGAAgLQAAgKAHgGQAIgIAJAAQAKAAAHAIQAIAGAAAKQAAALgIAGQgHAIgKAAQgJAAgIgIg");
	this.shape_2.setTransform(-0.475,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).wait(4));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(244,211,39,0.898)","rgba(244,211,39,0)"],[0,1],0.2,0,0,0.2,0,8).s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAVgXAfAAQAgAAAVAXQAWAWAAAeQAAAfgWAWQgVAXggAAQgfAAgVgXg");
	this.shape_3.setTransform(-0.5,0,0.6,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(168,193,213,0.898)","rgba(0,255,255,0.898)","rgba(168,193,213,0)"],[0,0,1],0.1,0.1,0,0.1,0.1,8).s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAVgXAfAAQAgAAAVAXQAWAWAAAeQAAAfgWAWQgVAXggAAQgfAAgVgXg");
	this.shape_4.setTransform(-0.5,0,0.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,4).s().p("AgaAaQgLgKAAgQQAAgPALgLQALgLAPAAQAQAAAKALQAMALAAAPQAAAQgMAKQgKAMgQAAQgPAAgLgMg");
	this.shape_5.setTransform(-0.475,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-12,21,22);


(lib.line2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLR3Qgdj9gbkTQg2okACiWQAFkpAzmYQAQiFATh6QAPhhACgGQACgHACABQABAAABAGQAgDSAgDrQA/HUgCCVQgHFAg7HgQgeDxgdC6QgCAKgCAAQgBAAgBgKg");
	this.shape.setTransform(-0.0018,117.3357);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgMR3Qgfj9gekTQg6okACiWQAFkpA3mYQASiFAUh6QAQhhADgGQACgHACABQABAAACAGQAiDSAjDrQBEHUgCCVQgIFAhAHgQggDxgfC6QgDAKgBAAQgCAAgBgKg");
	this.shape_1.setTransform(-0.0035,117.3357);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AgIR3QgWj9gUkTQgpokACiWQAEkpAmmYQAMiFAOh6QALhhACgGQABgHACABQABAAABAGQAXDSAYDrQAvHUgBCVQgGFAgsHgQgWDxgVC6QgCAKgBAAQgCAAAAgKg");
	this.shape_2.setTransform(-0.0037,117.3357);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgOR3Qgkj9gikTQhEokADiWQAGkpA/mYQAViFAXh6QAThhADgGQACgHACABQACAAACAGQAoDSAnDrQBPHUgCCVQgJFAhKHgQglDxgkC6QgDAKgCAAQgCAAgBgKg");
	this.shape_3.setTransform(-0.005,117.3357);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,2,30,230.7);


(lib.highlight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-47.5,0,47.5,0).s().p("AnaQ9MAAAgh5IO1AAMAAAAh5g");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.highlight, new cjs.Rectangle(-47.5,-108.5,95,217), null);


(lib.raysContainer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0)").s().p("AlvFvQiYiXAAjYQAAjXCYiYQCYiYDXAAQDYAACXCYQCZCYAADXQAADYiZCXQiXCZjYAAQjXAAiYiZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.raysContainer, new cjs.Rectangle(-52,-52,104,104), null);


(lib.rayParticle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.278)","rgba(255,255,255,0.498)","rgba(255,255,255,0.498)","rgba(255,255,255,0.345)","rgba(255,255,255,0.18)","rgba(255,255,255,0.047)","rgba(255,255,255,0.012)","rgba(255,255,255,0)"],[0,0.137,0.259,0.365,0.471,0.616,0.757,0.89,1],-46.4,11.2,-46.4,-22.9).s().p("A4jg3MAxHAAsMgxHABDg");
	this.shape.setTransform(166.9,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.278)","#FFFFFF","#FFFFFF","rgba(255,255,255,0.345)","rgba(255,255,255,0.18)","rgba(255,255,255,0.047)","rgba(255,255,255,0.012)","rgba(255,255,255,0)"],[0,0.137,0.259,0.365,0.471,0.616,0.757,0.89,1],-174.4,0,174.4,0).s().p("A7PAsIAAhvMA2fgDIIAAIXg");
	this.shape_1.setTransform(174.4,26.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rayParticle, new cjs.Rectangle(0,0,408.5,53.6), null);


(lib.enix = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAeIgHgNIgEgHIgDgFIAAAAIgCAFIgEAHIgHANIgJAAIATgeIgTgdIAJAAIAJAOIACAFIACAFIABAAIACgFIADgFIAIgOIAJAAIgSAdIASAeg");
	this.shape.setTransform(26.55,14.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAeIAAg7IAHAAIAAA7g");
	this.shape_1.setTransform(23.025,14.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPAeIgTgeIgGgKIgFgKIAAAAIAAAMIAAAMIAAAaIgHAAIAAg7IAJAAIASAdIAGAKIAFAKIAAAAIgBgMIAAgMIAAgZIAIAAIAAA7g");
	this.shape_2.setTransform(19.125,14.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAeIAAg7IAgAAIAAAGIgZAAIAAATIAYAAIAAAGIgYAAIAAAWIAaAAIAAAGg");
	this.shape_3.setTransform(14.2,14.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAeIAAg7IAgAAIAAAGIgYAAIAAATIAXAAIAAAGIgXAAIAAAWIAZAAIAAAGg");
	this.shape_4.setTransform(8.05,14.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALAeIgBgEIgDgKQgBgGgDgDQgCgCgFgBIgHAAIAAAaIgIAAIAAg7IAHgBIAIAAIAKABIAHAFIADAEIABAHQAAAEgBADIgEAFQgDABgDACQAEABACADQACADABAFIADAKIACAGgAgLgXIAAAXIAIAAQAFgBAEgDQAEgDAAgFQAAgGgEgDQgEgCgFgBIgFAAIgDABg");
	this.shape_5.setTransform(3.575,14.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAeIgHgTIgUAAIgGATIgJAAIAWg7IAIAAIAVA7gAAJAFIgGgQIgCgGIgBgFIAAAAIAAAFIgCAGIgGAQIARAAg");
	this.shape_6.setTransform(-1.75,14.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAcQgFgCgDgGQgCgGAAgJIAAgjIAHAAIAAAjQAAAHACAEQACAEADACQADACAEAAQAGAAAEgEQAEgFAAgKIAAgjIAIAAIAAAiQAAAKgDAGQgDAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_7.setTransform(-7.275,14.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAgIgMgEIgBgBIgBAAQgIAAgGgEQgGgDgDgHQgEgHAAgIQAAgKAEgHQADgHAHgEQAGgEAHAAQAJAAAGAEQAGAEADAGQADAHAAAJQAAAHgCAGQgCAGgEAEQgEAEgFABIAAABIAJACIAJACIgCAGIgMgDgAgKgYQgEADgDAGQgCAGAAAGQAAAGADAFQACAGAEADQAEAEAGAAQAGAAAEgEQAFgDACgGQACgFAAgGIgBgJQgBgFgDgDQgCgEgEgCQgDgCgFAAQgGAAgEAEg");
	this.shape_8.setTransform(-13.175,14.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAfIgFgCIgEgCIACgGIAGACQADACAFAAQAFAAADgDQADgDAAgFQAAgEgCgDIgIgFQgIgCgEgDQgEgFAAgGQAAgFACgDQADgEAEgCQAEgCAFAAIAIABIAGACIgCAGIgFgCIgHgBQgDAAgCACQgDABgBACIgBAEQAAAEADADQADADAFACQAHADAEADQAEAEAAAHQAAAEgCAEQgCAEgFADQgFACgGAAIgGAAg");
	this.shape_9.setTransform(-18.425,14.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAYQgGgEgDgGQgEgHAAgHQAAgHAEgGQADgHAGgDQAHgEAGAAQAIAAAGAEQAGADAEAHQADAGAAAHQAAAHgDAHQgEAGgGAEQgGADgIABQgGgBgHgDgAgLgUQgEADgEAGQgDAFAAAGQAAAHADAFQAEAGAEADQAFADAGAAQAGAAAGgDQAEgEADgFQAEgFAAgHQAAgGgEgGQgDgFgEgDQgGgDgGAAQgGAAgFADgAgHAOQgDgCgCgDQgCgEAAgEQAAgFADgDQACgEAEgCQADgDAFABIAFAAIAEACIgBAEIgDgCIgFgBQgEAAgCACIgFAFIgBAFIABAGQACAEADABQACACAEAAIAEgBIAFgBIABADIgGACIgGABQgDgBgFgCg");
	this.shape_10.setTransform(-25.4,14.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED1C24").s().p("AAlAIIAAgPIAdAAIAAAPgAhBAIIAAgPIAdAAIAAAPg");
	this.shape_11.setTransform(12.175,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ak3AtIAAgLIgOAAQgLAAgEgEQgEgEAAgLIAAgoQAAgLAEgEQAEgEALAAIAtAAQALAAAEAEQAEAEAAALIAAAoQAAALgEAEQgEAEgLAAIgOAAIAAALgAkmALIAAAIIAPAAIAAgxIgvAAIAAAxIAPAAIAAgIgAGlAgQgEgEAAgFQAAgFAEgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDgAGmAQQgCADAAAEQAAAEADADQACADAEAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADgAGJAiIgageIgZAeIgTAAIAignIgjgnIAWAAIAXAbIAWgbIATAAIgfAkIAmAqgAEoAiIAAhOIARAAIAABOgAENAiIgvg2IABAMIAAAqIgQAAIAAhOIAMAAIAvA2IgBg2IAQAAIAABOgAB/AiIAAhOIBDAAIAAAOIgyAAIAAAxIAyAAIAAAPgAAYAiIAAhOIBDAAIAAAOIgxAAIAAAxIAxAAIAAAPgAgHAiIgbgeIgMAAIAAAeIgRAAIAAhOIA4AAQAIAAAEAEQAEADAAAIIAAATQAAAIgEADQgEADgIAAIgHAAIAeAegAgugIIAfAAIAGgBQACgCAAgDIAAgKQAAgEgCgBQgBgBgFAAIgfAAgAhZAiIgIgRIgtAAIgIARIgRAAIAohOIAQAAIApBOgAiHADIAfAAIgPgggAjlAiQgLAAgEgEQgEgEAAgLIAAg7IASAAIAAA/IAqAAIAAg/IARAAIAAA7QAAALgEAEQgEAEgLAAgAmmAiQgKAAgEgDQgEgDAAgJIBFAAIAAgSIgvAAQgLAAgEgDQgEgDAAgLIAAgJQAAgLAEgEQAEgEALAAIAqAAQALAAAEAEQAEADAAAKIAAAEIgQAAIAAgHIgxAAIAAARIAvAAQALAAAEAEQAEAEAAAKIAAAKQAAALgEAEQgEAEgLAAgAGwAeIgBgDQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgCAAIAAAGIgCAAIAAgNIAEgBIAEABIABADQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAABIABADgAGrAXIACAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAIgCAAg");
	this.shape_12.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.enix, new cjs.Rectangle(-44.1,-4.4,88.30000000000001,25.9), null);


(lib.rayParticle_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.278)","rgba(255,255,255,0.498)","rgba(255,255,255,0.498)","rgba(255,255,255,0.345)","rgba(255,255,255,0.18)","rgba(255,255,255,0.047)","rgba(255,255,255,0.012)","rgba(255,255,255,0)"],[0,0.137,0.259,0.365,0.471,0.616,0.757,0.89,1],-46.4,11.2,-46.4,-22.9).s().p("A4jg3MAxHAAsMgxHABDg");
	this.shape_2.setTransform(166.9,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.278)","#FFFFFF","#FFFFFF","rgba(255,255,255,0.345)","rgba(255,255,255,0.18)","rgba(255,255,255,0.047)","rgba(255,255,255,0.012)","rgba(255,255,255,0)"],[0,0.137,0.259,0.365,0.471,0.616,0.757,0.89,1],-174.4,0,174.4,0).s().p("A7PAsIAAhvMA2fgDIIAAIXg");
	this.shape_3.setTransform(174.4,26.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rayParticle_1, new cjs.Rectangle(0,0,408.5,53.6), null);


(lib.SYMBOLS_Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// SOURCE_VECTOR__GUIDED_
	this.instance = new lib.gradient_radial_002copy();
	this.instance.setTransform(0,0,0.1058,0.7405,90);

	this.instance_1 = new lib.gradient_radial_002copy();
	this.instance_1.setTransform(0,0,0.1058,0.7405);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SYMBOLS_Symbol23, new cjs.Rectangle(-37,-37,74.1,74.1), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(93,93,1,1,0,0,0,93,93);
	var instanceFilter_1 = new cjs.ColorFilter(0.68,0.68,0.68,1,54.4,51.52,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,190,190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,186,186), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol4();
	this.instance.setTransform(57.75,16.75,0.73,0.73,0,0,0,58.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(20.9,-3.2,83,52), null);


(lib.snow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		
		var intro = false;
		var fade = true;
		
		var snowParticles = [];
		var snowAmount = 230;
		var snowSize = 0.6;
		var snowZmin = .5;
		var snowZmax = 2;
		var snowAlphaMin = 0.9;
		var snowAlphaMax = 1.3;
		var snowRotation = 1;
		
		// можно оставить как есть – используется как базовый вертикальный скейл
		var gravity = -100;
		
		var windBegin = 0;
		var windForceMin = 0;
		var windForceMax = 0;
		var windDirection = "both";
		var windTimeMin = 1;
		var windTimeMax = 2;
		
		// --- константы для плавности
		var FADE_IN_TIME  = 400; // мс
		var FADE_OUT_TIME = 500; // мс
		
		var sw = lib.properties.width;
		var sh = lib.properties.height;
		var margin = 5;
		
		var wind = {
			force: windDirection === "left" ? -windBegin : windBegin,
			min: windForceMin,
			max: windForceMax,
			dir: windDirection
		};
		
		function windRandom() {
			var range = wind.max - wind.min;
			var nWind;
		
			if (wind.dir === "right") {
				nWind = Math.random() * range + wind.min;
			} else if (wind.dir === "left") {
				nWind = -Math.random() * range - wind.min;
			} else {
				nWind = Math.random() * (range * 2) - range;
			}
		
			createjs.Tween.get(wind)
				.to({ force: nWind }, Math.random() * 3000 + 1000)
				.call(windRandom);
		}
		
		var isSnowing = false;
		var boundUpdateSnowMethod;
		
		var _twoSnowSize  = 2 * snowSize;
		var _fourSnowSize = 4 * snowSize;
		
		function getOptimizedAlpha(scale) {
			var base = Math.random() * (snowAlphaMax - snowAlphaMin) + snowAlphaMin;
			if (scale > _fourSnowSize) return base * 0.4;
			if (scale > _twoSnowSize)  return base * 0.6;
			return base;
		}
		
		// --- NEW: генерация жизни частицы (мс)
		function randomLifeMs() {
			return (1000 + Math.random() * 2000) | 0; // 1000–3000 мс
		}
		
		// --- NEW: случайная позиция ВНУТРИ канваса
		function randomPositionInsideCanvas(p) {
			p.x = Math.random() * sw;
			p.y = Math.random() * sh;
		}
		
		// ===============================
		// MAGIC PHYSICS
		// ===============================
		_this.setParticleMovement = function(particle, isInitialCall) {
			// магические частицы живут дольше и двигаются мягче
			var durationSeconds = 2 + Math.random() * 2; // 2–4 сек «фазы движения»
		
			// базовый вертикальный «подъём» (магический дым/частицы обычно всплывают)
			particle.floatSpeed = particle.floatSpeed || (15 + Math.random() * 25);
		
			// мягкий дрейф по X (чуть лево/право)
			particle.driftX = particle.driftX || (-10 + Math.random() * 20);
		
			// глубина влияет на скорость: дальние медленнее
			var depthScale = 0.4 + (1 / (1 + (particle.depth || 1)));
		
			// горизонтальный дрейф + немного ветра
			particle.vx = (particle.driftX + wind.force * 0.25) * depthScale;
		
			// вертикальный подъём (отрицательный, т.к. Y вниз); для «падающих искр» можно сделать +floatSpeed
			particle.vy = -particle.floatSpeed * depthScale;
		
			// лёгкое вращение, без бешеных спинов
			particle.vRot = (Math.random() * snowRotation * 60) - (snowRotation * 30);
		
			// синусоидальное «покачивание» вокруг траектории
			particle.swayPhase     = particle.swayPhase || (Math.random() * Math.PI * 2);
			particle.swaySpeed     = particle.swaySpeed || (1.2 + Math.random() * 1.5); // рад/сек
			particle.swayAmplitude = particle.swayAmplitude || (5 + Math.random() * 12); // пикс
		
			var newTargetAlpha = getOptimizedAlpha(particle.scaleX);
		
			if (isInitialCall) {
				particle.currentAlpha = fade ? 0 : newTargetAlpha;
				particle.targetAlpha  = newTargetAlpha;
			} else {
				particle.targetAlpha  = newTargetAlpha;
			}
			particle.alphaAnimate = (Math.abs(particle.currentAlpha - particle.targetAlpha) > 0.001);
		
			particle.movementDuration   = durationSeconds * 1000;
			particle.currentMovementTime = 0;
		};
		
		_this.respawnParticle = function(p) {
			// случайная глубина/масштаб
			p.rotation = Math.random() * 360;
			p.depth = +(Math.random() * (snowZmax * 2 - snowZmin) + snowZmin).toFixed(2);
			p.scaleX = p.scaleY = Math.max(0.2, (1 / Math.max(0.01, p.depth) - 0.5) * snowSize);
		
			// позиция внутри канваса
			randomPositionInsideCanvas(p);
		
			// магические параметры
			p.swayPhase     = Math.random() * Math.PI * 2;
			p.swaySpeed     = 1.2 + Math.random() * 1.5;
			p.swayAmplitude = 5 + Math.random() * 12;
			p.floatSpeed    = 15 + Math.random() * 25;
			p.driftX        = -10 + Math.random() * 20;
		
			// движение
			_this.setParticleMovement(p, true);
		
			// жизнь
			p.lifeMs = randomLifeMs();
			p.ageMs  = 0;
		
			// альфа: старт с нуля, флаг что надо «расти»
			p.currentAlpha = 0;
			p.targetAlpha  = getOptimizedAlpha(p.scaleX);
			p.alpha        = 0;
			p.fadeIn  = true;
			p.fadeOut = false;
		};
		
		_this.updateSnow = function(event) {
			if (!isSnowing || createjs.Ticker.paused) return;
		
			var deltaMs   = event.delta;
			var deltaTime = deltaMs / 1000.0;
		
			for (var i = 0; i < snowParticles.length; i++) {
				var p = snowParticles[i];
		
				// ===== ДВИЖЕНИЕ: МАГИЧЕСКИЕ ЧАСТИЦЫ =====
				// обновляем фазу синуса
				p.swayPhase += p.swaySpeed * deltaTime;
		
				// поперечное покачивание (вправо-влево)
				var sway = Math.sin(p.swayPhase) * p.swayAmplitude * (0.5 + p.scaleX);
		
				// лёгкий вертикальный «всплеск», чтобы не летели строго по прямой
				var swirl = Math.cos(p.swayPhase * 0.7) * p.swayAmplitude * 0.3;
		
				p.x += (p.vx * deltaTime) + sway * deltaTime;
				p.y += (p.vy * deltaTime) + swirl * deltaTime;
		
				p.rotation = (p.rotation + p.vRot * deltaTime) % 360;
		
				// возраст
				p.ageMs += deltaMs;
		
				// === альфа ===
				if (p.fadeIn) {
					// нарастание
					var progressIn = Math.min(1, p.ageMs / FADE_IN_TIME);
					p.currentAlpha = p.targetAlpha * progressIn;
					if (progressIn >= 1) p.fadeIn = false;
				} else if (p.ageMs >= p.lifeMs - FADE_OUT_TIME) {
					// затухание
					var remaining   = p.lifeMs - p.ageMs;
					var progressOut = Math.max(0, remaining / FADE_OUT_TIME);
					p.currentAlpha  = p.targetAlpha * progressOut;
				} else {
					// жизнь на полной яркости
					p.currentAlpha = p.targetAlpha;
				}
				p.alpha = p.currentAlpha;
		
				// таймер движения (периодически слегка перебрасываем скорость,
				// чтобы траектория менялась, но всё равно оставалась плавной)
				p.currentMovementTime += deltaMs;
				if (p.currentMovementTime >= p.movementDuration) {
					_this.setParticleMovement(p, false);
				}
		
				// если жизнь закончилась → респавн
				if (p.ageMs >= p.lifeMs) {
					_this.respawnParticle(p);
					continue;
				}
		
				// обёртки
				_this.xReset(p);
				_this.yReset(p);
			}
		};
		
		_this.xReset = function(m) {
			if (m.x > sw + margin)      m.x = Math.random() * -margin;
			else if (m.x < -margin)     m.x = sw + Math.random() * margin;
		};
		
		_this.yReset = function(m) {
			if (m.y > sh + margin)      m.y = Math.random() * -margin;
			else if (m.y < -margin)     m.y = sh + Math.random() * margin;
		};
		
		_this.initSnow = function() {
			snowParticles = [];
		
			_twoSnowSize  = 2 * snowSize;
			_fourSnowSize = 4 * snowSize;
		
			for (var i = 0; i < snowAmount; i++) {
				var m = new lib.Snow1();
		
				// стартовая позиция — СЛУЧАЙНАЯ по всему канвасу
				randomPositionInsideCanvas(m);
		
				m.rotation = Math.random() * 360;
				m.depth = +(Math.random() * (snowZmax * 2 - snowZmin) + snowZmin).toFixed(2);
				m.scaleX = m.scaleY = Math.max(0.4, (1 / Math.max(0.01, m.depth) - 0.5) * snowSize);
		
				// магические параметры
				m.swayPhase     = Math.random() * Math.PI * 2;
				m.swaySpeed     = 1.2 + Math.random() * 1.5;
				m.swayAmplitude = 5 + Math.random() * 12;
				m.floatSpeed    = 15 + Math.random() * 25;
				m.driftX        = -10 + Math.random() * 20;
		
				_this.setParticleMovement(m, true);
				m.alpha = m.currentAlpha;
		
				m.lifeMs = randomLifeMs();
				m.ageMs  = 0;
		
				_this.addChild(m);
				snowParticles.push(m);
			}
		};
		
		_this.stopFX = function () {
			if (isSnowing) {
				createjs.Ticker.removeEventListener("tick", boundUpdateSnowMethod);
				isSnowing = false;
			}
		};
		
		_this.playFX = function () {
			if (!isSnowing) {
				if (snowParticles.length === 0) {
					_this.initSnow();
				}
				boundUpdateSnowMethod = _this.updateSnow.bind(_this);
				createjs.Ticker.addEventListener("tick", boundUpdateSnowMethod);
				isSnowing = true;
			}
		};
		
		windRandom();
		_this.initSnow();
		_this.playFX();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.instance = new lib.Snow1();
	this.instance.setTransform(-144,-99,1,1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snow, new cjs.Rectangle(-148.5,-103.5,9.099999999999994,9.099999999999994), null);


(lib.Line = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.line = new lib.line2();
	this.line.name = "line";
	this.line.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.line).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Line, new cjs.Rectangle(-12,12,24,230.7), null);


(lib.light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// Layer_8
	this.instance = new lib.gradient_radial_002();
	this.instance.setTransform(161.1,157.9,3.9998,4,0,0,0,50.6,50.6);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({alpha:0.1289},2,cjs.Ease.get(1)).to({alpha:0},4,cjs.Ease.get(-1)).to({_off:true},1).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.3,-44.5,404,404);


(lib.Ray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.ray = new lib.rayParticle();
	this.ray.name = "ray";
	this.ray.setTransform(-30.95,-24.8,0.2995,0.2995,-140.8665,0,0,174.1,26.9);
	this.ray.filters = [new cjs.BlurFilter(5, 5, 2)];
	this.ray.cache(-2,-2,413,58);

	this.timeline.addTween(cjs.Tween.get(this.ray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ray, new cjs.Rectangle(-81.6,-69,132.1,107), null);


(lib.Ray_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.ray_1 = new lib.rayParticle_1();
	this.ray_1.name = "ray_1";
	this.ray_1.setTransform(-30.95,-24.8,0.2995,0.2995,-140.8665,0,0,174.1,26.9);
	this.ray_1.filters = [new cjs.BlurFilter(13, 13, 2)];
	this.ray_1.cache(-2,-2,413,58);

	this.timeline.addTween(cjs.Tween.get(this.ray_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ray_1, new cjs.Rectangle(-90.6,-78,122,110), null);


(lib.SYMBOLS_Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.SYMBOLS_Symbol23();
	this.instance.alpha = 0.5586;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SYMBOLS_Symbol25, new cjs.Rectangle(-37,-37,74.1,74.1), null);


(lib.SYMBOLS_Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.SYMBOLS_Symbol25();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:171.0054},53).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.4,-37.4,74.8,74.8);


(lib.star_002_appear_hide_30_oncecopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(11));

	// Layer_1
	this.instance = new lib.SYMBOLS_Symbol23();

	this.instance_1 = new lib.SYMBOLS_Symbol24();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_1}]},33).to({state:[]},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:0.9573,scaleY:0.9573},1).to({scaleX:0.5307,scaleY:0.5307},12).to({scaleX:0.3578,scaleY:0.3578,alpha:0},33,cjs.Ease.get(1)).to({_off:true},1).wait(11));

	// Layer_2
	this.instance_2 = new lib.gradient_radial_002copy();
	this.instance_2.alpha = 0.4219;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).to({alpha:0.4219},5).to({scaleX:0.085,scaleY:0.085,alpha:0.3789},16).to({_off:true},1).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.gradient_radial_001 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol23();
	this.instance.setTransform(0,0,1,1,0,0,0,93,93);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gradient_radial_001, new cjs.Rectangle(-93,-93,186,186), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		//FIRST FRAME INIT
		if (this.needStop == undefined) {
			this.needStop = false;
		}
	}
	this.frame_89 = function() {
		//REQUIRED FRAME
		if (this.needStop) this.stop();
		else this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89).call(this.frame_89).wait(1));

	// Layer_5_copy_copy
	this.instance = new lib.star_002_appear_hide_30_oncecopy2();
	this.instance.setTransform(37.2,25.4,0.33,0.33,0,0,0,0,0.6);
	this.instance.alpha = 0.5195;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).wait(52));

	// Layer_5_copy_copy
	this.instance_1 = new lib.star_002_appear_hide_30_oncecopy2();
	this.instance_1.setTransform(109.25,50.6,0.33,0.33,0,0,0,0,0.6);
	this.instance_1.alpha = 0.6211;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).wait(57));

	// Layer_5_copy
	this.instance_2 = new lib.star_002_appear_hide_30_oncecopy2();
	this.instance_2.setTransform(102.05,133.4,0.33,0.33,0,0,0,0,0.6);
	this.instance_2.alpha = 0.5195;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(62));

	// Layer_5_copy
	this.instance_3 = new lib.star_002_appear_hide_30_oncecopy2();
	this.instance_3.setTransform(42.8,109.8,0.33,0.33,0,0,0,0,0.6);
	this.instance_3.alpha = 0.5195;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).wait(54));

	// Layer_5
	this.instance_4 = new lib.star_002_appear_hide_30_oncecopy2();
	this.instance_4.setTransform(198.45,112.2,0.33,0.33,0,0,0,0,0.6);
	this.instance_4.alpha = 0.6484;
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},0).wait(50));

	// Layer_4
	this.instance_5 = new lib.star_002_appear_hide_30_oncecopy2();
	this.instance_5.setTransform(115.65,77.4,0.33,0.33,0,0,0,0,0.6);
	this.instance_5.alpha = 0.5195;
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).wait(59));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(107.9,92.05);

	// Layer_3
	this.instance_6 = new lib.highlight();
	this.instance_6.setTransform(-72.8,75.6,1.5322,1.3791,14.9988,0,0,-0.3,0.1);
	this.instance_6.alpha = 0.4492;
	this.instance_6.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-0.1,scaleY:1.3834,x:297.5,y:107.65},40,cjs.Ease.quadInOut).wait(50));

	// Layer_1
	this.instance_7 = new lib.logo_160();
	this.instance_7.setTransform(-1,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,216.7,169.9);


(lib.rays = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		const totalRays = 40;
		const sunSpeed = 100;
		const raySpeedMin = 1;
		const raySpeedMax = 2;
		const sunFlare = .5;
		const rayRot = 2;
		const rayScaleMin = .5;
		const rayScaleMax = 1;
		const rayRegX = .95;
		const rayRegY = .95;
		
		var allTweens = [];
		
		function getRand(min, max) {
			return min + Math.random() * (max - min);
		}
		
		this.stopFX = function() {
			allTweens.forEach(function(t) { t.paused = true; });
		}
		
		this.playFX = function() {
			allTweens.forEach(function(t) { t.paused = false; });
		}
		
		var rayDegree = 360 / totalRays;
		var ray;
		for (var i = 0; i < totalRays; i++) {
			ray = new lib.Ray();
			this.rays.addChild(ray);
			ray.regX = rayRegX;
			ray.regY = rayRegY;
			ray.rotation = i * rayDegree;
			ray.scaleX = ray.scaleY = getRand(rayScaleMin, rayScaleMax);
			wiggle(ray, 0, 0, rayRot, sunFlare, getRand(raySpeedMin, raySpeedMax) * 1000);
		}
		
		allTweens.push(createjs.Tween.get(this.rays, {loop: -1}).to({rotation: 360}, sunSpeed * 1000));
		
		var newX, newY, newR, newS;
		function wiggle(mc, maxX, maxY, maxR, maxS, time) {
			if (mc.baseX == undefined) {
				mc.baseX = mc.x;
				mc.baseY = mc.y;
				mc.baseS = mc.scaleX;
				mc.baseR = mc.rotation;
			}
			newX = mc.baseX - maxX + Math.random() * maxX * 2;
			newY = mc.baseY - maxY + Math.random() * maxY * 2;
			newR = mc.baseR - maxR + Math.random() * maxR * 2;
			newS = mc.baseS - maxS + Math.random() * maxS * 2;
			var tw = createjs.Tween.get(mc, {override: true}).
				wait(Math.random() * 500).
				to({x: newX, y: newY, rotation: newR, scaleX: newS, scaleY: newS}, time, createjs.Ease.linear).
				call(wiggle, [mc, maxX, maxY, maxR, maxS, time]);
			allTweens.push(tw);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.instance = new lib.Ray();
	this.instance.setTransform(-37,-32.55,1,1,0,0,0,-31.1,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// raysContainer
	this.rays = new lib.raysContainer();
	this.rays.name = "rays";

	this.timeline.addTween(cjs.Tween.get(this.rays).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rays, new cjs.Rectangle(-87.5,-76.7,139.5,128.7), null);


(lib.back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_97 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(97).call(this.frame_97).wait(1));

	// Layer_1_copy
	this.instance = new lib.Tween10("synched",0);
	this.instance.setTransform(-263.95,200.55,2.2994,1.5839,0,16.7322,-163.2679,0.1,0);
	this.instance.alpha = 0.4883;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1578.6,y:45.25},96,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.setTransform(529.95,178.5,1.2409,0.8548,0,14.998,-165.0019,-0.1,0.1);
	this.instance_1.alpha = 0.4883;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-598.6},96,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Layer_1_copy
	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.setTransform(-385.5,113.7,2.16,2.16,-14.9992);
	this.instance_2.alpha = 0.4883;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:1048.05},96,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.setTransform(-295.2,40.35,0.72,0.72,-14.9973,0,0,-0.1,0.1);
	this.instance_3.alpha = 0.4883;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0.1,x:505.75},96,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// LOGO
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.setTransform(-69.3,-210.15,1.9319,1.9319,0,0,0,108.2,85.4);

	this.timeline.addTween(cjs.Tween.get(this.logo).to({regY:85.5,scaleX:0.69,scaleY:0.69,x:-69.35,y:-218.15},55,cjs.Ease.cubicOut).wait(43));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuJSdMAAAgk5IcTAAMAAAAk5gAhWjQQgLBPgiBEQgiBEhIA8QglAfgeASIBRCxIgFAKIgCA9IA8glIC/g4QgGgRABgfQABgYAGgyQAEgkAQgpQAIgTAVgoIAbg0QAVgjAZgYQAegdAUgPQATgNAQgGIhQjKIACg2IguAvQifA5ghgCQAKAbgKBQg");
	mask.setTransform(-67.25,-26.25);

	// Layer_3
	this.rays = new lib.rays();
	this.rays.name = "rays";
	this.rays.setTransform(-70.55,-34.9,0.8636,0.8636,89.999,0,0,-0.5,0.5);
	this.rays.alpha = 0.4688;
	this.rays.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.rays];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.rays).wait(98));

	// snow
	this.snow = new lib.snow();
	this.snow.name = "snow";
	this.snow.setTransform(-153,-17.4);
	this.snow.alpha = 0.6719;

	this.timeline.addTween(cjs.Tween.get(this.snow).wait(98));

	// back
	this.instance_4 = new lib.back_160x600();
	this.instance_4.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(98));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1840.6,-724.3,4638.2,1770.6);


(lib.gradient_radial_flash_30_001copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_75 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(75).call(this.frame_75).wait(1));

	// _
	this.instance = new lib.gradient_radial_001();
	this.instance.setTransform(50.5,50.5,0.543,0.543);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).to({alpha:1},5,cjs.Ease.get(1)).to({alpha:0},67,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,101);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_114 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(114).call(this.frame_114).wait(23));

	// Layer_7
	this.instance = new lib.gradient_radial_flash_30_001copy();
	this.instance.setTransform(125.95,50.3,0.99,0.8081,0,0,0,50.4,50.6);
	this.instance.alpha = 0.8711;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(1).to({regX:50.5,regY:50.5,scaleX:0.9909,scaleY:0.8079,x:126.05,y:50.25},0).wait(1).to({scaleX:0.9939,scaleY:0.807,y:50.35},0).wait(1).to({scaleX:0.9991,scaleY:0.8056,y:50.65},0).wait(1).to({scaleX:1.0067,scaleY:0.8035,y:51},0).wait(1).to({scaleX:1.017,scaleY:0.8006,y:51.5},0).wait(1).to({scaleX:1.0302,scaleY:0.797,x:126.1,y:52.1},0).wait(1).to({scaleX:1.0466,scaleY:0.7924,y:52.85},0).wait(1).to({scaleX:1.0666,scaleY:0.7869,y:53.8},0).wait(1).to({scaleX:1.0905,scaleY:0.7802,x:126.15,y:54.9},0).wait(1).to({scaleX:1.1188,scaleY:0.7724,x:126.2,y:56.25},0).wait(1).to({scaleX:1.1518,scaleY:0.7632,x:126.25,y:57.8},0).wait(1).to({scaleX:1.1901,scaleY:0.7526,x:126.3,y:59.6},0).wait(1).to({scaleX:1.2341,scaleY:0.7404,x:126.35,y:61.7},0).wait(1).to({scaleX:1.2841,scaleY:0.7265,x:126.45,y:64.05},0).wait(1).to({scaleX:1.3403,scaleY:0.7109,x:126.55,y:66.65},0).wait(1).to({scaleX:1.4024,scaleY:0.6937,x:126.6,y:69.6},0).wait(1).to({scaleX:1.4697,scaleY:0.675,x:126.7,y:72.75},0).wait(1).to({scaleX:1.5409,scaleY:0.6552,x:126.8,y:76.1},0).wait(1).to({scaleX:1.6142,scaleY:0.6349,x:126.9,y:79.55},0).wait(1).to({scaleX:1.6871,scaleY:0.6147,x:127,y:83},0).wait(1).to({scaleX:1.7574,scaleY:0.5951,x:127.1,y:86.25},0).wait(1).to({scaleX:1.8234,scaleY:0.5768,x:127.25,y:89.4},0).wait(1).to({scaleX:1.8838,scaleY:0.56,x:127.3,y:92.25},0).wait(1).to({scaleX:1.938,scaleY:0.545,x:127.35,y:94.75},0).wait(1).to({scaleX:1.986,scaleY:0.5317,x:127.45,y:97},0).wait(1).to({scaleX:2.0278,scaleY:0.5201,x:127.5,y:98.95},0).wait(1).to({scaleX:2.0639,scaleY:0.5101,x:127.55,y:100.7},0).wait(1).to({scaleX:2.0947,scaleY:0.5015,x:127.6,y:102.15},0).wait(1).to({scaleX:2.1208,scaleY:0.4943,x:127.65,y:103.35},0).wait(1).to({scaleX:2.1425,scaleY:0.4882,y:104.4},0).wait(1).to({scaleX:2.1603,scaleY:0.4833,x:127.7,y:105.2},0).wait(1).to({scaleX:2.1746,scaleY:0.4793,y:105.9},0).wait(1).to({scaleX:2.1857,scaleY:0.4763,x:127.75,y:106.4},0).wait(1).to({scaleX:2.194,scaleY:0.474,y:106.8},0).wait(1).to({scaleX:2.1996,scaleY:0.4724,y:107.05},0).wait(1).to({scaleX:2.2028,scaleY:0.4715,y:107.2},0).wait(1).to({regX:50.9,regY:50.8,scaleX:2.2038,scaleY:0.4712,x:127.65,y:107.35},0).to({regX:50.6,scaleX:5.3082,scaleY:0.1821,x:127,y:91.8},49).wait(25));

	// Layer_6
	this.instance_1 = new lib.gradient_radial_flash_30_001copy();
	this.instance_1.setTransform(125.9,44.3,1.8509,0.4023,0,0,0,50.4,50.6);
	this.instance_1.alpha = 0.8711;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).wait(1).to({regX:50.5,regY:50.5,scaleX:1.8505,scaleY:0.4026,x:126.05},0).wait(1).to({scaleX:1.8492,scaleY:0.4038,y:44.35},0).wait(1).to({scaleX:1.847,scaleY:0.4057,y:44.5},0).wait(1).to({scaleX:1.8438,scaleY:0.4086,y:44.7},0).wait(1).to({scaleX:1.8395,scaleY:0.4125,y:44.95},0).wait(1).to({scaleX:1.8338,scaleY:0.4175,y:45.3},0).wait(1).to({scaleX:1.8268,scaleY:0.4238,y:45.7},0).wait(1).to({scaleX:1.8183,scaleY:0.4314,y:46.2},0).wait(1).to({scaleX:1.808,scaleY:0.4406,y:46.85},0).wait(1).to({scaleX:1.7958,scaleY:0.4515,y:47.55},0).wait(1).to({scaleX:1.7814,scaleY:0.4642,y:48.45},0).wait(1).to({scaleX:1.7648,scaleY:0.4791,y:49.45},0).wait(1).to({scaleX:1.7457,scaleY:0.4961,y:50.6},0).wait(1).to({scaleX:1.724,scaleY:0.5155,y:51.9},0).wait(1).to({scaleX:1.6998,scaleY:0.5371,y:53.35},0).wait(1).to({scaleX:1.6733,scaleY:0.5607,y:54.95},0).wait(1).to({scaleX:1.6452,scaleY:0.5858,x:126.1,y:56.65},0).wait(1).to({scaleX:1.6161,scaleY:0.6117,x:126.05,y:58.4},0).wait(1).to({scaleX:1.5873,scaleY:0.6374,y:60.15},0).wait(1).to({scaleX:1.5596,scaleY:0.6621,y:61.8},0).wait(1).to({scaleX:1.5338,scaleY:0.6852,y:63.35},0).wait(1).to({scaleX:1.5104,scaleY:0.706,y:64.8},0).wait(1).to({scaleX:1.4896,scaleY:0.7245,x:126.1,y:66.05},0).wait(1).to({scaleX:1.4715,scaleY:0.7407,x:126.05,y:67.1},0).wait(1).to({scaleX:1.4558,scaleY:0.7547,y:68.05},0).wait(1).to({scaleX:1.4425,scaleY:0.7666,x:126.1,y:68.85},0).wait(1).to({scaleX:1.4313,scaleY:0.7766,y:69.55},0).wait(1).to({scaleX:1.422,scaleY:0.7849,y:70.15},0).wait(1).to({scaleX:1.4143,scaleY:0.7917,x:126.05,y:70.6},0).wait(1).to({scaleX:1.4083,scaleY:0.7971,y:70.95},0).wait(1).to({scaleX:1.4035,scaleY:0.8013,x:126.1,y:71.2},0).wait(1).to({scaleX:1.4001,scaleY:0.8044,y:71.4},0).wait(1).to({scaleX:1.3977,scaleY:0.8065,y:71.6},0).wait(1).to({scaleX:1.3964,scaleY:0.8078,x:126.05,y:71.65},0).wait(1).to({regX:50.4,regY:50.6,scaleX:1.3959,scaleY:0.8081,x:125.9,y:71.8},0).wait(86));

	// Layer_5
	this.instance_2 = new lib.gradient_radial_flash_30_001copy();
	this.instance_2.setTransform(312.9,86.7,1.8593,1.6004,0,0,0,50.4,50.4);
	this.instance_2.alpha = 0.8711;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:50.5,regY:50.5,scaleX:1.8589,scaleY:1.5996,x:312.95,y:86.85},0).wait(1).to({scaleX:1.8574,scaleY:1.5968,x:312.65,y:86.75},0).wait(1).to({scaleX:1.855,scaleY:1.5921,x:312.15,y:86.65},0).wait(1).to({scaleX:1.8514,scaleY:1.5852,x:311.4,y:86.45},0).wait(1).to({scaleX:1.8466,scaleY:1.5758,x:310.35,y:86.2},0).wait(1).to({scaleX:1.8404,scaleY:1.5639,x:309.05,y:85.9},0).wait(1).to({scaleX:1.8327,scaleY:1.5491,x:307.4,y:85.5},0).wait(1).to({scaleX:1.8234,scaleY:1.5311,x:305.4,y:85},0).wait(1).to({scaleX:1.8123,scaleY:1.5097,x:303,y:84.45},0).wait(1).to({scaleX:1.7992,scaleY:1.4845,x:300.2,y:83.8},0).wait(1).to({scaleX:1.784,scaleY:1.455,x:296.95,y:83.05},0).wait(1).to({scaleX:1.7664,scaleY:1.421,x:293.2,y:82.1},0).wait(1).to({scaleX:1.7462,scaleY:1.382,x:288.9,y:81.1},0).wait(1).to({scaleX:1.7232,scaleY:1.3377,x:283.95,y:79.95},0).wait(1).to({scaleX:1.6974,scaleY:1.2879,x:278.45,y:78.65},0).wait(1).to({scaleX:1.6686,scaleY:1.2323,x:272.3,y:77.2},0).wait(1).to({scaleX:1.637,scaleY:1.1714,x:265.55,y:75.55},0).wait(1).to({scaleX:1.603,scaleY:1.1058,x:258.3,y:73.85},0).wait(1).to({scaleX:1.5673,scaleY:1.0367,x:250.65,y:72.05},0).wait(1).to({scaleX:1.5306,scaleY:0.9659,x:242.8,y:70.2},0).wait(1).to({scaleX:1.494,scaleY:0.8953,x:234.95,y:68.3},0).wait(1).to({scaleX:1.4585,scaleY:0.8269,x:227.4,y:66.5},0).wait(1).to({scaleX:1.4251,scaleY:0.7623,x:220.2,y:64.8},0).wait(1).to({scaleX:1.3942,scaleY:0.7027,x:213.6,y:63.25},0).wait(1).to({scaleX:1.3662,scaleY:0.6487,x:207.65,y:61.8},0).wait(1).to({scaleX:1.3412,scaleY:0.6004,x:202.3,y:60.55},0).wait(1).to({scaleX:1.3192,scaleY:0.5579,x:197.6,y:59.4},0).wait(1).to({scaleX:1.2999,scaleY:0.5208,x:193.5,y:58.45},0).wait(1).to({scaleX:1.2833,scaleY:0.4886,x:189.9,y:57.65},0).wait(1).to({scaleX:1.269,scaleY:0.4611,x:186.9,y:56.9},0).wait(1).to({scaleX:1.257,scaleY:0.4378,x:184.3,y:56.3},0).wait(1).to({scaleX:1.2468,scaleY:0.4183,x:182.1,y:55.75},0).wait(1).to({scaleX:1.2385,scaleY:0.4022,x:180.35,y:55.35},0).wait(1).to({scaleX:1.2318,scaleY:0.3893,x:178.9,y:55},0).wait(1).to({scaleX:1.2266,scaleY:0.3792,x:177.8,y:54.75},0).wait(1).to({scaleX:1.2227,scaleY:0.3717,x:176.95,y:54.55},0).wait(1).to({scaleX:1.2201,scaleY:0.3666,x:176.4,y:54.4},0).wait(1).to({scaleX:1.2186,scaleY:0.3637,x:176.1,y:54.3},0).wait(1).to({regX:50.4,regY:50.6,scaleX:1.2181,scaleY:0.3627,x:175.95},0).wait(96));

	// Layer_1
	this.instance_3 = new lib.gradient_radial_flash_30_001copy();
	this.instance_3.setTransform(53.85,65.05,1.0702,1.2885,0,0,0,50.3,50.5);
	this.instance_3.alpha = 0.8711;
	this.instance_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(1).to({_off:false,regX:50.2,scaleX:1.8786,scaleY:1.5406,x:-66.75,y:83.85},0).wait(1).to({regX:50.5,scaleX:1.8781,scaleY:1.5398,x:-66.05,y:83.8},0).wait(1).to({scaleX:1.8767,scaleY:1.5372,x:-65.7,y:83.75},0).wait(1).to({scaleX:1.8741,scaleY:1.5327,x:-65.05,y:83.65},0).wait(1).to({scaleX:1.8704,scaleY:1.5261,x:-64.15,y:83.45},0).wait(1).to({scaleX:1.8655,scaleY:1.5172,x:-62.95,y:83.2},0).wait(1).to({scaleX:1.8591,scaleY:1.5059,x:-61.35,y:82.95},0).wait(1).to({scaleX:1.8512,scaleY:1.4918,x:-59.4,y:82.6},0).wait(1).to({scaleX:1.8416,scaleY:1.4747,x:-57.05,y:82.15},0).wait(1).to({scaleX:1.8302,scaleY:1.4543,x:-54.25,y:81.65},0).wait(1).to({scaleX:1.8167,scaleY:1.4303,x:-50.95,y:81.1},0).wait(1).to({scaleX:1.801,scaleY:1.4023,x:-47.1,y:80.35},0).wait(1).to({scaleX:1.7828,scaleY:1.3699,x:-42.6,y:79.55},0).wait(1).to({scaleX:1.762,scaleY:1.3328,x:-37.5,y:78.6},0).wait(1).to({scaleX:1.7384,scaleY:1.2906,x:-31.7,y:77.6},0).wait(1).to({scaleX:1.7118,scaleY:1.2432,x:-25.15,y:76.4},0).wait(1).to({scaleX:1.6821,scaleY:1.1903,x:-17.85,y:75.05},0).wait(1).to({scaleX:1.6496,scaleY:1.1323,x:-9.9,y:73.6},0).wait(1).to({scaleX:1.6146,scaleY:1.0699,x:-1.25,y:72.05},0).wait(1).to({scaleX:1.5778,scaleY:1.0042,x:7.8,y:70.35},0).wait(1).to({scaleX:1.54,scaleY:0.9368,x:17.05,y:68.65},0).wait(1).to({scaleX:1.5023,scaleY:0.8696,x:26.35,y:67},0).wait(1).to({scaleX:1.4658,scaleY:0.8044,x:35.3,y:65.35},0).wait(1).to({scaleX:1.4313,scaleY:0.743,x:43.8,y:63.8},0).wait(1).to({scaleX:1.3995,scaleY:0.6862,x:51.6,y:62.4},0).wait(1).to({scaleX:1.3707,scaleY:0.6348,x:58.7,y:61.1},0).wait(1).to({scaleX:1.3449,scaleY:0.589,x:65,y:59.95},0).wait(1).to({scaleX:1.3222,scaleY:0.5485,x:70.55,y:58.95},0).wait(1).to({scaleX:1.3024,scaleY:0.5131,x:75.4,y:58.05},0).wait(1).to({scaleX:1.2853,scaleY:0.4826,x:79.65,y:57.25},0).wait(1).to({scaleX:1.2706,scaleY:0.4564,x:83.25,y:56.65},0).wait(1).to({scaleX:1.2581,scaleY:0.4342,x:86.35,y:56.05},0).wait(1).to({scaleX:1.2477,scaleY:0.4156,x:88.85,y:55.6},0).wait(1).to({scaleX:1.2391,scaleY:0.4003,x:91,y:55.2},0).wait(1).to({scaleX:1.2322,scaleY:0.388,x:92.7,y:54.9},0).wait(1).to({scaleX:1.2269,scaleY:0.3784,x:94,y:54.65},0).wait(1).to({scaleX:1.2229,scaleY:0.3713,x:95,y:54.5},0).wait(1).to({scaleX:1.2201,scaleY:0.3664,x:95.65,y:54.35},0).wait(1).to({scaleX:1.2186,scaleY:0.3636,x:96.05,y:54.3},0).wait(1).to({regX:50.4,regY:50.6,scaleX:1.2181,scaleY:0.3627,x:95.95},0).wait(96));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161,0,568,167.7);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {over:60,out:87};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_86 = function() {
		this.stop();
	}
	this.frame_106 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(27).call(this.frame_86).wait(20).call(this.frame_106).wait(48));

	// TEXT
	this.instance = new lib.Symbol5();
	this.instance.setTransform(103.15,18,1,1,0,0,0,57.9,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false,y:28},0).to({y:21.5},5,cjs.Ease.get(0.8)).to({y:18},49,cjs.Ease.get(1)).wait(5).to({regX:58,scaleX:0.98,scaleY:0.98,x:103.2},10,cjs.Ease.get(1)).wait(16).to({regX:57.9,scaleX:1,scaleY:1,x:103.15},10,cjs.Ease.get(1)).wait(57));

	// Layer_10
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(104.8,20.4,1,1,0,0,0,89.2,16);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({_off:false},0).to({alpha:0.1484},10,cjs.Ease.get(1)).wait(16).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(56));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_61 = new cjs.Graphics().p("AmmDdIh8jdIB2jcINdAAIByDbIhxDeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_graphics_61,x:104.1,y:22.025}).wait(45).to({graphics:null,x:0,y:0}).wait(48));

	// Layer_7
	this.instance_2 = new lib.Symbol16();
	this.instance_2.setTransform(54.25,6.55,0.7,0.7,0,0,0,54.1,65);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61).to({_off:false},0).wait(27).to({regX:123,regY:83.8,x:102.5,y:19.7,alpha:0.9966},0).wait(1).to({alpha:0.9854},0).wait(1).to({alpha:0.9648},0).wait(1).to({alpha:0.9328},0).wait(1).to({alpha:0.8867},0).wait(1).to({alpha:0.8235},0).wait(1).to({alpha:0.7403},0).wait(1).to({alpha:0.6361},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.3931},0).wait(1).to({alpha:0.2824},0).wait(1).to({alpha:0.1921},0).wait(1).to({alpha:0.1231},0).wait(1).to({alpha:0.0729},0).wait(1).to({alpha:0.0381},0).wait(1).to({alpha:0.0158},0).wait(1).to({alpha:0.0037},0).wait(1).to({regX:54.1,regY:65,x:54.25,y:6.55,alpha:0},0).to({_off:true},1).wait(48));

	// BUTTON
	this.instance_3 = new lib.Symbol15();
	this.instance_3.setTransform(104.75,21,0.6755,1,0,0,0,104.8,21);
	this.instance_3.alpha = 0;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regX:104.7,scaleX:0.957,x:104.7,alpha:1},6,cjs.Ease.get(0.8)).to({scaleX:1,alpha:0},36,cjs.Ease.get(1)).to({_off:true},1).wait(110));

	// BUTTON
	this.instance_4 = new lib.Symbol15();
	this.instance_4.setTransform(104.7,21,1,1,0,0,0,104.7,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(4).to({_off:false,scaleX:0.8139,x:104.65,alpha:0},0).to({scaleX:0.957,x:104.7,alpha:1},2,cjs.Ease.get(0.8)).to({scaleX:1},36,cjs.Ease.get(1)).wait(111));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,-26.6,327,92.69999999999999);


// stage content:
(lib._160x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,68,188];
	// timeline functions:
	this.frame_0 = function() {
		if (this.border == undefined) {
			this.border = new createjs.Shape();
			this.border.graphics.beginStroke("#999999").setStrokeStyle(2).drawRect(0, 0, lib.properties.width, lib.properties.height);
			stage.addChild(this.border);
		}
		
		
		
		//TXT EFFECT
		var _this = this;
		this.charMaxTime = 800;
		this.appearTxtDelay = 500;
		this.lineCoeff = 6;//delay coeff (y * coeff)
		this.offsetX = 0;//chars offset X 
		this.offsetY = 10;//chars offset Y 
		this.useLines = true;//appear by lines or at once
		var lineDelay = 0;
		var lastX = -999;
		this.appearChar = function(obj, delay = 0) {
			obj.alpha = 0;
			createjs.Tween.get(obj).wait(delay).to({x:obj.baseX + _this.offsetX, y:obj.baseY + _this.offsetY, alpha:0, scaleY:1}).
					to({x:obj.baseX, y:obj.baseY, alpha:1, scaleY:1}, obj.time, createjs.Ease.cubicOut);
		}
		this.appearTxt = function(mc, delay = 0) {
			mc.visible = true;
			var minX, maxX, minY, maxY = 0;
			var shape;
			for (var obj in mc) {
				if (obj.indexOf("shape") >= 0) {
					if (mc[obj].baseX == undefined) {
						mc[obj].baseX = mc[obj].x;
						mc[obj].baseY = mc[obj].y;
						mc[obj].alpha = 0;
						mc[obj].time = _this.charMaxTime;
					}
					
					if (mc[obj].baseX > lastX) lineDelay = mc[obj].baseY * _this.lineCoeff;
					if (_this.useLines == false) lineDelay = 0;			
					_this.appearChar(mc[obj], delay + lineDelay);
					lastX = mc[obj].baseX;
				}
			}
		}
		
		this.disappearChar = function(obj, delay = 0) {
			createjs.Tween.get(obj).wait(delay).to({x:obj.baseX - _this.offsetX*.5, y:obj.baseY - _this.offsetY, alpha:0, scaleY:1}, obj.time*.7, createjs.Ease.cubicIn);
		}
		this.disappearTxt = function(mc, delay = 0) {
			lastX = -999;
			for (var obj in mc) {
				if (obj.indexOf("shape") >= 0) {
					
					if (mc[obj].baseX > lastX) lineDelay = mc[obj].baseY * _this.lineCoeff;
					if (_this.useLines == false) lineDelay = 0;
					_this.disappearChar(mc[obj], delay + lineDelay);
					lastX = mc[obj].baseX;
				}
			}
		}
	}
	this.frame_68 = function() {
		// Only initialize once
		if (!this.initialized) {
			this.initialized = true;
		
			// Animation settings
			var _this = this;
			this.timeLimit = 14500; // time from banner start
			var blinkDelay = 2900;
			this.blinkInterval;
			var cta = this.cta;
			var baseS = cta.scaleX;
			var hoverForce = 1.05;
		
			// Helper function for CTA scaling
			function animateCTA(scale, duration, easing, wait = 0) {
				createjs.Tween.get(cta, {override: true}).wait(wait).to({scaleX: baseS * scale, scaleY: baseS * scale}, duration, easing || createjs.Ease.elasticOut);
			}
		
			// Blink animation function
			this.blink = function () {
				createjs.Tween.get(cta, {override: true})
					.to({scaleX: baseS * hoverForce, scaleY: baseS * hoverForce}, 300, createjs.Ease.quadIn)
					.to({scaleX: baseS, scaleY: baseS}, 1000, createjs.Ease.elasticOut);
			}
		
			// Mouse event handlers
			this.over = function () {
				clearInterval(_this.blinkInterval);
				animateCTA(hoverForce, 1000);
				cta.gotoAndPlay('over');
				_this.back.snow.playFX();
				_this.back.rays.playFX();
				_this.back.logo.gotoAndPlay(1);
			}
		
			this.out = function () {
				if (createjs.Ticker.getTime() < _this.timeLimit || _this.timeLimit == 0) {//out before limit
					_this.blinkInterval = setInterval(_this.blink, blinkDelay);
				} else {//out after limit
					_this.animationStop();
				}
				animateCTA(1, 1000);
				cta.gotoAndPlay('out');
				// Clear existing interval to prevent multiple intervals
				clearInterval(_this.blinkInterval);
			}
		
			// Register events once
			canvas.addEventListener("mouseover", this.over.bind(this));
			canvas.addEventListener("mouseout", this.out.bind(this));
		
			// Start blink animation
			_this.blinkInterval = setInterval(this.blink, blinkDelay);
			
			// Animation stop handler
			this.animationStop = function () {
				clearInterval(_this.blinkInterval);
				
				_this.back.logo.needStop = true;
				_this.back.snow.stopFX();
				_this.back.rays.stopFX();
				// Add animation stop logic if necessary
			}
		
			// Set timer for animation stop
			if (this.timeLimit > 0) {
				createjs.Tween.get(this).wait(this.timeLimit - createjs.Ticker.getTime()).call(this.animationStop);
			}
		}
	}
	this.frame_188 = function() {
		this.loopTotal = 3;
		if (this.loopIndex == undefined) this.loopIndex = 0;
		this.loopIndex++;
		if (this.loopIndex >= this.loopTotal) {//if stop
			this.stop();
			
		} else {//if replay
			//this.disappearTxt(this.txt2, 0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(68).call(this.frame_68).wait(120).call(this.frame_188).wait(2));

	// headline
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(-0.5,416.85);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).to({alpha:1},16,cjs.Ease.get(1)).wait(126));

	// light
	this.light = new lib.light();
	this.light.name = "light";
	this.light.setTransform(-0.4,113.75);

	this.timeline.addTween(cjs.Tween.get(this.light).wait(190));

	// ENIX
	this.instance_1 = new lib.enix();
	this.instance_1.setTransform(80.1,570.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(190));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(81.05,518,1,1,0,0,0,104.8,21.2);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(68).to({_off:false},0).wait(122));

	// back
	this.back = new lib.back();
	this.back.name = "back";
	this.back.setTransform(80.95,271.3,2,2,0,0,0,-69,-28.7);

	this.timeline.addTween(cjs.Tween.get(this.back).to({scaleX:1,scaleY:1,x:81},55,cjs.Ease.cubicOut).wait(135));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgODgwbIcHAAMAAABg3I8HAAg");
	this.shape.setTransform(80,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#001028").s().p("EgODAwcMAAAhg3IcHAAMAAABg3g");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(190));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-58710.9,-60519,118116.4,166694.9);
// library properties:
lib.properties = {
	id: 'BD10522D48EC93478BD7181F5494F048',
	width: 160,
	height: 600,
	fps: 30,
	color: "#001028",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_P_1.png?1777326347786", id:"index_atlas_P_1"},
		{src:"images/index_atlas_NP_1.jpg?1777326347786", id:"index_atlas_NP_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BD10522D48EC93478BD7181F5494F048'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
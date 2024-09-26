const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Tween,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Plugins.TiledBg,
		C3.Plugins.Browser,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Sprite.Exps.ImageWidth,
		C3.Plugins.Sprite.Exps.ImageHeight,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Behaviors.Tween.Cnds.OnTweensFinished
	];
};
self.C3_JsPropNameTable = [
	{Tween: 0},
	{Sprite: 0},
	{Touch: 0},
	{score: 0},
	{Text: 0},
	{TiledBackground: 0},
	{Sprite2: 0},
	{Browser: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {}
}
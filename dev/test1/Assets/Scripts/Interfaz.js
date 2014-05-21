#pragma strict

public var textura : Texture;
public var estetica : GUISkin;

private var texto : String;

function Start()
{
	texto = "Pulsa";
}


function OnGUI()
{
	GUI.skin = estetica;
	GUI.Label(Rect(10,10,200,100), texto);
	
	if(GUI.Button(Rect(600,10,200,100), textura))
	{
		texto = "OK!";
	}
}
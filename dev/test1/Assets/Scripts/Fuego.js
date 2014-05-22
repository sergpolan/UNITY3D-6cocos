#pragma strict

public var textura : Texture;

private var text : Texture;

function Start()
{
	text = null;
}

function OnTriggerStay(hit:Collider)
{
	if(hit.gameObject.tag == "Player")
	{
		text = textura;
	}
}

function OnTriggerExit(hit:Collider)
{
	if(hit.gameObject.tag == "Player")
	{
		text = null;
	}
}

function OnGUI()
{
	GUI.Label(Rect(0,0,1024,768), text);
}
#pragma strict

var zombie: GameObject;
var spawnPosition;
var startTime : float;

function Start () 
{
	startTime = Time.time;
}

function Update () 
{
	var guiTime = Time.time - startTime;
	var seconds : int = guiTime % 60;
	
	if(seconds > 5)
	{
		spawn();
		startTime = Time.time;
	}
}

function spawn ()
{
	spawnPosition = Vector3(0,0,0);
	var createZombie = Instantiate(zombie, spawnPosition, Quaternion.identity);
	Debug.Log("Se creo un zombie"); 
}
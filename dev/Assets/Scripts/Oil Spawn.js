#pragma strict

var oil: GameObject;
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
	
	if(seconds > 1)
	{
		spawn();
		startTime = Time.time;
	}
}

function spawn ()
{
	var randomX : int = Random.Range(-50.0, 47.0);
	var randomZ : int = Random.Range(-47.0, 51.0);
	spawnPosition = Vector3(randomX,0,randomZ);
	var createoil = Instantiate(oil, spawnPosition, Quaternion.identity);
	Debug.Log("Oil created en : (" + randomX + ", 0, " + randomZ +")"); 
}
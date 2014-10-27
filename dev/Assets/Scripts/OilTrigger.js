#pragma strict

var oilCount : int;

function OnTriggerEnter (other : Collider) {
	if(other.tag == "Respawn")
	{
		GUI.enabled = false;
		Destroy(other.gameObject);
		oilCount++;
		GUI.enabled = true;
		Debug.Log("El numero de oils conseguidas es : " + oilCount);
	}
	else
	{
			Debug.Log("NO TOCO OIL");
	}
}

function OnGUI ()
{
	GUI.Label(Rect (1050, 60, 100,20),	oilCount.ToString());
}

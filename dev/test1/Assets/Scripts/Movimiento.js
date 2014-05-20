#pragma strict

public var velocidad : int = 1;

function Start () 
{
	//transform.position.x = 345;
}

/*Se mueve constantemente (metodo translate)
	Delta Time es la diferencia entre fotogramas para que sea uniforme
	entre plataforma
*/
function Update () {

	var horizontal = Input.GetAxis("Horizontal");
	var vertical = Input.GetAxis("Vertical");
	
	transform.Translate(horizontal*velocidad*Time.deltaTime,0,vertical*velocidad*Time.deltaTime);
}
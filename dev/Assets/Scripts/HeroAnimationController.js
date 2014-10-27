#pragma strict

var animator: Animator;
var anime: Animator = null;
var run: boolean;
var jump: boolean;
var speed: int;

function Start () {
	anime = animator;
	speed = 0;
	jump = false;
	run = false;
}

function Update () {

	if ( Input.GetKey(KeyCode.UpArrow) )
	{
		speed = 1;
	}
	else
		speed = 0;
		/*
	if (Input.GetButtonDown("Shift")) 
	{
    	run = true;
	}
	else if (Input.GetButtonUp("Shift")) 
	{
    	run = false;
	}
  	if (Input.GetButtonDown("space")) 
	{
    	jump = true;
	}
	else if (Input.GetButtonUp("space")) 
	{
    	jump = false;
	}*/
	animator.SetBool("Jump", jump);
	animator.SetBool("Run", run);
	animator.SetInteger("Speed", speed);


}
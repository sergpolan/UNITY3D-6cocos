private var target : Transform; 
private var myTransform : Transform; 
private var startTime;
private var seconds : int;
private var fraction : int;
private var animator: Animator;

var moveSpeed = 3; 
var rotationSpeed = 3;  
 
function Awake()
{
    myTransform = transform; 
    startTime = Time.time;
}
 
function Start()
{
     target = GameObject.FindWithTag("Player").transform;
     animator = GetComponent(Animator);
}
 
function Update () {

 	var guiTime = Time.time - startTime;
    seconds = guiTime % 60;
    fraction = (guiTime * 100) % 100;
    
    if(seconds < 1)
    {
    	animator.SetFloat("Speed", 2.0);
    }
    else if(seconds > 1 && seconds < 3)
    {
    	animator.SetBool("Run", true);
    }
    
    if(seconds != 0 && seconds % 10 == 0 && fraction < 2)
    {
    	moveSpeed = moveSpeed + 1;
    	Debug.Log("MoveSpeed:  " + moveSpeed);
    }
    
    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
 
    myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
 
 	
}

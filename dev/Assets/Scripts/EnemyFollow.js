var target : Transform; 
var myTransform : Transform; 
private var startTime;

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
 	
}
 
function Update () {
    
    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
 
    myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
 
 	
}

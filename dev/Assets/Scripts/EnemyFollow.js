﻿var target : Transform; 
var moveSpeed = 3; 
var rotationSpeed = 3; 
 
var myTransform : Transform; 
 
function Awake()
{
    myTransform = transform; 
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
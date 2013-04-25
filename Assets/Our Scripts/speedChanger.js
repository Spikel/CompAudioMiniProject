#pragma strict

public var currentSpeedLimit = 65;
public var guiScript : motorcycleGUI;
public var speedLimitChangeSound : AudioSource;
public var motorcycleSound : AudioSource;

function Start () {

}

function Update () {
	var car = this;
	var oldSpeedLimit = currentSpeedLimit;
	
	if(car.transform.position.z > 45703) {
		currentSpeedLimit = 55;
	} else if (car.transform.position.z > 23598) {
		currentSpeedLimit = 35;
	} else if (car.transform.position.z > 4389) {
		currentSpeedLimit = 55;
	}
	
	if(oldSpeedLimit != currentSpeedLimit) {
		speedLimitChangeSound.Play();
	}
	
	guiScript.updateSpeedLimit(currentSpeedLimit);
	
	
	var mover : cameraMover = this.GetComponent(cameraMover);
	guiScript.updateCurrentSpeed(mover.speed);
	
	
    if (Input.GetKeyDown (KeyCode.UpArrow)){
        mover.speed+=5;
        motorcycleSound.pitch+=.02;
        if(mover.speed > 95) {
        	mover.speed = 95;
        	
        }
    }
    
    if (Input.GetKeyDown (KeyCode.DownArrow)){
    	mover.speed-=5;
    	motorcycleSound.pitch-=.02;
    	if(mover.speed < 0) {
    		mover.speed = 0;
    		
        }
    }
   
}


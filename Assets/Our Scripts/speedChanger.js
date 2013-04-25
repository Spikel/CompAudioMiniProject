#pragma strict

public var currentSpeedLimit = 65;
public var guiScript : motorcycleGUI;
public var speedLimitChangeSound : AudioSource;
public var motorcycleSound : AudioSource;
public var speedWarning : AudioSource;
public var timeSinceLastSpeedWarning = 0.0;
public var numSpeedWarningsLeft = 0.0;

function Start () {

}

function Update () {
	var car = this;
	var oldSpeedLimit = currentSpeedLimit;
	var mover : cameraMover = this.GetComponent(cameraMover);
	guiScript.updateCurrentSpeed(mover.speed);
	
	
	if(car.transform.position.z > 45703) {
		currentSpeedLimit = 55;
	} else if (car.transform.position.z > 23598) {
		currentSpeedLimit = 35;
	} else if (car.transform.position.z > 4389) {
		currentSpeedLimit = 55;
	}
	
	timeSinceLastSpeedWarning += Time.deltaTime;
	
	if(oldSpeedLimit != currentSpeedLimit) {
		speedLimitChangeSound.Play();
		if(mover.speed > currentSpeedLimit + 10) {
			
			numSpeedWarningsLeft = 3;
			timeSinceLastSpeedWarning = -1.0;
		}
	}
	
	if(numSpeedWarningsLeft > 0 && timeSinceLastSpeedWarning > 0.1) {
			Debug.Log("Playing warning");
					speedWarning.Play();
					
					numSpeedWarningsLeft--;
					timeSinceLastSpeedWarning = 0.0;
	}
	
	guiScript.updateSpeedLimit(currentSpeedLimit);
	
	
	
	
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


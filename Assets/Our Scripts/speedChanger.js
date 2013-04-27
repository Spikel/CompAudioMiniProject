#pragma strict

public var currentSpeedLimit = 65;
public var guiScript : motorcycleGUI;
public var speedLimitChangeSound : AudioSource;
public var motorcycleSound : AudioSource;
public var quietMotorcycleSound : AudioSource;
public var speedWarning : AudioSource;

public var timeSinceLastSpeedReminder = 0.0;
public var numSpeedRemindersLeft = 0;
public var timeSinceLastSpeedWarning = 0.0;
public var numSpeedWarningsLeft = 0.0;
public var doCancellation = false;
public var maxSpeedInCurrentZone = 0;
public var lastSpeedWarningWasPlayedAt = 0;
public var lastSpeed;

function Start () {
	
}



function Update () {
	var car = this;
	var oldSpeedLimit = currentSpeedLimit;
	var mover : cameraMover = this.GetComponent(cameraMover);
	guiScript.updateCurrentSpeed(mover.speed);
	
	
	if(car.transform.position.z > 42000) {
		currentSpeedLimit = 65;
	} else if (car.transform.position.z > 23598) {
		currentSpeedLimit = 35;
	} else if (car.transform.position.z > 4389) {
		currentSpeedLimit = 55;
	}
	
	timeSinceLastSpeedWarning += Time.deltaTime;
	timeSinceLastSpeedReminder += Time.deltaTime;
	
	if(oldSpeedLimit != currentSpeedLimit) {
		speedLimitChangeSound.Play();
		if(mover.speed > currentSpeedLimit + 10) {
			
			numSpeedWarningsLeft = 3;
			timeSinceLastSpeedWarning = -0.75;
		}
	}
	
	
	if(numSpeedWarningsLeft > 0 && timeSinceLastSpeedWarning > 0.1) {
		speedWarning.Play();
		numSpeedWarningsLeft--;
		timeSinceLastSpeedWarning = 0.0;
	}
	
	
	if(numSpeedRemindersLeft > 0 && timeSinceLastSpeedReminder > 0.1) {
		speedWarning.Play();
		numSpeedRemindersLeft--;
		timeSinceLastSpeedReminder = 0.0;
	}
	
	
	guiScript.updateSpeedLimit(currentSpeedLimit);
	
    if (Input.GetKeyDown (KeyCode.UpArrow)){
        mover.speed+=1;
        motorcycleSound.pitch+=.02;
        quietMotorcycleSound.pitch+=.02;
        if(mover.speed > 95) {
        	mover.speed = 95;
        	motorcycleSound.pitch-=.02;
        	quietMotorcycleSound.pitch-=.02;
        }
        
		if(mover.speed % 5 == 0 && mover.speed > currentSpeedLimit + 5) {
			numSpeedRemindersLeft = 3;
			timeSinceLastSpeedReminder = 0;
		} 
    }
    
    if (Input.GetKeyDown (KeyCode.DownArrow)){
    	mover.speed-=1;
    	motorcycleSound.pitch-=.02;
    	quietMotorcycleSound.pitch-=.02;
    	if(mover.speed < 0) {
    		mover.speed = 0;
    		motorcycleSound.pitch+=.02;
    		quietMotorcycleSound.pitch+=.02;
        }
    }
    
    
    
    if (Input.GetKeyDown (KeyCode.RightArrow)){
    	guiScript.turnLeftBlinkerOff();
    	guiScript.toggleRightBlinker();
    }
    
     if (Input.GetKeyDown (KeyCode.LeftArrow)){
    	guiScript.turnRightBlinkerOff();
    	guiScript.toggleLeftBlinker();
    }
    
     if (Input.GetKeyDown (KeyCode.C)){
       doCancellation = !doCancellation;
     	Debug.Log("Cancelation" + doCancellation);
    	if(doCancellation) {
    		motorcycleSound.Stop();
    		quietMotorcycleSound.Play();
    	} else {
    		motorcycleSound.Play();
    		quietMotorcycleSound.Stop();
    	}
    	
    	
    	
    }
    
    
    
}


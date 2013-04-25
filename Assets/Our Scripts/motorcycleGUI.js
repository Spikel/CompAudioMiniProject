
var motorcycleIcon : Texture2D;
var leftTurnIcon : Texture2D;
var rightTurnIcon : Texture2D;
var xIcon : Texture2D;
var speedLimitBorder : Texture2D;


//InvokeRepeating ("checkBlinker", 0.001, 0.30);

private var timeToBlink = false;
private var padding = 40;

private var leftBlinkerOn = false;
private var rightBlinkerOn = false;

	function Start () {
	clearRearAlert();
	clearLeftAlert();
	clearRightAlert();
	clearRearLeftAlert();
	clearRearRightAlert();
	
	updateSpeedLimit(65);
	turnLeftBlinkerOn();
	turnRightBlinkerOn();
	}

function OnGUI () {
	
}



public function showRearAlert() {
	GameObject.Find("GUICollisionRear").guiTexture.enabled = true;
	Debug.Log("rear alert");
}

function clearRearAlert() {
	GameObject.Find("GUICollisionRear").guiTexture.enabled = false;
}

public function showRearLeftAlert() {
	GameObject.Find("GUICollisionRearLeft").guiTexture.enabled = true;
	Debug.Log("rear alert");
}

function clearRearLeftAlert() {
	GameObject.Find("GUICollisionRearLeft").guiTexture.enabled = false;
}

public function showRearRightAlert() {
	GameObject.Find("GUICollisionRearRight").guiTexture.enabled = true;
	Debug.Log("rear alert");
}

function clearRearRightAlert() {
	GameObject.Find("GUICollisionRearRight").guiTexture.enabled = false;
}

function showLeftAlert() {
	GameObject.Find("GUICollisionLeft").guiTexture.enabled = true;
}

function clearLeftAlert() {
	GameObject.Find("GUICollisionLeft").guiTexture.enabled = false;
}

function showRightAlert() {
	GameObject.Find("GUICollisionRight").guiTexture.enabled = true;
}

function clearRightAlert() {
	GameObject.Find("GUICollisionRight").guiTexture.enabled = false;
}

function updateCurrentSpeed(value) {
	GameObject.Find("GUICurrentSpeed").guiText.text = ""  +value;
}

function updateSpeedLimit(value) {
	GameObject.Find("GUISpeedLimit").guiText.text = "" + value;
}

function turnLeftBlinkerOn() {
	leftBlinkerOn = true;
}

function turnLeftBlinkerOff() {
	leftBlinkerOn = false;
}

function turnRightBlinkerOn() {
	rightBlinkerOn = true;
}

function turnRightBlinkerOff() {
	rightBlinkerOn = false;
}

function stopBlinkers() {
	leftBlinkerOn = rightBlinkerOn = false;
}

function checkBlinker() {
	if(leftBlinkerOn) {
		GameObject.Find("GUILeftTurn").guiTexture.enabled = timeToBlink;
	}
	
	if(rightBlinkerOn) {
		GameObject.Find("GUIRightTurn").guiTexture.enabled = timeToBlink;
	}
	
	timeToBlink = !timeToBlink;
}

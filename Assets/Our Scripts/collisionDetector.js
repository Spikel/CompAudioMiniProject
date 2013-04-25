#pragma strict


	function Start () {
	
	}
	
	function Update () {
	
	}
	
	public var guiScript : motorcycleGUI;


	function OnTriggerEnter(other: Collider){
	  switch(other.name) {
	  	case "carBase":
	  		switch(this.name) {
	  			case "RMTrigger":
	  				guiScript.showRearAlert();
	  				Debug.Log("Car entering Rear Middle Trigger");
	  				break;
	  			case "RLTrigger":
	  				guiScript.showRearLeftAlert();
	  				Debug.Log("Car entering Rear Left Trigger");
	  				break;
	  			case "RRTrigger":
	  				guiScript.showRearRightAlert();
	  				Debug.Log("Car entering Rear Right Trigger");
	  				break;
	  			case "LTrigger":
	  				guiScript.showLeftAlert();
	  				Debug.Log("Car entering Left Trigger");
	  				break;
	  			case "RTrigger":
	  				guiScript.showRightAlert();
	  				Debug.Log("Car entering Right Trigger");
	  				break;
	  		}
	  		
	  		break;
	  }
	}
	
	function OnTriggerExit(other: Collider){
	  switch(other.name) {
	  	case "carBase":
	  		switch(this.name) {
	  			case "RMTrigger":
	  				guiScript.clearRearAlert();
	  				break;
	  			case "RLTrigger":
	  				guiScript.clearRearLeftAlert();
	  				break;
	  			case "RRTrigger":
	  				guiScript.clearRearRightAlert();
	  				break;
	  			case "LTrigger":
	  				guiScript.clearLeftAlert();
	  				break;
	  			case "RTrigger":
	  				guiScript.clearRightAlert();
	  				break;
	  		}
	  		break;
	  }
	}
	
	function getGuiScript() {
		return GameObject.Find("GUIObject").GetComponent(motorcycleGUI);
	}
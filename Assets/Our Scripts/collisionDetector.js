#pragma strict

private var beepsPerSecond = 0;
private var timeSinceLastBeep = 0.0;

	function Start () {
	
	}
	
	function Update () {
		if(this.name == "LTrigger") {
			var treeInRoad = GameObject.Find("TreeInRoad");
			var distance = Vector3.Distance(this.transform.position, treeInRoad.transform.position);
			if(distance < 20000 && this.transform.position.z < 60000) {
				
				beepsPerSecond = parseInt(10.0-(distance / 2000.0));
				
				timeSinceLastBeep += Time.deltaTime;
				Debug.Log(Time.deltaTime);
				
				if(timeSinceLastBeep > 1.0/beepsPerSecond) {
					Debug.Log(timeSinceLastBeep + " > " + (1.0/beepsPerSecond));
					treeInRoad.audio.Stop();
					treeInRoad.audio.Play();
					timeSinceLastBeep = 0;
				}
			}
		}
	}
	
	public var guiScript : motorcycleGUI;


	function OnTriggerEnter(other: Collider){
	  switch(other.name) {
	  	case "carBase":
	  		switch(this.name) {
	  			case "RMTrigger":
	  				guiScript.showRearAlert();
	  				Debug.Log("1");
	  				this.audio.Play();
	  				break;
	  			case "RLTrigger":
	  				guiScript.showRearLeftAlert();
	  				Debug.Log("2");
	  				break;
	  			case "RRTrigger":
	  				guiScript.showRearRightAlert();
	  				Debug.Log("3");
	  				break;
	  			case "LTrigger":
	  				guiScript.showLeftAlert();
	  				Debug.Log("4");
	  				break;
	  			case "RTrigger":
	  				guiScript.showRightAlert();
	  				Debug.Log("5");
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
	  				this.audio.Stop();
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
	
	
#pragma strict

private var hasPlayedWeather = false;
private var hasPlayedGPS = false;
public var weatherAlertSound : AudioSource;
public var gpsSound : AudioSource;
public var severeFlooding : AudioSource;
public var highWinds : AudioSource;
public var severeThunderstorms : AudioSource;

function Start () {

}

function Update () {
	var bike = this;
	
	if(bike.transform.position.z > 62000 && !hasPlayedGPS) {
		//gpsSound.Play();
		//hasPlayedGPS = true;
		
		var rand = Random.Range(0, 2);
		
		switch(rand) {
			case 0:
				severeFlooding.Play();
				break;
			case 1:
				highWinds.Play();
				break;
			case 2:
				severeThunderstorms.Play();
				break;
		}
		
	} else if(bike.transform.position.z > 60000 && !hasPlayedWeather) {
	//	weatherAlertSound.Play();
	//	hasPlayedWeather = true;
		
	}
	
	
	
	
}
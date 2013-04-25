#pragma strict

private var hasPlayedWeather = false;
private var hasPlayedGPS = false;
public var weatherAlertSound : AudioSource;
public var gpsSound : AudioSource;


function Start () {

}

function Update () {
	var bike = this;
	
	if(bike.transform.position.z > 62000 && !hasPlayedGPS) {
		gpsSound.Play();
		hasPlayedGPS = true;
		
	} else if(bike.transform.position.z > 60000 && !hasPlayedWeather) {
		weatherAlertSound.Play();
		hasPlayedWeather = true;
		
	}
	
	
	
	
}
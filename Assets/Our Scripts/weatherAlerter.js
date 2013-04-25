#pragma strict

private var hasPlayedWeather = false;
public var weatherAlertSound : AudioSource;


function Start () {

}

function Update () {
	var bike = this;
	
	if(bike.transform.position.z > 62000 && !hasPlayedWeather) {
		weatherAlertSound.Play();
		hasPlayedWeather = true;
		
	}
	
	
	
	
}
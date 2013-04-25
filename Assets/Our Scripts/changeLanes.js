var bike : GameObject;
var lanePos : String;
var rotationAmount : float;

function Start () 
{	
	if (bike == null)
	{
    	bike = GameObject.FindGameObjectWithTag ('bike');
	}
	rotationAmount = 0.5;
}

function Update () 
{
	if(Input.GetKey('a'))
	{
		if (bike.transform.position.x > -0.5) // Turn Left
		{
			bike.transform.Translate(Vector3.left *1000* Time.deltaTime);
			if (bike.transform.rotation.z < rotationAmount) {
				bike.transform.rotation.z += (rotationAmount * Time.deltaTime);
				bike.transform.position.y = 0.5;
			}
		} else if (bike.transform.rotation.z > 0.01){ // Already as far left as possible
			bike.transform.rotation.z -= (rotationAmount * Time.deltaTime);
			bike.transform.position.y = 0.5;
		}
	}
	
	else if(Input.GetKey('d'))
	{
		if (bike.transform.position.x < 340) // Turn right
		{
			bike.transform.Translate(Vector3.right *1000* Time.deltaTime);
			if (bike.transform.rotation.z > -1 * rotationAmount) {
				bike.transform.rotation.z -= (rotationAmount * Time.deltaTime);
				bike.transform.position.y = 0.5;
			}
		} else if (bike.transform.rotation.z < -0.01) { // Alreaady as far right as possible
			bike.transform.rotation.z += (rotationAmount * Time.deltaTime);
			bike.transform.position.y = 0.5;
		}
	}
	
	else if (bike.transform.rotation.z > 0.01){
			bike.transform.rotation.z -= (rotationAmount * Time.deltaTime);
			bike.transform.position.y = 0.5;
	}
	
	else if (bike.transform.rotation.z < -0.01) {
			bike.transform.rotation.z += (rotationAmount * Time.deltaTime);
			bike.transform.position.y = 0.5;
	}
}

function OnTriggerEnter(other: Collider)
{

}

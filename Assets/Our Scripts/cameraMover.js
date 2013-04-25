var bike : GameObject;
var speed : float;

function Start () 
{
	if (bike == null)
	{
    	GameObject.FindGameObjectsWithTag ("bike");
	}
	speed = 50;
}

function Update () 
{
	bike.transform.Translate(Vector3.forward * speed * 25 * Time.deltaTime);
	
	if (bike.transform.position.z >= 72300)
	{
		bike.transform.rotation = Quaternion.Euler(0, 20.6, 0);
	}
}


var bike : GameObject;
var speed : float;

function Start () 
{
	if (bike == null)
	{
    	GameObject.FindGameObjectsWithTag ("bike");
	}
	speed = 55;
}

function Update () 
{
	bike.transform.Translate(Vector3.forward * speed * 50 * Time.deltaTime);
}


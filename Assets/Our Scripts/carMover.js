var car : GameObject;
var speed : float;

function Start () 
{
	if (car == null)
	{
    	GameObject.FindGameObjectsWithTag ("car");
	}
	speed = 5000;
}

function Update () 
{
	//Debug.Log(Time.time);
	car.transform.Translate(Vector3.forward * speed * Time.deltaTime);
}


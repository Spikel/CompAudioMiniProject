var car : GameObject;
var speed : float;

function Start () 
{
	if (car == null)
	{
    	GameObject.FindGameObjectsWithTag ("car");
	}
	speed = 3500;
}

function Update () 
{
	//Debug.Log(Time.time);
	car.transform.Translate(Vector3.forward * speed * Time.deltaTime);
}


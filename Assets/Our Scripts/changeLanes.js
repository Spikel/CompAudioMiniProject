var bike : GameObject;
var lanePos : String;

function Start () 
{	
	if (bike == null)
	{
    	bike = GameObject.FindGameObjectWithTag ('bike');
	}
}

function Update () 
{
	if(Input.GetKey('a'))
	{
		if (bike.transform.position.x > 0)
		{
			bike.transform.Translate(Vector3.left *1000* Time.deltaTime);
		}
	}
	
	if(Input.GetKey('d'))
	{
		if (bike.transform.position.x < 340)
		{
			bike.transform.Translate(Vector3.right *1000* Time.deltaTime);
		}
	}
}

function OnTriggerEnter(other: Collider)
{

}

var bike : GameObject;

function Start () 
{	
	if (bike == null)
	{
    	GameObject.FindGameObjectsWithTag ('bike');
	}

}

function Update () 
{

}

function moveToLane(lane)
{
	if (lane == 'right')
	{
		while (bike.transform.position.x < 340)
		{
			bike.transform.Translate(Vector3.right * Time.deltaTime);
		}
	}
	
	if (lane == 'left')
	{
		while (bike.tansform.position.x > 0)
		{
			bike.transform.Translate(Vector3.left * Time.deltaTime);
		}
	}
}

function OnTriggerEnter(other: Collider)
{

	Debug.Log(bike.lanePos);
	if (bike.lanePos == 'left')
	{
		moveToLane('right');
		bike.lanePos = 'right';
	}
	
	if (bike.lanePos == 'right')
	{
		moveToLane('left');
		bike.lanePos = 'left';
	}
}
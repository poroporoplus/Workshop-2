
let orientationX = 0; 
let orientationY = 0;  
let orientationZ = 0;  


function setup() 
{

    createCanvas(windowWidth, windowHeight);

    angleMode(DEGREES);
    
    lockGestures();
    
    enableGyroTap('ENABLE MOTION SENSORS', 'Requesting motion sensors...');
    
    textAlign(CENTER, CENTER);
    textSize(32);
    
}

function draw() 
{
    background(240, 240, 240);
    
    if (window.sensorsEnabled) 
    {
        
        orientationX = rotationX;
        orientationY = rotationY;
        orientationZ = rotationZ;

        debug('angles',orientationX,orientationY,orientationZ);

		background(orientationX, orientationY, orientationZ);  

        image(rainbow.gif, width/2, height/2, 150, 100)

    } 
    else 
    {
        fill(50, 50, 50);  
        textAlign(CENTER, CENTER);
        textSize(28);
        fill(150, 50, 50);  
        text("Motion Sensors Disabled", width/2, height/2 - 40);
        
        textSize(20);
        fill(100, 100, 100);
        text("Tap the screen to enable\\nmotion sensors", width/2, height/2 + 20);
    }
}

function touchStarted() 
{
    return false;
}

function touchEnded() 
{
    return false;
}

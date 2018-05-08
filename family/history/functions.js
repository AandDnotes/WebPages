var svgNS = "http://www.w3.org/2000/svg";  

function createCircle(x, y) /* Test function */
{
    var myCircle = document.createElementNS(svgNS,"circle"); //to create a circle
    myCircle.setAttributeNS(null,"id","mycircle");
    myCircle.setAttributeNS(null,"cx",x);
    myCircle.setAttributeNS(null,"cy",y);
    myCircle.setAttributeNS(null,"r",50);
    myCircle.setAttributeNS(null,"fill","black");
    myCircle.setAttributeNS(null,"stroke","none");

    document.getElementById("mySVG").appendChild(myCircle);
}
            
function createLineRight(x, y, l)   /* from x,y go down and to the right */
{
    var downCurveLeft = document.createElementNS(svgNS,"path");
    downCurveLeft.setAttributeNS(null,"d","M "+x+" "+y+" q 0 10 10 10");
    downCurveLeft.setAttributeNS(null,"stroke","grey");
    downCurveLeft.setAttributeNS(null,"stroke-width",2);
    downCurveLeft.setAttributeNS(null,"fill","none");
    document.getElementById("mySVG").appendChild(downCurveLeft);
    
    var rightLine = document.createElementNS(svgNS, "line");
    rightLine.setAttributeNS(null,"id","myline");
    rightLine.setAttributeNS(null,"x1",x+10);
    rightLine.setAttributeNS(null,"y1",y+10);
    rightLine.setAttributeNS(null,"x2",x+l-10);
    rightLine.setAttributeNS(null,"y2",y+10);
    rightLine.setAttributeNS(null,"stroke","grey");
    rightLine.setAttributeNS(null,"stroke-width",2);
    document.getElementById("mySVG").appendChild(rightLine);
    
    var downCurveRight = document.createElementNS(svgNS,"path");
    downCurveRight.setAttributeNS(null,"d","M "+(x+l-10)+" "+(y+10)+" q 10 0 10 10");
    downCurveRight.setAttributeNS(null,"stroke","grey");
    downCurveRight.setAttributeNS(null,"stroke-width",2);
    downCurveRight.setAttributeNS(null,"fill","none");
    document.getElementById("mySVG").appendChild(downCurveRight);
}

function createLineLeft(x, y, l)   /* from x,y go down and to the left */
{
    var downCurveRight = document.createElementNS(svgNS,"path");
    downCurveRight.setAttributeNS(null,"d","M "+x+" "+y+" q 0 10 -10 10");
    downCurveRight.setAttributeNS(null,"stroke","grey");
    downCurveRight.setAttributeNS(null,"stroke-width",2);
    downCurveRight.setAttributeNS(null,"fill","none");
    document.getElementById("mySVG").appendChild(downCurveRight);
    
    var leftLine = document.createElementNS(svgNS, "line");
    leftLine.setAttributeNS(null,"id","myline");
    leftLine.setAttributeNS(null,"x1",x-10);
    leftLine.setAttributeNS(null,"y1",y+10);
    leftLine.setAttributeNS(null,"x2",x-l+10);
    leftLine.setAttributeNS(null,"y2",y+10);
    leftLine.setAttributeNS(null,"stroke","grey");
    leftLine.setAttributeNS(null,"stroke-width",2);
    document.getElementById("mySVG").appendChild(leftLine);
    
    var downCurveLeft = document.createElementNS(svgNS,"path");
    downCurveLeft.setAttributeNS(null,"d","M "+(x-l+10)+" "+(y+10)+" q -10 0 -10 10");
    downCurveLeft.setAttributeNS(null,"stroke","grey");
    downCurveLeft.setAttributeNS(null,"stroke-width",2);
    downCurveLeft.setAttributeNS(null,"fill","none");
    document.getElementById("mySVG").appendChild(downCurveLeft);
}

function createLineH(x, y, l)    /* from x,y horizontal */
{
    var rightLine = document.createElementNS(svgNS, "line");
    rightLine.setAttributeNS(null,"id","myline");
    rightLine.setAttributeNS(null,"x1",x);
    rightLine.setAttributeNS(null,"y1",y);
    rightLine.setAttributeNS(null,"x2",x+l);
    rightLine.setAttributeNS(null,"y2",y);
    rightLine.setAttributeNS(null,"stroke","grey");
    rightLine.setAttributeNS(null,"stroke-width",2);
    document.getElementById("mySVG").appendChild(rightLine);
}

function createLineV(x, y, l)    /* from x,y vertical */
{
    var vLine = document.createElementNS(svgNS, "line");
    vLine.setAttributeNS(null,"id","myline");
    vLine.setAttributeNS(null,"x1",x);
    vLine.setAttributeNS(null,"y1",y);
    vLine.setAttributeNS(null,"x2",x);
    vLine.setAttributeNS(null,"y2",y+l);
    vLine.setAttributeNS(null,"stroke","grey");
    vLine.setAttributeNS(null,"stroke-width",2);
    document.getElementById("mySVG").appendChild(vLine);
}

function createDownCurveRight(x, y)  /* from x,y right & down */
{
    var downCurveRight = document.createElementNS(svgNS,"path");
    downCurveRight.setAttributeNS(null,"d","M "+x+" "+y+" q 10 0 10 10");
    downCurveRight.setAttributeNS(null,"stroke","grey");
    downCurveRight.setAttributeNS(null,"stroke-width",2);
    downCurveRight.setAttributeNS(null,"fill","none");
    document.getElementById("mySVG").appendChild(downCurveRight);
}

function createDownCurveLeft(x, y)  /* from x,y left & down */
{
    var downCurveLeft = document.createElementNS(svgNS,"path");
    downCurveLeft.setAttributeNS(null,"d","M "+x+" "+y+" q -10 0 -10 10");
    downCurveLeft.setAttributeNS(null,"stroke","grey");
    downCurveLeft.setAttributeNS(null,"stroke-width",2);
    downCurveLeft.setAttributeNS(null,"fill","none");
    document.getElementById("mySVG").appendChild(downCurveLeft);
}

function createDashRight(x, y, l)   /* from x,y go down and to the right */
{
    var downCurveLeft = document.createElementNS(svgNS,"path");
    downCurveLeft.setAttributeNS(null,"d","M "+x+" "+y+" q 0 10 10 10");
    downCurveLeft.setAttributeNS(null,"stroke","grey");
    downCurveLeft.setAttributeNS(null,"stroke-width",2);
    downCurveLeft.setAttributeNS(null,"fill","none");
    document.getElementById("mySVG").appendChild(downCurveLeft);
    
    var rightLine = document.createElementNS(svgNS, "line");
    rightLine.setAttributeNS(null,"id","myline");
    rightLine.setAttributeNS(null,"x1",x+10);
    rightLine.setAttributeNS(null,"y1",y+10);
    rightLine.setAttributeNS(null,"x2",x+l-10);
    rightLine.setAttributeNS(null,"y2",y+10);
    rightLine.setAttributeNS(null,"stroke","grey");
    rightLine.setAttributeNS(null,"stroke-width",2);
    rightLine.setAttributeNS(null,"stroke-dasharray","5 5");
    document.getElementById("mySVG").appendChild(rightLine);
    
    var downCurveRight = document.createElementNS(svgNS,"path");
    downCurveRight.setAttributeNS(null,"d","M "+(x+l-10)+" "+(y+10)+" q 10 0 10 10");
    downCurveRight.setAttributeNS(null,"stroke","grey");
    downCurveRight.setAttributeNS(null,"stroke-width",2);
    downCurveRight.setAttributeNS(null,"fill","none");
    document.getElementById("mySVG").appendChild(downCurveRight);
}

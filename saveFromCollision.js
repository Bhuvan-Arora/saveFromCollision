//Creating object of key constants for events on key press
var key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40
}

var gameSettings = {
    canvasStartX: 0,
    canvasEndX: 295,
    canvasStartY: 0,
    canvasEndY: 150,
    move: 5, //Change this to move object fast
}

//This global variable will depict the gameOver state.
var gameOver = false;

//This object holds the values required to create game object.
var gameObjectSettings = {
    X: 0,
    Y: 80,
    height: 5,
    width: 10
}

//Creating canvas
var gameCanvas = document.getElementById("gameCanvas");

//creating game object
var gameObject = gameCanvas.getContext('2d');

//creating obstacles
gameObstacle = {
    one: gameCanvas.getContext('2d'),
    two: gameCanvas.getContext('2d'),
    three: gameCanvas.getContext('2d'),
    four: gameCanvas.getContext('2d'),
    five: gameCanvas.getContext('2d'),
    six: gameCanvas.getContext('2d')
}

//This object holds the values required to create game obstacles.
gameObstacleSettings =
    {
        oneX: 50,
        twoX: 150,
        threeX: 250,
        fourX: 90,
        fiveX: 190,
        sixX: 290,
        oneY: 0,
        twoY: 0,
        threeY: 0,
        fourY: 100,
        fiveY: 120,
        sixY: 90,
        oneHeight: 70,
        twoHeight: 100,
        threeHeight: 60,
        fourHeight: 100,
        fiveHeight: 100,
        sixHeight: 100,
        obstacleWidth: 5,
    }

//drawing object
gameObject.fillStyle = 'blue';
gameObject.fillRect(gameObjectSettings.X, gameObjectSettings.Y, gameObjectSettings.width, gameObjectSettings.height);

/**
 * This function will draw all the obstacles
 * @gameObstacle : This argument will accept already created game obstacles
 * @gameObstacleSettings : This argument will accept the settings for game obstacles
 */
function drawObstacle(gameObstacle, gameObstacleSettings) {

    gameObstacle.one.fillStyle = 'red';
    gameObstacle.two.fillStyle = 'red';
    gameObstacle.three.fillStyle = 'red';
    gameObstacle.four.fillStyle = 'red';
    gameObstacle.five.fillStyle = 'red';
    gameObstacle.six.fillStyle = 'red';

    gameObstacle.one.fillRect(gameObstacleSettings.oneX, gameObstacleSettings.oneY, gameObstacleSettings.obstacleWidth, gameObstacleSettings.oneHeight);
    gameObstacle.two.fillRect(gameObstacleSettings.twoX, gameObstacleSettings.twoY, gameObstacleSettings.obstacleWidth, gameObstacleSettings.twoHeight);
    gameObstacle.three.fillRect(gameObstacleSettings.threeX, gameObstacleSettings.threeY, gameObstacleSettings.obstacleWidth, gameObstacleSettings.threeHeight);
    gameObstacle.four.fillRect(gameObstacleSettings.fourX, gameObstacleSettings.fourY, gameObstacleSettings.obstacleWidth, gameObstacleSettings.fourHeight);
    gameObstacle.five.fillRect(gameObstacleSettings.fiveX, gameObstacleSettings.fiveY, gameObstacleSettings.obstacleWidth, gameObstacleSettings.fiveHeight);
    gameObstacle.six.fillRect(gameObstacleSettings.sixX, gameObstacleSettings.sixY, gameObstacleSettings.obstacleWidth, gameObstacleSettings.sixHeight);

}

/**
 * This function will clear all the obstacles
 * @gameObstacle : This argument will accept already created game obstacles
 * @gameObstacleSettings : This argument will accept the settings for game obstacles
 */
function clearObstacle(gameObstacle, gameObstacleSettings) {

    gameObstacle.one.clearRect(gameObstacleSettings.oneX, gameObstacleSettings.oneY, gameObstacleSettings.obstacleWidth, gameObstacleSettings.oneHeight);
    gameObstacle.two.clearRect(gameObstacleSettings.twoX, gameObstacleSettings.twoY, gameObstacleSettings.obstacleWidth, gameObstacleSettings.twoHeight);
    gameObstacle.three.clearRect(gameObstacleSettings.threeX, gameObstacleSettings.threeY, gameObstacleSettings.obstacleWidth, gameObstacleSettings.threeHeight);
    gameObstacle.four.clearRect(gameObstacleSettings.fourX, gameObstacleSettings.fourY, gameObstacleSettings.obstacleWidth, gameObstacleSettings.fourHeight);
    gameObstacle.five.clearRect(gameObstacleSettings.fiveX, gameObstacleSettings.fiveY, gameObstacleSettings.obstacleWidth, gameObstacleSettings.fiveHeight);
    gameObstacle.six.clearRect(gameObstacleSettings.sixX, gameObstacleSettings.sixY, gameObstacleSettings.obstacleWidth, gameObstacleSettings.sixHeight);

}


/**
 * This function will update the positions of obstacles
 * @gameObstacleSettings : This argument will accept the settings for game obstacles
 * @gameSettings : This argument will accept the settings for game
 */
function updateObstaclePosition(gameObstacleSettings, gameSettings) {
    if (gameObstacleSettings.oneX > gameSettings.canvasStartX)
        gameObstacleSettings.oneX = gameObstacleSettings.oneX - gameSettings.move;
    else
        gameObstacleSettings.oneX = gameSettings.canvasEndX;

    if (gameObstacleSettings.twoX > gameSettings.canvasStartX)
        gameObstacleSettings.twoX = gameObstacleSettings.twoX - gameSettings.move;
    else
        gameObstacleSettings.twoX = gameSettings.canvasEndX;

    if (gameObstacleSettings.threeX > gameSettings.canvasStartX)
        gameObstacleSettings.threeX = gameObstacleSettings.threeX - gameSettings.move;
    else
        gameObstacleSettings.threeX = gameSettings.canvasEndX;

    if (gameObstacleSettings.fourX > gameSettings.canvasStartX)
        gameObstacleSettings.fourX = gameObstacleSettings.fourX - gameSettings.move;
    else
        gameObstacleSettings.fourX = gameSettings.canvasEndX;

    if (gameObstacleSettings.fiveX > gameSettings.canvasStartX)
        gameObstacleSettings.fiveX = gameObstacleSettings.fiveX - gameSettings.move;
    else
        gameObstacleSettings.fiveX = gameSettings.canvasEndX;

    if (gameObstacleSettings.sixX > gameSettings.canvasStartX)
        gameObstacleSettings.sixX = gameObstacleSettings.sixX - gameSettings.move;
    else
        gameObstacleSettings.sixX = gameSettings.canvasEndX;
}


/**
 * This function will draw all the obstacles
 * @gameObjectSettings : This argument will accept the settings for game object
 * @gameObstacleSettings : This argument will accept the settings for game obstacles
 */
function detectCollision(gameObjectSettings, gameObstacleSettings) {
    var collisonPositionX = gameObjectSettings.X + 5;
    var collisonPositionY = gameObjectSettings.Y;

    if ((gameObstacleSettings.oneX == collisonPositionX) && (gameObstacleSettings.oneY + gameObstacleSettings.oneHeight > collisonPositionY))
        gameOver = true;
    else if ((gameObstacleSettings.twoX == collisonPositionX) && (gameObstacleSettings.twoY + gameObstacleSettings.twoHeight > collisonPositionY))
        gameOver = true;
    else if ((gameObstacleSettings.threeX == collisonPositionX) && (gameObstacleSettings.threeY + gameObstacleSettings.threeHeight > collisonPositionY))
        gameOver = true;
    else if ((gameObstacleSettings.fourX == collisonPositionX) && (gameObstacleSettings.fourY <= collisonPositionY))
        gameOver = true;
    else if ((gameObstacleSettings.fiveX == collisonPositionX) && (gameObstacleSettings.fiveY <= collisonPositionY))
        gameOver = true;
    else if ((gameObstacleSettings.sixX == collisonPositionX) && (gameObstacleSettings.sixY <= collisonPositionY))
        gameOver = true;
    else
        gameOver = false;

    if (gameOver) {
        clearInterval(moveObstacle);
        var gameOverMessage = document.getElementById("gameOverMessage");
        var gameInstructions = document.getElementById("gameInstructions");
        gameOverMessage.style.display = "block";
        gameCanvas.style.display = "none";
        gameInstructions.style.display = "none";
    }
}

/**
 * This function will move the obstacle after a specific interval of time
 */
var moveObstacle = setInterval(function () {
    clearObstacle(gameObstacle, gameObstacleSettings);
    updateObstaclePosition(gameObstacleSettings, gameSettings);
    drawObstacle(gameObstacle, gameObstacleSettings);

    detectCollision(gameObjectSettings, gameObstacleSettings)
}, 500);


/**
 * This keyup event binding will detect the up|down|left|right keys and move the object accordingly
 */
document.onkeyup = function (event) {
    event = event || window.event;
    let keyPressed = event.keyCode;

    if (keyPressed === key.left) {
        gameObject.clearRect(gameObjectSettings.X, gameObjectSettings.Y, gameObjectSettings.width, gameObjectSettings.height);

        if (gameObjectSettings.X > gameSettings.canvasStartX)
            gameObjectSettings.X = gameObjectSettings.X - gameSettings.move;
    }
    else if (keyPressed === key.up) {
        gameObject.clearRect(gameObjectSettings.X, gameObjectSettings.Y, gameObjectSettings.width, gameObjectSettings.height);

        if (gameObjectSettings.Y > gameSettings.canvasStartY)
            gameObjectSettings.Y = gameObjectSettings.Y - gameSettings.move;

    }
    else if (keyPressed === key.right) {
        gameObject.clearRect(gameObjectSettings.X, gameObjectSettings.Y, gameObjectSettings.width, gameObjectSettings.height);

        if (gameObjectSettings.X < (gameSettings.canvasEndX - gameSettings.move))
            gameObjectSettings.X = gameObjectSettings.X + gameSettings.move;

    }
    else if (keyPressed === key.down) {
        gameObject.clearRect(gameObjectSettings.X, gameObjectSettings.Y, gameObjectSettings.width, gameObjectSettings.height);

        if (gameObjectSettings.Y < (gameSettings.canvasEndY - gameSettings.move))
            gameObjectSettings.Y = gameObjectSettings.Y + gameSettings.move;
    }
    else
        return;

    gameObject.fillStyle = 'blue';
    gameObject.fillRect(gameObjectSettings.X, gameObjectSettings.Y, gameObjectSettings.width, gameObjectSettings.height);

    detectCollision(gameObjectSettings, gameObstacleSettings);
};

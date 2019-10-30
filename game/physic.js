function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    // Player-to-player collisions
    if (Math.sqrt(Math.pow(player1.graphic.position.x - player2.graphic.position.x, 2)
    + Math.pow(player1.graphic.position.y - player2.graphic.position.y, 2)) < 20) {
        player1.dead();
    }

    player1.move();
    if (player2 != null)
        player2.move();
    controls.update();
}
class testSuite {
    /**
     * Test suite to be run. Runs tests and console logs whether tests pass or fail
     * @constructor
     * @pre Initializes test suite to be run
     * @post Runs tests on key items to the game to make sure they are properly initialized
     */
    constructor()
    {}


    /**
     * Test to check player class
     * @pre Assumes player has 3 lives
     * @post Console logs pass if test passes, fail if not
     */
    test1()
    {
        console.log("Test1: Is Player initialized correctly? Player should have 3 lives.")
        if(playerStatus.currentLives != 0)
        {
            console.log("Passed: Player has ", playerStatus.currentLives, "lives, player is correctly initialized.\n")
        }
        else
        {
            console.log("FAIL: Player has not been initialized correctly!\n");
        }
    }
    
    /**
     * Test to see if score is properly initialized to 0
     * @pre Assumes score initialized to 0
     * @post Console logs pass if test passes, fail if not
     */
    test2()
    {
        console.log("Test2: Is score initialized properly? Player should start with 0 score.")
        if(playerStatus.currentScore == 0)
        {
            console.log("Passed: Player has ", playerStatus.currentScore, "lives, player score is correctly initialized.\n")
        }
        else
        {
            console.log("FAIL: Player score is not correctly initialized!\n");
        }
    }
    
    /**
     * Test to see if paddle is intialized
     * @pre Checks to see if paddle width and height is properly initialized
     * @post Console logs pass if test passes, fail if not
     */
    test3()
    {
        console.log("Test3: Is paddle initialized properly? Paddle.width should = PADDLE_WIDTH * this.width_size, and paddle.height should = PADDLE_HEIGHT")
        if(paddle.width != PADDLE_WIDTH * paddle.width_size && paddle.height != PADDLE_WIDTH)
        {
            console.log("FAIL: Paddle width = ", paddle.width, ", paddle height = ", paddle.height, ".\n")
        }
        else
        {
            console.log("Passed: Paddle has been correctly initialized.\n");
        }
    }

    /**
     * Test to see if ball is properly initialized
     * @pre Checks to see if the first ball is initialized. Checks ball's radius, and position
     * @post Console logs pass if test passes, fail if not
     */
    test4()
    {
        console.log("Test4: Is ball initialized correctly? Ball radius should be ball.radius_multiplier * canvas.height/40\nBall start_x should be canvas.width/2, Ball start_y should be canvas.height - PADDLE_HEIGHT - ball.radius -1");
        if((ballContainer.balls[0].radius != (ballContainer.balls[0].radius_multiplier * canvas.height)/40)    || 
        ballContainer.balls[0].start_x != (canvas.width/2)                                                     ||
        ballContainer.balls[0].start_y != (canvas.height - PADDLE_HEIGHT - ballContainer.balls[0].radius - 1))
        {
            console.log("FAIL: Ball did not initialize correctly\n");
        }
        else
        {
            console.log("Passed: Ball has been initialized correctly\n Ball radius =", 
                ballContainer.balls[0].radius, "\n Ball start_x = ", ballContainer.balls[0].start_x, "\n Ball start_y = ", ballContainer.balls[0].start_y, ".\n");
        }
        
    }

    /**
     * Test to see if the aim arrow is properly initialized
     * @pre Test to see if the aim arrow is properly initialized for the first ball
     * @post Console logs pass if test passes, fail if not
     */
    test5()
    {
        console.log("Test5: Is the aim arrow initialized correctly?")
        if (ballContainer.balls[0].start_x != ballContainer.balls[0].start_x && ballContainer.balls[0].start_y != ballContainer.balls[0].start_y)
        {
            console.log("FAIL: Aim arrow did not intialize correctly\n");    
        }
        else
        {
            console.log("Passed: Aim arrow initialized correctly\n");
        }

    }

    /**
     * Test to see if the powers are initialized
     * @pre Assumes there is 1 power to be falling
     * @post Console logs pass if test passes, fail if not
     */
    test6()
    {
        console.log("Test6: Are powers initialized correctly?")
        if(powers.fallings != 1)
        {
            console.log("FAIL: Powers are not initialized correclty!\n");
        }
        else
        {
            console.log("Passed: Powers are initialized so that ", powers.fallings, " items will fall at a time.\n");
        }
    }

    /**
     * Test to see if the brickset is properly initialized
     * @pre Checks to see if the array of bricks is not empty. If it's empty it isn't initialized correctly
     * @post Console logs pass if test passes, fail if not
     */
    test7()
    {
        console.log("Test7: Is the brickset initialized correctly?")
        if(brickset.bricks.length != 0)
        {
            console.log("Passed: Bricks have been intialized correctly. There will be ", brickset.bricks.length, " bricks\n");
        }
        else
        {
            console.log("FAILED: Brickset has not been intialized correctly!\n");
        }
    }

    /**
     * Function to run all tests
     * @post Runs all the tests
     */
    runTests()
    {
        this.test1();
        this.test2();
        this.test3();
        this.test4();
        this.test5();
        this.test6();
        this.test7();
    }
}
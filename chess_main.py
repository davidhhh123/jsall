import turtle

# Set up the turtle window
window = turtle.Screen()

window.bgcolor("white")
window.title("Chess Board")

# Set up the turtle
chess_turtle = turtle.Turtle()

chess_turtle.speed(0)
chess_turtle.penup()


# Define colors
white = "white"
black = "gray"

# Set up the chess board
square_size = 50
board_size = 8
for row in range(board_size):
    for col in range(board_size):
        x = col * square_size
        y = row * square_size
        if (row + col) % 2 == 0:
            color = white
        else:
            color = black
        chess_turtle.goto(x, y)
        chess_turtle.fillcolor(color)
        chess_turtle.begin_fill()
        for _ in range(4):
            chess_turtle.forward(square_size)
            chess_turtle.right(90)
        chess_turtle.end_fill()

# Exit on click
window.exitonclick()

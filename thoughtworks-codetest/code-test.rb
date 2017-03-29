# Created a class called Rover
class Rover

  # Creating a blueprint for rover's current position on axis. The rover's initial starting point is at 0, 0 and it faces north
  def initialize (x = 0, y = 0, direction = "n")

    @x_axis = x
    @y_axis = y
    @direction = direction

  end

  # I am getting ruby to be able to discern instructions from the user, get the instructions and do something with each depending on what is inputted.
  def get_input
    puts "Input [L] to turn Left, [R] to turn right and [M] to move your Mars rover forward. Type [Q] to leave. See you, Space Cowboy"
    @input = gets.chomp.downcase
    # Loops through the array of inputs to specify commands for each specific instruction with a case statement
    @input.each_char do |i|
      case i
        # If l is inputted, make the Rover face left
      when "l"
        turn_left
        # If r is inputted, make the Rover face right
      when "r"
        turn_right
        # Get the rover to move forward in the direction it's facing.
      when "m"
        move
        # Exit the game when q is typed
      when "q"
        exit
      end
      # Convert the results to a string
      to_s
    end
  end

# A case statement which determines the direction the vehicle will face if turned left, depending on where it's facing.
  def turn_left
    case @direction
    when "n"
      then "w"
    when "w"
      then "s"
    when "s"
      then "e"
    when "e"
      then "n"
    end
  end

# A case statement which determines the direction the vehicle will face if turned right, depending on where it's facing.
  def turn_right
    case @direction
    when "n"
      then "e"
    when "e"
      then "s"
    when "s"
      then "w"
    when "w"
      then "n"
    end
  end

# This will move the vehicle forward or backwards a square, depending on the direction it's facing. This also determines whether it moves forward on the x or the y axis.
  def move
    case @direction
    when "n"
      @y_axis += 1
    when "e"
      @x_axis += 1
    when "s"
      @y_axis -= 1
    when "w"
      @x_axis -= 1
    end
  end

# This outputs the results of your instructions as a string.
  def to_s
    puts "Your Mars rover is at #{@x_axis}, #{@y_axis}, #{@direction}"
  end
end

  rover = Rover.new

# Makes Rover easy to test with an infinite loop, which infinitely displays directions until told to quit
  while true
    rover.get_input
    puts rover
    if rover.get_input == "q"
      exit
    end
  end

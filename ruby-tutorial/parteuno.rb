# name = 'Sharon Wong'
# puts "Hi, #{name}"
#
# length = name.length
# puts length
#
# upcase = name.upcase
# puts upcase
#
# wot = name.start_with?("S")
# puts wot

# age = 30
# height = 170.5
# puts "Perry is #{age} and is #{height} tall"
#
# puts age.class
# puts height.class
# puts age.even?
# puts height.floor

# if true
#   puts "this is true"
# end
#
# true == true

# 1 == 0
# true && false
# true && true

# if 1 == 1
#   puts "One is equal to one"
# end

# if 1 == 0
#   puts " This statement will never be reached"
# end
#
# if true || false
#   puts "True or False, will give you true"
# end
#
# if false || true
#   puts "False or True, this will give you true"
# end

# list_of_names = ["Fabienne", "Saskia", "Delphine"]
# puts list_of_names.last
# puts list_of_names[2]
# puts list_of_names[3]

# suburb = "Richmond"
# chars  = suburb.split("")
#
# puts chars

# array_of_any = [2, "yo", [1,3,5]]
# puts array_of_any

# numbers = [2, 4, 6]
#
# puts numbers[2]+3

# person = { name: "Harry", age: 20 }
# person[:occupation] = "musician"
# person.merge!(height: 170, hobbies: ["writing", "walking"])
# puts person

# carA = {colour: "red", make: "Toyota", model: "Corolla"}
# carB = {colour: "blue", make: "Hyndai", model: "Getz"}
# carC = {colour: "red", make: "Toyota", model: "Camry"}
#
# if (carA[:colour] = carC[:colour])
#   puts "Both car A and car C are the colour #{carA[:colour]}"
# elsif (carA[:colour] == carB[:colour])
#   puts "Both car A and car B are the same colour"
# else
#   puts "None of the cars are the same colour"
# end

# blue = "cerulean"
# case blue
# when "navy"
#   puts "This is dark blue"
# when "teal"
#   puts "This is complex blue"
# when "baby blue"
#   puts "This is light blue"
# else
#   puts "This is not an acceptable blue"
# end

# writers = ["Woolf", "Borges", "Endo", "Murakami", "Mistry"]
# i = 0
# while (i < writers.length)
#   puts "Sharon just read #{writers[i]}"
#   i += 1
# end

# last = writers.length-1
# for i in 0..last
#   puts "Sharon just read #{writers[i]}"
# end

# writers.each do |writer|
#   puts writer
# end

# writers.each {|writer| puts writer}

# sharon = {age: 28, country: "Malaysia", job: "writer"}
# sharon.each do |key, value|
#   puts "#{key}, #{value}"
# end

# sharon.each {|key, value| puts "#{key}, #{value}"}
#
# friends = ["Sharon", "Chris", "Guy", "Alex", "Elliot"]
# friends.keep_if { |friend| friend.start_with?("S")}
# puts friends
# def print_this
#   puts "Hiya"
# end
# print_this

# def add_this(a,b)
#   a + b
# end
# puts "#{add_this(2,4)}"

# class Person
#   @name
#   @age
#   @hobbies
#
#   def initialize(name, age, hobbies)
#     @name = name
#     @age = age
#     @hobbies = hobbies
#   end
#
#   def name
#     @name
#   end
#
#   def age
#     @age
#   end
#
#   def hobbies
#     @hobbies
#   end
#
#   def hobbies_to_s
#     @hobbies << 'loitering'
#     @hobbies.join(',')
#   end
#
#   def introduce_yourself
#     puts "My name is #{@name}. I am #{@age} and I like #{hobbies_to_s}"
#   end
# end
# tom = Person.new('Tom', 19, ['living', 'laughing', 'loving'])
# tom.introduce_yourself

# puts [1, 2] << 3

# def print_custom_message
#   puts 'The first line of this method'
#   yield
#   puts 'The last line of this method'
# end
# print_custom_message { puts 'This is the block' }

# def multiply
#   yield(3, 5) if block_given?
# end
# puts multiply {|x, y| x * y}

# def subtract(&block)
#   block.call(9, 6)
# end
# puts subtract {|x,y| x-y}
#
# triple = Proc.new do |x|
#   puts "#{x * 3}"
# end
# [1,2,3].each(&triple)
# triple.class

# triple = Proc.new { |x| x*3 }
# puts triple.(2,4,6)
#
# quad = lambda { |x| puts "#{x*4}" }
# [1,2,3].each(&quad)
# puts quad.(6, 9)

def whatevs
  yield
end
whatevs { puts 'Yeah' }

even = Proc.new { |x| puts x if x.even? }
[1,2,3,4].each(&even)

print_key = lambda { |key| puts "#{key}"}
[colour: "blue", size: "hefty", mood: "sad"].each(&print_key)

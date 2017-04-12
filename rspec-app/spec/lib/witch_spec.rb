# Loads the configuration for the specifications (rspec tests)
require "spec_helper"
require "witch"

describe Witch do
  # it "is named Hecuba" do
  it "rides a broomstick" do
    witch = Witch.new
    # witch.name.should == 'Hecuba'
    expect(witch).to be true

end
end

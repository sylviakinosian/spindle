#!/usr/bin/ruby
require 'optparse'
require 'open-uri'
require 'nokogiri'
require 'open3'

options = {}
OptionParser.new do |opts|
  #Defaults
  options[:output] = nil
  options[:file] = nil
  options[:delay] = 5
  options[:verbose] = false
  
  opts.banner = "tpl-dwn: Downloading all of The Plant List's names\nUsage: tpl-dwn.rb [options]"
  opts.on_tail("-h", "--help", "Show this message") do
    puts opts
    exit
  end

  opts.on("-o DIRECTORY", "--output DIRECTORY", "Where to save raw output") {|x| options[:output] = x.to_s}
  opts.on("-f FILE", "--file FILE", "If specified, file to contain all output") {|x| options[:file] = x.to_s}
  opts.on("-d SECONDS", "--delay SECONDS", "How long to wait between downloads (default: 5 sec)") {|x| options[:delay] = x.to_i}
  opts.on("-v", "--verbose", "Run verbosely") {|x| options[:verbose] = true}
  opts.on("-")
end.parse!

# Argument handling
if options[:output].nil? or not Dir.exist? options[:output]
  puts "Must specify (valid) output directory for raw files; exiting"
  puts "Run ./tpl-dwn.rb --help (or similar) to get options"
  exit(false)
end

# Begin download
higher_clade_codes = ["A","G","P","B"]

Dir.chdir(options[:output]) do
  higher_clade_codes.each do |code|
    root = Nokogiri::HTML(open("http://www.theplantlist.org/1.1/browse/#{code}/").read)
    root.xpath("//i").each do |element|
      if element["class"] == "family"
        Open3.popen2e("wget http://www.theplantlist.org/1.1/browse/A/#{element.text}/#{element.text}.csv")
        if options[:verbose] then puts "Downloaded #{code} - #{element.text}" end
        sleep options[:delay]
      end
    end
  end
end

if not options[:file].nil?
  `cat #{options[:output]}/* > #{options[:file]}`
end

#!/usr/bin/ruby
require 'optparse'
require 'open-uri'
require 'nokogiri'
require 'csv'
require 'rest-client'

options = {}
OptionParser.new do |opts|
  #Defaults
  options[:species] = nil
  options[:output] = nil
  options[:delay] = 1
  options[:verbose] = false
  
  opts.banner = "tpl-dwn-syn: Downloading The Plant List's synonyms for some species\nUsage: tpl-syn-dwn.rb [options]"
  opts.on_tail("-h", "--help", "Show this message") do
    puts opts
    exit
  end

  opts.on("-s FILE", "--species FILE", "File with species to download") {|x| options[:species] = x.to_s}
  opts.on("-o FILE", "--output FILE", "File to save synonymy") {|x| options[:output] = x.to_s}
  opts.on("-d SECONDS", "--delay SECONDS", "How long to wait between species searches (default: 1 sec)") {|x| options[:delay] = x.to_i}
  opts.on("-v", "--verbose", "Run verbosely") {|x| options[:verbose] = true}
  opts.on("-")
end.parse!

# Argument handling
if options[:output].nil?
  puts "Must specify where to save synonyms; exiting"
  puts "Run ./tpl-syn-search.rb --help (or similar) to get options"
  exit(false)
end
if options[:species].nil?
  puts "Must specify species to search; exiting"
  puts "Run ./tpl-syn-search.rb --help (or similar) to get options"
  exit(false)
end


# Doing work
CSV.open(options[:output], "wb") do |output|
  output << ["input", "synonym", "status"]
  File.open(options[:species]).each do |species|
    species.chomp!
    if options[:verbose] then puts species end
    search = species.sub(" ", "+").sub("_", "+")
    
    page = Nokogiri::HTML(RestClient.get("http://www.theplantlist.org/tpl1.1/search?q=#{search}").body)
    page.xpath("//tr").each_with_index do |entry, i|
      if i == 0 then next end
      synonym = entry.element_children[0].text
      status = entry.element_children[1].text
      output << [species, synonym, status]
    end
    sleep options[:delay]
  end
end

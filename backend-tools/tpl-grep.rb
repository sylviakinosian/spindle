#!/usr/bin/ruby
require 'optparse'
require 'fuzzy_match'
require 'amatch'
FuzzyMatch.engine = :amatch
require 'csv'

options = {}
OptionParser.new do |opts|
  #Defaults
  options[:tpl] = nil
  options[:names] = nil
  options[:output] = nil
  
  opts.banner = "tpl-grep: Match a set of input names to a TPL dump\nUsage: tpl-dwn.rb [options]"
  opts.on_tail("-h", "--help", "Show this message") do
    puts opts
    exit
  end

  opts.on("-t FILE", "--tpl FILE", "File with TPL names (from tpl-dwn.rb)") {|x| options[:tpl] = x.to_s}
  opts.on("-q FILE", "--query FILE", "File with names to match (one per line)") {|x| options[:names] = x.to_s}
  opts.on("-o FILE", "--output FILE", "Where to write match results") {|x| options[:output] = x.to_s}
  opts.on("-")
end.parse!

# Argument handling
if options[:tpl].nil? or not File.exist? options[:tpl]
  puts "Must specify existing TPL file; exiting"
  puts "Run ./tpl-grep.rb --help (or similar) to get options"
  exit(false)
end
if options[:names].nil? or not File.exist? options[:nam,es]
  puts "Must specify file with names to query; exiting"
  puts "Run ./tpl-grep.rb --help (or similar) to get options"
  exit(false)
end
if options[:output].nil?
  puts "Must specify file to write output; exiting"
  puts "Run ./tpl-grep.rb --help (or similar) to get options"
  exit(false)
end

# Load TPL and build match table

match_table = FuzzyMatch.new(CSV.read(options[:tpl]) {|row| row[2]})

# Load names and begin search
File.open(options[:names],"r") do |names_file|
  File.open(options[:output],"w") do |result_file|
    result_file << ["input_speces", "matched_species", "fuzzy_distance"]
    names_file.each do |species|
      result = match_table.find species
      distance = result.pair_distance_similar species
      result_file << [species, result, distance]
    end
  end
end

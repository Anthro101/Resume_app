require 'sinatra'
require 'mongoid'
require 'oj'
require "sinatra/reloader" if development?

Mongoid.load!("mongoid.yml")

class Doc
	include Mongoid::Document

	field :name_first, type: String
	field :name_middle, type: String
	field :name_last, type: String
	field :phone, type: String
	field :email, type: String
	field :linked_in, type: String
	field :website, type: String
	field :twitter, type: String

	# embeds_one :street_address
end

get '/' do 
	content_type :json
	docs = Doc.all
	docs.to_json
end

get '/:id' do
	content_type :json
	doc = Doc.find params[:id]
	doc.to_json
end

post '/' do
	data = JSON.parse(request.body.read) ['resume']
	doc = Doc.create!(data)
	doc.to_json
end 

delete '/:id' do
	doc = Doc.find params[:id]
	doc.destroy
end




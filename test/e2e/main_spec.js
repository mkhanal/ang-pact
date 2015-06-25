describe('pact angular Demo App :', function() {

	var mainPage = require("./pages/main_page.js");

	var Pact = require("../../node_modules/pact-consumer-js-dsl/dist/pact-consumer-js-dsl.js")


	beforeEach(function(){mainPage.get()});		

	beforeEach(function() {

		var client = new Pact.ProviderClient('http://localhost:8888');

		locationProvider = Pact.mockService({
			consumer: 'Location Consumer',
			provider: 'Location Provider',
			port: 8888,
			pactDir: './pact'});

		locationProvider
		.uponReceiving("a request for all locations")
		.withRequest("get", "/locations")
		.willRespondWith(200, {"Content-Type": "application/json"},
			[
				{
					id: "id1",
					address: "address1"
				},
				{
					id: "id2",
					address: "address1"
				},
				{
					id: "id3",
					address: "address1"
				},
				{
					id: "id4",
					address: "address1"
				}
			]
		);

	});


	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('Pact Demo');
	});

	it('should search locations without a search term',function(){
		mainPage.search();

		expect(mainPage.getTotalLocations()).toBe(16);
	});

	it('should search locations by a search term', function(){
		mainPage.search("va");

		expect(mainPage.getTotalLocations("Place")).toBe(3);
	})

});
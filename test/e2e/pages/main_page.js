function MainPage(){

	var basePageUrl = "http://localhost:9000/"

	var searchTextBox = element(By.model("searchTerm"));
	var searchBtn = element(By.id("search-button"));
	var locations = element.all(By.repeater("location in locations"));
	var self = this;

	this.setSearchTerm = function(term){
		searchTextBox.sendKeys(term);
	}

	this.search = function(searchTerm){
		if(searchTerm){
			self.setSearchTerm(searchTerm);
		}

		searchBtn.click();
	}

	this.getTotalLocations = function(locationsCount){
		return locations.count();
	}

	this.get = function(){
		browser.get(basePageUrl);
	}
}

module.exports = new MainPage();
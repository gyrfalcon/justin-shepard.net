Feature: Main page

  Scenario: Name of the site appears correctly
    Given I am a visitor to the website
    When I open the justin-shepard.net homepage
    Then I see the header contains "justin-shepard.net"

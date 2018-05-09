describe("Hello World Server", function() {
    describe("GET /", function() {
      it("returns status code 200", function(done) {
        request.get(base_url, function(error, response, body) {
          assert.equal(200, response.statusCode);
          done();
        });
      });
    });
  });
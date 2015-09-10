describe('countUpBy', function() {
  it("checks the count_by input and adds same number", function() {
    expect(countUpBy(5, 10)).to.equal(10, 10);
  })

  it("checks if count_by does not exceed equal to", function() {
  expect(countUpBy(6,200)).to.equal(198);
  })

})

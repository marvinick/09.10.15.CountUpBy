describe('countUpBy', function() {
  it("checks the count_by input and adds same number", function() {
    expect(countUpBy(5, 10)).to.eql([5, 10]);
  })

  it("checks if count_by does not exceed equal to", function() {
  expect(countUpBy(10,104)).to.eql([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
  })

})

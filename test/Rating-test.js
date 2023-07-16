// Use expect BDD assertion style.
import RatingSymbol from '../src/RatingSymbol';
import Rating from '../src/Rating';

var expect = require('chai').expect;
var React = require('react');
var TestUtils = require('react-dom/test-utils');
var createRenderer = require('react-test-renderer/shallow').createRenderer;
var Style = require('../src/utils/style.js');

var render = function (component) {
  var renderer = createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput()
};

describe('Rating', function () {
  describe('with total symbols of 5', function () {
    var rating;

    beforeEach(function () {
      rating = render(
        <Rating totalSymbols={5} />
      );
    });

    it('should render a 5 symbol rating', function () {
      var children = rating.props.children;
      var symbols = children.filter(function (child) {
        return TestUtils.isElementOfType(child, RatingSymbol);
      });
      expect(children).to.have.same.length(symbols.length).which.is.length(5);
    });

    it('should have all symbols empty', function () {
      rating.props.children.forEach(function (symbol) {
        expect(symbol.props.percent).to.be.equal(0);
      });
    });
  });

  describe('with an initial rate of 3', function () {
    var rating;

    beforeEach(function () {
      rating = render(<Rating initialRate={3} />);
    });

    it('should render a 5 symbol rating with the 3 first symbols full', function () {
      rating.props.children.forEach(function (symbol, i) {
        expect(symbol.props.percent).to.be.equal(i < 3 ? 100 : 0);
      });
    });
  });

  describe('that is readonly', function () {
    var rating;

    beforeEach(function () {
      rating = render(<Rating readonly={true} />);
    });

    it('should have all symbols readonly', function () {
      rating.props.children.forEach(function (symbol, i) {
        expect(symbol.props.readonly).to.be.false;
      });
    });
    it('should not have mouse move handler', function () {
      var noop = require('../src/utils/noop');
      rating.props.children.forEach(function (symbol, i) {
        expect(symbol.props.onMouseMove).to.equal(noop);
      });
    });

    it('should not have click handler', function () {
      var noop = require('../src/utils/noop');
      rating.props.children.forEach(function (symbol, i) {
        expect(symbol.props.onClick).to.equal(noop);
      });
    });

    it('should not have mouse leave handler', function () {
      expect(rating.props.onMouseLeave).to.equal(undefined);
    });
  });

  /////////////////////////////////////////////////////////////////////////////
  // Custom symbol style
  /////////////////////////////////////////////////////////////////////////////
  describe('with custom class name style', function () {
    var rating,
      empty = 'fa fa-star-o fa-2x',
      full = 'fa fa-star fa-2x';

    beforeEach(function () {
      rating = render(<Rating empty={empty} full={full} />);
    });

    it('should render all symbols with custom style', function () {
      rating.props.children.forEach(function (symbol) {
        expect(symbol.props.icon).to.be.equal(full);
        expect(symbol.props.background).to.be.equal(empty);
      });
    });
  });

  describe('with custom inline style', function () {
    var rating;

    beforeEach(function () {
      rating = render(<Rating empty={Style.empty} full={Style.full} />);
    });

    it('should render all symbols with custom style', function () {
      rating.props.children.forEach(function (symbol) {
        expect(symbol.props.icon).to.be.equal(Style.full);
        expect(symbol.props.background).to.be.equal(Style.empty);
      });
    });
  });

  describe('with custom list of class name styles', function () {
    var rating,
      empty = ['fa fa-star-o fa-2x', 'fa fa-heart-o fa-2x'],
      full = ['fa fa-star fa-2x', 'fa fa-heart-o fa-2x'];

    beforeEach(function () {
      rating = render(<Rating start={0} stop={6} empty={empty} full={full} />);
    });

    it('should render symbols with circular custom style', function () {
      rating.props.children.forEach(function (symbol, i) {
        expect(symbol.props.icon).to.be.equal(full[i % 2]);
        expect(symbol.props.background).to.be.equal(empty[i % 2]);
      });
    });
  });
});
